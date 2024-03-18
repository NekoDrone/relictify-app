'use client'

import Link from "next/link";
import PageInfo from "@/components/PageInfo/PageInfo";
import { CombatPath } from "@/exports/entities";

const App = () => {
    return (
    <div className="flex min-h-screen flex-col items-center justify-center p-32">
        <PageInfo
            activeChar={"Dan Heng"} 
            combatPath={CombatPath.THE_HUNT}
            pageTitle={"Light Cone"}
        />
        <Link className="text-center bg-purple-50 text-gray-700 rounded p-2" href={"/"}>Home :)</Link>
    </div>
    );
}

export default App


