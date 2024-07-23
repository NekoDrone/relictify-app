import { create } from "zustand";
import { getManifest } from "@/functions/api/getManifest";
import { MetadataRoute } from "next";

export interface ManifestItems {
    characters?: any
}

export interface ManifestState {
    manifest: ManifestItems;
    updateManifest: () => void;
}

const useManifestStore = create<ManifestState>((set) => ({
    manifest: {},
    updateManifest: async () => set({ manifest: await getManifest() })
}))