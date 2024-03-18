import Image from "next/image";
import { AppPage, humanisePageEnum } from "@/exports/entities";
import { FC } from "react";

export interface NavItemProps {
    page: AppPage
}

export const PageNavItem: FC<NavItemProps> = ({
    page
}) => {
    return (
        <div className="flex items-center cursor-pointer" onClick={handleClick}>
            <Image
                src={`/assets/page_icons/page_${page}.webp`}
                alt="PageNavItem"
                width={48}
                height={43}
                className={"scale-50"}
            />
            <p className={"text-lg font-semibold p-1"}>{humanisePageEnum(page)}</p>
        </div>
    );
};

function handleClick() {
    
}