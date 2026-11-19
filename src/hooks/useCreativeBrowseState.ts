import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import {
    allCategoriesFilter,
    allYearsFilter,
    creativeSortOptions,
    creativeViewOptions,
    type CreativeSortOrder,
    type CreativeViewMode,
} from "../data/creativeBrowse";
import { creativeCategories, type CreativeCategory } from "../types/creative";
import type { CreativeFilters } from "../utils/creative";

export interface CreativeBrowseState extends CreativeFilters {
    sort: CreativeSortOrder;
    view: CreativeViewMode;
}

type StateKey = keyof CreativeBrowseState;

const defaults: CreativeBrowseState = {
    query: "",
    category: allCategoriesFilter,
    skills: [],
    year: allYearsFilter,
    sort: "newest",
    view: "grouped",
};

const paramNames: Record<StateKey, string> = {
    query: "q",
    category: "category",
    skills: "skills",
    year: "year",
    sort: "sort",
    view: "view",
};

function pickOption<T extends string>(value: string | null, options: readonly { value: T }[], fallback: T): T {
    return options.find((option) => option.value === value)?.value ?? fallback;
}

function parseState(params: URLSearchParams): CreativeBrowseState {
    const categoryParam = params.get(paramNames.category);
    const yearParam = Number(params.get(paramNames.year));

    return {
        query: params.get(paramNames.query) ?? defaults.query,
        category: creativeCategories.includes(categoryParam as CreativeCategory)
            ? (categoryParam as CreativeCategory)
            : defaults.category,
        skills: params.get(paramNames.skills)?.split("|").filter(Boolean) ?? defaults.skills,
        year: Number.isInteger(yearParam) && yearParam > 0 ? yearParam : defaults.year,
        sort: pickOption(params.get(paramNames.sort), creativeSortOptions, defaults.sort),
        view: pickOption(params.get(paramNames.view), creativeViewOptions, defaults.view),
    };
}

function serializeState(state: CreativeBrowseState) {
    const params = new URLSearchParams();

    (Object.keys(paramNames) as StateKey[]).forEach((key) => {
        const value = state[key];
        const serialized = Array.isArray(value) ? value.join("|") : String(value);
        if (serialized !== "" && serialized !== String(defaults[key])) params.set(paramNames[key], serialized);
    });

    return params;
}

/**
 * Browse state (search, filters, sort, view). Local state is the source of truth so rapid changes never
 * overwrite each other; it is mirrored to the URL so views are shareable and survive modal navigation.
 */
function useCreativeBrowseState() {
    const [params, setParams] = useSearchParams();
    const [state, setState] = useState(() => parseState(params));

    const serialized = serializeState(state).toString();
    useEffect(() => {
        if (serialized !== params.toString()) setParams(new URLSearchParams(serialized), { replace: true });
    }, [serialized, params, setParams]);

    function update(changes: Partial<CreativeBrowseState>) {
        setState((current) => ({ ...current, ...changes }));
    }

    function clearFilters() {
        update({ query: "", category: allCategoriesFilter, skills: [], year: allYearsFilter });
    }

    return { state, update, clearFilters };
}

export default useCreativeBrowseState;
