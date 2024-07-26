import { API_KEY, API_URL, ApiEndpoints } from "@/functions/api/shared";
import { Character } from "@/shared/types";

const fetchManifestAndStore = async () => {
    console.log("Characters not found in localStorage, fetching...");

    const req = new Request(`${API_URL}/${ApiEndpoints.GET_CHARS}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    });

    const characters: Character[] = await (await fetch(req)).json();

    localStorage.setItem("characters", JSON.stringify(characters));

    return characters;
};

const fetchManifestFromStorage = () => {
    return JSON.parse(
        localStorage.getItem("characters") ?? "undefined",
    ) as Character[];
};

export const fetchManifest = async () => {
    const characters = localStorage.getItem("characters");
    if (characters === null) await fetchManifestAndStore();
    return {
        characters: fetchManifestFromStorage(),
    };
};
