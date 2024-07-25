"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchManifest } from "@/functions/api/fetchManifest";
import { createContext, useContext } from "react";
import { Character } from "@/shared/types";

interface ManifestItems {
    characters: Character[];
}

const initialContext: {
    manifest: ManifestItems | undefined;
    error: Error | null;
    isError: boolean;
    isPending: boolean;
} = {
    manifest: undefined,
    error: null,
    isError: false,
    isPending: true,
};

const ManifestContext = createContext(initialContext);

export const ManifestProvider = ({ children }: any) => {
    const {
        data: manifest,
        error,
        isError,
        isPending,
    } = useQuery({
        queryKey: ["manifest"],
        queryFn: fetchManifest,
    });

    return (
        <ManifestContext.Provider
            value={{ manifest, error, isError, isPending }}
        >
            {children}
        </ManifestContext.Provider>
    );
};

export const useManifest = () => {
    return useContext(ManifestContext);
};
