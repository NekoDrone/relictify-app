"use client";

import { EventHandler, FC, useCallback } from "react";

interface ButtonProps {
    label: string;
    handleClick: EventHandler<any>;
}

export const CharGet: FC<ButtonProps> = ({ label, handleClick }) => {
    return (
        <button
            className="justify-center bg-gold text-black rounded w-auto p-2"
            onClick={handleClick}
        >
            {label}
        </button>
    );
};
