export const projectCategories = ["Web Apps", "Mobile", "Tools", "Other"] as const;
export type ProjectCategory = (typeof projectCategories)[number];
export const allProjectsFilter = "All" as const;
export const projectFilters = [allProjectsFilter, ...projectCategories] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export const projectSortOptions = [
    { value: "newest", label: "Newest first" },
    { value: "oldest", label: "Oldest first" },
    { value: "alphabetical", label: "A\u2013Z" },
] as const;
export type ProjectSortOrder = (typeof projectSortOptions)[number]["value"];

interface ProjectImage {
    readonly src: string;
    readonly darkSrc?: string;
    readonly alt: string;
    readonly zoom?: number;
    readonly fit?: "cover" | "contain";
}

interface ProjectLink {
    readonly label: string;
    readonly href: string;
    readonly variant?: "secondary" | "text";
}

export interface Project {
    readonly id: string;
    readonly title: string;
    readonly description?: string;
    readonly category: ProjectCategory;
    readonly featuredOrder?: number;
    readonly year?: number;
    readonly dateRange?: string;
    readonly collaborators?: readonly string[];
    readonly technologies?: readonly string[];
    readonly previewImage?: ProjectImage;
    readonly links: readonly ProjectLink[];
    readonly overview?: string;
    readonly features?: readonly string[];
    readonly screenshots?: readonly ProjectImage[];
}

export const projects: readonly Project[] = [
    {
        id: "renewable-technology-challenge",
        title: "Renewable Technology Challenge",
        description: "Compared blade materials and simulated deflection to recommend a wind-turbine design for local conditions in Guatemala.",
        category: "Other",
        year: 2021,
        dateRange: "Sep 2021 \u2013 Oct 2021",
        collaborators: ["Swesan Pathmanathan", "Manisha Kohli", "Patricia Girgis"],
        technologies: ["GRANTA EduPack", "Autodesk Inventor"],
        previewImage: {
            src: "/images/projects/wind-turbine-design.webp",
            alt: "Wind turbine blade displacement simulation",
        },
        overview:
            "Developed a wind-energy design recommendation for Quetzaltenango, Guatemala, comparing blade materials against cost, local weather, and the power needs of small electrical devices.",
        features: [
            "Compared candidate blade materials in GRANTA EduPack and organized trade-offs with decision matrices.",
            "Used Autodesk Inventor deflection simulations to assess how blade designs respond to pressure.",
            "Balanced material cost and weather resistance against the needs of the proposed wind-energy system.",
        ],
        links: [],
    },
    {
        id: "get-a-grip",
        title: "Get a Grip!",
        description: "Prototyped a sensor-driven workflow that routes sterilization containers to an autoclave through threshold-based robotic actions.",
        category: "Other",
        year: 2021,
        dateRange: "Oct 2021 \u2013 Nov 2021",
        collaborators: ["Aryana Zarringhalam"],
        technologies: ["Python", "Quanser Interactive Labs", "Raspberry Pi"],
        previewImage: {
            src: "/images/projects/get-a-grip.webp",
            alt: "Simulated robotic arm sorting containers in a rehabilitation lab",
        },
        overview:
            "Designed and simulated a remote-sensing and actuation system that routes sterilization containers to an autoclave based on their size and color.",
        features: [
            "Used muscle-sensor emulators as inputs to the control program.",
            "Mapped combinations of input thresholds to corresponding robotic actions.",
            "Planned the control flow and tested the system in Quanser Interactive Labs.",
        ],
        links: [],
    },
    {
        id: "recycling-hopper-mechanism",
        title: "Recycling Hopper Mechanism",
        description: "Converted rotary actuator motion into a 3D-printed mechanism for releasing recyclables from a hopper; selected for the year-end showcase.",
        category: "Other",
        year: 2022,
        dateRange: "Jan 2022 \u2013 Feb 2022",
        collaborators: ["Joseph Petrasek"],
        technologies: ["Autodesk Inventor", "3D printing"],
        previewImage: {
            src: "/images/projects/recycling-hopper.webp",
            alt: "3D-printed rotary mechanism attached to a recycling hopper",
        },
        overview:
            "Designed and built a physical mechanism that attaches to a recycling hopper and converts rotary actuator motion into linear motion to release recyclable containers.",
        features: [
            "Designed and refined components in Autodesk Inventor, including measurements and engineering drawings.",
            "Fabricated components with 3D printing and assembled the mechanism.",
            "Selected for the 2022 ENG-1P13 year-end showcase.",
        ],
        links: [],
    },
    {
        id: "grades2date",
        title: "Grades2Date | Weighted GPA Calculator",
        description: "Built a reusable desktop gradebook for weighted course calculations and yearly GPA tracking on 4- and 12-point scales.",
        category: "Tools",
        year: 2022,
        dateRange: "Dec 2022",
        technologies: ["Python", "Tkinter"],
        previewImage: {
            src: "/images/projects/grades2date.webp",
            alt: "Grades2Date gradebook showing course grades, unit counts, and calculated GPA",
        },
        overview:
            "Built a Python desktop application that organizes coursework into reusable profiles and calculates grades and GPA from course weightings. It can also combine courses into a yearly GPA using either a 4-point or 12-point scale.",
        features: [
            "Create, save, open, and edit multiple course profiles using text files.",
            "Calculate current grades, GPA, and total course weighting from course data.",
            "Aggregate courses into a yearly GPA on either a 4-point or 12-point scale.",
            "Import and export course data for continued use across sessions.",
        ],
        links: [
            {
                label: "View source code",
                href: "https://github.com/cyrussamante/Grades2Date",
            },
        ],
    },
    {
        id: "source-water-monitoring-system-analysis",
        title: "Algae Bloom Drone: Source Water Monitoring",
        description: "Designed a drone-based monitoring concept combining spectral imaging and image recognition to detect algal blooms in source water.",
        category: "Other",
        year: 2023,
        collaborators: ["Sydney Durigon", "Emile Gennaro", "Clara Yaromich"],
        previewImage: {
            src: "/images/projects/source-water-monitoring.webp",
            alt: "Aerial view from a small aircraft surveying a lake and shoreline for water monitoring",
        },
        overview:
            "Developed a feasibility-informed design plan for automated source-water monitoring in the Rainy Lake of the Woods region. The proposal focused on early algal-bloom detection and accounted for operational, privacy, environmental, and regulatory constraints.",
        features: [
            "Proposed combining convolutional-neural-network image recognition with spectral-reflectance imaging.",
            "Outlined A* flight-path planning that accounts for safety, privacy, and operating constraints.",
            "Assessed battery life, weather, wildlife, data security, licensing, and water-quality limits.",
            "Defined implementation considerations, including charging infrastructure, data-protection software, and licensed pilots.",
        ],
        links: [],
    },
    {
        id: "piraten-kapern-simulator",
        title: "Piraten Kapern Simulator",
        description: "Built a configurable Java simulator for 42-game strategy matchups, reporting head-to-head win rates.",
        category: "Tools",
        year: 2023,
        dateRange: "Jan 2023 \u2013 Feb 2023",
        technologies: ["Java", "Maven", "Log4j", "Git"],
        previewImage: {
            src: "/images/projects/pirate-ship-illustration.webp",
            alt: "Vintage sailing ship illustration used as artwork for the Piraten Kapern simulator",
        },
        overview:
            "Created a two-player command-line simulator for Piraten Kapern. Players can use different dice-rolling strategies based on a drawn fortune card or a strategy provided through command-line arguments.",
        features: [
            "Run a 42-game simulation between two players.",
            "Configure player strategies through command-line arguments.",
            "Summarize simulation results with each player's win percentage.",
        ],
        links: [],
    },
    {
        id: "mesh-generation",
        title: "Mesh Generation",
        description: "Built a modular Java generator for square, diamond, and hexagonal meshes, with safeguards against duplicate geometry.",
        category: "Other",
        year: 2023,
        collaborators: ["Hady Ibrahim", "Richard Li"],
        technologies: ["Java", "JUnit"],
        previewImage: {
            src: "/images/projects/mesh-generation.webp",
            alt: "Generated irregular polygon mesh visualization",
        },
        overview:
            "Designed a reusable mesh-generation library that builds selected mesh types from connected vertices, segments, and polygons. A shared Mesh abstraction and dedicated geometry types keep generation modular, while consistent ordering and duplicate-aware collections preserve mesh structure.",
        features: [
            "Generated square, diamond, and hexagonal tessellations through a shared mesh interface.",
            "Separated vertices, segments, and polygons into dedicated geometry components.",
            "Prevented duplicate geometry and maintained consistent ordering for mesh elements.",
            "Included normal and debug visualization modes, with debug mode showing polygon neighbors.",
        ],
        links: [],
    },
    {
        id: "terrain-generation",
        title: "Terrain Generation",
        description: "Built seeded island generation with selectable shapes, climate-based biomes, and lakes, rivers, and aquifers.",
        category: "Other",
        year: 2023,
        dateRange: "Mar 2023",
        collaborators: ["Hady Ibrahim", "Richard Li"],
        technologies: ["Java", "JUnit"],
        previewImage: {
            src: "/images/projects/terrain-generation.webp",
            alt: "Procedurally generated island with distinct terrain biomes and lakes",
        },
        overview:
            "Extended the shared Java mesh foundation into a configurable island generator. The system combines island shapes, elevation, water features, and climate-based biome classification; a user-provided seed can reproduce the same generated island.",
        features: [
            "Generated islands with selectable shapes and terrain features.",
            "Classified regions into biomes using selectable American or Asian Whittaker diagrams.",
            "Generated lakes, rivers that flow from higher elevations, and aquifers.",
            "Accepted and returned a seed so an island could be regenerated consistently.",
            "Tested feature rules including biome classification, elevation profiles, and lake generation.",
        ],
        links: [],
    },
    {
        id: "urbanism",
        title: "Urbanism",
        description: "Added cities and capital locations to generated islands, with star- and mesh-style road networks and routes to capitals.",
        category: "Other",
        year: 2023,
        previewImage: {
            src: "/images/projects/urbanism.webp",
            alt: "Aerial view of a suburban neighborhood with winding roads branching between clusters of houses",
        },
        overview:
            "Extended the procedural island generator with an urban layer. It places cities and capital locations, builds configurable road networks, and adapts island geometry into a graph for routing between locations and capitals.",
        features: [
            "Added cities and capital locations to generated islands.",
            "Generated star- or mesh-style road networks.",
            "Converted island geometry into a graph for pathfinding between locations and capital cities.",
            "Used separate city and road factories to select implementations from user input.",
        ],
        technologies: ["Java", "JUnit"],
        links: [],
    },
    {
        id: "cyrussamante-com",
        title: "Personal Portfolio Website",
        description: "Built this portfolio from scratch in React and TypeScript, with a project catalog, filtering, and an accessible modal gallery.",
        category: "Web Apps",
        year: 2026,
        dateRange: "2026",
        technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
        previewImage: {
            src: "/images/projects/cyrussamante-com-light.webp",
            darkSrc: "/images/projects/cyrussamante-com-dark.webp",
            alt: "This portfolio website's home page",
        },
        overview:
            "Built this personal portfolio website as a React and TypeScript single-page app. It includes category filtering and sorting on the Projects page, an accessible modal with keyboard navigation between projects, and a light/dark theme toggle.",
        features: [
            "Filters and sorts projects by category, date, and title.",
            "Browses project details through a keyboard-navigable modal with left/right project switching.",
            "Supports light and dark themes with a persisted user preference.",
            "Made resume and contact information directly accessible.",
        ],
        links: [
            {
                label: "View source code",
                href: "https://github.com/cyrussamante/web",
            },
        ],
    },
    {
        id: "pathfinding-visualizer",
        title: "Pathfinding Visualizer",
        description: "Made DFS, BFS, and Dijkstra's algorithm easier to explore through step-by-step Java Swing visualizations.",
        category: "Tools",
        featuredOrder: 3,
        year: 2023,
        dateRange: "Jul 2023 \u2013 Aug 2023",
        technologies: ["Java", "Java Swing"],
        previewImage: {
            src: "/images/projects/pathfinding-visualizer.webp",
            alt: "Pathfinding Visualizer showing a completed Dijkstra route across a grid board",
            fit: "contain",
        },
        overview:
            "Built an interactive Java Swing application that makes graph-search algorithms observable through step-by-step visualizations.",
        features: [
            "Visualized depth-first search (DFS), breadth-first search (BFS), and Dijkstra's algorithm.",
            "Explored algorithm behavior through an interactive Java Swing interface.",
        ],
        links: [
            {
                label: "View source code",
                href: "https://github.com/cyrussamante/pathfinding-visualizer",
            },
        ],
    },
    {
        id: "guardian-messenger",
        title: "Guardian Messenger",
        description: "Led a five-person team building an Android messaging app with Java, Firebase, and DES-based message encryption.",
        category: "Mobile",
        featuredOrder: 2,
        year: 2024,
        dateRange: "Apr 2024",
        technologies: ["Java", "Firebase", "Git"],
        previewImage: {
            src: "/images/projects/guardian-messenger.webp",
            alt: "Guardian Messenger Android app showing an encrypted message conversation",
            fit: "contain",
        },
        overview:
            "Led a five-person team in developing an Android messaging application with Java and Firebase, including DES-based message encryption.",
        features: [
            "Included DES-based encryption to protect message confidentiality between users.",
            "Developed the Android application using Java and Firebase.",
        ],
        links: [
            {
                label: "View source code",
                href: "https://github.com/cyrussamante/GuardianMessenger",
            },
        ],
    },
    {
        id: "evolving-robot-controllers",
        title: "Evolving Robot Controllers with Emergent Tangled Program Graphs",
        description: "Built a modular C++ training and evaluation framework linking Tangled Program Graph controllers to MuJoCo; Docker and CI improvements cut build times by 50%.",
        category: "Tools",
        featuredOrder: 1,
        year: 2025,
        dateRange: "Sep 2024 \u2013 Apr 2025",
        technologies: ["C++", "Python", "Docker", "GitLab CI/CD", "MuJoCo"],
        previewImage: {
            src: "/images/projects/tangled-program-graphs.webp",
            alt: "Tangled Program Graphs capstone project poster",
        },
        overview:
            "Developed a modular C++ framework for training and evaluating Tangled Program Graph (TPG) controllers in MuJoCo, connecting the TPG engine to simulator feedback for policy learning.",
        features: [
            "Integrated the TPG engine with the MuJoCo physics simulator.",
            "Automated testing and deployment with GitLab CI/CD.",
            "Created custom Docker images and dependency caching, reducing build times by 50%.",
            "The project team was acknowledged in a 2026 publication on dynamic vector and matrix memory for Tangled Program Graphs.",
        ],
        links: [
            {
                label: "View source code",
                href: "https://github.com/tangledprogramgraphs/capstone-2025",
            },
            {
                label: "Read publication",
                href: "https://doi.org/10.1007/978-3-032-23005-8_11",
                variant: "text",
            },
        ],
    },
];