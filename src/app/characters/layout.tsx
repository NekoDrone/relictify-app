"use client";

import React from "react";

export interface IdLayoutParams {
    id: string;
}

const CharLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    // here should be the Selection Carousel (at the top of the screen)
    // it should also give the page information

    return <>{children}</>;
};

export default CharLayout;
