import { CharPath, CombatElement, RelicType } from "@/shared/entities";

export interface ParamsProps {
    params: {
        id: string;
    };
}

export interface ApiCharacter {
    id: number;
    rarity: 4 | 5;
    name: string;
    element: CombatElement;
    path: CharPath;
    base_hp_80: number;
    base_atk_80: number;
    base_def_80: number;
    base_spd: number;
}

export interface LocalCharacter extends ApiCharacter {
    relic: Relic;
}

export interface Relic {
    id: number;
    type: RelicType;
    set: string;
}

export type SubStat = {
    type: StatType;
    value: number;
    enhancementCount: number;
};

export type MainStat = {
    type: StatType;
    value: number;
};

export enum StatType {}

export interface Manifest {
    manifest: number[]; // array of numbers of valid character IDs.
    version: number;
    lastUpdated: Date;
}

export interface ManifestMetadata {
    version: number;
    charsVersion: number;
    relicsVersion: number;
    lastUpdated: Date;
}
