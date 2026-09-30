export interface ExperienceRole {
    id: string;
    title: string;
    period: string;
    sortDate: string;
    context?: string;
    details: string[];
    skills?: string[];
    spotlight?: {
        title: string;
        description: string;
        skills: string[];
    };
}

export interface ExperienceOrganization {
    id: string;
    name: string;
    roles: ExperienceRole[];
}

const introductionToProgrammingTaDetails = [
    "Led weekly Python tutorials, explaining core programming concepts and helping students debug their work.",
    "Assessed tests and exams, providing focused feedback to reinforce learning and guide improvement.",
];

export const professionalExperience: ExperienceOrganization[] = [
    {
        id: "adp-current",
        name: "ADP",
        roles: [
            {
                id: "adp-associate-application-developer",
                title: "Associate Application Developer",
                period: "Jul 2025 - Present",
                sortDate: "2025-07",
                context: "Etobicoke, Ontario | Hybrid",
                details: [
                    "One of the first developers on ADP Workforce Now On the Go Next Gen, contributing to its launch and building new features for mobile HR and payroll workflows.",
                    "Support production operations by investigating reported issues, analyzing application behavior, and contributing to deployment workflows.",
                ],
                spotlight: {
                    title: "AI engineering workflows",
                    description:
                        "Use structured prompts, reusable skills, GitHub Copilot, and Amazon Q in daily development. Apply Spec Kit, Atlassian MCP integrations, and plugins to bring project context into coding, documentation, and root-cause investigations.",
                    skills: [
                        "Prompt design",
                        "Agent skills",
                        "MCP integrations",
                        "AI development plugins",
                        "GitHub Copilot",
                        "Amazon Q",
                        "Spec Kit",
                    ],
                },
            },
        ],
    },
    {
        id: "jdl-performing-arts",
        name: "JDL Performing Arts",
        roles: [
            {
                id: "jdl-social-media-manager",
                title: "Social Media Manager (Instagram and TikTok)",
                period: "Jan 2026 - Present",
                sortDate: "2026-01",
                context: "Mississauga, Ontario | Hybrid",
                details: [
                    "Plan and publish promotional and behind-the-scenes content for theatre productions, coordinating with cast and production teams.",
                    "Produce short-form video and rehearsal coverage; one organic video surpassed 40,000 views.",
                ],
            },
            {
                id: "jdl-performing-arts-mentor",
                title: "Performing Arts Mentor",
                period: "Aug 2025 - Present",
                sortDate: "2025-08",
                context: "Mississauga, Ontario | On-site",
                details: [
                    "Coach student performers on scenes, blocking, and rehearsal preparation for productions including Mean Girls JR.",
                    "Partner with directors and production staff to keep rehearsals organized and foster an inclusive, collaborative environment.",
                ],
            },
        ],
    },
    {
        id: "mcmaster-teaching",
        name: "McMaster University",
        roles: [
            {
                id: "mcmaster-1md3-ta-2025",
                title: "Teaching Assistant - COMPSCI 1MD3",
                period: "Jan-Apr 2024 and Jan-Apr 2025",
                sortDate: "2025-01",
                context: "Introduction to Programming",
                details: introductionToProgrammingTaDetails,
            },
            {
                id: "mcmaster-3ra3-ta",
                title: "Teaching Assistant - COMPSCI / SFWRENG 3RA3",
                period: "Sep 2024 - Dec 2024",
                sortDate: "2024-09",
                context: "Software Requirements and Security Considerations",
                details: [
                    "Led weekly tutorials for 50+ students, connecting software requirements and security concepts to practical case studies.",
                    "Evaluated projects and coached students on requirements engineering and technical documentation.",
                ],
            },
            {
                id: "mcmaster-2da4-labs",
                title: "Teaching Assistant - SFWRENG 2DA4",
                period: "Sep 2024 - Dec 2024",
                sortDate: "2024-09",
                context: "FPGA and digital systems labs",
                details: [
                    "Guided students implementing and debugging VHDL and Verilog designs on FPGA development boards.",
                    "Taught digital design fundamentals, including state machines, memory-mapped I/O, and hardware/software interfaces; assessed lab work and midterms.",
                ],
            },
        ],
    },
    {
        id: "adp-internship",
        name: "ADP",
        roles: [
            {
                id: "adp-application-development-intern",
                title: "Application Development Intern",
                period: "May 2024 - Jul 2024",
                sortDate: "2024-05",
                context: "Etobicoke, Ontario",
                details: [
                    "Developed ADP Workforce Now features using Java, Spring Boot, React, and Maven.",
                    "Investigated client-reported production issues with Splunk, monitoring performance and tracing application errors.",
                    "Supported deployments and automated build and release workflows with Jenkins.",
                ],
                skills: ["Java", "React", "Maven", "Spring Boot", "Splunk", "Jenkins"],
            },
        ],
    },
    {
        id: "gdsc-mcmaster",
        name: "Google Developer Student Clubs McMaster University",
        roles: [
            {
                id: "gdsc-marketing-branding",
                title: "Marketing and Branding Team Member",
                period: "Sep 2023 - Apr 2024",
                sortDate: "2023-09",
                context: "Hamilton, Ontario",
                details: [
                    "Designed and iterated 10+ Figma assets for 5+ student events, maintaining consistent branding across campaigns.",
                    "Contributed to reported gains of 20% in event engagement and 30% in campus brand visibility.",
                ],
                skills: ["Figma", "Visual Design", "Branding", "Content Creation"],
            },
        ],
    },
    {
        id: "plasp-child-care",
        name: "PLASP Child Care Services",
        roles: [
            {
                id: "plasp-information-technology",
                title: "Information Technology Co-op",
                period: "Feb 2020 - Apr 2020",
                sortDate: "2020-02",
                context: "Mississauga, Ontario",
                details: [
                    "Maintained IT asset records for 1,500 employees and 2,500 devices, improving data accuracy and accessibility.",
                    "Resolved technology issues, contributing to a reported 13% reduction in downtime.",
                    "Implemented component and device upgrades that contributed to a reported 20% improvement in system performance.",
                ],
                skills: ["IT Asset Management", "Technical Support", "Troubleshooting", "Technology Research"],
            },
        ],
    },
];

export const education = {
    qualification: "B.Eng. in Software Engineering",
    organization: "McMaster University",
    period: "2021 - 2025",
    details: [
        "Cumulative GPA: 11.2 / 12",
        "Dean's Honour List",
    ],
};

export const skillGroups = [
    {
        title: "AI and Modern Development",
        skills: [
            "AI-assisted Development", "Prompt Design", "Agent Skills",
            "Development Plugins", "GitHub Copilot", "Amazon Q",
            "Model Context Protocol (MCP)", "Atlassian MCP Integrations", "Spec Kit",
        ],
    },
    {
        title: "Languages and Web",
        skills: [
            "Java", "Python", "C++", "SQL", "HTML", "CSS", "JavaScript",
            "TypeScript", "C", "MATLAB", "Go", "Bash", "Ruby",
        ],
    },
    {
        title: "Frameworks and Testing",
        skills: ["React", "Spring Boot", "Bootstrap", "JUnit", "Apache CLI"],
    },
    {
        title: "Tools and Platforms",
        skills: [
            "Git", "GitHub", "Maven", "Jenkins", "Splunk", "Firebase",
            "GitLab CI/CD", "Docker", "MuJoCo", "Figma", "Autodesk Inventor",
            "Microsoft Office", "Atlassian",
        ],
    },
    {
        title: "Engineering Practices",
        skills: [
            "OOP", "Unit Testing", "Data Structures", "Algorithms", "UML",
            "Design Patterns", "Concurrent Design", "Agile", "Kanban",
            "Requirements Engineering", "Security Fundamentals",
            "Test Automation", "Production Support", "Root-Cause Analysis",
            "Observability and Log Analysis", "Machine Learning",
            "Simulation Integration", "IT Asset Management", "Technical Support",
            "Visual Design", "Branding", "Frontend", "Backend", "Full-Stack",
        ],
    },
];
