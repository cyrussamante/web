import type { CreativeCategory, CreativeProject } from "../types/creative";

/*
 * To add or update a creative project, edit this file only. See the
 * "Managing the creative portfolio" section of the README for examples.
 * Projects are displayed in the order listed here.
 */

export const creativeCategoryDetails: Record<CreativeCategory, { label: string; description: string }> = {
    "live-production": {
        label: "Live Production & Technical Design",
        description: "Sound, projection operation, lighting design, and production for concerts, recitals, and theatre.",
    },
    "visual-design": {
        label: "Visual Design & Projection",
        description: "VJ visuals, backdrops, and projections for theatre and live events.",
    },
    "graphic-design": {
        label: "Graphic Design & Branding",
        description: "Logo design, anniversary branding, and printed souvenir playbills.",
    },
    "video-multimedia": {
        label: "Video & Multimedia Production",
        description: "Video production, filming, and vocal recording for music videos and live events.",
    },
};

export const creativeProjects: readonly CreativeProject[] = [
    {
        id: "jdl-15th-anniversary-gala",
        slug: "jdl-15th-anniversary-gala",
        title: "JDL 15th Anniversary Gala",
        category: "live-production",
        additionalCategories: ["visual-design", "video-multimedia"],
        featured: true,
        description:
            "Visuals and VJ backdrops, production, sound, and video content for the JDL 15th Anniversary Gala.",
        responsibilities: ["Visuals and VJ backdrops", "Production", "Sound", "Video content"],
        relatedSlugs: ["jdl-15th-anniversary-logo"],
    },
    {
        id: "jdl-triple-act-concert",
        slug: "jdl-triple-act-concert",
        title: "JDL Triple Act Concert",
        category: "live-production",
        additionalCategories: ["visual-design", "video-multimedia"],
        featured: false,
        description: "Sound, projections, and video production for the JDL Triple Act Concert.",
        responsibilities: ["Sound", "Projections", "Video production"],
    },
    {
        id: "love-of-music-concert",
        slug: "love-of-music-concert",
        title: "Mark Eziekel Riveria's Love of Music Concert",
        category: "live-production",
        additionalCategories: ["visual-design"],
        featured: false,
        description: "Sound and projections for Mark Eziekel Riveria's Love of Music Concert.",
        responsibilities: ["Sound", "Projections"],
    },
    {
        id: "love-notes-recital",
        slug: "love-notes-recital",
        title: "Love Notes Recital",
        category: "live-production",
        featured: false,
        description: "Production support for the Love Notes Recital.",
        responsibilities: ["Production support"],
    },
    {
        id: "mean-girls-jr",
        slug: "mean-girls-jr",
        title: "Mean Girls JR",
        category: "live-production",
        additionalCategories: ["visual-design"],
        featured: false,
        description: "Projections, sound cues, and production for Mean Girls JR.",
        responsibilities: ["Projections", "Sound cues and production"],
    },
    {
        id: "frozen-jr",
        slug: "frozen-jr",
        title: "Frozen JR",
        category: "live-production",
        additionalCategories: ["visual-design"],
        featured: false,
        description: "Projections, sound cues, and production for Frozen JR.",
        responsibilities: ["Projections", "Sound cues and production"],
    },
    {
        id: "moana-jr",
        slug: "moana-jr",
        title: "Moana JR",
        category: "live-production",
        additionalCategories: ["visual-design"],
        featured: false,
        description: "Projections, sound cues, and production for Moana JR.",
        responsibilities: ["Projections", "Sound cues and production"],
    },
    {
        id: "seussical-kids",
        slug: "seussical-kids",
        title: "Seussical KIDS",
        category: "live-production",
        featured: false,
        description: "Lighting design and sound cues for Seussical KIDS.",
        responsibilities: ["Lighting design", "Sound cues"],
    },
    {
        id: "jdl-goes-broadway",
        slug: "jdl-goes-broadway-central-scarborough",
        title: "JDL Goes Broadway Central / Scarborough",
        category: "live-production",
        featured: false,
        description: "Sound and projection cues and operation for JDL Goes Broadway Central / Scarborough.",
        responsibilities: ["Sound", "Projection cues and operation"],
        note: "The visuals for this production were not created by me; my role was cueing and operating the projections.",
    },
    {
        id: "decades-of-music",
        slug: "decades-of-music",
        title: "Decades of Music",
        category: "visual-design",
        featured: false,
        description: "Visual production for Decades of Music.",
        responsibilities: ["Visual production"],
    },
    {
        id: "jdl-come-alive-music-video",
        slug: "jdl-come-alive-music-video",
        title: "JDL Come Alive Music Video",
        category: "video-multimedia",
        featured: false,
        description: "Filming and vocal recording for the JDL Come Alive music video.",
        responsibilities: ["Filming", "Vocal recording"],
    },
    {
        id: "jdl-souvenir-playbills",
        slug: "jdl-souvenir-playbills",
        title: "JDL Souvenir Playbills",
        category: "graphic-design",
        featured: false,
        description: "Souvenir playbills created for JDL shows, beginning with the first JDL Goes Broadway.",
        responsibilities: ["Created souvenir playbills for JDL shows, beginning with the first JDL Goes Broadway"],
    },
    {
        id: "jdl-15th-anniversary-logo",
        slug: "jdl-15th-anniversary-logo",
        title: "JDL 15th Anniversary Logo",
        category: "graphic-design",
        featured: false,
        description: "Logo design and anniversary branding for JDL's 15th anniversary.",
        responsibilities: ["Logo design", "Anniversary branding"],
        relatedSlugs: ["jdl-15th-anniversary-gala"],
    },
];
