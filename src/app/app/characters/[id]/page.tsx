'use client'

import { FC } from "react";
import { ParamsProps } from "@/shared/types";
import { redirect } from "next/navigation";

const CharBasePage: FC<ParamsProps> = ({
    params
}) => {
    redirect(`/app/characters/${params.id}/details`, )
}

export default CharBasePage