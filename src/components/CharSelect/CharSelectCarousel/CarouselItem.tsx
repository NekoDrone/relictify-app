import { CharacterId, getCharacterString, getCharacterStringHumanised } from "@/exports/characters/entities";
import { FC } from "react";
import Image from "next/image";

interface CarouselItemProps {
    charId: CharacterId
}

export const CarouselItem: FC<CarouselItemProps> = ({
    charId
}) => {
    const charSplashSrc = `/assets/char_icons/char_icon_${getCharacterString(charId)}.webp`
    return (
        <>
            <Image
                src={charSplashSrc}
                alt={getCharacterStringHumanised(charId)}
                width={100}
                height={100}
                className={"rounded-full"}
            />
        </>
    );
};