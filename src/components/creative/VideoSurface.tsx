import type { ResolvedVideo } from "../../utils/media";
import ScaledEmbed from "./ScaledEmbed";

interface VideoSurfaceProps {
    video: ResolvedVideo;
    title: string;
    poster?: string;
    portrait?: boolean;
}

// Drive's player uses a stacked touch layout below roughly 860px wide whose controls spill out of a
// widescreen frame, so it is rendered at 880px and scaled down. Vertical videos suit its tall layout.
const driveMinWidth = { landscape: 880, portrait: 440 };

/** The actual player; fills its (positioned) parent. */
function VideoSurface({ video, title, poster, portrait = false }: VideoSurfaceProps) {
    if (video.kind === "embed") {
        const minWidth = video.provider === "drive" ? driveMinWidth[portrait ? "portrait" : "landscape"] : 0;
        return <ScaledEmbed src={video.embedUrl} title={title} minWidth={minWidth} />;
    }

    return (
        <video
            src={video.src}
            poster={poster}
            controls
            preload="metadata"
            playsInline
            className="absolute inset-0 h-full w-full"
        >
            Your browser does not support embedded video.
        </video>
    );
}

export default VideoSurface;
