"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchManifest } from "@/functions/api/fetchManifest";
import { createContext, useContext } from "react";
import { ApiCharacter, Manifest } from "@/shared/types";

const initialContext: {
    manifestQuery: Manifest | undefined;
    error: Error | null;
    isError: boolean;
    isPending: boolean;
} = {
    manifestQuery: undefined,
    error: null,
    isError: false,
    isPending: true,
};

const ManifestContext = createContext(initialContext);

export const ManifestProvider = ({ children }: any) => {
    const {
        data: manifestQuery,
        error,
        isError,
        isPending,
    } = useQuery({
        queryKey: ["manifest"],
        queryFn: fetchManifest,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });

    return (
        <ManifestContext.Provider
            value={{ manifestQuery, error, isError, isPending }}
        >
            {children}
        </ManifestContext.Provider>
    );
};

export const useManifest = () => {
    return useContext(ManifestContext);
};
