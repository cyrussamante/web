import { useState } from "react";
import type { Project } from "../data/projects";

function useProjectModal() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    function openProject(project: Project) {
        setSelectedProject(project);
    }

    function closeProject() {
        setSelectedProject(null);
    }

    return {
        selectedProject,
        openProject,
        closeProject,
    };
}

export default useProjectModal;
