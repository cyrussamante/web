import type { ResolvedVideo } from "../../utils/media";

interface VideoSurfaceProps {
    video: ResolvedVideo;
    title: string;
    poster?: string;
}

/** The actual player; fills its (positioned) parent. */
function VideoSurface({ video, title, poster }: VideoSurfaceProps) {
    if (video.kind === "embed") {
        return (
            <iframe
                src={video.embedUrl}
                title={title}
                loading="lazy"
                allow="fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full border-0"
            />
        );
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
