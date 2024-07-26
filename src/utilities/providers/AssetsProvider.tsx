"use client";

import { useQuery } from "@tanstack/react-query";
import fetchAssets from "@/functions/api/fetchAssets";
import { createContext, useContext } from "react";

const initialContext: {
    assets: any;
    error: Error | null;
    isError: boolean;
    isPending: boolean;
} = {
    assets: undefined,
    error: null,
    isError: false,
    isPending: true,
};

const AssetsContext = createContext(initialContext);

export const AssetsProvider = ({ children }: any) => {
    const {
        data: assets,
        error,
        isError,
        isPending,
    } = useQuery({
        queryKey: ["assets"],
        queryFn: fetchAssets,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });

    return (
        <AssetsContext.Provider value={{ assets, error, isError, isPending }}>
            {children}
        </AssetsContext.Provider>
    );
};

export const useAssets = () => {
    return useContext(AssetsContext);
};
