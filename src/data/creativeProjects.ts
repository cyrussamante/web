import type { CreativeCategory, CreativeProject } from "../types/creative";

/*
 * To add or update a creative project, edit this file only. See the
 * "Managing the creative portfolio" section of the README for examples.
 * Projects are displayed in the order listed here.
 */

export const creativeCategoryDetails: Record<CreativeCategory, { label: string; description: string }> = {
    "live-production": {
        label: "Live Production & Technical Design",
        description: "Sound and lighting cues, projection cues, lighting design, and calling shows for concerts, recitals, and theatre.",
    },
    "visual-design": {
        label: "Visual Design & Projection",
        description: "Projection and backdrop design for concerts, theatre, and live events.",
    },
    "graphic-design": {
        label: "Graphic Design & Branding",
        description: "Posters, magazine design, logo design, anniversary branding, and souvenir programs.",
    },
    "video-multimedia": {
        label: "Video & Multimedia Production",
        description: "Video editing, video recording, and vocal recording for concerts and music videos.",
    },
};

export const creativeProjects: readonly CreativeProject[] = [
    {
        id: "jdl-15th-anniversary-gala",
        slug: "jdl-15th-anniversary-gala",
        title: "JDL 15th Anniversary Gala",
        category: "graphic-design",
        additionalCategories: ["visual-design"],
        date: "November 2026",
        featured: true,
        description:
            "Poster design, magazine design, and projection and backdrop design for the JDL 15th Anniversary Gala.",
        responsibilities: ["Poster design", "Magazine design", "Projection / backdrop design"],
        skills: ["Graphic design", "Projection & backdrops"],
        relatedSlugs: ["jdl-15th-anniversary-logo"],
        coverImage: { src: "https://drive.google.com/file/d/12VHW84Dn1zX9jKMluls5edRdJbdJMBbA/view?usp=sharing", alt: "JDL 15th Anniversary animated crest" },
        media: [
            { type: "video", title: "JDL 15th Anniversary Loop", src: "https://drive.google.com/file/d/12VHW84Dn1zX9jKMluls5edRdJbdJMBbA/view?usp=sharing" },
            { type: "video", title: "MICO", src: "https://drive.google.com/file/d/1TMReX8TK_Ik1mOlgbsN1_F9ziEPK2_nm/view?usp=sharing" },
        ],
    },
    {
        id: "jdl-come-alive-music-video",
        slug: "jdl-come-alive-music-video",
        title: "JDL Come Alive Music Video",
        category: "video-multimedia",
        date: "September 2026",
        featured: false,
        description:
            "Video recording and vocal recording for the JDL Come Alive music video.",
        responsibilities: ["Video recording", "Vocal recording"],
        skills: ["Video", "Vocal recording"],
    },
    {
        id: "mean-girls-jr",
        slug: "mean-girls-jr",
        title: "JDL Mean Girls JR",
        category: "live-production",
        date: "March / May 2026",
        featured: false,
        description:
            "Mentoring, sound cues, and projection cues for JDL Mean Girls JR.",
        responsibilities: ["Mentor", "Sound cues", "Projection cues"],
        skills: ["Sound cues", "Projection cues", "Mentoring"],
        coverImage: { src: "/images/creative/mean-girls-jr-flyer.webp", alt: "Mean Girls JR flyer", position: "top" },
        gallery: [{ src: "/images/creative/mean-girls-jr-flyer.webp", alt: "Mean Girls JR flyer", caption: "Show flyer", portrait: true }],
        venue: "City Playhouse Theatre, Thornhill",
    },
    {
        id: "jdl-15th-anniversary-logo",
        slug: "jdl-15th-anniversary-logo",
        title: "JDL 15th Anniversary Logo",
        category: "graphic-design",
        date: "February 2026",
        featured: false,
        description:
            "Logo design and anniversary branding for JDL's 15th anniversary.",
        responsibilities: ["Logo design", "Anniversary branding"],
        skills: ["Graphic design"],
        relatedSlugs: ["jdl-15th-anniversary-gala"],
    },
    {
        id: "seussical-kids",
        slug: "seussical-kids",
        title: "JDL Seussical KIDS (Mississauga)",
        category: "live-production",
        date: "January 2026",
        featured: false,
        description:
            "Sound cues and lighting design and cues, calling the show, for JDL Seussical KIDS in Mississauga.",
        responsibilities: ["Sound cues", "Lighting design and cues (called the show)"],
        skills: ["Sound cues", "Lighting"],
        coverImage: { src: "/images/creative/seussical-kids-flyer.webp", alt: "Seussical KIDS flyer", position: "20%" },
        gallery: [{ src: "/images/creative/seussical-kids-flyer.webp", alt: "Seussical KIDS flyer", caption: "Show flyer", portrait: true }],
        venue: "Maja Prentice Theatre, Mississauga",
    },
    {
        id: "decades-of-music",
        slug: "decades-of-music",
        title: "JDL Decades of Music",
        category: "visual-design",
        additionalCategories: ["live-production"],
        date: "July 2025",
        featured: false,
        description:
            "Projection and backdrop design, and calling the show with sound and lighting cues, for JDL Decades of Music.",
        responsibilities: ["Projection / backdrop design", "Called the show with sound and lighting cues"],
        skills: ["Projection & backdrops", "Sound cues", "Lighting"],
        coverImage: { src: "https://drive.google.com/file/d/18vS-TOnn8DJNL2FbtBQzNcgRzREonx-v/view?usp=sharing", alt: "The Decades title card" },
        media: [{ type: "video", title: "Decades Loop", src: "https://drive.google.com/file/d/18vS-TOnn8DJNL2FbtBQzNcgRzREonx-v/view?usp=sharing" }],
    },
    {
        id: "frozen-jr",
        slug: "frozen-jr",
        title: "JDL Frozen JR",
        category: "live-production",
        date: "March 2025",
        featured: false,
        description:
            "Sound cues and projection cues for JDL Frozen JR.",
        responsibilities: ["Sound cues", "Projection cues"],
        skills: ["Sound cues", "Projection cues"],
        coverImage: { src: "/images/creative/frozen-jr-flyer.webp", alt: "Frozen JR flyer", position: "top" },
        gallery: [{ src: "/images/creative/frozen-jr-flyer.webp", alt: "Frozen JR flyer", caption: "Show flyer", portrait: true }],
        venue: "City Playhouse Theatre, Thornhill",
    },
    {
        id: "love-notes-recital",
        slug: "love-notes-recital",
        title: "JDL Love Notes – A Night of Music Vocal Recital",
        category: "live-production",
        additionalCategories: ["visual-design"],
        date: "February 2025",
        featured: false,
        description:
            "Projection and backdrop design, and calling the show with sound and lighting cues, for JDL Love Notes – A Night of Music Vocal Recital.",
        responsibilities: ["Projection / backdrop design", "Called the show with sound and lighting cues"],
        skills: ["Projection & backdrops", "Sound cues", "Lighting"],
        coverImage: { src: "https://drive.google.com/file/d/1u_e2vmUIYx7GUqQ75_Fp80Pa6I6xBUn-/view?usp=sharing", alt: "Love Notes title animation" },
        media: [
            { type: "video", title: "Love Notes Title Loop", src: "https://drive.google.com/file/d/1u_e2vmUIYx7GUqQ75_Fp80Pa6I6xBUn-/view?usp=sharing" },
        ],
    },
    {
        id: "love-of-music-concert",
        slug: "love-of-music-concert",
        title: "Mark Ezekiel Rivera's Love of Music Concert",
        category: "live-production",
        additionalCategories: ["visual-design"],
        date: "December 2024",
        featured: false,
        description:
            "Projection and backdrop design, and calling the show with sound and lighting cues, for Mark Ezekiel Rivera's Love of Music Concert.",
        responsibilities: ["Projection / backdrop design", "Called the show with sound and lighting cues"],
        skills: ["Projection & backdrops", "Sound cues", "Lighting"],
        coverImage: { src: "https://drive.google.com/file/d/1n_GXG9uA54u21HXFsGVveOOUIqL-ihzo/view?usp=sharing", alt: "Love of Music logo animation" },
        media: [{ type: "video", title: "Love of Music Logo", src: "https://drive.google.com/file/d/1n_GXG9uA54u21HXFsGVveOOUIqL-ihzo/view?usp=sharing" }],
    },
    {
        id: "jdl-triple-act-concert",
        slug: "jdl-triple-act-concert",
        title: "JDL Triple Act – The Next Level Concert",
        category: "live-production",
        additionalCategories: ["visual-design", "video-multimedia"],
        date: "May 2024",
        featured: false,
        description:
            "Video editing and content, projection and backdrop design, and calling the show with sound and lighting cues for the JDL Triple Act – The Next Level Concert.",
        responsibilities: ["Video editing and content", "Projection / backdrop design", "Called the show with sound and lighting cues"],
        skills: ["Video", "Projection & backdrops", "Sound cues", "Lighting"],
        media: [
            { type: "video", title: "Greetings (Updated)", src: "https://drive.google.com/file/d/19eLnBcmPOMkFt1W4NmmoZganUhR31DOj/view?usp=sharing" },
            { type: "video", title: "MAPA (Updated)", src: "https://drive.google.com/file/d/16bSxO31G43_O5Qza6oYJbd5UQt4-VYJf/view?usp=sharing" },
        ],
    },
    {
        id: "moana-jr",
        slug: "moana-jr",
        title: "JDL Moana JR",
        category: "live-production",
        date: "March 2024",
        featured: false,
        description:
            "Sound cues and projection cues for JDL Moana JR.",
        responsibilities: ["Sound cues", "Projection cues"],
        skills: ["Sound cues", "Projection cues"],
        coverImage: { src: "/images/creative/moana-jr-flyer.webp", alt: "Moana JR flyer", position: "top" },
        gallery: [{ src: "/images/creative/moana-jr-flyer.webp", alt: "Moana JR flyer", caption: "Show flyer", portrait: true }],
        venue: "City Playhouse Theatre, Thornhill",
    },
    {
        id: "jdl-souvenir-playbills",
        slug: "jdl-souvenir-playbills",
        title: "JDL Souvenir Programs",
        category: "graphic-design",
        featured: false,
        description:
            "Souvenir programs created throughout JDL shows, beginning with the first JDL Goes Broadway.",
        responsibilities: ["Souvenir program design"],
        skills: ["Graphic design"],
    },
];
