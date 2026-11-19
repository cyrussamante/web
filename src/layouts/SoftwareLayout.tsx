import { Outlet } from "react-router";
import SectionSubNav from "../components/SectionSubNav";

const softwareLinks = [
    { name: "Overview", path: "/software", end: true },
    { name: "Projects", path: "/software/projects" },
    { name: "Experience", path: "/software/experience" },
];

function SoftwareLayout() {
    return (
        <>
            <SectionSubNav label="Software Engineering" links={softwareLinks} />
            <div className="mx-auto w-full max-w-7xl flex-1 px-6 sm:px-8 lg:px-12">
                <Outlet />
            </div>
        </>
    );
}

export default SoftwareLayout;
