import { nav } from "@/data/nav";
import Link from "next/link";

export default function Header(){

    return (
        <div className="hidden md:block">
            <div className="bg-zinc-600 bg-opacity-40 py-8 flex justify-end px-12">
                <nav className="">
                    <ul className="flex gap-8">
                        {nav.map(link => (
                            <li><Link href={link.url} className="nav-link">{link.title}</Link></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}