import { useState } from "react";
import { resolveImage } from "../../utils/media";
import MediaPlaceholder from "./MediaPlaceholder";

interface ProjectImageProps {
    src?: string;
    alt: string;
    /** Tailwind aspect-ratio class; the box is reserved up front so loading never shifts layout. */
    aspectClass?: string;
    className?: string;
    fit?: "cover" | "contain";
    eager?: boolean;
    /** Skips the "open original" link on failure (for images nested in interactive elements). */
    quiet?: boolean;
    placeholderLabel?: string;
    placeholderHint?: string;
}

interface LoadedImageProps {
    sources: readonly string[];
    openUrl: string;
    alt: string;
    fit: "cover" | "contain";
    eager: boolean;
    quiet: boolean;
}

function LoadedImage({ sources, openUrl, alt, fit, eager, quiet }: LoadedImageProps) {
    const [sourceIndex, setSourceIndex] = useState(0);

    if (sourceIndex >= sources.length) {
        return (
            <MediaPlaceholder
                label="This image could not be displayed"
                openUrl={quiet ? undefined : openUrl}
            />
        );
    }

    return (
        <img
            src={sources[sourceIndex]}
            alt={alt}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            referrerPolicy="no-referrer"
            draggable={false}
            onError={() => setSourceIndex((index) => index + 1)}
            className={`h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"}`}
        />
    );
}

function ProjectImage({
    src,
    alt,
    aspectClass = "aspect-video",
    className = "",
    fit = "cover",
    eager = false,
    quiet = false,
    placeholderLabel = "Media coming soon",
    placeholderHint = "Add a Google Drive or local image link in src/data/creativeProjects.ts.",
}: ProjectImageProps) {
    const resolved = resolveImage(src);

    return (
        <div className={`${aspectClass} w-full overflow-hidden bg-surface theme-transition ${className}`}>
            {resolved ? (
                <LoadedImage
                    key={src}
                    sources={resolved.sources}
                    openUrl={resolved.openUrl}
                    alt={alt}
                    fit={fit}
                    eager={eager}
                    quiet={quiet}
                />
            ) : (
                <MediaPlaceholder
                    label={src ? "This image link is not supported" : placeholderLabel}
                    devHint={src ? `Check the link: ${src}` : placeholderHint}
                />
            )}
        </div>
    );
}

export default ProjectImage;
