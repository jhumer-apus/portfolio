import Link from "next/link"
import { JSX } from "react";

interface Menu_T {
    name: string;
    href: string;
    icon?: JSX.Element | string | null
}
export default function Header() {
    const menu: Menu_T[] = [
        {
            name: "Home",
            href: "#home",
            icon: ""
        },
        {
            name: "About",
            href: "#about",
            icon: ""
        },
        {
            name: "Portfolio",
            href: "#portfolio",
            icon: ""
        },
        {
            name: "Contact",
            href: "#contact",
            icon: ""
        },
    ]
    return (
        <header className="bg-black w-screen fixed top-0 p-12 px-24 flex justify-between text-2xl">
            <div className="font-bold">
                Jhumz <span className="text-purple-400">Dev</span>
            </div>
            <nav>
                <ul className="flex gap-8">
                    {menu.map((route, index) => (
                        <li key={index}>
                            <Link href={route.href}>{route.name}</Link>
                        </li>
                    ))}
                </ul>

            </nav>
        </header>
    )
}