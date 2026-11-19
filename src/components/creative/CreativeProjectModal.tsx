import { Link } from "react-router";
import type { KeyboardEvent } from "react";
import useAnimatedDialog from "../../hooks/useAnimatedDialog";
import { creativeCategoryDetails } from "../../data/creativeProjects";
import type { CreativeProject } from "../../types/creative";
import { getAdjacentProjects, getRelatedProjects } from "../../utils/creative";
import ActionLink from "../ActionLink";
import ProjectBadge from "../projects/ProjectBadge";
import ProjectImage from "./ProjectImage";
import ProjectMediaGallery from "./ProjectMediaGallery";

interface CreativeProjectModalProps {
    project: CreativeProject;
    projectSequence: readonly CreativeProject[];
    onNavigate: (project: CreativeProject) => void;
    onClose: () => void;
}

const headingClass = "text-xs font-semibold uppercase tracking-[0.16em] text-accent theme-transition";
const navButtonClass =
    "inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium text-secondary theme-transition hover:bg-page hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-40";

function CreativeProjectModal({ project, projectSequence, onNavigate, onClose }: CreativeProjectModalProps) {
    const { dialogRef, isClosing, requestClose, handleBackdropClick, handleAnimationEnd } =
        useAnimatedDialog(onClose);
    const { previous, next } = getAdjacentProjects(projectSequence, project);
    const related = getRelatedProjects(projectSequence, project);
    const currentIndex = projectSequence.findIndex((candidate) => candidate.id === project.id);
    const hasMedia = (project.gallery?.length ?? 0) > 0 || (project.media?.length ?? 0) > 0;

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

        if (event.key === "ArrowLeft" && previous) {
            event.preventDefault();
            onNavigate(previous);
        } else if (event.key === "ArrowRight" && next) {
            event.preventDefault();
            onNavigate(next);
        }
    }

    return (
        <dialog
            ref={dialogRef}
            aria-labelledby="creative-modal-title"
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
                    <ProjectImage
                        key={project.id}
                        src={project.coverImage?.src}
                        alt={project.coverImage?.alt ?? `${project.title} cover image`}
                        aspectClass="aspect-16/10"
                        className="rounded-lg border border-border"
                    />
                    <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5 pr-12">
                            <ProjectBadge variant="category">{creativeCategoryDetails[project.category].label}</ProjectBadge>
                            {(project.date ?? project.year) && <ProjectBadge variant="date">{project.date ?? project.year}</ProjectBadge>}
                            {project.featured && <ProjectBadge variant="featured">Featured</ProjectBadge>}
                        </div>
                        <h2
                            id="creative-modal-title"
                            aria-live="polite"
                            className="mt-5 pr-8 text-2xl font-bold leading-tight text-foreground theme-transition sm:text-3xl"
                        >
                            {project.title}
                        </h2>
                        <p className="mt-4 text-sm leading-6 text-secondary theme-transition">{project.description}</p>
                        {project.note && (
                            <p className="mt-4 border-l-2 border-accent pl-4 text-sm leading-6 text-foreground theme-transition">
                                {project.note}
                            </p>
                        )}
                        {project.externalLinks && project.externalLinks.length > 0 && (
                            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                                {project.externalLinks.map(({ label, href }) => (
                                    <ActionLink key={href} href={href} variant="secondary" openInNewTab showArrow>
                                        {label}
                                    </ActionLink>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-10 grid gap-10 border-t border-border pt-8 theme-transition md:grid-cols-[minmax(0,1fr)_14rem]">
                    <section aria-labelledby="creative-media-heading" className="min-w-0">
                        <h3 id="creative-media-heading" className={headingClass}>
                            {hasMedia ? "Media" : "Photos & Video"}
                        </h3>
                        <div className="mt-4">
                            <ProjectMediaGallery
                                key={project.id}
                                title={project.title}
                                gallery={project.gallery}
                                media={project.media}
                            />
                        </div>
                    </section>

                    <aside className="space-y-8 border-t border-border pt-7 theme-transition md:border-l md:border-t-0 md:pl-8 md:pt-0">
                        <section aria-labelledby="creative-role-heading">
                            <h3 id="creative-role-heading" className={headingClass}>My Role</h3>
                            <ul className="mt-3 space-y-2">
                                {project.responsibilities.map((responsibility) => (
                                    <li key={responsibility} className="text-sm text-secondary theme-transition">
                                        {responsibility}
                                    </li>
                                ))}
                            </ul>
                        </section>
                        {project.credits && project.credits.length > 0 && (
                            <section aria-labelledby="creative-credits-heading">
                                <h3 id="creative-credits-heading" className={headingClass}>Credits</h3>
                                <dl className="mt-3 space-y-2 text-sm">
                                    {project.credits.map(({ role, name }) => (
                                        <div key={`${role}-${name}`}>
                                            <dt className="text-xs text-muted theme-transition">{role}</dt>
                                            <dd className="text-secondary theme-transition">{name}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </section>
                        )}
                        {related.length > 0 && (
                            <section aria-labelledby="creative-related-heading">
                                <h3 id="creative-related-heading" className={headingClass}>Related</h3>
                                <ul className="mt-3 space-y-2">
                                    {related.map((relatedProject) => (
                                        <li key={relatedProject.id}>
                                            <Link
                                                to={`/creative/${relatedProject.slug}`}
                                                replace
                                                className="text-sm font-medium text-accent theme-transition hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                                            >
                                                {relatedProject.title}
                                            </Link>
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
                            aria-label={previous ? `Previous project: ${previous.title}` : "No previous project"}
                            aria-keyshortcuts="ArrowLeft"
                            disabled={!previous || isClosing}
                            onClick={() => previous && onNavigate(previous)}
                            className={navButtonClass}
                        >
                            <span aria-hidden="true">{"\u2190\uFE0E"}</span>
                            <span>Previous</span>
                        </button>
                        <p className="text-xs tabular-nums text-muted theme-transition">
                            {currentIndex + 1} / {projectSequence.length}
                        </p>
                        <button
                            type="button"
                            aria-label={next ? `Next project: ${next.title}` : "No next project"}
                            aria-keyshortcuts="ArrowRight"
                            disabled={!next || isClosing}
                            onClick={() => next && onNavigate(next)}
                            className={navButtonClass}
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

export default CreativeProjectModal;
