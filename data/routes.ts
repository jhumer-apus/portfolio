import { JSX } from "react";

interface Menu_T {
    label: string;
    href: string;
    icon?: JSX.Element | string | null
}
export const items: Menu_T[] = [
    {
        label: "Home",
        href: "/",
        icon: ""
    },
    {
        label: "About",
        href: "/about",
        icon: ""
    },
    {
        label: "Portfolio",
        href: "/portfolio",
        icon: ""
    },
    {
        label: "Contact",
        href: "/contact",
        icon: ""
    },
]