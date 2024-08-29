"use client";

import { FC } from "react";
import { redirect } from "next/navigation";

export interface IdParamsProps {
    params: {
        id: string;
    };
}

const IdPage: FC<IdParamsProps> = ({ params }) => {
    redirect(`/characters/${params.id}/details`);
};

export default IdPage;
