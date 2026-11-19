export const allCategoriesFilter = "all" as const;
export const allYearsFilter = "all" as const;

export const creativeSortOptions = [
    { value: "newest", label: "Newest first" },
    { value: "oldest", label: "Oldest first" },
    { value: "alphabetical", label: "A\u2013Z" },
] as const;
export type CreativeSortOrder = (typeof creativeSortOptions)[number]["value"];

export const creativeViewOptions = [
    { value: "grouped", label: "By category" },
    { value: "grid", label: "Grid" },
    { value: "list", label: "List" },
] as const;
export type CreativeViewMode = (typeof creativeViewOptions)[number]["value"];
