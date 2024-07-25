"use client";

import {
    CharPath,
    CombatElement,
    flattenElementEnum,
    flattenPageCategoryEnum,
    flattenPathEnum,
    flattenRelicTypeEnum,
    flattenStatTypeEnum,
    flattenStatTypeSecondary,
    PageCategory,
    RelicType,
    StatType,
} from "@/shared/entities";
import { useAssets } from "@/utilities/providers/AssetsProvider";

export enum AssetFolders {
    ELEMENTS = "character_elements",
    PATHS = "combat_paths",
    GENERAL = "general",
    PAGES = "page_icons",
    RELIC_TYPES = "relic_types",
    SPLASHES = "splashes",
    STATS = "stats",
}

const assetKeyBase = "assets";

export function useElementIcon(element: CombatElement) {
    const { assets: assetStore, isPending, error } = useAssets();
    if (isPending) return { assets: undefined, pending: true, error: null };
    if (error) return { assets: undefined, pending: false, error };
    const assetString = flattenElementEnum(element);
    const objectKey = `${assetKeyBase}/${AssetFolders.ELEMENTS}/element_${assetString}.webp`;
    return { assets: assetStore[objectKey], pending: false, error: null };
}

export function usePathIcon(path: CharPath) {
    const { assets: assetStore, isPending, error } = useAssets();
    if (isPending) return { assets: undefined, pending: true, error: null };
    if (error) return { assets: undefined, pending: false, error };
    const assetString = flattenPathEnum(path);
    const objectKey = `${assetKeyBase}/${AssetFolders.PATHS}/path_${assetString}.webp`;
    return { assets: assetStore[objectKey], pending: false, error: null };
}

export function useGeneralIcon(assetString: string) {
    const { assets: assetStore, isPending, error } = useAssets();
    if (isPending) return { assets: undefined, pending: true, error: null };
    if (error) return { assets: undefined, pending: false, error };
    const objectKey = `${assetKeyBase}/${AssetFolders.GENERAL}/general_${assetString}.webp`;
    return { assets: assetStore[objectKey], pending: false, error: null };
}

export function usePageIcon(page: PageCategory) {
    const { assets: assetStore, isPending, error } = useAssets();
    if (isPending) return { assets: undefined, pending: true, error: null };
    if (error) return { assets: undefined, pending: false, error };
    const assetString = flattenPageCategoryEnum(page);
    const objectKey = `${assetKeyBase}/${AssetFolders.PAGES}/page_${assetString}.webp`;
    return { assets: assetStore[objectKey], pending: false, error: null };
}

export function useRelicTypeIcon(relicType: RelicType) {
    const { assets: assetStore, isPending, error } = useAssets();
    if (isPending) return { assets: undefined, pending: true, error: null };
    if (error) return { assets: undefined, pending: false, error };
    const assetString = flattenRelicTypeEnum(relicType);
    const objectKey = `${assetKeyBase}/${AssetFolders.RELIC_TYPES}/relic_${assetString}.webp`;
    return { assets: assetStore[objectKey], pending: false, error: null };
}

export function useCharSplash(charName: string) {
    const { assets: assetStore, isPending, error } = useAssets();
    if (isPending) return { assets: undefined, pending: true, error: null };
    if (error) return { assets: undefined, pending: false, error };
    const objectKey = `${assetKeyBase}/${AssetFolders.SPLASHES}/${charName}.webp`;
    return { assets: assetStore[objectKey], pending: false, error: null };
}

/**
 * Get Stat Icon from non-boost or non-res stat type.
 * Use useStatIconSecondary as required instead of this if boost or res is needed.
 * @param statType - Cannot be BOOST or RES. Can be EFFECT_RES
 */
export function useStatIcon(statType: StatType) {
    const { assets: assetStore, isPending, error } = useAssets();
    if (isPending) return { assets: undefined, pending: true, error: null };
    if (error) return { assets: undefined, pending: false, error };
    const assetString = flattenStatTypeEnum(statType);
    const objectKey = `${assetKeyBase}/${AssetFolders.STATS}/stat_${assetString}.webp`;
    return { assets: assetStore[objectKey], pending: false, error: null };
}

/**
 * Get Stat Icon from boost or res stat type with associated element
 * Use useStatIcon as required instead of this if not boost or res secondaries.
 * @param statType - Must be BOOST or RES. Cannot be EFFECT_RES
 * @param element - Any CombatElement
 */
export function useStatIconSecondary(
    statType: StatType,
    element: CombatElement,
) {
    const { assets: assetStore, isPending, error } = useAssets();
    if (isPending) return { assets: undefined, pending: true, error: null };
    if (error) return { assets: undefined, pending: false, error };
    const assetString = flattenStatTypeSecondary(statType, element);
    const objectKey = `${assetKeyBase}/${AssetFolders.RELIC_TYPES}/stat_${assetString}.webp`;
    return { assets: assetStore[objectKey], pending: false, error: null };
}
