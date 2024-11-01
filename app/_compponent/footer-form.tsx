import { ButtonVariant } from "@/components/button-variant"

export const FooterForm = ()=>{
    return <form action="" className="bg-[#292A32] p-8 space-y-6 rounded-[45px]">
        <input type="text" className="py-5 px-6 rounded-2xl text-white bg-transparent placeholder:text-white border border-white w-full" placeholder="Email" />
        <ButtonVariant variant="green" className="w-full">Subscribe to news</ButtonVariant>
    </form>
}