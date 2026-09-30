import type { Project } from "../../data/projects";

interface ProjectMediaProps {
    project: Project;
    className?: string;
}

function ProjectMedia({ project, className = "" }: ProjectMediaProps) {
    const image = project.previewImage;
    const initials = project.title
        .split(/\s+/)
        .filter((word) => /[a-z0-9]/i.test(word))
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase();

    return (
        <div
            className={`relative grid aspect-16/10 place-items-center overflow-hidden rounded-xl border border-border bg-surface bg-clip-padding theme-transition ${className}`}
        >
            {image ? (
                <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                    loading="lazy"
                />
            ) : (
                <div
                    role="img"
                    aria-label={`${project.title} preview image coming soon`}
                    className="flex h-full w-full flex-col items-center justify-center gap-3 bg-linear-to-br from-surface via-page to-accent/10 p-5 text-center"
                >
                    <span
                        aria-hidden="true"
                        className="grid h-11 w-11 place-items-center border border-accent/50 text-sm font-semibold tracking-widest text-accent"
                    >
                        {initials}
                    </span>
                    <span className="text-xs text-muted">Project image coming soon</span>
                </div>
            )}
        </div>
    );
}

export default ProjectMedia;
