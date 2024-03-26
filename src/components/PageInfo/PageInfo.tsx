import Image from "next/image";
import { AppPage, CombatPath, humanisePageEnum, humanisePathEnum } from "@/exports/entities";
import { FC } from "react";

export interface PageInfoProps {
    pageTitle: AppPage,
    combatPath: CombatPath
    activeChar: string
}

const PageInfo: FC<PageInfoProps> = ({
    pageTitle,
    combatPath,
    activeChar,
}) => {
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
                <p className="text-lg text-gold font-medium">{humanisePageEnum(pageTitle)}</p>
                <div className={"flex"}>
                    <Image
                        src={`/assets/combat_paths/path_${combatPath}.webp`}
                        alt={"Path Icon"}
                        width={24}
                        height={16}
                        className={"p-1"}
                    />
                    <p className="text-xl font-medium">{humanisePathEnum(combatPath)} / {activeChar}</p>
                </div>
            </div>
        </div>
    );
};

export default PageInfo