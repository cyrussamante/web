import { useEffect, useRef } from "react";
import {
    allCategoriesFilter,
    allYearsFilter,
    creativeSortOptions,
    creativeViewOptions,
    type CreativeSortOrder,
} from "../../data/creativeBrowse";
import { creativeCategoryDetails } from "../../data/creativeProjects";
import type { CreativeBrowseState } from "../../hooks/useCreativeBrowseState";
import { creativeCategories } from "../../types/creative";

interface CreativeToolbarProps {
    state: CreativeBrowseState;
    onChange: (changes: Partial<CreativeBrowseState>) => void;
    onClear: () => void;
    hasFilters: boolean;
    categoryCounts: Record<string, number>;
    skillOptions: readonly { skill: string; count: number }[];
    yearOptions: readonly number[];
    resultCount: number;
    totalCount: number;
}

const focusClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const selectClass = `w-full cursor-pointer appearance-none rounded-md border border-border bg-surface py-1.5 pl-2.5 pr-9 text-xs text-foreground theme-transition ${focusClass}`;

function SelectChevron() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary theme-transition"
        >
            <path d="m4 6 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
    );
}

function CreativeToolbar({
    state,
    onChange,
    onClear,
    hasFilters,
    categoryCounts,
    skillOptions,
    yearOptions,
    resultCount,
    totalCount,
}: CreativeToolbarProps) {
    const searchRef = useRef<HTMLInputElement>(null);

    // Press "/" anywhere on the page to jump to search.
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            const target = event.target;
            const isTyping =
                target instanceof Element && target.closest("input, textarea, select, [contenteditable='true']");
            if (event.key !== "/" || isTyping || event.metaKey || event.ctrlKey || event.altKey) return;

            event.preventDefault();
            searchRef.current?.focus();
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    function toggleSkill(skill: string) {
        const skills = state.skills.includes(skill)
            ? state.skills.filter((selected) => selected !== skill)
            : [...state.skills, skill];
        onChange({ skills });
    }

    const categoryTabs = [
        { value: allCategoriesFilter, label: "All", count: totalCount },
        ...creativeCategories.map((category) => ({
            value: category,
            label: creativeCategoryDetails[category].label,
            count: categoryCounts[category] ?? 0,
        })),
    ];

    return (
        <div role="search" aria-label="Browse creative projects" className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
                <div className="relative min-w-60 flex-1">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                    >
                        <circle cx="9" cy="9" r="5.5" />
                        <path d="m13.5 13.5 3.5 3.5" />
                    </svg>
                    <input
                        ref={searchRef}
                        type="search"
                        value={state.query}
                        onChange={(event) => onChange({ query: event.target.value })}
                        onKeyDown={(event) => {
                            if (event.key === "Escape" && state.query) {
                                event.stopPropagation();
                                onChange({ query: "" });
                            }
                        }}
                        placeholder="Search projects, roles, or dates"
                        aria-label="Search creative projects"
                        aria-keyshortcuts="/"
                        className={`w-full rounded-lg border border-border bg-surface py-2.5 pl-9 pr-3 text-sm text-foreground placeholder:text-muted theme-transition ${focusClass}`}
                    />
                </div>

                <label className="flex items-center gap-2 text-xs text-secondary theme-transition">
                    <span>Sort by</span>
                    <span className="relative inline-flex w-36">
                        <select
                            value={state.sort}
                            onChange={(event) => onChange({ sort: event.target.value as CreativeSortOrder })}
                            className={selectClass}
                        >
                            {creativeSortOptions.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <SelectChevron />
                    </span>
                </label>

                <div role="group" aria-label="Layout" className="inline-flex overflow-hidden rounded-md border border-border theme-transition">
                    {creativeViewOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            aria-pressed={state.view === option.value}
                            onClick={() => onChange({ view: option.value })}
                            className={`cursor-pointer px-3 py-1.5 text-xs font-medium theme-transition ${focusClass} focus-visible:-outline-offset-2 ${
                                state.view === option.value
                                    ? "bg-accent text-page"
                                    : "bg-surface text-secondary hover:text-accent"
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-x-6 gap-y-1 border-b border-border theme-transition">
                {categoryTabs.map((tab) => {
                    const isActive = state.category === tab.value;
                    return (
                        <button
                            key={tab.value}
                            type="button"
                            aria-pressed={isActive}
                            onClick={() => onChange({ category: tab.value })}
                            className={`relative cursor-pointer py-3 text-xs font-medium theme-transition ${focusClass} ${
                                isActive ? "text-accent" : "text-secondary hover:text-foreground"
                            }`}
                        >
                            {tab.label}
                            <span className="ml-1.5 tabular-nums text-muted">{tab.count}</span>
                            {isActive && <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" />}
                        </button>
                    );
                })}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                <div role="group" aria-label="Filter by skill" className="flex flex-1 flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-muted">Skills</span>
                    {skillOptions.map(({ skill, count }) => {
                        const isActive = state.skills.includes(skill);
                        return (
                            <button
                                key={skill}
                                type="button"
                                aria-pressed={isActive}
                                onClick={() => toggleSkill(skill)}
                                className={`cursor-pointer rounded-full border px-2.5 py-1 text-[11px] theme-transition ${focusClass} ${
                                    isActive
                                        ? "border-accent bg-accent text-page"
                                        : "border-border bg-page text-secondary hover:border-accent hover:text-accent"
                                }`}
                            >
                                {skill} <span className={isActive ? "opacity-80" : "text-muted"}>{count}</span>
                            </button>
                        );
                    })}
                </div>
                {yearOptions.length > 1 && (
                    <label className="flex items-center gap-2 text-xs text-secondary theme-transition">
                        <span>Year</span>
                        <span className="relative inline-flex w-28">
                            <select
                                value={String(state.year)}
                                onChange={(event) =>
                                    onChange({ year: event.target.value === allYearsFilter ? allYearsFilter : Number(event.target.value) })
                                }
                                className={selectClass}
                            >
                                <option value={allYearsFilter}>All years</option>
                                {yearOptions.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                            <SelectChevron />
                        </span>
                    </label>
                )}
            </div>

            <div className="flex items-center justify-between gap-4 text-xs text-secondary theme-transition">
                <p aria-live="polite">
                    Showing <span className="font-semibold text-foreground">{resultCount}</span> of {totalCount}{" "}
                    {totalCount === 1 ? "project" : "projects"}
                </p>
                {hasFilters && (
                    <button
                        type="button"
                        onClick={onClear}
                        className={`cursor-pointer font-medium text-accent underline-offset-4 theme-transition hover:text-accent-hover hover:underline ${focusClass}`}
                    >
                        Clear filters
                    </button>
                )}
            </div>
        </div>
    );
}

export default CreativeToolbar;
