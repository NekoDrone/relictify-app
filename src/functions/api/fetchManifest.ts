import { API_KEY, API_URL, ApiEndpoints } from "@/functions/api/shared";
import { Manifest, ManifestMetadata } from "@/shared/types";

export const fetchManifest = async () => {
    const { isOutdated, metadata } = await compareManifestMeta();
    const isManifestStored = !!localStorage.getItem("manifest");
    if (isOutdated || !isManifestStored) await fetchManifestsAndStore(metadata);
    return fetchManifestFromStorage();
};

const compareManifestMeta = async () => {
    const apiMeta = await fetchManifestMeta();
    const localMeta: ManifestMetadata = JSON.parse(
        localStorage.getItem("manifestMetadata") ?? "{}",
    );
    if (!localMeta.version) {
        localStorage.setItem("manifestMetadata", JSON.stringify(apiMeta));
        return { isOutdated: true, metadata: apiMeta };
    } else {
        const isOutdated =
            apiMeta.version > localMeta.version ||
            apiMeta.charsVersion > localMeta.charsVersion ||
            apiMeta.relicsVersion > localMeta.relicsVersion;

        return {
            isOutdated,
            metadata: isOutdated ? apiMeta : localMeta,
        };
    }
};

const fetchManifestMeta = async () => {
    const req = new Request(`${API_URL}/${ApiEndpoints.GET_MANIFEST_META}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    });

    const manifestMeta: ManifestMetadata = await (await fetch(req)).json();

    return manifestMeta;
};

const fetchManifestsAndStore = async (metadata: ManifestMetadata) => {
    const localMeta: ManifestMetadata = JSON.parse(
        localStorage.getItem("manifestMetadata") ?? "",
    );

    const isManifestStored = !!localStorage.getItem("manifest");

    if (
        !localMeta ||
        metadata.version > localMeta.version ||
        !isManifestStored
    ) {
        const manifest = await fetchAllManifests();
        localStorage.setItem("manifest", JSON.stringify(manifest));
    }

    if (metadata.charsVersion > localMeta.charsVersion) {
        // fetchCharactersManifest
    }

    if (metadata.relicsVersion > localMeta.relicsVersion) {
        // fetchRelicsManifest
    }
};

const fetchAllManifests = async () => {
    // TODO: Separate Character Manifest and Relics Manifest logic
    const req = new Request(`${API_URL}/${ApiEndpoints.GET_CHAR_MANIFEST}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    });

    return (await (await fetch(req)).json()) as Manifest;
};

const fetchManifestFromStorage = () => {
    return JSON.parse(
        localStorage.getItem("manifest") ?? "undefined",
    ) as Manifest;
};
