export enum CombatPath {
    ABUNDANCE = "abundance",
    DESTRUCTION = "destruction",
    ERUDITION = "erudition",
    HARMONY = "harmony",
    PRESERVATION = "preservation",
    THE_HUNT = "the_hunt",
}

export const humanisePathEnum = (enumValue: CombatPath) => {
    // Lazy implementation, can definitely be better
    return enumValue == CombatPath.THE_HUNT ? "The Hunt" : enumValue.charAt(0).toUpperCase() + enumValue.slice(1);
}