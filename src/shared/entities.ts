export enum CombatPath {
    ABUNDANCE = "abundance",
    DESTRUCTION = "destruction",
    ERUDITION = "erudition",
    HARMONY = "harmony",
    PRESERVATION = "preservation",
    THE_HUNT = "the_hunt",
    NIHILITY = "nihility"
}

export enum CombatElement {
    LIGHTNING = "lightning",
    FIRE = "fire",
    ICE = "ice",
    PHYSICAL = "physical",
    WIND = "wind",
    QUANTUM = "quantum",
    IMAGINARY = "imaginary"
}

export const humanisePathEnum = (enumValue: CombatPath) => {
    // Lazy implementation, can definitely be better
    return enumValue == CombatPath.THE_HUNT ? "The Hunt" : enumValue.charAt(0).toUpperCase() + enumValue.slice(1);
}

export enum AppPage {
    DETAILS = "details",
    EIDOLONS = "eidolons",
    LIGHT_CONE = "light_cone",
    RELICS = "relics",
    TRACES = "traces",
}

export const humanisePageEnum = (enumValue: AppPage) => {
    // Lazy implementation, can definitely be better
    return enumValue == AppPage.LIGHT_CONE ? "Light Cone" : enumValue.charAt(0).toUpperCase() + enumValue.slice(1);
}