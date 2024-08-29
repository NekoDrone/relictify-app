"use client";

import { EventHandler, FC, useCallback } from "react";

interface CharGetProps {
    id: number;
    handleGetChar: EventHandler<any>;
}

export const CharGet: FC<CharGetProps> = ({ id, handleGetChar }) => {
    return (
        <button
            className="justify-center bg-gold text-black rounded w-auto p-2"
            onClick={handleGetChar}
        >
            Get Character {id}
        </button>
    );
};
