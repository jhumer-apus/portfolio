import History from "@/components/History";

export default function About() {
    return (
        <div>
            <div className="w-fit m-auto">
                <History 
                    direction="vertical"
                    size={20} 
                    content={[]} 
                />
            </div>
            
        </div>
    )
}