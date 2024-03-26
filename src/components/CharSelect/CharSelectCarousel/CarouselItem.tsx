import { CharacterId, getCharacterString, getCharacterStringHumanised } from "@/exports/characters/entities";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CarouselItemProps {
    charId: CharacterId
}

export const CarouselItem: FC<CarouselItemProps> = ({
    charId
}) => {
    const charSplashSrc = `/assets/char_icons/char_icon_${getCharacterString(charId)}.webp`
    const router = useRouter()
    
    return (
        <Link href={`/app/characters/${charId}/details`} replace>
            <Image
                src={charSplashSrc}
                alt={getCharacterStringHumanised(charId)}
                width={80}
                height={80}
                className={"rounded-full"}
            />
        </Link>
    );
};