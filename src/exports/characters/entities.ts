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