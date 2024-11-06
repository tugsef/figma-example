import { TeamPhoto } from "@/icons/team-card-picture";

export interface TeamItem {
    id:string
    name:string,
    position:string,
    content:string,
    imageSrc:string
}

export const TeamItemList:TeamItem[] = [
    {
       id:"image1",
        name:"John Smith",
        position:"CEO and Founder",
        content:"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
        imageSrc:"/image/image1.png"
    },
    {
        id:"image2",
        name:"Jane Doe",
        position:"Director of Operations",
        content:"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
        imageSrc:"/image/image2.png"

    },
    {
        id:"image3",

        name:"Michael Brown",
        position:"Senior SEO Specialist",
        content:"5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        imageSrc:"/image/image3.png"

    },
    {
        id:"image4",

        name:"Emily Johnson",
        position:"PPC Manager",
        content:"3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        imageSrc:"/image/image4.png"

    }
]