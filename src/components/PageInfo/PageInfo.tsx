import Image from "next/image";
import {
    humanisePageCategoryEnum,
    humanisePathEnum,
    PageCategory,
} from "@/shared/entities";
import { FC } from "react";
import { CharacterInfo } from "@/shared/characters/entities";

export interface PageInfoProps {
    pageTitle: PageCategory;
    activeChar: CharacterInfo;
}

const PageInfo: FC<PageInfoProps> = ({ pageTitle, activeChar }) => {
    return (
        <div className={"flex items-center gap-2"}>
            <Image
                src={"/assets/general/character_generic.webp"}
                alt={"Character Info Icon"}
                width={55}
                height={55}
                className={"gold-filter"}
            />
            <div>
                <p className="text-lg font-medium text-gold">
                    {humanisePageCategoryEnum(pageTitle)}
                </p>
                <div className={"flex"}>
                    <Image
                        src={`/assets/combat_paths/path_${activeChar.path}.webp`}
                        alt={"Path Icon"}
                        width={24}
                        height={16}
                        className={"p-1"}
                    />
                    <p className="text-xl font-medium">
                        {humanisePathEnum(activeChar.path)} / {activeChar.name}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PageInfo;
