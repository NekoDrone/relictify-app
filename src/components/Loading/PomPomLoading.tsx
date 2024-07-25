"use client";

import Image from "next/image";

export const PomPomLoading = () => {
    return (
        <div
            className={
                "flex h-screen justify-center items-center content-center"
            }
        >
            <p>Pom Pom is thinking really hard!!</p>
            <Image
                src={"/pompom_loading.webp"}
                alt={"Loading"}
                width={250}
                height={250}
            />
        </div>
    );
};
