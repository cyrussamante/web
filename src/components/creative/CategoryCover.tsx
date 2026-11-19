import type { ReactNode } from "react";
import { creativeCategoryDetails } from "../../data/creativeProjects";
import type { CreativeCategory, CreativeProject } from "../../types/creative";

const iconProps = {
    "aria-hidden": true,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-10 w-10 sm:h-12 sm:w-12",
} as const;

const icons: Record<CreativeCategory, ReactNode> = {
    // Mixing-desk faders
    "live-production": (
        <svg {...iconProps}>
            <path d="M12 8v32M24 8v32M36 8v32" />
            <rect x="8" y="26" width="8" height="5" rx="1" />
            <rect x="20" y="14" width="8" height="5" rx="1" />
            <rect x="32" y="22" width="8" height="5" rx="1" />
        </svg>
    ),
    // Projector with beam
    "visual-design": (
        <svg {...iconProps}>
            <rect x="4" y="16" width="26" height="16" rx="2" />
            <circle cx="17" cy="24" r="4" />
            <path d="m34 20 10-6M34 24h10M34 28l10 6" />
        </svg>
    ),
    // Overlapping shapes
    "graphic-design": (
        <svg {...iconProps}>
            <rect x="8" y="8" width="22" height="22" rx="2" />
            <circle cx="30" cy="30" r="11" />
        </svg>
    ),
    // Clapperboard
    "video-multimedia": (
        <svg {...iconProps}>
            <rect x="6" y="18" width="36" height="22" rx="2" />
            <path d="m6 18 4-10 8 3-4 7M18 11l8 3-4 4M26 14l8 3-4 4" />
            <path d="m21 24 8 5-8 5Z" />
        </svg>
    ),
};

interface CategoryCoverProps {
    project: CreativeProject;
}

/** Stand-in artwork shown when a project has no cover image yet. */
function CategoryCover({ project }: CategoryCoverProps) {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-page p-4 text-center theme-transition">
            <span className="text-accent theme-transition">{icons[project.category]}</span>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted theme-transition">
                {project.date ?? creativeCategoryDetails[project.category].label}
            </span>
        </div>
    );
}

export default CategoryCover;
