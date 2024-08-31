"use client";

import { ApiCharacter } from "@/shared/types";

export const identifierKey = "character";

export interface LocalStorageCharacterResult {
    character: ApiCharacter | null;
    isExists: boolean;
}

export const findLocalStorageCharacters = (id: number) => {
    const key = `${identifierKey}:${id}`;
    const charJson = localStorage.getItem(key);
    if (!charJson) return { character: null, isExists: false };
    else
        return {
            character: JSON.parse(charJson) as ApiCharacter,
            isExists: true,
        } as LocalStorageCharacterResult;
};
