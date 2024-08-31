"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex h-screen content-center items-center justify-center">
            <div>
                <div className="flex items-center justify-center gap-4">
                    <h1 className="text-3xl font-bold text-red-400">404</h1>
                    <Image
                        src={"/pompom_404.webp"}
                        alt={"404"}
                        width={125}
                        height={125}
                    />
                    <p className="text-lg">
                        Did you get lost? Pom Pom can help you find your way
                        back to the Express!
                    </p>
                </div>
                <div className="flex h-fit justify-center align-middle">
                    <Link href={"/"} replace>
                        <button className="w-auto justify-center rounded bg-gold p-2 text-black">
                            Back home!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
