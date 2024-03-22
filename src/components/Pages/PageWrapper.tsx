import { PageNav } from "@/components/PageNav/PageNav";
import { AppPage } from "@/exports/entities";
import { FC } from "react";
import { CarouselItem } from "@/components/CharSelect/CharSelectCarousel/CarouselItem";
import { CharacterId } from "@/exports/characters/entities";

interface PageWrapperProps {
    page: AppPage,
    charId: CharacterId,
}

export const PageWrapper: FC<PageWrapperProps> = ({
    page,
    charId
}) => {
    return (
        <>
            <CarouselItem/>
            <PageNav charId={charId}/>
            <div>{page}</div>
        </>
    );
}
