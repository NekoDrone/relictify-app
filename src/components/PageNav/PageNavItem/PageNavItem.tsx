import Image from "next/image";
import { AppPage, humanisePageEnum } from "@/shared/entities";
import { FC } from "react";
import Link from "next/link";

export interface NavItemProps {
    page: AppPage;
    charId: number;
    currPage: AppPage;
}

export const PageNavItem: FC<NavItemProps> = ({ page, charId, currPage }) => {
    const highlighted = currPage == page;
    return (
        <Link
            className="flex cursor-pointer items-center"
            href={`/app/characters/${charId}/${page}`}
            replace
        >
            <Image
                src={`/assets/page_icons/page_${page}.webp`}
                alt="PageNavItem"
                width={48}
                height={43}
                className={`scale-50 ${highlighted && "gold-filter"}`}
            />
            <p
                className={`p-1 text-lg font-semibold ${highlighted && "text-gold"}`}
            >
                {humanisePageEnum(page)}
            </p>
        </Link>
    );
};

function handleClick() {}
