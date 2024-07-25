import { API_KEY, API_URL, ApiEndpoints } from "@/functions/api/shared";

const fetchCharactersManifest = async () => {
    const req = new Request(`${API_URL}/${ApiEndpoints.GET_CHARS}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    });
    return (await fetch(req)).json();
};

export const fetchManifest = async () => {
    return {
        characters: await fetchCharactersManifest(),
    };
};
