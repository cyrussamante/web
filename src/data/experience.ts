export interface ExperienceRole {
    readonly id: string;
    readonly title: string;
    readonly period: string;
    readonly sortDate: string;
    readonly context?: string;
    readonly details: readonly string[];
    readonly skills?: readonly string[];
    readonly spotlight?: {
        readonly title: string;
        readonly description: string;
        readonly skillsLabel: string;
        readonly skills: readonly string[];
    };
}

export interface ExperienceOrganization {
    readonly id: string;
    readonly name: string;
    readonly displayOrder?: number;
    readonly roles: readonly ExperienceRole[];
}

interface EducationRecord {
    readonly qualification: string;
    readonly organization: string;
    readonly period: string;
    readonly summary: string;
    readonly details: readonly string[];
}

const introductionToProgrammingTaDetails = [
    "Led weekly Python tutorials, breaking down programming concepts and guiding students through debugging.",
    "Evaluated tests and exams, giving clear, actionable feedback to support student progress.",
];

export const professionalExperience: readonly ExperienceOrganization[] = [
    {
        id: "adp-current",
        name: "ADP",
        displayOrder: 0,
        roles: [
            {
                id: "adp-associate-application-developer",
                title: "Associate Application Developer",
                period: "Jul 2025 - Present",
                sortDate: "2025-07",
                context: "Etobicoke, Ontario | Hybrid",
                details: [
                    "One of the first developers on ADP Workforce Now On the Go Next Gen; contributed to its launch and 10+ new features, simplifying complex practitioner views and workflows for small-business owners.",
                    "Built and maintained features across the Java/Spring Boot backend and React frontend, working within existing services and component patterns.",
                    "Support monthly major releases and production operations by using Splunk to investigate reported issues, analyze application behavior, and trace errors across services.",
                    "Contribute to deployment workflows and collaborate with practitioners and teammates to refine requirements and validate fixes.",
                ],
                skills: ["Java", "Spring Boot", "React", "Splunk", "Jenkins"],
                spotlight: {
                    title: "AI engineering workflows",
                    description:
                        "Use structured prompts, reusable skills, GitHub Copilot, and Amazon Q in daily development. Apply Spec Kit, Atlassian MCP integrations, and plugins to bring project context into coding, documentation, and root-cause investigations.",
                    skillsLabel: "AI development tools",
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
                    "Create and publish promotional and behind-the-scenes social content in partnership with cast and production teams.",
                    "Produce short-form video and rehearsal coverage, including an organic video that reached 40,000+ views.",
                ],
            },
            {
                id: "jdl-performing-arts-mentor",
                title: "Performing Arts Mentor",
                period: "Aug 2025 - Present",
                sortDate: "2025-08",
                context: "Mississauga, Ontario | On-site",
                details: [
                    "Coach student performers on scenes, blocking, and rehearsal readiness for productions such as Mean Girls JR.",
                    "Coordinate with directors and production staff to support efficient rehearsals and a collaborative, inclusive cast environment.",
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
                    "Led weekly tutorials for 50+ students, translating software requirements and security principles into practical case studies.",
                    "Reviewed team projects and coached students on requirements analysis and clear technical documentation.",
                ],
            },
            {
                id: "mcmaster-2da4-labs",
                title: "Teaching Assistant - SFWRENG 2DA4",
                period: "Sep 2024 - Dec 2024",
                sortDate: "2024-09",
                context: "FPGA and digital systems labs",
                details: [
                    "Helped students build and debug VHDL and Verilog designs on FPGA development boards.",
                    "Explained state machines, memory-mapped I/O, and hardware/software interfaces, while assessing lab work and midterms.",
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
                    "Built ADP Workforce Now features across the Java/Spring Boot and React stack, using Maven in the development workflow.",
                    "Used Splunk to investigate client-reported production issues, trace application errors, and monitor service performance.",
                    "Supported application deployments and automated build and release workflows through Jenkins.",
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
                    "Designed 10+ Figma assets for 5+ student events, refining campaign visuals while maintaining consistent club branding.",
                    "Contributed to reported increases of 20% in event engagement and 30% in campus brand visibility.",
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
                    "Maintained IT asset records covering 1,500 employees and 2,500 devices, strengthening data accuracy and access to inventory information.",
                    "Resolved technical issues, contributing to a reported 13% reduction in downtime.",
                    "Implemented hardware and component upgrades that contributed to a reported 20% improvement in system performance.",
                ],
                skills: ["IT Asset Management", "Technical Support", "Troubleshooting", "Technology Research"],
            },
        ],
    },
];

export const education: EducationRecord = {
    qualification: "B.Eng. in Software Engineering",
    organization: "McMaster University",
    period: "2021 - 2025",
    summary:
        "My Software Engineering degree at McMaster strengthened my foundation in programming, algorithms, software design, and testing. It taught me to approach complex technical problems methodically and build software with reliability, maintainability, and real-world needs in mind.",
    details: [
        "Cumulative GPA: 11.2 / 12",
        "Summa Cum Laude",
        "Dean's Honour List",
    ],
};

interface SkillGroupData {
    readonly title: string;
    readonly skills: readonly string[];
}

export const skillGroups: readonly SkillGroupData[] = [
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
