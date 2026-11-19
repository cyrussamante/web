import { useEffect, useRef, useState } from "react";

/** Becomes true (and stays true) once the referenced element is near the viewport. */
function useInView<T extends Element>(rootMargin = "200px") {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(
        () => typeof window === "undefined" || !("IntersectionObserver" in window),
    );

    useEffect(() => {
        if (inView) return;

        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin },
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [inView, rootMargin]);

    return [ref, inView] as const;
}

export default useInView;
