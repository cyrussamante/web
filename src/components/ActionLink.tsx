import { Link } from "react-router";
import type { ReactNode } from "react";

type ActionLinkVariant = "primary" | "secondary" | "text";

interface ActionLinkProps {
    href: string;
    variant?: ActionLinkVariant;
    children: ReactNode;
    showArrow?: boolean;
    openInNewTab?: boolean;
}

export default function ActionLink({
    href,
    variant = "primary",
    children,
    showArrow = false,
    openInNewTab = false,
}: ActionLinkProps) {
    const baseClass =
        "group inline-flex cursor-pointer items-center text-sm font-medium theme-transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";
    const variantClass = {
        primary: "rounded-lg bg-accent px-2.5 py-2 text-page hover:bg-accent-hover",
        secondary: "rounded-lg border border-border bg-surface px-2.5 py-2 text-foreground hover:border-accent hover:text-accent",
        text: "text-accent hover:text-accent-hover",
    }[variant];
    const textUnderlineClass =
        variant === "text"
            ? "relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-current after:opacity-0 after:content-[''] after:transition-opacity after:duration-300 after:ease-out group-hover:after:opacity-100 group-focus-visible:after:opacity-100 motion-reduce:after:transition-none"
            : "";

    const content = (
        <>
            <span className={textUnderlineClass}>
                {children}
            </span>
            {showArrow && (
                <span
                    aria-hidden="true"
                    className="ml-2 inline-block transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transition-none"
                >
                    {openInNewTab ? "\u2197\uFE0E" : "\u2192\uFE0E"}
                </span>
            )}
        </>
    );

    const className = `${baseClass} ${variantClass}`;

    if (href.startsWith("/") && !href.startsWith("//") && !openInNewTab) {
        return (
            <Link to={href} className={className}>
                {content}
            </Link>
        );
    }

    return (
        <a
            href={href}
            className={className}
            target={openInNewTab ? "_blank" : undefined}
            rel={openInNewTab ? "noopener noreferrer" : undefined}
        >
            {content}
        </a>
    );
}