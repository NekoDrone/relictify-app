"use client";

import { Suspense } from "react";
import { PageCategory } from "@/shared/entities";
import { PomPomLoading } from "@/components/Loading/PomPomLoading";
import Image from "next/image";
import { usePageIcon } from "@/functions/selectors/assets";
import Error from "next/error";
import { CharList } from "@/components/Debug";

const DebugPage = () => {
    const {
        assets: relictifyLogoUrl,
        pending,
        error,
    } = usePageIcon(PageCategory.RELICS);

    if (pending) return <PomPomLoading />;
    if (error) return <Error statusCode={500} />;

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-2 p-32">
            <h1 className="p-4 text-center text-red-400">Relictify DEBUG</h1>
            <Suspense>
                <Image
                    src={relictifyLogoUrl}
                    alt={"Relictify Logo"}
                    width={0}
                    height={0}
                    className={"h-auto w-auto"}
                />
            </Suspense>
            <h1 className="p-4 text-center">Loaded Characters:</h1>
            <Suspense fallback={<PomPomLoading />}>
                Character List:
                <CharList />
            </Suspense>
        </div>
    );
};

export default DebugPage;
