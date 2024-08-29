"use client";

import Link from "next/link";
import { Suspense } from "react";
import { PageCategory } from "@/shared/entities";
import { PomPomLoading } from "@/components/Loading/PomPomLoading";
import Image from "next/image";
import { usePageIcon } from "@/functions/selectors/assets";
import Error from "next/error";
import { CharList } from "@/components/Debug";

const LandingPage = () => {
    const {
        assets: relictifyLogoUrl,
        pending,
        error,
    } = usePageIcon(PageCategory.RELICS);

    if (pending) return <PomPomLoading />;
    if (error) return <Error statusCode={500} />;

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-32">
            <h1 className="text-center p-4">Welcome to Relictify</h1>
            <Suspense>
                <Image
                    src={relictifyLogoUrl}
                    alt={"Relictify Logo"}
                    width={0}
                    height={0}
                    className={"w-auto h-auto"}
                />
            </Suspense>
            <Link href={"/characters/1/details"} replace>
                <button className="bg-white text-black m-0 rounded p-2">
                    TEMP: To App
                </button>
            </Link>

            <h1 className="text-center p-4">Loaded Characters:</h1>
            <Suspense fallback={<PomPomLoading />}>
                <CharList />
            </Suspense>
        </div>
    );
};

export default LandingPage;
