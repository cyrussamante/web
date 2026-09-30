import type { ReactNode } from "react";

interface SectionLabelProps {
    children: ReactNode;
}

function SectionLabel({ children }: SectionLabelProps) {
    return (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent theme-transition">
            {children}
        </p>
    );
}

export default SectionLabel;
