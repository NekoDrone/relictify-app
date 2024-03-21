'use client'

import { FC } from "react";
import { redirect, useParams } from "next/navigation";

const CharBasePage: FC = () => {
    const params = useParams<{ id: string }>()
    redirect(`/app/characters/${params.id}/details`, )
}

export default CharBasePage