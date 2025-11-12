"use client";

import { items } from "@/data/routes";
import { cn } from "@/lib/utils";
import { useMenuStore } from "@/store/useMenuStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronCircleLeft } from "react-icons/fa";

export default function SideBar() {
    const { openSideBar, setOpenSideBar } = useMenuStore();
    const pathname = usePathname()   

    const currRouteIndex = items.findIndex(item => {
        if (item.href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(item.href + "/") || pathname === item.href;
    });
    console.log(currRouteIndex)

    return (
        <div className={cn("block md:hidden bg-gray-900/60 min-h-screen w-screen fixed top-0 z-20 transform transition-all", openSideBar ? "translate-x-0" : "-translate-x-full")}>
            <nav className="bg-black w-9/10 min-h-screen">
                <div className="flex items-center text-2xl justify-between p-8">
                    <Link href="/" className="block text-2xl" onClick={() => setOpenSideBar(false)}>
                        <div className="w-fit font-bold text-slate-200">Jhumz <span className="text-purple-400">Dev</span></div>
                    </Link>
                    <FaChevronCircleLeft onClick={() => setOpenSideBar(false)}/>
                </div>
                <ul className="p-2">
                    {items.map((route,index) => (
                        <li key={index} className={cn("rounded-xl hover:bg-gray-900/50", currRouteIndex == index? "bg-gray-800": "bg-none")}>
                            <Link 
                                href={route.href}
                                className="block py-4 px-6 rounded-xl text-lg font-semibold text-slate-200"
                                onClick={() => setOpenSideBar(false)}
                            >
                                {route.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}