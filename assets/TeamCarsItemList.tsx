import { TeamPhoto } from "@/icons/team-card-picture";

export interface TeamItem {
    icon:React.ReactNode | React.ReactNode[],
    name:string,
    position:string,
    content:string,
}

export const TeamItemList:TeamItem[] = [
    {
        icon:<TeamPhoto imageSrc="https://picsum.photos/200/300"/>,
        name:"John Smith",
        position:"CEO and Founder",
        content:"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
        icon:<TeamPhoto imageSrc="https://picsum.photos/200/300"/>,
        name:"Jane Doe",
        position:"Director of Operations",
        content:"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
        icon:<TeamPhoto imageSrc="https://picsum.photos/200/300"/>,
        name:"Michael Brown",
        position:"Senior SEO Specialist",
        content:"5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
        icon:<TeamPhoto imageSrc="https://picsum.photos/200/300"/>,
        name:"Emily Johnson",
        position:"PPC Manager",
        content:"3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    }
]