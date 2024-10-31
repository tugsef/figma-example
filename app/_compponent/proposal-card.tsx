import { ButtonVariant } from "@/components/button-variant"

export const ProposalCard = ()=>{
    return <article className="p-[50px] space-y-5 bg-gray rounded-[45px]">

        <h3 className="font-medium text-balance text-xl">
        Let’s make things happen
        </h3>
        <p className="text-black">
        Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
        </p>

        <ButtonVariant variant="dark" className="w-full">
        Get your proposal
        </ButtonVariant>

    </article>
}