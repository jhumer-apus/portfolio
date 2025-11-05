import Link from "next/link"
import { FaEnvelopeOpenText, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaPhone, FaViber } from "react-icons/fa"

export default function ContactDetails() {

    const contactItems = [
        {
            label: "jhumerapus@gmail.com",
            href: "",
            icon: <FaEnvelopeOpenText />
        },
        {
            label: "+63-931-753-1962",
            href: "",
            icon: <FaPhone />
        },
        {
            label: "Jhumer Apus",
            href: "https://www.linkedin.com/in/jhumer-apus-10b32a1ab/",
            icon: <FaLinkedinIn />
        },
        {
            label: "Jhumer Apus",
            href: "https://www.facebook.com/jhumer.apus.1/",
            icon: <FaFacebookF />
        },
        {
            label: "maybe_jhumz",
            href: "https://www.instagram.com/maybe_jhumz/",
            icon: <FaInstagram />
        },
        {
            label: "+63-931-753-1962",
            href: "",
            icon: <FaViber />
        },
        {
            label: "jhumer-apus",
            href: "https://github.com/jhumer-apus",
            icon: <FaGithub />
        },
    ]
    return (
        <div className="flex md:w-[500px] flex-col rounded-sm p-8 gap-3">
            <h2 className="text-3xl font-semibold whitespace-nowrap">Contact Details</h2>
            <br />
            {
                contactItems.map((item,index) => (
                    <div 
                        key={index}
                        className="flex items-center gap-4 text-lg"
                    >
                        {item.icon}
                        {item.href 
                            ? <Link href={item.href} target="_blank" className="block hover:underline">{item.label}</Link>
                            :<p>{item.label}</p>
                        }
                    </div>
                ))
            }
        </div>
    )
}