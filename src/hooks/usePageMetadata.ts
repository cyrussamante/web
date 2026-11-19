import { useEffect } from "react";

const SITE_NAME = "Cyruss Amante";
const SITE_URL = "https://cyrussamante.com";

interface PageMetadataOptions {
    path?: string;
    image?: string;
}

type TagSpec = {
    selector: string;
    create: () => HTMLElement;
    attribute: "content" | "href";
    value: string | undefined;
};

function metaTag(attribute: "name" | "property", key: string) {
    return {
        selector: `meta[${attribute}="${key}"]`,
        create: () => {
            const element = document.createElement("meta");
            element.setAttribute(attribute, key);
            return element;
        },
    };
}

const canonicalTag = {
    selector: 'link[rel="canonical"]',
    create: () => {
        const element = document.createElement("link");
        element.setAttribute("rel", "canonical");
        return element;
    },
};

function usePageMetadata(title: string, description: string, options: PageMetadataOptions = {}) {
    const { path, image } = options;

    useEffect(() => {
        const fullTitle = `${title} | ${SITE_NAME}`;
        const previousTitle = document.title;
        document.title = fullTitle;

        const url = path === undefined ? undefined : `${SITE_URL}${path}`;
        const imageUrl = image?.startsWith("/") ? `${SITE_URL}${image}` : image;

        const tags: TagSpec[] = [
            { ...metaTag("name", "description"), attribute: "content", value: description },
            { ...metaTag("property", "og:title"), attribute: "content", value: fullTitle },
            { ...metaTag("property", "og:description"), attribute: "content", value: description },
            { ...metaTag("property", "og:url"), attribute: "content", value: url },
            { ...metaTag("property", "og:image"), attribute: "content", value: imageUrl },
            { ...metaTag("name", "twitter:title"), attribute: "content", value: fullTitle },
            { ...metaTag("name", "twitter:description"), attribute: "content", value: description },
            { ...metaTag("name", "twitter:image"), attribute: "content", value: imageUrl },
            { ...canonicalTag, attribute: "href", value: url },
        ];

        const restorers = tags.flatMap(({ selector, create, attribute, value }) => {
            if (value === undefined) return [];

            let element = document.head.querySelector(selector);
            const created = element === null;
            if (!element) {
                element = create();
                document.head.appendChild(element);
            }

            const previous = element.getAttribute(attribute);
            element.setAttribute(attribute, value);

            return [
                () => {
                    if (created) {
                        element.remove();
                    } else if (previous !== null) {
                        element.setAttribute(attribute, previous);
                    }
                },
            ];
        });

        return () => {
            document.title = previousTitle;
            restorers.forEach((restore) => restore());
        };
    }, [title, description, path, image]);
}

export default usePageMetadata;
