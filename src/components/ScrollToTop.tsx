import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    const previousPathname = useRef(pathname);

    useEffect(() => {
        // Project modals live on /creative/:slug over the creative list, so keep the scroll position.
        const isWithinCreative = (path: string) => path === "/creative" || path.startsWith("/creative/");
        const stayingInCreative = isWithinCreative(previousPathname.current) && isWithinCreative(pathname);
        previousPathname.current = pathname;

        if (!hash && !stayingInCreative) window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
}

export default ScrollToTop;
