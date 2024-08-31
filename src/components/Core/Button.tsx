"use client";

import { EventHandler, FC, useCallback } from "react";

interface ButtonProps {
    label: string;
    handleClick: EventHandler<any>;
}

export const Button: FC<ButtonProps> = ({ label, handleClick }) => {
    return (
        <button
            className="w-auto justify-center rounded bg-gold p-2 text-black"
            onClick={handleClick}
        >
            {label}
        </button>
    );
};
