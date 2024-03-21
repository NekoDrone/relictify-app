import Image from "next/image";
import { AppPage, humanisePageEnum } from "@/exports/entities";
import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface NavItemProps {
    page: AppPage
    charId: number
}

export const PageNavItem: FC<NavItemProps> = ({
    page,
    charId,
}) => {
    return (
         <Link className="flex items-center cursor-pointer" href={`/app/characters/${charId}/${page}`}>
            <Image
                src={`/assets/page_icons/page_${page}.webp`}
                alt="PageNavItem"
                width={48}
                height={43}
                className={"scale-50"}
            />
            <p className={"text-lg font-semibold p-1"}>{humanisePageEnum(page)}</p>
        </Link>
    );
};

function handleClick() {
    
}