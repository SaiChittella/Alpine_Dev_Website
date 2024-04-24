import ScrollArrow from "@/components/ui/ScrollArrow"
import IconBar from "./IconBar"
import { Span } from "next/dist/trace"

interface AboutUsSectionProps {
    pfp: string,
    URLs: string[],
    paragraph: string,
    scrollArrow?: boolean
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ pfp, URLs, paragraph, scrollArrow = true }) => {
    return (
        <div className="grid grid-rows-2 h-screen w-screen">
            <img src={pfp} className="w-72 rounded-full m-auto" />



            <div className="flex flex-col h-full w-full justify-between place-items-center">

                <div className="w-full"><IconBar URLs={URLs}></IconBar></div>


                <span className="text-center max-w-4xl">{paragraph}</span>

                {scrollArrow ? <span className="pb-5"><ScrollArrow></ScrollArrow></span> : <span />}
            </div>
        </div>
    )
}

export default AboutUsSection