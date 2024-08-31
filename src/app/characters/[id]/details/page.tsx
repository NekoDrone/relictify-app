"use client";

import { FC } from "react";
import { IdParamsProps } from "@/app/characters/[id]/page";
import { findLocalStorageCharacters } from "@/functions/storage/local/characters";

const DetailsPage: FC<IdParamsProps> = ({ params }) => {
    const id = parseInt(params.id);

    const { character } = findLocalStorageCharacters(id);

    return <>details :3 {id}</>;
};

export default DetailsPage;
