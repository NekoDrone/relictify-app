"use client";

import { Character } from "@/shared/types";

export const identifierKey = "character";

export interface LocalStorageCharacterResult {
    character: Character | null;
    isExists: boolean;
}

export const findLocalStorageCharacters = (id: number) => {
    const key = `${identifierKey}:${id}`;
    const charJson = localStorage.getItem(key);
    if (!charJson) return { character: null, isExists: false };
    else
        return {
            character: JSON.parse(charJson) as Character,
            isExists: true,
        } as LocalStorageCharacterResult;
};
