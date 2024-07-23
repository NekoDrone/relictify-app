'use client'

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex h-screen justify-center items-center content-center">
            <div>
                <div className="flex justify-center items-center gap-4">
                    <h1 className="text-red-400 font-bold text-3xl">404</h1>
                    <Image src={"/pompom_404.webp"} alt={"404"} width={125} height={125} />
                    <p className="text-lg">Did you get lost? Pom Pom can help you find your way back
                        to the Express!</p>
                </div>
                <div className="flex justify-center align-middle h-fit">
                    <Link href={"/"} replace>
                        <button className="justify-center bg-gold text-black w-auto rounded w-auto p-2">Back home!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};