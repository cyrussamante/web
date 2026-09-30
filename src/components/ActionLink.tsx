type ActionLinkVariant = "primary" | "secondary" | "text";

interface ActionLinkProps {
    href: string;
    variant?: ActionLinkVariant;
    children: React.ReactNode;
    showArrow?: boolean;
}

export default function ActionLink({ href, variant = "primary", children, showArrow = false }: ActionLinkProps) {
    const baseClass = "group inline-flex items-center font-medium theme-transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";
    const variantClass = {
        primary: "rounded-full bg-accent px-5 py-2.5 text-page hover:bg-accent-hover",
        secondary: "rounded-full border border-border bg-surface px-5 py-2.5 text-foreground hover:border-accent hover:text-accent",
        text: "text-accent hover:text-accent-hover",
    }[variant];
    const textUnderlineClass = variant === "text"
        ? "relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-current after:opacity-0 after:content-[''] after:transition-opacity after:duration-200 after:ease-out group-hover:after:opacity-100 group-focus-visible:after:opacity-100 motion-reduce:after:transition-none"
        : "";

    return (
        <a href={href} className={`${baseClass} ${variantClass}`}>
            <span className={textUnderlineClass}>
                {children}
            </span>
            {showArrow && (
            <span
                aria-hidden="true"
                className="ml-2 inline-block transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transition-none"
            >
                →
            </span>
        )}
        </a>
    );
}