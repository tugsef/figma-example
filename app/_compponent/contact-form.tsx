"use client";
import { ButtonVariant } from "@/components/button-variant";
import { IconButton } from "@/components/icon-button";
import { Illustration } from "@/icons/illustration";
import { Radius } from "@/icons/radio-icon";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};
export const ContactForm = () => {

  const [select,setSelect] = useState(false);
  const [data, setData] = useState<Inputs>();

  const handleOnClick = () => {
    setSelect(!select);
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => setData(data);

  console.log(watch("name")); // watch input value by passing the name of it
  return (
    <div className="lg:flex lg:justify-between lg:w-full  md:gap-10  lg:bg-gray lg:rounded-[45px] lg:pt-14 lg:pb-20 lg:pl-16">
      <div className="space-y-8 md:min-w-96 lg:min-w-[633px]">
        <div className="bg-gray py-10 px-8 rounded-[45px] space-y-14 lg:px-0 lg:py-0">
          <div className="flex justify-between px-5 lg:justify-start lg:gap-9 lg:px-0">
            <IconButton onClick={handleOnClick}  className="flex items-center gap-4">
              <Radius  className={cn(select&&"fill-green","inline-block")}  />
              <span>Say Hi</span>
            </IconButton>
            <IconButton onClick={handleOnClick} className="flex items-center gap-4">
              <Radius className={cn(!select&&"fill-green","inline-block")} />
              <span>Get a Quote</span>
            </IconButton>
          </div>
          <form
            className="space-y-5 lg:space-y-14"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-2">
              <label htmlFor="" className="block">
                Name
              </label>
              <div></div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="John Solomon"
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                  className="rounded-2xl py-4 px-5 w-full border border-black"
                />
                {errors.name?.type === "required" && (
                  <p role="alert" className="text-red-500 text-sm  lg:-bottom-8 left-0 absolute">First name is required</p>
                )}
              </div>
            </div>
            <div className="space-y-2 relative">
              <label htmlFor="" className="block">
                Email*
              </label>
              <input
                type="text"
                placeholder="example@example.com"
                {...register("email", { required: true})}
                className="rounded-2xl py-4 px-5 w-full border border-black focus:ring-red-500 focus:border-blue-500"
              />
              {errors.email?.type === "required" && (
                  <p role="alert" className="text-red-500 text-sm -bottom-5 lg:-bottom-8 left-0 absolute">Email is required</p>
                )}
            </div>
            <div className="space-y-2 relative">
              <label htmlFor="" className="block">
                Message*
              </label>
              <textarea
                placeholder="Hello Positivus"
                {...register("message",{ required: true})}
                className="rounded-2xl py-4 px-5 w-full border border-black h-32"
              />
              {errors.message?.type === "required" && (
                  <p role="alert"className="text-red-500 text-sm -bottom-3  lg:-bottom-6 left-0 absolute">Message is required</p>
                )}
            </div>
            <ButtonVariant variant="dark" className="w-full">
              Send Message
            </ButtonVariant>
          </form>
        </div>
      </div>
      <Illustration className="fill-transparent hidden lg:block " />
    </div>
  );
};
