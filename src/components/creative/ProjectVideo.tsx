import { useState } from "react";
import type { VideoMediaItem } from "../../types/creative";
import { resolveImage, resolveVideo } from "../../utils/media";
import MediaPlaceholder from "./MediaPlaceholder";
import ProjectImage from "./ProjectImage";

interface ProjectVideoProps {
    item: VideoMediaItem;
}

function ProjectVideo({ item }: ProjectVideoProps) {
    const [isActive, setIsActive] = useState(false);
    const video = resolveVideo(item.src);

    if (!video) {
        return (
            <div className="aspect-video w-full">
                <MediaPlaceholder label="This video link is not supported" devHint={`Check the link: ${item.src}`} />
            </div>
        );
    }

    // Drive files expose a thumbnail, so reuse it as the poster when none is given.
    const posterSource = item.poster ?? (video.kind === "embed" && video.provider === "drive" ? item.src : undefined);
    const hasPoster = resolveImage(posterSource) !== null;

    return (
        <figure>
            <div className="relative aspect-video w-full overflow-hidden border border-border bg-black theme-transition">
                {!isActive ? (
                    <button
                        type="button"
                        onClick={() => setIsActive(true)}
                        aria-label={`Play video: ${item.title}`}
                        className="group absolute inset-0 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent"
                    >
                        {hasPoster ? (
                            <ProjectImage src={posterSource} alt="" aspectClass="h-full" className="h-full" quiet />
                        ) : (
                            <MediaPlaceholder label={item.title} />
                        )}
                        <span aria-hidden="true" className="absolute inset-0 grid place-items-center bg-black/25 transition-colors group-hover:bg-black/40">
                            <span className="grid h-16 w-16 place-items-center rounded-full bg-accent text-page transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-7 w-7">
                                    <path d="M8 5.5v13l11-6.5z" />
                                </svg>
                            </span>
                        </span>
                    </button>
                ) : video.kind === "embed" ? (
                    <iframe
                        src={video.embedUrl}
                        title={item.title}
                        loading="lazy"
                        allow="fullscreen; picture-in-picture; encrypted-media"
                        allowFullScreen
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 h-full w-full border-0"
                    />
                ) : (
                    <video
                        src={video.src}
                        poster={hasPoster ? resolveImage(posterSource)?.sources[0] : undefined}
                        controls
                        preload="metadata"
                        playsInline
                        className="absolute inset-0 h-full w-full"
                    >
                        Your browser does not support embedded video.
                    </video>
                )}
            </div>
            <figcaption className="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-muted theme-transition">
                <span>{item.caption ?? item.title}</span>
                <a
                    href={video.openUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                    Open original {"\u2197\uFE0E"}
                </a>
            </figcaption>
        </figure>
    );
}

export default ProjectVideo;
