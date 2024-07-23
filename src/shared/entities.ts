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