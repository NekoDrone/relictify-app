"use client";

import { CharReadout } from "@/components/CharReadout/CharReadout";
import { useManifest } from "@/utilities/providers/ManifestProvider";
import { PomPomLoading } from "@/components/Loading/PomPomLoading";
import Error from "next/error";

// TODO: Use this component when constructing a debug screen

export const CharList = () => {
    const { manifest, isPending, error } = useManifest();

    if (isPending || !manifest) return <PomPomLoading />;
    if (error) return <Error statusCode={500} />;

    const { characters } = manifest;
    return (
        <>
            {characters?.map((character) => (
                <CharReadout character={character} key={character.id} />
            ))}
        </>
    );
};
