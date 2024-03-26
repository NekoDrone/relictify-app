import { PageNav } from "@/components/PageNav/PageNav";
import { FC } from "react";
import { AppPage, CombatPath } from "@/exports/entities";
import { DetailsContent } from "@/components/Pages/DetailsContent/DetailsContent";
import { EidolonsContent } from "@/components/Pages/EidolonsContent/EidolonsContent";
import { LightConeContent } from "@/components/Pages/LightConeContent/LightConeContent";
import { RelicsContent } from "@/components/Pages/RelicsContent/RelicsContent";
import { TracesContent } from "@/components/Pages/TracesContent/TracesContent";
import { MissingContent } from "@/components/Pages/MissingContent/MissingContent";
import { CharSelectWrapper } from "@/components/CharSelect/CharSelectWrapper";
import { CharacterId, getCharacterStringHumanised } from "@/exports/characters/entities";
import PageInfo from "@/components/PageInfo/PageInfo";

interface PageWrapperProps {
    charId: number
    page: AppPage
}

// The reason we use a page wrapper component is to create a fixed width and height for the page content to render.
// We can achieve the same with a <div> element above each page, but this way fixes the content for all pages in case
// this needs to change in the future.
export const PageWrapper: FC<PageWrapperProps> = ({
    charId  ,
    page,
}) => {
    const characters = [CharacterId.BRONYA, CharacterId.SEELE]
    return (
        <>
            <div className={"flex p-12 pl-16"}>
                <div className={"w-1/3"}>
                    <PageInfo pageTitle={page} combatPath={CombatPath.THE_HUNT} activeChar={getCharacterStringHumanised(charId)}/>
                </div>
                <div className={"w-2/3 justify-center"}>
                    <CharSelectWrapper characters={characters}/>
                </div>
            </div>
            <div className={"flex pl-36 pr-14 gap-10"}>
                <PageNav charId={charId}/>
                { page == AppPage.DETAILS && <DetailsContent/> }
                { page == AppPage.EIDOLONS && <EidolonsContent/> }
                { page == AppPage.LIGHT_CONE && <LightConeContent/> }
                { page == AppPage.RELICS && <RelicsContent/> }
                { page == AppPage.TRACES && <TracesContent/> }
                { !page && <MissingContent/> }
            </div>
        </>
    );
};