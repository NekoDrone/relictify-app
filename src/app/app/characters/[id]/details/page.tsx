'use client'

import { FC } from "react";
import { useParams } from "next/navigation";
import { AppPage } from "@/shared/entities";
import { PageWrapper } from "@/components/Pages/PageWrapper";

const DetailsPage: FC = () => {
    const params = useParams<{ id: string }>()
    const id = parseInt(params.id, 10)
    const page = AppPage.DETAILS
    return (
        <PageWrapper charId={id} page={page}/>
    )
}

export default DetailsPage