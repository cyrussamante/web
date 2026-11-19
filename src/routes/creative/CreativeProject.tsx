import { Link, useParams } from "react-router";
import ActionLink from "../../components/ActionLink";
import CreativeProjectCard from "../../components/creative/CreativeProjectCard";
import ProjectImage from "../../components/creative/ProjectImage";
import ProjectMediaGallery from "../../components/creative/ProjectMediaGallery";
import Divider from "../../components/Divider";
import SectionLabel from "../../components/SectionLabel";
import ProjectBadge from "../../components/projects/ProjectBadge";
import { creativeCategoryDetails, creativeProjects } from "../../data/creativeProjects";
import usePageMetadata from "../../hooks/usePageMetadata";
import { getAdjacentProjects, getProjectBySlug, getRelatedProjects } from "../../utils/creative";
import NotFound from "../NotFound";

function CreativeProject() {
    const { slug } = useParams();
    const project = getProjectBySlug(creativeProjects, slug);

    usePageMetadata(
        project?.title ?? "Project Not Found",
        project?.description ?? "This creative project could not be found.",
        project ? { path: `/creative/${project.slug}` } : {},
    );

    if (!project) return <NotFound />;

    const { previous, next } = getAdjacentProjects(creativeProjects, project);
    const related = getRelatedProjects(creativeProjects, project);
    const categories = [project.category, ...(project.additionalCategories ?? [])];

    return (
        <main className="py-10 sm:py-14">
            <div className="motion-fade-up">
                <ActionLink href="/creative" variant="text">
                    {"\u2190\uFE0E"} All creative work
                </ActionLink>
            </div>
            <header className="motion-fade-up mt-6 max-w-3xl" style={{ animationDelay: "60ms" }}>
                <SectionLabel>{creativeCategoryDetails[project.category].label}</SectionLabel>
                <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground theme-transition sm:text-5xl">
                    {project.title}
                </h1>
                {project.year && <p className="mt-2 text-sm text-muted theme-transition">{project.year}</p>}
            </header>

            <div className="motion-fade-up mt-8" style={{ animationDelay: "120ms" }}>
                <ProjectImage
                    src={project.coverImage?.src}
                    alt={project.coverImage?.alt ?? `${project.title} cover image`}
                    aspectClass="aspect-4/3 sm:aspect-21/9"
                    eager
                    className="border border-border"
                />
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
                <section aria-labelledby="overview-heading">
                    <h2 id="overview-heading" className="text-xs font-semibold uppercase tracking-[0.16em] text-accent theme-transition">
                        Overview
                    </h2>
                    <p className="mt-3 text-base leading-7 text-secondary theme-transition">{project.description}</p>
                    {project.note && (
                        <p className="mt-4 border-l-2 border-accent pl-4 text-sm leading-6 text-foreground theme-transition">
                            {project.note}
                        </p>
                    )}
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Categories">
                        {categories.map((category) => (
                            <li key={category}>
                                <ProjectBadge variant="category">{creativeCategoryDetails[category].label}</ProjectBadge>
                            </li>
                        ))}
                    </ul>
                </section>
                <section aria-labelledby="role-heading">
                    <h2 id="role-heading" className="text-xs font-semibold uppercase tracking-[0.16em] text-accent theme-transition">
                        My role
                    </h2>
                    <ul className="mt-3 divide-y divide-border border-y border-border">
                        {project.responsibilities.map((responsibility) => (
                            <li key={responsibility} className="py-3 text-sm text-foreground theme-transition">
                                {responsibility}
                            </li>
                        ))}
                    </ul>
                    {project.credits && project.credits.length > 0 && (
                        <dl className="mt-6 space-y-2 text-sm">
                            {project.credits.map(({ role, name }) => (
                                <div key={`${role}-${name}`} className="flex gap-3">
                                    <dt className="text-muted theme-transition">{role}</dt>
                                    <dd className="text-foreground theme-transition">{name}</dd>
                                </div>
                            ))}
                        </dl>
                    )}
                    {project.externalLinks && project.externalLinks.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-4">
                            {project.externalLinks.map(({ label, href }) => (
                                <ActionLink key={href} href={href} variant="text" showArrow openInNewTab>
                                    {label}
                                </ActionLink>
                            ))}
                        </div>
                    )}
                </section>
            </div>

            <section aria-labelledby="media-heading" className="mt-14">
                <h2 id="media-heading" className="text-2xl font-bold text-foreground theme-transition">
                    Media
                </h2>
                <div className="mt-6">
                    <ProjectMediaGallery title={project.title} gallery={project.gallery} media={project.media} />
                </div>
            </section>

            {related.length > 0 && (
                <section aria-labelledby="related-heading" className="mt-14">
                    <h2 id="related-heading" className="text-2xl font-bold text-foreground theme-transition">
                        Related
                    </h2>
                    <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {related.map((relatedProject) => (
                            <li key={relatedProject.id}>
                                <CreativeProjectCard project={relatedProject} aspectClass="aspect-video" />
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            <Divider />
            <nav aria-label="More creative projects" className="flex flex-wrap items-center justify-between gap-4 text-sm">
                {previous ? (
                    <Link to={`/creative/${previous.slug}`} className="font-medium text-accent hover:text-accent-hover theme-transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                        {"\u2190\uFE0E"} {previous.title}
                    </Link>
                ) : <span />}
                {next && (
                    <Link to={`/creative/${next.slug}`} className="font-medium text-accent hover:text-accent-hover theme-transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                        {next.title} {"\u2192\uFE0E"}
                    </Link>
                )}
            </nav>
        </main>
    );
}

export default CreativeProject;
