import { PageNavItem } from "@/components/PageNav/PageNavItem/PageNavItem";
import { AppPage } from "@/shared/entities";
import { FC } from "react";

interface NavBarProps {
    charId: number;
    highlighted: AppPage;
}

export const PageNav: FC<NavBarProps> = ({
    charId,
    highlighted,
}) => {
    return (
        <div className={"flex flex-col gap-8"}>
            <PageNavItem page={AppPage.DETAILS} charId={charId} currPage={highlighted}/>
            <PageNavItem page={AppPage.LIGHT_CONE} charId={charId} currPage={highlighted}/>
            <PageNavItem page={AppPage.TRACES} charId={charId} currPage={highlighted}/>
            <PageNavItem page={AppPage.RELICS} charId={charId} currPage={highlighted}/>
            <PageNavItem page={AppPage.EIDOLONS} charId={charId} currPage={highlighted}/>
        </div>
    );
};