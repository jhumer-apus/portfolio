"use client";

import { useMenuStore } from "@/store/useMenuStore";
import { IoMenu } from "react-icons/io5";

export default function HeaderMobile() {
    const { setOpenSideBar } = useMenuStore();
    return( 
        <header className="block md:hidden bg-black/80 w-screen fixed top-0 z-10 px-2">
            <IoMenu className="text-white size-8 cursor-pointer" onClick={() => setOpenSideBar(true)}/>
        </header>
    )
}