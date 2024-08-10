import { Typography } from "@mui/material";
import Link from "next/link";
import ConstructionIcon from '@mui/icons-material/Construction';
import MoodIcon from '@mui/icons-material/Mood';

export default function Home() {

  const nav = [
    {
      title: "Checkout my services",
      url: "",
      icon: <ConstructionIcon/>
    },
    {
      title: "Learn about me",
      url: "",
      icon: <MoodIcon />
    }
  ]
  return (
    <main className="">
        <section className="flex gap-16 flex-col md:flex-row m-auto w-fit mt-20 items-center">
          <div className="h-fit rounded-full overflow-hidden">
            <img src="/images/profile-pic.png"  width={300}/>
          </div>
          <div>
            <Typography className="text-2xl">
              Hi I'm <span className="text-green-400">Jhumer Apus</span>. You can call me <span className="text-green-300">Boyax</span> or <span className="text-green-300">Jhumzkie</span>.
            </Typography>
            <Typography className="text-3xl">
              A <span className="text-green-300">Web Developer Expert</span>
            </Typography>

            <nav className="mt-16 m-auto md:ml-0 w-fit">
              <ul className="flex flex-col md:flex-row gap-8">
                {nav.map((link, index:number) => (
                  <li key={index}><Link href={link.url} className="text-slate-300 hover:text-green-300 border border-white hover:border-green-300 rounded-md p-2"><span>{link.title}  </span>{link.icon}</Link></li>
                ))}
              </ul>
            </nav>
          </div>        
        </section>
    </main>
  );
}
