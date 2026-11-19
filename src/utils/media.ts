import type { MediaSource } from "../types/creative";

export interface ResolvedImage {
    /** Candidate URLs, tried in order until one loads. */
    readonly sources: readonly string[];
    readonly openUrl: string;
}

export type ResolvedVideo =
    | { readonly kind: "embed"; readonly embedUrl: string; readonly openUrl: string; readonly provider: "drive" | "youtube" | "vimeo" }
    | { readonly kind: "file"; readonly src: string; readonly openUrl: string };

export interface ResolvedPdf {
    readonly embedUrl: string;
    readonly openUrl: string;
}

const driveHosts = new Set(["drive.google.com", "docs.google.com", "drive.usercontent.google.com"]);
const youtubeHosts = new Set(["youtube.com", "www.youtube.com", "m.youtube.com", "youtube-nocookie.com", "www.youtube-nocookie.com"]);
const vimeoHosts = new Set(["vimeo.com", "www.vimeo.com", "player.vimeo.com"]);
const driveIdPattern = /^[\w-]{10,}$/;

function parseUrl(value: string): URL | null {
    try {
        return new URL(value.trim());
    } catch {
        return null;
    }
}

function isLocalPath(value: string) {
    return value.startsWith("/") && !value.startsWith("//");
}

function isHttpUrl(url: URL | null): url is URL {
    return url !== null && (url.protocol === "https:" || url.protocol === "http:");
}

export function getDriveFileId(src: MediaSource): string | null {
    const url = parseUrl(src);
    if (!isHttpUrl(url) || !driveHosts.has(url.hostname)) return null;

    const pathMatch = url.pathname.match(/\/d\/([\w-]+)/);
    const id = pathMatch?.[1] ?? url.searchParams.get("id");

    if (url.pathname.includes("/folders/") || !id || !driveIdPattern.test(id)) return null;
    return id;
}

function getYouTubeId(url: URL): string | null {
    let id: string | null = null;

    if (url.hostname === "youtu.be") {
        id = url.pathname.slice(1).split("/")[0];
    } else if (youtubeHosts.has(url.hostname)) {
        const pathMatch = url.pathname.match(/^\/(?:embed|shorts|live)\/([\w-]+)/);
        id = pathMatch?.[1] ?? url.searchParams.get("v");
    }

    return id && /^[\w-]{6,}$/.test(id) ? id : null;
}

function getVimeoId(url: URL): string | null {
    if (!vimeoHosts.has(url.hostname)) return null;
    return url.pathname.match(/\/(\d{5,})/)?.[1] ?? null;
}

function getDriveOpenUrl(id: string) {
    return `https://drive.google.com/file/d/${id}/view`;
}

function hasExtension(src: string, extensions: readonly string[]) {
    const path = parseUrl(src)?.pathname ?? src.split(/[?#]/)[0];
    return extensions.some((extension) => path.toLowerCase().endsWith(extension));
}

export function resolveImage(src: MediaSource | undefined): ResolvedImage | null {
    if (!src) return null;

    const driveId = getDriveFileId(src);
    if (driveId) {
        return {
            sources: [
                `https://drive.google.com/thumbnail?id=${driveId}&sz=w1600`,
                `https://lh3.googleusercontent.com/d/${driveId}=w1600`,
            ],
            openUrl: getDriveOpenUrl(driveId),
        };
    }

    if (isLocalPath(src) || isHttpUrl(parseUrl(src))) {
        return { sources: [src], openUrl: src };
    }

    return null;
}

export function resolveVideo(src: MediaSource | undefined): ResolvedVideo | null {
    if (!src) return null;

    const driveId = getDriveFileId(src);
    if (driveId) {
        return {
            kind: "embed",
            provider: "drive",
            embedUrl: `https://drive.google.com/file/d/${driveId}/preview`,
            openUrl: getDriveOpenUrl(driveId),
        };
    }

    if (isLocalPath(src)) return { kind: "file", src, openUrl: src };

    const url = parseUrl(src);
    if (!isHttpUrl(url)) return null;

    const youtubeId = getYouTubeId(url);
    if (youtubeId) {
        return {
            kind: "embed",
            provider: "youtube",
            embedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
            openUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
        };
    }

    const vimeoId = getVimeoId(url);
    if (vimeoId) {
        return {
            kind: "embed",
            provider: "vimeo",
            embedUrl: `https://player.vimeo.com/video/${vimeoId}`,
            openUrl: `https://vimeo.com/${vimeoId}`,
        };
    }

    if (hasExtension(src, [".mp4", ".webm", ".mov", ".m4v", ".ogv"])) {
        return { kind: "file", src, openUrl: src };
    }

    return null;
}

export function resolvePdf(src: MediaSource | undefined): ResolvedPdf | null {
    if (!src) return null;

    const driveId = getDriveFileId(src);
    if (driveId) {
        return {
            embedUrl: `https://drive.google.com/file/d/${driveId}/preview`,
            openUrl: getDriveOpenUrl(driveId),
        };
    }

    if (isLocalPath(src) || isHttpUrl(parseUrl(src))) {
        return { embedUrl: src, openUrl: src };
    }

    return null;
}
