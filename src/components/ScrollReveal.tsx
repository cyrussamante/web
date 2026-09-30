import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
}

function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(
        () =>
            typeof window === "undefined" ||
            !("IntersectionObserver" in window) ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );

    useEffect(() => {
        if (isVisible) return;

        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { rootMargin: "0px 0px -40px 0px", threshold: 0.1 },
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [isVisible]);

    return (
        <div
            ref={elementRef}
            className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`}
        >
            {children}
        </div>
    );
}

export default ScrollReveal;
