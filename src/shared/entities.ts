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

export enum PageCategory {
    DETAILS = "DETAILS",
    LIGHT_CONE = "LIGHT_CONE",
    TRACES = "TRACES",
    RELICS = "RELICS",
    EIDOLONS = "EIDOLONS",
}

export const humanisePageCategoryEnum = (pages: PageCategory) => {
    const pageString = pages.toLowerCase();
    return pageString == "light_cone" ? "Light Cone" : pageString.charAt(0).toUpperCase() + pageString.slice(1);
}

export const flattenPageCategoryEnum = (pages: PageCategory) => {
    return pages.toLowerCase();
}

export enum RelicType {
    HEAD = "HEAD",
    HANDS = "HANDS",
    BODY = "BODY",
    FEET = "FEET",
    ROPE = "ROPE",
    SPHERE = "SPHERE",
}

export const humaniseRelicTypeEnum = (relicType: RelicType) => {
    const relicTypeString = relicType.toLowerCase();
    return relicTypeString.charAt(0).toUpperCase() + relicTypeString.slice(1);
}

export const flattenRelicTypeEnum = (relicType: RelicType) => {
    return relicType.toLowerCase();
}

export enum StatType {
    HP = "HP",
    ATK = "ATK",
    DEF = "DEF",
    SPD = "SPD",
    CRIT_RATE = "CRITRATE",
    CRIT_DMG = "CRITDMG",
    BREAK_EFFECT = "BREAKEFFECT",
    OUTGOING_HEALING = "OUTGOINGHEALINGBOOST",
    MAX_ENERGY="MAXENERGY",
    ENERGY_REGEN="ERR",
    EFFECT_HIT_RATE="EHR",
    EFFECT_RES="EFFECTRES",
    ELEMENT_BOOST="BOOST",
    ELEMENT_RES="RES",
}

export const humaniseStatTypeEnum = (statType: StatType) => {
    const statTypeString = statType.toLowerCase();
    return statTypeString.charAt(0).toUpperCase() + statTypeString.slice(1);
}

export const flattenStatTypeEnum = (statType: StatType) => {
    return statType.toLowerCase();
}

export const flattenStatTypeSecondary = (statType: StatType, element: CombatElement) => {
    return `${statType.toLowerCase()}_${element.toLowerCase()}`
}