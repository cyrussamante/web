/**
 * Assembles the contact email address from separate parts at runtime rather
 * than a single literal string, to make it harder for basic bundle/DOM
 * scrapers to harvest the address via a simple regex match.
 */
function getContactEmail(): string {
    const user = ["c", "o", "n", "t", "a", "c", "t"].join("");
    const domain = ["cyrussamante", "com"].join(".");
    return `${user}@${domain}`;
}

export function getContactEmailHref(): string {
    return `mailto:${getContactEmail()}`;
}

export function getContactEmailDisplay(): string {
    return getContactEmail();
}
