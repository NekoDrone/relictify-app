"use client";

import { CharReadout } from "@/components/CharReadout/CharReadout";
import { useManifest } from "@/utilities/providers/ManifestProvider";
import { PomPomLoading } from "@/components/Loading/PomPomLoading";
import Error from "next/error";

// TODO: Use this component when constructing a debug screen

export const CharList = () => {
    const { manifestQuery, isPending, error } = useManifest();

    if (isPending || !manifestQuery) return <PomPomLoading />;
    if (error) return <Error statusCode={500} />;

    const { manifest } = manifestQuery;
    return <>{manifest?.map((id) => <p key={id}>{id}</p>)}</>;
};
