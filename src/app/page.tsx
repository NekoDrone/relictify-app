'use client'

import Link from "next/link";

const LandingPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-32">
            <h1 className="text-center p-4">Welcome to Relictify</h1>
            <Link href={"/app"}>
                <button className="bg-amber-500 m-0 rounded p-2">TEMP: To App :)</button>
            </Link>
        </div>
    );
}

export default LandingPage