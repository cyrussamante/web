import { useEffect, useRef, useState } from "react";
import type { AnimationEvent, KeyboardEvent, MouseEvent } from "react";
import type { Project } from "../../data/projects";
import ActionLink from "../ActionLink";
import ProjectMedia from "./ProjectMedia";
import ProjectBadge from "./ProjectBadge";
import ProjectBadges from "./ProjectBadges";

interface ProjectModalProps {
    project: Project;
    projectSequence: readonly Project[];
    onNavigate: (project: Project) => void;
    onClose: () => void;
}

function ProjectModal({
    project,
    projectSequence,
    onNavigate,
    onClose,
}: ProjectModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const closeTimeoutRef = useRef<number | null>(null);
    const closeStartedRef = useRef(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        dialog.showModal();

        return () => {
            if (closeTimeoutRef.current !== null) {
                window.clearTimeout(closeTimeoutRef.current);
            }
            if (dialog.open) dialog.close();
        };
    }, []);

    function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
        if (event.target === event.currentTarget) requestClose();
    }

    function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
        if (
            isClosing ||
            event.altKey ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey ||
            (event.target instanceof Element &&
                event.target.closest("input, textarea, select, [contenteditable='true']"))
        ) {
            return;
        }

        if (event.key === "ArrowLeft" && previousProject) {
            event.preventDefault();
            onNavigate(previousProject);
        } else if (event.key === "ArrowRight" && nextProject) {
            event.preventDefault();
            onNavigate(nextProject);
        }
    }

    function requestClose() {
        if (closeStartedRef.current) return;
        closeStartedRef.current = true;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            onClose();
            return;
        }

        setIsClosing(true);
        closeTimeoutRef.current = window.setTimeout(onClose, 300);
    }

    function handleAnimationEnd(event: AnimationEvent<HTMLDialogElement>) {
        if (event.target === event.currentTarget && event.animationName === "dialog-exit") {
            if (closeTimeoutRef.current !== null) {
                window.clearTimeout(closeTimeoutRef.current);
                closeTimeoutRef.current = null;
            }
            onClose();
        }
    }

    const currentIndex = projectSequence.findIndex(
        (sequenceProject) => sequenceProject.id === project.id,
    );
    const previousProject =
        currentIndex > 0 ? projectSequence[currentIndex - 1] : undefined;
    const nextProject =
        currentIndex >= 0 && currentIndex < projectSequence.length - 1
            ? projectSequence[currentIndex + 1]
            : undefined;
    const date = project.dateRange ?? project.year?.toString();

    return (
        <dialog
            ref={dialogRef}
            aria-labelledby="project-modal-title"
            data-closing={isClosing || undefined}
            onAnimationEnd={handleAnimationEnd}
            onKeyDown={handleKeyDown}
            onCancel={(event) => {
                event.preventDefault();
                requestClose();
            }}
            onClick={handleBackdropClick}
            className="m-auto max-h-[min(92dvh,60rem)] w-[min(94vw,64rem)] max-w-none overflow-y-auto rounded-2xl border border-border bg-surface p-0 text-foreground shadow-2xl backdrop:bg-black/70 theme-transition"
        >
            <div className="relative p-6 pt-16 sm:p-8 sm:pt-16 lg:p-10 lg:pt-10">
                <button
                    type="button"
                    onClick={requestClose}
                    aria-label="Close project details"
                    className="absolute right-5 top-5 z-10 grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-border bg-surface text-secondary theme-transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-6 sm:top-6 lg:right-8 lg:top-8"
                >
                    <span aria-hidden="true" className="text-xl leading-none">×</span>
                </button>

                <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-start">
                    <ProjectMedia project={project} className="aspect-16/10" />
                    <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5">
                            <ProjectBadge variant="category">
                                {project.category}
                            </ProjectBadge>
                            {date && (
                                <ProjectBadge variant="date">
                                    {date}
                                </ProjectBadge>
                            )}
                            {project.featuredOrder !== undefined && (
                                <ProjectBadge variant="featured">
                                    Featured
                                </ProjectBadge>
                            )}
                        </div>
                        <h2
                            id="project-modal-title"
                            aria-live="polite"
                            className="mt-5 pr-8 text-2xl font-bold leading-tight text-foreground theme-transition sm:text-3xl"
                        >
                            {project.title}
                        </h2>
                        {project.description && (
                            <p className="mt-4 text-sm leading-6 text-secondary theme-transition">
                                {project.description}
                            </p>
                        )}
                        {project.links.length > 0 && (
                            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                                {project.links.map((link) => {
                                    const isExternal = link.href.startsWith("http");
                                    return (
                                        <ActionLink
                                            key={`${link.label}-${link.href}`}
                                            href={link.href}
                                            variant={link.variant ?? "secondary"}
                                            openInNewTab={isExternal}
                                            showArrow={isExternal}
                                        >
                                            {link.label}
                                        </ActionLink>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-10 grid gap-10 border-t border-border pt-8 theme-transition md:grid-cols-[minmax(0,1fr)_14rem]">
                    <div className="space-y-9">
                        {(project.overview || project.features?.length) && (
                            <section aria-labelledby="project-overview-heading">
                                <h3
                                    id="project-overview-heading"
                                    className="text-xs font-semibold uppercase tracking-[0.16em] text-accent theme-transition"
                                >
                                    Project Overview
                                </h3>
                                {project.overview && (
                                    <p className="mt-4 text-sm leading-7 text-secondary theme-transition">
                                        {project.overview}
                                    </p>
                                )}
                                {project.features && project.features.length > 0 && (
                                    <ul className="mt-5 space-y-3">
                                        {project.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex gap-3 text-sm leading-6 text-secondary theme-transition"
                                            >
                                                <span aria-hidden="true" className="text-accent theme-transition">{"\u2713\uFE0E"}</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        )}

                        {project.screenshots && project.screenshots.length > 0 && (
                            <section aria-label={`${project.title} screenshots`}>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {project.screenshots.map((screenshot) => (
                                        <img
                                            key={screenshot.src}
                                            src={screenshot.src}
                                            alt={screenshot.alt}
                                            loading="lazy"
                                            className="aspect-16/10 w-full rounded-lg border border-border object-cover theme-transition"
                                        />
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <aside className="space-y-8 border-t border-border pt-7 theme-transition md:border-l md:border-t-0 md:pl-8 md:pt-0">
                        {project.technologies && project.technologies.length > 0 && (
                            <section aria-labelledby="project-tech-heading">
                                <h3
                                    id="project-tech-heading"
                                    className="text-xs font-semibold uppercase tracking-[0.16em] text-accent theme-transition"
                                >
                                    Technologies
                                </h3>
                                <ProjectBadges
                                    items={project.technologies}
                                    className="mt-4"
                                />
                            </section>
                        )}
                        {project.collaborators && project.collaborators.length > 0 && (
                            <section
                                aria-labelledby="project-collaborators-heading"
                            >
                                <h3
                                    id="project-collaborators-heading"
                                    className="text-xs font-semibold uppercase tracking-[0.16em] text-accent theme-transition"
                                >
                                    Collaborators
                                </h3>
                                <ul className="mt-3 space-y-2">
                                    {project.collaborators.map((collaborator) => (
                                        <li
                                            key={collaborator}
                                            className="text-sm text-secondary theme-transition"
                                        >
                                            {collaborator}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </aside>
                </div>
                {projectSequence.length > 1 && (
                    <nav
                        aria-label="Project navigation"
                        className="mt-8 flex items-center justify-between border-t border-border pt-5 theme-transition"
                    >
                        <button
                            type="button"
                            aria-label={
                                previousProject
                                    ? `Previous project: ${previousProject.title}`
                                    : "No previous project"
                            }
                            aria-keyshortcuts="ArrowLeft"
                            disabled={!previousProject || isClosing}
                            onClick={() => {
                                if (previousProject) onNavigate(previousProject);
                            }}
                            className="inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium text-secondary theme-transition hover:bg-page hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <span aria-hidden="true">{"\u2190\uFE0E"}</span>
                            <span>Previous</span>
                        </button>
                        <p className="text-xs tabular-nums text-muted theme-transition">
                            {currentIndex + 1} / {projectSequence.length}
                        </p>
                        <button
                            type="button"
                            aria-label={
                                nextProject
                                    ? `Next project: ${nextProject.title}`
                                    : "No next project"
                            }
                            aria-keyshortcuts="ArrowRight"
                            disabled={!nextProject || isClosing}
                            onClick={() => {
                                if (nextProject) onNavigate(nextProject);
                            }}
                            className="inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium text-secondary theme-transition hover:bg-page hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <span>Next</span>
                            <span aria-hidden="true">{"\u2192\uFE0E"}</span>
                        </button>
                    </nav>
                )}
            </div>
        </dialog>
    );
}

export default ProjectModal;