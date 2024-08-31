"use client";

import { EventHandler, FC, useCallback } from "react";

interface CharGetProps {
    id: number;
    handleGetChar: EventHandler<any>;
}

export const CharGet: FC<CharGetProps> = ({ id, handleGetChar }) => {
    return (
        <button
            className="w-auto justify-center rounded bg-gold p-2 text-black"
            onClick={handleGetChar}
        >
            Get Character {id}
        </button>
    );
};
