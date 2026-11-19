import { NavLink } from "react-router";

interface SubNavLink {
    name: string;
    path: string;
    end?: boolean;
}

interface SectionSubNavProps {
    label: string;
    links: SubNavLink[];
}

function SectionSubNav({ label, links }: SectionSubNavProps) {
    return (
        <nav aria-label={label} className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <ul className="flex gap-6 border-b border-border text-sm theme-transition">
                {links.map(({ name, path, end }) => (
                    <li key={path}>
                        <NavLink
                            to={path}
                            end={end}
                            className={({ isActive }) =>
                                `-mb-px inline-block border-b-2 py-3 font-medium theme-transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                                    isActive
                                        ? "border-accent text-accent"
                                        : "border-transparent text-secondary hover:text-accent"
                                }`
                            }
                        >
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default SectionSubNav;
