import { CarouselWrapper } from "@/components/CharSelect/CharSelectCarousel/CarouselWrapper";
import { CharacterId } from "@/exports/characters/entities";
import { FC } from "react";

export interface CharSelectProps {
    characters: CharacterId[]
}

export const CharSelectWrapper: FC<CharSelectProps> = ({
    characters    
}) => {
    return (
        <div className={"flex justify-center"}>
            <CarouselWrapper characters={characters}/>
        </div>
    );
};