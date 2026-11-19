import { useEffect, useRef } from "react";
import type { KeyboardEvent } from "react";
import type { ResolvedVideo } from "../../utils/media";
import VideoSurface from "./VideoSurface";

interface VideoViewerProps {
    video: ResolvedVideo;
    title: string;
    poster?: string;
    onClose: () => void;
}

/** Full-viewport player for small screens, where an inline embed is too cramped to use. */
function VideoViewer({ video, title, poster, onClose }: VideoViewerProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog || dialog.open) return;
        dialog.showModal();
    }, []);

    // Keep the project modal's arrow-key navigation from firing while watching.
    function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
        event.stopPropagation();
    }

    return (
        <dialog
            ref={dialogRef}
            aria-label={title}
            onClose={onClose}
            onKeyDown={handleKeyDown}
            className="fixed inset-0 m-0 h-dvh max-h-none w-dvw max-w-none border-0 bg-black p-0 text-white open:flex open:flex-col"
        >
            <div className="flex shrink-0 items-center justify-between gap-3 px-4 py-2">
                <p className="min-w-0 truncate text-sm font-medium">{title}</p>
                <button
                    type="button"
                    onClick={() => dialogRef.current?.close()}
                    className="min-h-11 shrink-0 cursor-pointer rounded-lg border border-white/30 px-4 text-sm font-medium hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                    Close
                </button>
            </div>
            <div className="relative min-h-0 flex-1 pb-[env(safe-area-inset-bottom)]">
                <VideoSurface video={video} title={title} poster={poster} />
            </div>
        </dialog>
    );
}

export default VideoViewer;
