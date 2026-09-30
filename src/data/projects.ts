export const projectCategories = ["Web Apps", "Mobile", "Tools", "Other"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

type ProjectImage = {
    src: string;
    alt: string;
};

export type Project = {
    id: string;
    title: string;
    description?: string;
    category: ProjectCategory;
    featuredOrder?: number;
    year?: number;
    dateRange?: string;
    collaborators?: string[];
    technologies?: string[];
    previewImage?: ProjectImage;
    relatedProjectIds?: string[];
    links: {
        label: string;
        href: string;
        variant?: "secondary" | "text";
    }[];
    overview?: string;
    features?: string[];
    screenshots?: ProjectImage[];
};

export const projects: Project[] = [
    {
        id: "renewable-technology-challenge",
        title: "Renewable Technology Challenge",
        description: "Compared blade materials and simulated deflection to recommend a wind-turbine design for local conditions in Guatemala.",
        category: "Other",
        year: 2021,
        dateRange: "Sep 2021 \u2013 Oct 2021",
        collaborators: ["Swesan Pathmanathan", "Manisha Kohli", "Patricia Girgis"],
        technologies: ["GRANTA EduPack", "Autodesk Inventor"],
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
        description: "Established the mesh-generation foundation later extended into seeded terrain and procedurally generated urban layouts.",
        category: "Other",
        year: 2023,
        collaborators: ["Hady Ibrahim", "Richard Li"],
        technologies: ["Java", "JUnit"],
        relatedProjectIds: ["terrain-generation", "urbanism"],
        overview:
            "Built the first stage of a shared procedural-generation codebase: generating a mesh selected by the user. This foundation was later extended through the Terrain Generation and Urbanism projects.",
        features: [
            "Implemented user-selected mesh generation as the starting point for the later terrain and urban-generation stages.",
        ],
        links: [],
    },
    {
        id: "terrain-generation",
        title: "Terrain Generation",
        description: "Generated reproducible, biome-driven 2D terrain and validated outputs with 5+ JUnit suites across 100+ landscapes.",
        category: "Other",
        year: 2023,
        dateRange: "Mar 2023",
        collaborators: ["Hady Ibrahim", "Richard Li"],
        relatedProjectIds: ["mesh-generation", "urbanism"],
        technologies: ["Java", "JUnit"],
        overview:
            "Extended the shared codebase with a 2D terrain generator that accepts user-defined biome inputs and uses a seed to reproduce generated landscapes.",
        features: [
            "Used a fixed seed to reproduce and inspect more than 100 generated landscapes.",
            "Created more than five JUnit test suites to support quality assurance.",
            "Built on the shared codebase established by Mesh Generation and later extended by Urbanism.",
        ],
        links: [],
    },
    {
        id: "urbanism",
        title: "Urbanism",
        description: "Extended procedural terrain with generated roads, cities, and routes connecting locations to capital cities.",
        category: "Other",
        year: 2023,
        overview:
            "Extended the shared terrain-generation codebase with an urban layer that adds roads, cities, and capital cities, then generates paths connecting locations to capital cities.",
        technologies: ["Java", "JUnit"],
        relatedProjectIds: ["mesh-generation", "terrain-generation"],
        links: [],
    },
    {
        id: "cyrussamante-com",
        title: "Personal Portfolio Website",
        description: "Revamped a portfolio to showcase 5+ projects and streamline résumé access; the 2023 iteration was associated with a 65% increase in résumé access.",
        category: "Web Apps",
        year: 2023,
        dateRange: "Apr 2022; revamped Jun 2023 \u2013 Jul 2023",
        technologies: ["HTML", "CSS", "JavaScript", "Ruby on Rails", "Figma"],
        overview:
            "Built and revamped a personal portfolio website across two iterations, organizing project details, skills, resume access, and contact information. The 2023 version was associated with a 65% increase in resume access. This is the legacy portfolio, not the current website.",
        features: [
            "Presented more than five projects with links to additional information.",
            "Made resume and contact information directly accessible.",
        ],
        links: [
            {
                label: "View source code",
                href: "https://github.com/cyrussamante/portfolio-website",
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