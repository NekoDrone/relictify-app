'use client'

import Link from "next/link";
import { PageNav } from "@/components/PageNav/PageNav";

const App = () => {
    return (
    <div className="flex min-h-screen flex-col items-center justify-center p-32">
        <PageNav charId={10}/>
        <Link className="text-center bg-purple-50 text-gray-700 rounded p-2" href={"/"}>Home</Link>
    </div>
    );
}

export default App


