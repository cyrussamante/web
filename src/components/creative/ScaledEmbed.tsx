import { useEffect, useRef, useState } from "react";

interface ScaledEmbedProps {
    src: string;
    title: string;
    /** Render at least this wide, scaling down to fit the container. */
    minWidth: number;
}

interface Size {
    width: number;
    height: number;
}

/**
 * An iframe that fills its (positioned) parent. Some players pick their control layout from the iframe's
 * size and break in small boxes, so below `minWidth` it renders at that width and is scaled down to fit.
 */
function ScaledEmbed({ src, title, minWidth }: ScaledEmbedProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState<Size>({ width: 0, height: 0 });

    useEffect(() => {
        const element = containerRef.current;
        if (!element) return;

        const observer = new ResizeObserver(([entry]) => {
            setSize({ width: entry.contentRect.width, height: entry.contentRect.height });
        });
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    const scale = size.width > 0 ? Math.min(1, size.width / minWidth) : 1;

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden">
            {size.width > 0 && (
                <iframe
                    src={src}
                    title={title}
                    loading="lazy"
                    allow="fullscreen; picture-in-picture; encrypted-media"
                    allowFullScreen
                    referrerPolicy="no-referrer"
                    className="absolute left-0 top-0 origin-top-left border-0"
                    style={{
                        width: size.width / scale,
                        height: size.height / scale,
                        transform: scale < 1 ? `scale(${scale})` : undefined,
                    }}
                />
            )}
        </div>
    );
}

export default ScaledEmbed;
