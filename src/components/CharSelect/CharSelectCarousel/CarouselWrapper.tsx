import { CarouselItem } from "@/components/CharSelect/CharSelectCarousel/CarouselItem";
import { CharacterId } from "@/exports/characters/entities";
import { FC } from "react";

export interface CarouselProps {
    characters: CharacterId[]
}

export const CarouselWrapper: FC<CarouselProps> = ({
    characters,    
}) => {
    return (
        <div className={"flex gap-4"}>
            {characters.map((char) => {
                return (<CarouselItem charId={char} key={char}/>)
            })}
        </div>
    )
};