import ProjectBadge from "./ProjectBadge";

interface ProjectBadgesProps {
    items: readonly string[];
    maxItems?: number;
    className?: string;
}

function ProjectBadges({ items, maxItems, className = "" }: ProjectBadgesProps) {
    const visibleItems = maxItems === undefined ? items : items.slice(0, maxItems);
    const hiddenCount = items.length - visibleItems.length;

    if (items.length === 0) return null;

    return (
        <span className={`flex flex-wrap gap-1.5 ${className}`}>
            {visibleItems.map((item) => (
                <ProjectBadge key={item}>{item}</ProjectBadge>
            ))}
            {hiddenCount > 0 && (
                <ProjectBadge variant="overflow">+{hiddenCount}</ProjectBadge>
            )}
        </span>
    );
}

export default ProjectBadges;
