import type { ReactNode } from "react";
import { Link } from "react-router";
import SectionLabel from "../components/SectionLabel";
import usePageMetadata from "../hooks/usePageMetadata";

interface PortfolioChoice {
    title: string;
    description: string;
    path: string;
    cta: string;
    icon: ReactNode;
}

const iconProps = {
    "aria-hidden": true,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-12 w-12",
} as const;

const choices: PortfolioChoice[] = [
    {
        title: "Software Engineering",
        description:
            "Full-stack web applications, projects, and professional experience built with React, TypeScript, and Java/Spring Boot.",
        path: "/software",
        cta: "Explore software work",
        icon: (
            <svg {...iconProps}>
                <path d="m18 14-10 10 10 10" />
                <path d="m30 14 10 10-10 10" />
                <path d="m27 9-6 30" />
            </svg>
        ),
    },
    {
        title: "Creative Production",
        description:
            "Live entertainment, theatre, concerts, projection, sound, graphic design, and video production.",
        path: "/creative",
        cta: "Explore creative work",
        icon: (
            <svg {...iconProps}>
                <rect x="6" y="18" width="36" height="22" rx="2" />
                <path d="m6 18 4-10 8 3-4 7" />
                <path d="m18 11 8 3-4 4" />
                <path d="m26 14 8 3-4 4" />
                <path d="m21 24 8 5-8 5Z" />
            </svg>
        ),
    },
];

function Landing() {
    usePageMetadata(
        "Software Engineering & Creative Production",
        "Cyruss Amante works in software engineering and creative production. Explore full-stack software projects or live production, projection, sound, design, and video work.",
        { path: "/" },
    );

    return (
        <main className="py-12 sm:py-16 md:py-20">
            <header className="motion-fade-up max-w-2xl">
                <SectionLabel>PORTFOLIO</SectionLabel>
                <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-foreground theme-transition sm:text-5xl lg:text-6xl">
                    Cyruss <span className="text-accent theme-transition">Amante</span>
                </h1>
                <p className="mt-5 text-sm leading-6 text-secondary theme-transition sm:text-base sm:leading-7">
                    I work in software engineering and creative production. Choose a portfolio to explore.
                </p>
            </header>
            <ul className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
                {choices.map(({ title, description, path, cta, icon }, index) => (
                    <li
                        key={path}
                        className="motion-fade-up"
                        style={{ animationDelay: `${120 + index * 60}ms` }}
                    >
                        <Link
                            to={path}
                            className="group flex h-full min-h-72 flex-col rounded-xl border border-border bg-surface p-6 shadow-sm dark:shadow-none theme-transition hover:border-accent focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:p-8 md:min-h-96"
                        >
                            <span className="text-accent transition-transform duration-300 ease-out group-hover:-translate-y-0.5 motion-reduce:transition-none">
                                {icon}
                            </span>
                            <span className="mt-10 flex flex-1 flex-col md:mt-20">
                                <h2 className="text-2xl font-bold text-foreground theme-transition sm:text-3xl">
                                    {title}
                                </h2>
                                <span className="mt-3 block max-w-md text-sm leading-6 text-secondary theme-transition sm:text-base">
                                    {description}
                                </span>
                                <span className="mt-auto inline-flex items-center pt-6 text-sm font-medium text-accent theme-transition">
                                    {cta}
                                    <span
                                        aria-hidden="true"
                                        className="ml-2 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                                    >
                                        {"\u2192\uFE0E"}
                                    </span>
                                </span>
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Landing;
