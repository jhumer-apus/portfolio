import { FaDiscord, FaEnvelopeOpenText, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaPhone, FaViber } from "react-icons/fa"

export default function ContactDetails() {

    const contactItems = [
        {
            label: "bogart@gmail.com",
            href: "bogart@gmail.com",
            icon: <FaEnvelopeOpenText />
        },
        {
            label: "+63-912-3456-789",
            href: "",
            icon: <FaPhone />
        },
        {
            label: "Boogart",
            href: "Boogart.com",
            icon: <FaLinkedinIn />
        },
        {
            label: "FB",
            href: "fb.com",
            icon: <FaFacebookF />
        },
        {
            label: "Instagram",
            href: "instagram.com",
            icon: <FaInstagram />
        },
        {
            label: "Viber",
            href: "viber.com",
            icon: <FaViber />
        },
        {
            label: "Github",
            href: "github.com",
            icon: <FaGithub />
        },
        {
            label: "Discord",
            href: "discord.com",
            icon: <FaDiscord />
        }
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
                            ? <a href={item.href} target="_blank">{item.label}</a>
                            :<p>{item.label}</p>
                        }
                    </div>
                ))
            }
        </div>
    )
}