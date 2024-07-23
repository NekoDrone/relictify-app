'use client'

import Link from "next/link";
import { useEffect } from "react";
import { useManifestStore } from "@/utilities/stores/manifest";
import { humanisePathEnum } from "@/shared/entities";

const LandingPage = () => {
    
    const updateManifest = useManifestStore((state) => state.updateManifest);
    
    useEffect(() => {
        updateManifest()
    }, [updateManifest])
    
    const { characters } = useManifestStore((state) => state.manifest)
    
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-32">
            <h1 className="text-center p-4">Welcome to Relictify</h1>
            <Link href={"/app/characters/1/details"} replace>
                <button className="bg-white text-black m-0 rounded p-2">TEMP: To App</button>
            </Link>

            <h1 className="text-center p-4">Loaded Characters:</h1>
            {characters ? (characters.length && characters.map((character) => {return <p key={character.id}>{character.name} | {character.rarity}* | {character.element} | {humanisePathEnum(character.path)}</p>})) : ''}
        </div>
    );
}

export default LandingPage