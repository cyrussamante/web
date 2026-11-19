import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import type { ResolvedVideo } from "../../utils/media";
import VideoSurface from "./VideoSurface";

interface VideoViewerProps {
    video: ResolvedVideo;
    title: string;
    poster?: string;
    portrait?: boolean;
    onClose: () => void;
}

interface Size {
    width: number;
    height: number;
}

/** Full-viewport player for small screens, where an inline embed is too cramped to use. */
function VideoViewer({ video, title, poster, portrait = false, onClose }: VideoViewerProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const stageRef = useRef<HTMLDivElement>(null);
    const [stage, setStage] = useState<Size>({ width: 0, height: 0 });
    const ratio = portrait ? 9 / 16 : 16 / 9;

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog || dialog.open) return;
        dialog.showModal();
    }, []);

    useEffect(() => {
        const element = stageRef.current;
        if (!element) return;

        const observer = new ResizeObserver(([entry]) => {
            setStage({ width: entry.contentRect.width, height: entry.contentRect.height });
        });
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    // Keep the project modal's arrow-key navigation from firing while watching.
    function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
        event.stopPropagation();
    }

    // Largest frame with the video's shape that fits the available space.
    const frameWidth = Math.min(stage.width, stage.height * ratio);
    const frame: Size = { width: frameWidth, height: frameWidth / ratio };

    return (
        <dialog
            ref={dialogRef}
            aria-label={title}
            onClose={onClose}
            onKeyDown={handleKeyDown}
            className="fixed inset-0 m-0 h-dvh max-h-none w-dvw max-w-none border-0 bg-black p-0 text-white open:flex open:flex-col"
        >
            <div className="flex shrink-0 items-center justify-between gap-3 px-4 py-2">
                <p className="min-w-0 flex-1 truncate text-sm font-medium">{title}</p>
                <a
                    href={video.openUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 shrink-0 items-center rounded-lg px-2 text-sm font-medium text-white underline underline-offset-4 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                    {video.kind === "embed" && video.provider === "drive" ? "Open in Drive" : "Open original"} {"\u2197\uFE0E"}
                </a>
                <button
                    type="button"
                    onClick={() => dialogRef.current?.close()}
                    className="min-h-11 shrink-0 cursor-pointer rounded-lg border border-white/30 px-4 text-sm font-medium hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                    Close
                </button>
            </div>
            <div ref={stageRef} className="grid min-h-0 flex-1 place-items-center pb-[env(safe-area-inset-bottom)]">
                {frame.width > 0 && (
                    <div className="relative" style={{ width: frame.width, height: frame.height }}>
                        <VideoSurface video={video} title={title} poster={poster} portrait={portrait} />
                    </div>
                )}
            </div>
        </dialog>
    );
}

export default VideoViewer;
