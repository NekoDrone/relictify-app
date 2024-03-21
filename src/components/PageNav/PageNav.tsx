import { PageNavItem } from "@/components/PageNav/PageNavItem/PageNavItem";
import { AppPage } from "@/exports/entities";
import { FC } from "react";

interface NavBarProps {
    charId: number
}

export const PageNav: FC<NavBarProps> = ({
    charId
}) => {
    return (
        <div className={"flex flex-col gap-8"}>
            <PageNavItem page={AppPage.DETAILS} charId={charId}/>
            <PageNavItem page={AppPage.LIGHT_CONE} charId={charId}/>
            <PageNavItem page={AppPage.TRACES} charId={charId}/>
            <PageNavItem page={AppPage.RELICS} charId={charId}/>
            <PageNavItem page={AppPage.EIDOLONS} charId={charId}/>
        </div>
    );
};