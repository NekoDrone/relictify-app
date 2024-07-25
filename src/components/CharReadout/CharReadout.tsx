"use client";

import Image from "next/image";
import { useElementIcon } from "@/functions/selectors/assets";
import { humanisePathEnum } from "@/shared/entities";
import { FC } from "react";
import { Character } from "@/shared/types";
import Error from "next/error";

// TODO: Use this component when constructing a debug screen

interface CharReadoutProps {
    character: Character;
}

export const CharReadout: FC<CharReadoutProps> = ({ character }) => {
    const {
        assets: elementIconUrl,
        pending,
        error,
    } = useElementIcon(character.element);

    if (pending) return <></>;

    if (error) return <Error statusCode={500} />;

    return (
        <span key={character.id} className={"w-auto"}>
            {character.name}| {character.rarity}* |{" "}
            <Image
                src={elementIconUrl}
                alt={character.element}
                width={50}
                height={50}
            />
            | {humanisePathEnum(character.path)}
        </span>
    );
};
