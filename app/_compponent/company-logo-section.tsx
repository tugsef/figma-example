import { Amazon, Dribble, HubSpot, Netflix, Notion, Zoom } from "@/icons/company-logo"

export const CompanyLogoSection = ()=>{
    return <section>
        <div  className="space-y-5 overflow-hidden filter  grayscale">
            <div className="flex gap-9  -mr-20 ">
             <Amazon />
             <Dribble/>
            <HubSpot/>
            </div>
            <div className="flex gap-9">
             <Netflix />
             <Notion/>
            <Zoom/>
            </div>
        </div>
    </section>
}