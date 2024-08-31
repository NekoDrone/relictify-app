import { CharPath, CombatElement } from "@/shared/entities";

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
