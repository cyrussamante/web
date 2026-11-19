import { useLocation } from "react-router";
import type { CreativeProject } from "../../types/creative";
import ActionLink from "../ActionLink";
import SectionLabel from "../SectionLabel";
import ProjectBadge from "../projects/ProjectBadge";
import CategoryCover from "./CategoryCover";
import ProjectImage from "./ProjectImage";

interface FeaturedProjectProps {
    project: CreativeProject;
}

function FeaturedProject({ project }: FeaturedProjectProps) {
    const { search } = useLocation();

    return (
        <section aria-labelledby="featured-heading" className="motion-fade-up py-10 sm:py-12" style={{ animationDelay: "100ms" }}>
            <SectionLabel>FEATURED PROJECT</SectionLabel>
            <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
                <div className="relative">
                    <div aria-hidden="true" className="absolute -right-3 -top-3 hidden h-full w-full border border-accent/60 sm:block" />
                    <ProjectImage
                        src={project.coverImage?.src}
                        fit={project.coverImage?.fit}
                        position={project.coverImage?.position}
                        alt={project.coverImage?.alt ?? `${project.title} cover image`}
                        aspectClass="aspect-4/3 sm:aspect-video"
                        eager
                        fallback={<CategoryCover project={project} />}
                        className="relative border border-border"
                    />
                </div>
                <div>
                    <h2 id="featured-heading" className="text-3xl font-bold leading-tight tracking-tight text-foreground theme-transition sm:text-4xl">
                        {project.title}
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-secondary theme-transition sm:text-base sm:leading-7">
                        {project.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Responsibilities">
                        {project.responsibilities.map((responsibility) => (
                            <li key={responsibility}>
                                <ProjectBadge variant="category">{responsibility}</ProjectBadge>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6">
                        <ActionLink href={`/creative/${project.slug}${search}`} showArrow>
                            View project
                        </ActionLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProject;
