"use client";

import React from "react";
import { IdLayoutParams } from "@/app/characters/layout";

const IdLayout = ({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: IdLayoutParams;
}>) => {
    // here should be the Page Navigation between details, traces, eidolons, etc.

    const id = parseInt(params.id);

    return (
        <>
            {children} layout {id}
        </>
    );
};

export default IdLayout;
