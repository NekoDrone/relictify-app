import { CombatElement, CharPath } from "@/shared/entities";

export enum CharacterId {
    TRAILBLAZER,
    BRONYA,
    SEELE,
}

export const getCharacterString = (characterId: CharacterId): string => {
    return Object.values(characterStrings)[characterId];
}

export const getCharacterStringHumanised = (characterId: CharacterId): string => {
    return getCharacterString(characterId)
        .split("_")
        .map((v) => {
            return v.charAt(0).toUpperCase() + v.slice(1);
        })
        .join(" ")
}

enum characterStrings {
    TRAILBLAZER = "trailblazer",
    BRONYA = "bronya",
    SEELE = "seele"
}

export interface CharacterInfo {
    id: CharacterId
    rarity: number,
    name: string,
    element: CombatElement,
    path: CharPath,
    startingHp: number
    startingAtk: number,
    startingDef: number,
    startingSpd: number,
}

export function getCharById(id: number) {
    const jsonData = localStorage.getItem(id.toString())
    if(jsonData === null) {
        throw new Error(`Could not find character of id: ${id}`)
    }
    return JSON.parse(jsonData) as CharacterInfo
}