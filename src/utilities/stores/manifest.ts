import { create } from "zustand";
import { getManifest } from "@/functions/api/getManifest";
import { MetadataRoute } from "next";
import { Character } from "@/shared/types";

export interface ManifestItems {
    characters?: Character[]
}

export interface ManifestState {
    manifest: ManifestItems;
    updateManifest: () => void;
}

export const useManifestStore = create<ManifestState>((set) => ({
    manifest: {},
    updateManifest: async () => set({ manifest: await getManifest() })
}))