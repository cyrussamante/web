import type { ExperienceOrganization } from "../data/experience";

function getMostRecentRoleDate(organization: ExperienceOrganization) {
    return organization.roles.reduce(
        (mostRecent, role) =>
            role.sortDate > mostRecent ? role.sortDate : mostRecent,
        "",
    );
}

export function sortExperienceRoles(
    roles: ExperienceOrganization["roles"],
) {
    return [...roles].sort((first, second) =>
        second.sortDate.localeCompare(first.sortDate),
    );
}

export function sortExperienceOrganizations(
    organizations: readonly ExperienceOrganization[],
) {
    return [...organizations].sort((first, second) => {
        if (first.displayOrder !== undefined || second.displayOrder !== undefined) {
            const firstOrder = first.displayOrder ?? Number.MAX_SAFE_INTEGER;
            const secondOrder = second.displayOrder ?? Number.MAX_SAFE_INTEGER;
            if (firstOrder !== secondOrder) return firstOrder - secondOrder;
        }

        return getMostRecentRoleDate(second).localeCompare(
            getMostRecentRoleDate(first),
        );
    });
}
