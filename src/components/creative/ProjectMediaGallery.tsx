import { useState } from "react";
import type { GalleryImage, ProjectMediaItem } from "../../types/creative";
import ImageLightbox from "./ImageLightbox";
import ProjectImage from "./ProjectImage";
import ProjectPDF from "./ProjectPDF";
import ProjectVideo from "./ProjectVideo";

interface ProjectMediaGalleryProps {
    title: string;
    gallery?: readonly GalleryImage[];
    media?: readonly ProjectMediaItem[];
}

function getTileClass(image: GalleryImage, index: number) {
    if (image.portrait) return "aspect-3/4";
    // A leading landscape image spans the full row (see its list item).
    return index === 0 ? "aspect-video" : "aspect-4/3";
}

function ProjectMediaGallery({ title, gallery = [], media = [] }: ProjectMediaGalleryProps) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    if (gallery.length === 0 && media.length === 0) return null;

    return (
        <div className="space-y-10">
            {media.length > 0 && (
                <div className="space-y-8">
                    {media.map((item) => (
                        <div key={`${item.type}-${item.src}`}>
                            {item.type === "video" ? <ProjectVideo item={item} /> : <ProjectPDF item={item} />}
                        </div>
                    ))}
                </div>
            )}
            {gallery.length > 0 && (
                <ul className="grid items-start gap-4 sm:grid-cols-2">
                    {gallery.map((image, index) => (
                        <li key={`${image.src}-${index}`} className={index === 0 && !image.portrait ? "sm:col-span-2" : ""}>
                            <button
                                type="button"
                                onClick={() => setLightboxIndex(index)}
                                aria-label={`View larger: ${image.alt ?? `${title} photo ${index + 1}`}`}
                                className="group block w-full cursor-zoom-in overflow-hidden border border-border theme-transition hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                            >
                                <ProjectImage
                                    src={image.src}
                                    alt={image.alt ?? `${title} photo ${index + 1}`}
                                    aspectClass={getTileClass(image, index)}
                                    fit={image.fit}
                                    position={image.position}
                                    quiet
                                    className="transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
                                />
                            </button>
                            {image.caption && (
                                <p className="mt-2 text-xs text-muted theme-transition">{image.caption}</p>
                            )}
                        </li>
                    ))}
                </ul>
            )}
            {lightboxIndex !== null && (
                <ImageLightbox
                    images={gallery}
                    index={lightboxIndex}
                    title={title}
                    onIndexChange={setLightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                />
            )}
        </div>
    );
}

export default ProjectMediaGallery;
