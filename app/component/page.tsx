import { ButtonVariant } from "@/components/button-variant";
import { IconButton } from "@/components/icon-button";
import { Label } from "@/components/label";
import { Arrow } from "@/icons/arrow";
import { Decrease } from "@/icons/decrease";
import { Increase } from "@/icons/increase";
import { Logo } from "@/icons/logo";

export default function Home() {
  return (
    <div className="p-20 bg-[#BDBDBD] min-h-screen">
      <div className="flex gap-14">
        <div className="space-y-7">
          <h2 className="text-xl font-bold">Logo</h2>
          <Logo className="fill-white" />
          <Logo className="fill-dark" />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold">Button</h2>
          <ButtonVariant variant="transparent">deneme</ButtonVariant>
          <ButtonVariant variant="green">deneme</ButtonVariant>
          <ButtonVariant variant="dark">deneme</ButtonVariant>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold">Plus Icon</h2>
          <Increase className="fill-white" />
          <Decrease className="fill-white" />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold">Link Icon</h2>

       
          <IconButton className="flex items-center gap-4">
            <Arrow arrowClass="fill-green" circleClass="fill-white"></Arrow>
            <span className="text-xl text-white">Label</span>
          </IconButton>

          <IconButton className="flex items-center gap-4">
            <Arrow arrowClass="fill-black" circleClass="fill-white"></Arrow>
            <span className="text-xl text-white">Label</span>
          </IconButton>

          <IconButton className="flex items-center gap-4">
            <Arrow arrowClass="fill-green" circleClass="fill-black"></Arrow>
            <span className="text-xl text-black">Label</span>
          </IconButton>

          <IconButton className="fill-white flex items-center gap-4">
            <Arrow arrowClass="fill-black" circleClass="fill-green"></Arrow>
            <span className="text-xl text-black">Label</span>
          </IconButton>

          <IconButton className="fill-whited flex items-center gap-4">
            <Arrow arrowClass="fill-white" circleClass="fill-green"></Arrow>
            <label className="text-xl text-white">Label</label>
          </IconButton>

          <IconButton className="fill-whited flex items-center gap-4">
            <Arrow arrowClass="fill-green" circleClass="fill-white"></Arrow>
            <label className="text-xl text-white">Label</label>
          </IconButton>

          <IconButton className="fill-whited flex items-center gap-1">
          <label className="text-xl text-green">Label</label>
            <Arrow arrowClass="fill-green" circleClass="hidden"></Arrow>
          </IconButton>

          <IconButton className="fill-whited flex items-center gap-1">
          <label className="text-xl text-white">Label</label>
            <Arrow arrowClass="fill-white" circleClass="hidden"></Arrow>
          </IconButton>
          <IconButton className="fill-whited flex items-center gap-1">
          <label className="text-xl text-black">Label</label>
            <Arrow arrowClass="fill-black" circleClass="hidden"></Arrow>
          </IconButton>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl">Heading</h2>
          <div className="flex flex-col">
          <Label className="bg-green text-black">Label</Label>
          <Label className="bg-green text-black">Label</Label>
          <Label className="bg-green text-black">Label</Label>
          </div>
          <div className="flex flex-col">
          <Label className="bg-white text-black">Label</Label>
          <Label className="bg-white text-black">Label</Label>
          <Label className="bg-white text-black">Label</Label>
          </div>
          <div className="flex flex-col">
          <Label className="bg-black text-white">Label</Label>
          <Label className="bg-black text-white">Label</Label>
          <Label className="bg-black text-white">Label</Label>
          </div>
          
        </div>
      </div>
    </div>
  );
}
