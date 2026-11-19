import { useEffect, useRef } from "react";
import type { GalleryImage } from "../../types/creative";
import { resolveImage } from "../../utils/media";
import ProjectImage from "./ProjectImage";

interface ImageLightboxProps {
    images: readonly GalleryImage[];
    index: number;
    title: string;
    onIndexChange: (index: number) => void;
    onClose: () => void;
}

const buttonClass =
    "rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-foreground theme-transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function ImageLightbox({ images, index, title, onIndexChange, onClose }: ImageLightboxProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const image = images[index];
    const total = images.length;

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog || dialog.open) return;
        dialog.showModal();
    }, []);

    function go(step: number) {
        onIndexChange((index + step + total) % total);
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
        if (total < 2) return;
        if (event.key === "ArrowLeft") go(-1);
        if (event.key === "ArrowRight") go(1);
    }

    return (
        <dialog
            ref={dialogRef}
            aria-label={`${title} image gallery`}
            onClose={onClose}
            onKeyDown={handleKeyDown}
            onClick={(event) => event.target === event.currentTarget && dialogRef.current?.close()}
            className="m-auto max-h-[94dvh] w-[min(96vw,72rem)] max-w-none overflow-y-auto rounded-2xl border border-border bg-surface p-4 text-foreground shadow-2xl backdrop:bg-black/80 theme-transition sm:p-6"
        >
            <ProjectImage
                src={image.src}
                alt={image.alt ?? `${title} photo ${index + 1} of ${total}`}
                aspectClass="aspect-4/3 max-h-[70dvh]"
                fit="contain"
                eager
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-secondary theme-transition" aria-live="polite">
                    {image.caption ? `${image.caption} · ` : ""}
                    {index + 1} / {total}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                    {resolveImage(image.src) && (
                        <a
                            href={resolveImage(image.src)?.openUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonClass}
                        >
                            Open original {"\u2197\uFE0E"}
                        </a>
                    )}
                    {total > 1 && (
                        <>
                            <button type="button" className={buttonClass} onClick={() => go(-1)} aria-label="Previous image">
                                {"\u2190\uFE0E"}
                            </button>
                            <button type="button" className={buttonClass} onClick={() => go(1)} aria-label="Next image">
                                {"\u2192\uFE0E"}
                            </button>
                        </>
                    )}
                    <button type="button" className={buttonClass} onClick={() => dialogRef.current?.close()}>
                        Close
                    </button>
                </div>
            </div>
        </dialog>
    );
}

export default ImageLightbox;
