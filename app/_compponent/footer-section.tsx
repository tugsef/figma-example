import { Logo } from "@/icons/logo"

export const FooterSection = () =>{
    return <footer className="bg-dark py-8 px-5 pt-12">

    <div className="text-white flex justify-center flex-col items-center gap-9">
        <Logo className="fill-white w-36 "/>
        <div className="flex flex-col gap-4 text-center">
            <a href="">About us</a>
            <a href="">Services</a>
            <a href="">Use Cases</a>
            <a href="">Pricing</a>
        </div>
    </div>


    </footer>
}