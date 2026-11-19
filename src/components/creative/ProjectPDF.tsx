import type { PdfMediaItem } from "../../types/creative";
import useInView from "../../hooks/useInView";
import { resolvePdf } from "../../utils/media";
import MediaPlaceholder from "./MediaPlaceholder";

interface ProjectPDFProps {
    item: PdfMediaItem;
}

function ProjectPDF({ item }: ProjectPDFProps) {
    const [containerRef, isNearViewport] = useInView<HTMLDivElement>();
    const pdf = resolvePdf(item.src);

    if (!pdf) {
        return (
            <div className="h-64 w-full">
                <MediaPlaceholder label="This document link is not supported" devHint={`Check the link: ${item.src}`} />
            </div>
        );
    }

    return (
        <figure>
            <div
                ref={containerRef}
                className="h-[28rem] w-full overflow-hidden border border-border bg-surface theme-transition sm:h-[36rem]"
            >
                {isNearViewport ? (
                    <iframe
                        src={pdf.embedUrl}
                        title={item.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-full w-full border-0"
                    />
                ) : (
                    <MediaPlaceholder label="Loading document preview" />
                )}
            </div>
            <figcaption className="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-muted theme-transition">
                <span>{item.caption ?? item.title}</span>
                <a
                    href={pdf.openUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                    Open document {"\u2197\uFE0E"}
                </a>
            </figcaption>
        </figure>
    );
}

export default ProjectPDF;
