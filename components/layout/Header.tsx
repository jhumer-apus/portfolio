"use client"

import { usePathname } from "next/navigation";
import ServerNavigation from "./ServerNavigation";

export default function Header(){

    const currentPath = usePathname()
    return (
        <div className="hidden md:block">
            <div className="bg-zinc-600 bg-opacity-40 py-8 flex justify-end px-12">
                <ServerNavigation currentPath={currentPath}/>
            </div>
        </div>
    )
}