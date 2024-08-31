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
            <h1 className="p-4 text-center">Welcome to Relictify</h1>
            <Suspense>
                <Image
                    src={relictifyLogoUrl}
                    alt={"Relictify Logo"}
                    width={0}
                    height={0}
                    className={"h-auto w-auto"}
                />
            </Suspense>
            <Link href={"/characters/1/details"} replace>
                <button className="m-0 rounded bg-white p-2 text-black">
                    TEMP: To App
                </button>
            </Link>

            <h1 className="p-4 text-center">Loaded Characters:</h1>
            <Suspense fallback={<PomPomLoading />}>
                <CharList />
            </Suspense>
        </div>
    );
};

export default LandingPage;
