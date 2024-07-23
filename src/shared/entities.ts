export enum CharPath {
    ABUNDANCE = "ABUNDANCE",
    DESTRUCTION = "DESTRUCTION",
    ERUDITION = "ERUDITION",
    HARMONY = "HARMONY",
    PRESERVATION = "PRESERVATION",
    HUNT = "HUNT",
    NIHILITY = "NIHILITY"
}

export enum CombatElement {
    LIGHTNING = "LIGHTNING",
    FIRE = "FIRE",
    ICE = "ICE",
    PHYSICAL = "PHYSICAL",
    WIND = "WIND",
    QUANTUM = "QUANTUM",
    IMAGINARY = "IMAGINARY"
}

export const humanisePathEnum = (enumValue: CharPath) => {
    const pathString = enumValue.toLowerCase();
    return pathString == "hunt" ? "The Hunt" : pathString.charAt(0).toUpperCase() + pathString.slice(1);
}

export const flattenPathEnum = (enumValue: CharPath) => {
    return enumValue.toLowerCase();
}

export const humaniseElementEnum = (enumValue: CombatElement) => {
    const elementString = enumValue.toLowerCase();
    return elementString.charAt(0).toUpperCase() + elementString.slice(1);
}

export const flattenElementEnum = (enumValue: CombatElement) => {
    return enumValue.toLowerCase();
}

export enum PageCategories {
    DETAILS = "DETAILS",
    LIGHT_CONE = "LIGHT_CONE",
    TRACES = "TRACES",
    RELICS = "RELICS",
    EIDOLONS = "EIDOLONS",
}

export const humanisePageCategories = (pages: PageCategories) => {
    const pageString = pages.toLowerCase();
    return pageString == "light_cone" ? "Light Cone" : pageString.charAt(0).toUpperCase() + pageString.slice(1);
}

export const flattenPageCategories = (pages: PageCategories) => {
    return pages.toLowerCase();
}