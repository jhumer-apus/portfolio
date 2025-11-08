
import { FaExternalLinkAlt, FaFileDownload } from "react-icons/fa";
import { toast } from "react-toastify";
import { CertificateProps } from "@/data/certificates";
import { redirect } from "next/navigation";

interface Props {
    certificate?: CertificateProps
}

export default function CertificateDetails({ certificate }:Props) {

    const handleOpenSrc = () => {
        if(!certificate?.srcLink) {
            toast.error("Sorry I don't know the link of the source now😞")
            return
        }
        window.open(certificate.srcLink, "_blank");
    }
    const handleDownloadPDF = () => {
        if(!certificate?.pdfSrc) {
            toast.error("Sorry it doesn't have a PDF😞")
            return
        }

        const link = document.createElement("a");
        link.href = certificate.pdfSrc;
        link.download = certificate.title + ".pdf"; // the name the file will be saved as
        link.click();
    }
    return (
        <section id="left-project-details" className="md:max-w-[500px]">
            <div id="project-details">
                <h1 className="text-3xl text-indigo-300 font-semibold mb-8">{certificate?.title}</h1>
                <p className="text-gray-200">{certificate?.description}</p>
            </div>

            <div className="flex items-center mt-10 gap-4 text-lg text-gray-300">
                <button 
                    onClick={() => handleOpenSrc()}
                    className="cursor-pointer hover:bg-gray-600/50 bg-gray-900/50 py-2 flex items-center gap-2 rounded-lg justify-center w-40 border border-white/30"
                >
                    <p>View Source</p>
                    <FaExternalLinkAlt />
                </button>
                <button 
                    onClick={() => handleDownloadPDF()}
                    className="cursor-pointer hover:bg-gray-600/50 bg-gray-900/50 py-2 flex items-center gap-2 rounded-lg justify-center w-44 border border-white/30"
                >
                    <p>Download PDF</p>
                    <FaFileDownload />
                </button>
            </div>
        </section>
    )
}