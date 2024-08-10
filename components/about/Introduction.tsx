import { Typography } from "@mui/material";

export default function Introduction () {
    return (
        <div className="m-auto max-w-[700px] flex md:flex-row flex-col items-center gap-8 mt-8">
            <div className="h-fit rounded-full overflow-hidden">
                <img src="/images/profile-pic.png"  width={300}/>
            </div>
            <div className="text-center md:text-left">
                <Typography className="text-2xl">
                    Hi I'm <span className="text-green-400">Jhumer Apus</span>. You can call me <span className="text-green-300">Boyax</span> or <span className="text-green-300">Jhumzkie</span>.
                </Typography>
                <Typography className="text-3xl mt-8">
                    A <span className="text-green-300">Web Developer Expert</span>
                </Typography>
            </div>
        </div>
    )
}