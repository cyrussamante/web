import useTheme from "../../context/useTheme";
import type { Project } from "../../data/projects";

interface ProjectMediaProps {
    project: Project;
    className?: string;
}

function ProjectMedia({ project, className = "" }: ProjectMediaProps) {
    const { theme } = useTheme();
    const image = project.previewImage;
    const imageSrc = theme === "dark" && image?.darkSrc ? image.darkSrc : image?.src;
    const imageFitClass = image?.fit === "contain" ? "object-contain" : "object-cover";
    const initials = project.title
        .split(/\s+/)
        .filter((word) => /[a-z0-9]/i.test(word))
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase();

    return (
        <span
            className={`relative grid aspect-16/10 place-items-center overflow-hidden rounded-xl border border-border bg-surface bg-clip-padding theme-transition ${className}`}
        >
            {image ? (
                <img
                    src={imageSrc}
                    alt={image.alt}
                    style={image.zoom ? { scale: image.zoom } : undefined}
                    className={`absolute inset-0 h-full w-full ${imageFitClass} transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none`}
                    loading="lazy"
                    decoding="async"
                />
            ) : (
                <span
                    role="img"
                    aria-label={`${project.title} preview image coming soon`}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-page p-5 text-center theme-transition"
                >
                    <span
                        aria-hidden="true"
                        className="grid h-11 w-11 place-items-center border border-accent/50 text-sm font-semibold tracking-widest text-accent theme-transition"
                    >
                        {initials}
                    </span>
                    <span className="text-xs text-muted theme-transition">Project image coming soon</span>
                </span>
            )}
        </span>
    );
}

export default ProjectMedia;
