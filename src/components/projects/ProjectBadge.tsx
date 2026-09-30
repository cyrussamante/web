import type { ReactNode } from "react";

type ProjectBadgeVariant = "technology" | "category" | "date" | "featured" | "overflow";

interface ProjectBadgeProps {
    children: ReactNode;
    variant?: ProjectBadgeVariant;
}

const variantClasses: Record<ProjectBadgeVariant, string> = {
    technology: "border border-border bg-page text-secondary",
    category: "border border-accent/50 bg-surface text-accent uppercase tracking-wide",
    date: "border border-border bg-page text-muted",
    featured: "border border-accent/50 bg-surface text-accent uppercase tracking-wide",
    overflow: "border border-border bg-page text-muted",
};

function ProjectBadge({ children, variant = "technology" }: ProjectBadgeProps) {
    const sizeClass =
        variant === "category" || variant === "featured"
            ? "text-[10px] font-medium"
            : variant === "date"
                ? "text-xs"
                : "text-[11px]";

    return (
        <span
            className={`inline-flex max-w-full items-center rounded-full px-2.5 py-1 theme-transition ${sizeClass} ${variantClasses[variant]}`}
        >
            {children}
        </span>
    );
}

export default ProjectBadge;
