interface TagListProps {
    items: readonly string[];
    label?: string;
    className?: string;
    size?: "small" | "medium";
}

function TagList({
    items,
    label,
    className = "",
    size = "small",
}: TagListProps) {
    if (items.length === 0) return null;

    const itemSizeClass = size === "medium" ? "text-xs" : "text-[11px]";

    return (
        <ul
            aria-label={label}
            className={`flex flex-wrap gap-2 ${className}`}
        >
            {items.map((item) => (
                <li
                    key={item}
                    className={`rounded-full border border-border bg-page px-2.5 py-1 ${itemSizeClass} text-secondary theme-transition`}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default TagList;
