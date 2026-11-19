import type { CreativeCategory, CreativeProject } from "../types/creative";

/*
 * To add or update a creative project, edit this file only. See the
 * "Managing the creative portfolio" section of the README for examples.
 * Projects are displayed in the order listed here.
 */

export const creativeCategoryDetails: Record<CreativeCategory, { label: string; description: string }> = {
    "live-production": {
        label: "Live Production & Technical Design",
        description: "Sound and lighting cues, projection cues, lighting design, and show cueing for concerts, recitals, and theatre.",
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
            "Poster, magazine, and projection design for the JDL 15th Anniversary Gala, creating a cohesive visual presence across print and stage.",
        overview: [
            "Designed the printed and on-screen materials for the JDL 15th Anniversary Gala, including the event poster and gala magazine.",
            "Created the projection and backdrop visuals presented during the event, extending the anniversary identity from print to the stage.",
        ],
        responsibilities: ["Poster design", "Magazine design", "Projection / backdrop design"],
        skills: ["Graphic design", "Projection"],
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
            "Video recording and vocal recording for the JDL Come Alive music video, supporting the project from capture through to the finished 4K release.",
        overview: [
            "Filmed the video footage and recorded the vocal tracks for the JDL Come Alive music video.",
            "Contributed to both the audio and visual capture of the project, which was completed and delivered as a finished 4K video.",
        ],
        responsibilities: ["Video recording", "Vocal recording"],
        skills: ["Video", "Vocal recording"],
        coverImage: { src: "/images/creative/come-alive-cover.webp", alt: "Come Alive title over a city street", position: "48%" },
        media: [{ type: "video", title: "JDL Come Alive", poster: "/images/creative/come-alive-cover.webp", src: "https://drive.google.com/file/d/1B7nttR-ENdp16eOKG2cU16TOF58lt3w_/view?usp=sharing" }],
    },
    {
        id: "mean-girls-jr",
        slug: "mean-girls-jr",
        title: "JDL Mean Girls JR",
        category: "live-production",
        date: "March / May 2026",
        featured: false,
        description:
            "Mentorship and live show operation for JDL's Mean Girls JR, including sound cues and projection cues.",
        overview: [
            "Served as a mentor on JDL's production of Mean Girls JR while operating its sound and projection cues during performance.",
        ],
        responsibilities: ["Mentor", "Sound cues", "Projection cues"],
        skills: ["Sound", "Projection", "Mentorship"],
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
            "Logo design and anniversary branding for JDL Performing Arts' 15th anniversary, delivered as a crest-style mark with full-colour and reversed versions.",
        overview: [
            "Designed the commemorative logo for JDL Performing Arts' 15th anniversary: a crest that brings together dancers, a microphone, a crown, and theatre masks beneath a \"15th Anniversary\" banner.",
            "The mark was produced in full-colour and reversed versions, with and without the JDL Performing Arts wordmark.",
        ],
        responsibilities: ["Logo design", "Anniversary branding"],
        skills: ["Graphic design"],
        relatedSlugs: ["jdl-15th-anniversary-gala"],
        coverImage: { src: "/images/creative/jdl-15th-anniversary-logo.webp", alt: "JDL 15th Anniversary logo in purple and white" },
        gallery: [{ src: "/images/creative/jdl-15th-anniversary-logo.webp", alt: "JDL 15th Anniversary logo in purple and white", caption: "Logo in colour and reversed versions" }],
    },
    {
        id: "seussical-kids",
        slug: "seussical-kids",
        title: "JDL Seussical KIDS (Mississauga)",
        category: "live-production",
        date: "January 2026",
        featured: false,
        description:
            "Lighting design and sound cueing for JDL's Seussical KIDS, presented at the Maja Prentice Theatre in Mississauga.",
        overview: [
            "Designed the lighting for JDL's production of Seussical KIDS and operated its lighting and sound cues during performance.",
            "Presented in Mississauga at the Maja Prentice Theatre, with matinee and evening performances.",
        ],
        responsibilities: ["Sound cues", "Lighting design and cues"],
        skills: ["Sound", "Lighting"],
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
            "Projection and backdrop design with sound and lighting cueing for JDL's Decades of Music production.",
        overview: [
            "Designed the projected visuals and backdrops for JDL's Decades of Music production.",
            "Also operated the production's sound and lighting cues during performance.",
        ],
        responsibilities: ["Projection / backdrop design", "Sound and lighting cues"],
        skills: ["Projection", "Sound", "Lighting"],
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
            "Sound and projection cueing for JDL's Frozen JR, presented at the City Playhouse Theatre in Thornhill.",
        overview: [
            "Operated sound and projection cues during JDL's production of Frozen JR, supporting the live performance with precise audio and visual timing.",
        ],
        responsibilities: ["Sound cues", "Projection cues"],
        skills: ["Sound", "Projection"],
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
            "Projection and backdrop design with sound and lighting cueing for JDL Love Notes – A Night of Music Vocal Recital.",
        overview: [
            "Developed the projected visuals and backdrops for JDL Love Notes – A Night of Music, a vocal recital.",
            "Also operated the recital's sound and lighting cues during performance.",
        ],
        responsibilities: ["Projection / backdrop design", "Sound and lighting cues"],
        skills: ["Projection", "Sound", "Lighting"],
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
            "Projection and backdrop design with sound and lighting cueing for Mark Ezekiel Rivera's Love of Music Concert.",
        overview: [
            "Designed the projected visuals and backdrops for Mark Ezekiel Rivera's Love of Music Concert.",
            "Also operated the concert's sound and lighting cues during performance.",
        ],
        responsibilities: ["Projection / backdrop design", "Sound and lighting cues"],
        skills: ["Projection", "Sound", "Lighting"],
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
            "Video editing and content, projection and backdrop design, and sound and lighting cueing for the JDL Triple Act – The Next Level Concert in Oakville.",
        overview: [
            "Edited and produced video content for the JDL Triple Act – The Next Level Concert, presented on May 11, 2024 in Oakville.",
            "Designed the concert's projection and backdrop visuals and operated its sound and lighting cues during performance.",
        ],
        responsibilities: ["Video editing and content", "Projection / backdrop design", "Sound and lighting cues"],
        skills: ["Video", "Projection", "Sound", "Lighting"],
        media: [
            { type: "video", title: "Greetings (Updated)", src: "https://drive.google.com/file/d/19eLnBcmPOMkFt1W4NmmoZganUhR31DOj/view?usp=sharing" },
            { type: "video", title: "MAPA (Updated)", src: "https://drive.google.com/file/d/16bSxO31G43_O5Qza6oYJbd5UQt4-VYJf/view?usp=sharing" },
        ],
        coverImage: { src: "/images/creative/jdl-triple-act-flyer.webp", alt: "JDL Triple Act – The Next Level Concert flyer", position: "top" },
        gallery: [{ src: "/images/creative/jdl-triple-act-flyer.webp", alt: "JDL Triple Act – The Next Level Concert flyer", caption: "Concert flyer", fit: "contain" }],
        venue: "2700 Bristol Circle, Oakville, ON",
    },
    {
        id: "moana-jr",
        slug: "moana-jr",
        title: "JDL Moana JR",
        category: "live-production",
        date: "March 2024",
        featured: false,
        description:
            "Sound and projection cueing for JDL's Moana JR, presented at the City Playhouse Theatre in Thornhill.",
        overview: [
            "Operated sound and projection cues during JDL's production of Moana JR, supporting the live performance with precise audio and visual timing.",
        ],
        responsibilities: ["Sound cues", "Projection cues"],
        skills: ["Sound", "Projection"],
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
            "Designed commemorative souvenir programs for JDL productions, beginning with the first JDL Goes Broadway.",
        overview: [
            "Each program was designed as a keepsake for the production, presenting the full cast of students alongside the show's creative story.",
            "Programs recognized the production's sponsors and partners and featured curated photographs related to the show, giving audiences a polished, lasting record of the performance.",
        ],
        responsibilities: [
            "Souvenir program design for JDL productions",
            "Features recognizing every student in the production",
            "Sponsor and partner recognition",
            "Curated production photography",
        ],
        skills: ["Graphic design", "Print design"],
        coverImage: { src: "/images/creative/frozen-jr-flyer.webp", alt: "JDL show flyer", position: "top" },
    },
];
