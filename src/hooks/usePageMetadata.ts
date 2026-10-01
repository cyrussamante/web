import { useEffect } from "react";

const SITE_NAME = "Cyruss Amante";

function usePageMetadata(title: string, description: string) {
    useEffect(() => {
        const fullTitle = `${title} | ${SITE_NAME}`;
        document.title = fullTitle;

        const descriptionTag = document.querySelector('meta[name="description"]');
        const previousDescription = descriptionTag?.getAttribute("content") ?? null;
        descriptionTag?.setAttribute("content", description);

        const ogTitleTag = document.querySelector('meta[property="og:title"]');
        const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
        const previousOgTitle = ogTitleTag?.getAttribute("content") ?? null;
        const previousOgDescription = ogDescriptionTag?.getAttribute("content") ?? null;
        ogTitleTag?.setAttribute("content", fullTitle);
        ogDescriptionTag?.setAttribute("content", description);

        return () => {
            if (previousDescription !== null) {
                descriptionTag?.setAttribute("content", previousDescription);
            }
            if (previousOgTitle !== null) {
                ogTitleTag?.setAttribute("content", previousOgTitle);
            }
            if (previousOgDescription !== null) {
                ogDescriptionTag?.setAttribute("content", previousOgDescription);
            }
        };
    }, [title, description]);
}

export default usePageMetadata;
