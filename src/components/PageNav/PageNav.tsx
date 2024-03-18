import { PageNavItem } from "@/components/PageNav/PageNavItem/PageNavItem";
import { AppPage } from "@/exports/entities";

export const PageNav = () => {
    return (
        <div className={"flex flex-col gap-8"}>
            <PageNavItem page={AppPage.DETAILS}/>
            <PageNavItem page={AppPage.LIGHT_CONE}/>
            <PageNavItem page={AppPage.TRACES}/>
            <PageNavItem page={AppPage.RELICS}/>
            <PageNavItem page={AppPage.EIDOLONS}/>
        </div>
    );
};