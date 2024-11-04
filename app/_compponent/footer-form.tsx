import { ButtonVariant } from "@/components/button-variant";

export const FooterForm = () => {
  return (
    <form
      action=""
      className="bg-[#292A32] p-8 space-y-6 rounded-[45px] lg:space-x-5"
    >
      <input
        type="text"
        className="py-5 px-6 rounded-2xl text-white bg-transparent placeholder:text-white border border-white w-full lg:w-auto lg:inline-block"
        placeholder="Email"
      />
      <ButtonVariant
        variant="green"
        className="w-full lg:inline-block lg:w-auto"
      >
        Subscribe to news
      </ButtonVariant>
    </form>
  );
};
