import Link from "next/link";

export default function Header(){
    return (
        <div className="bg-zinc-600 bg-opacity-40 py-8 flex justify-end px-12">
            <nav className="">
                <ul className="flex gap-8">
                    <li><Link href="">Home</Link></li>
                    <li><Link href="">About</Link></li>
                    <li><Link href="">Projects</Link></li>
                </ul>
            </nav>
        </div>
    )
}