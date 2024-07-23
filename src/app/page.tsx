'use client'

import Link from "next/link";
import { Suspense, useEffect } from "react";
import { useManifestStore } from "@/utilities/stores/manifest";
import { humaniseElementEnum, humanisePathEnum } from "@/shared/entities";
import { Loading } from "@/components/Loading/Loading";

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
            <Suspense fallback={<Loading/>}>
                {characters ?
                    (characters.length &&
                        characters.map((character) => {
                            return <p key={character.id}>
                                {character.name} 
                                 | {character.rarity}* 
                                 | {humaniseElementEnum(character.element)} 
                                 | {humanisePathEnum(character.path)}</p>})) : <Loading/>}
            </Suspense>
            
        </div>
    );
}

export default LandingPage