import { nav } from "@/data/nav";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

interface Props {
    currentPath: string
}

export default function ServerNavigation(props:Props) {
    const {currentPath} = props

    const activeLink = (link:string) => {
        return link == currentPath? "text-green-500": ""
    }

    return (
        <Fragment>
            <nav className="">
                <ul className="flex gap-8">
                    {nav.map(link => (
                        <li><Link href={link.url} className={`nav-link ${activeLink(link.url)}`}>{link.title}</Link></li>
                    ))}
                </ul>
            </nav>
        </Fragment>
    )
}