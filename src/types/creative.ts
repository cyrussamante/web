export const creativeCategories = [
    "live-production",
    "visual-design",
    "graphic-design",
    "video-multimedia",
] as const;
export type CreativeCategory = (typeof creativeCategories)[number];

/** Any supported media source: Google Drive share link, YouTube/Vimeo URL, local `/path`, or public URL. */
export type MediaSource = string;

export interface GalleryImage {
    readonly src: MediaSource;
    readonly alt?: string;
    readonly caption?: string;
}

interface BaseMediaItem {
    readonly src: MediaSource;
    readonly title: string;
    readonly caption?: string;
}

export interface VideoMediaItem extends BaseMediaItem {
    readonly type: "video";
    /** Optional preview image shown before the video is loaded. */
    readonly poster?: MediaSource;
}

export interface PdfMediaItem extends BaseMediaItem {
    readonly type: "pdf";
}

export type ProjectMediaItem = VideoMediaItem | PdfMediaItem;

export interface CreditLine {
    readonly role: string;
    readonly name: string;
}

export interface ExternalLink {
    readonly label: string;
    readonly href: string;
}

export interface CreativeProject {
    readonly id: string;
    readonly slug: string;
    readonly title: string;
    /** Primary category; the project is listed here first. */
    readonly category: CreativeCategory;
    /** Extra categories the project should also appear under. */
    readonly additionalCategories?: readonly CreativeCategory[];
    /** Display date, e.g. "May 2024". */
    readonly date?: string;
    readonly year?: number;
    readonly featured: boolean;
    readonly description: string;
    /** Optional longer write-up, one string per paragraph. Shown under "Overview" in the project modal. */
    readonly overview?: readonly string[];
    readonly responsibilities: readonly string[];
    /** Short skill labels (e.g. "Sound cues") used for the skill filter chips and search. */
    readonly skills: readonly string[];
    /** Shown on cards and as the detail header image. Placeholder is shown when omitted. */
    readonly coverImage?: GalleryImage;
    readonly gallery?: readonly GalleryImage[];
    readonly media?: readonly ProjectMediaItem[];
    readonly credits?: readonly CreditLine[];
    readonly externalLinks?: readonly ExternalLink[];
    /** Clarifying note displayed with the project (e.g. scope of involvement). */
    readonly note?: string;
    /** Slugs of related projects shown on the detail page. */
    readonly relatedSlugs?: readonly string[];
}
