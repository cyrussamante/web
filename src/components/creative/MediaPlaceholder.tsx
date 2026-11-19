interface MediaPlaceholderProps {
    label: string;
    /** Developer hint, only rendered during local development. */
    devHint?: string;
    openUrl?: string;
    className?: string;
}

function MediaPlaceholder({ label, devHint, openUrl, className = "" }: MediaPlaceholderProps) {
    return (
        <div
            className={`flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-border bg-surface p-4 text-center text-muted theme-transition ${className}`}
        >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="9" cy="10" r="1.75" />
                <path d="m21 16-5-5-8 8" />
            </svg>
            <p className="text-xs font-medium text-secondary theme-transition">{label}</p>
            {import.meta.env.DEV && devHint && <p className="max-w-xs text-[11px] leading-4">{devHint}</p>}
            {openUrl && (
                <a
                    href={openUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                    Open original {"\u2197\uFE0E"}
                </a>
            )}
        </div>
    );
}

export default MediaPlaceholder;
