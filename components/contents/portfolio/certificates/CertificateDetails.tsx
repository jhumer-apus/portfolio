import { Tags } from "@/data/tags";
import TagCard from "../../TagCard";
import { ProjectProps } from "@/data/projects";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { CertificateProps } from "@/data/certificates";

interface Props {
    certificate?: CertificateProps
}

export default function CertificateDetails({ certificate }:Props) {

    const handleOpenSrc = () => {
        if(!certificate?.srcLink) {
            toast.error("Sorry I don't know the link of the source now😞")
        }
    }
    return (
        <section id="left-project-details" className="md:max-w-[500px]">
            <div id="project-details">
                <h1 className="text-3xl text-indigo-300 font-semibold mb-8">{certificate?.title}</h1>
                <p className="text-gray-200">{certificate?.description}</p>
            </div>

            <div className="flex items-center mt-10 gap-4 text-xl text-sky-300">
                <button 
                    onClick={() => handleOpenSrc()}
                    className="cursor-target hover:bg-gray-600/50 bg-gray-900/50 py-2 flex items-center gap-2 rounded-lg justify-center w-40 border border-white/30"
                >
                    <p>View Source</p>
                    <FaExternalLinkAlt />
                </button>
            </div>
        </section>
    )
}