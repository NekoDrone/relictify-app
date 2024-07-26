import { API_KEY, API_URL, ApiEndpoints } from "@/functions/api/shared";
import { Character, Manifest } from "@/shared/types";

const fetchManifestAndStore = async () => {
    console.log("Characters not found in localStorage, fetching...");

    const req = new Request(`${API_URL}/${ApiEndpoints.GET_CHAR_MANIFEST}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    });

    const manifest: Manifest = await (await fetch(req)).json();

    localStorage.setItem("manifest", JSON.stringify(manifest));
};

const fetchManifestFromStorage = () => {
    return JSON.parse(
        localStorage.getItem("manifest") ?? "undefined",
    ) as Manifest;
};

export const fetchManifest = async () => {
    const manifest = localStorage.getItem("manifest");
    if (manifest === null) await fetchManifestAndStore();
    return fetchManifestFromStorage();
};
