import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { BurgerMenu } from '@/icons/burger-menu'
import { Logo } from '@/icons/logo'
import { NavList } from '@/assets/NavList'
import Link from 'next/link'
  
function MobileToggleMenu() {
  return (
    <Sheet>
    <SheetTrigger> <BurgerMenu className="lg:hidden" /></SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle><Logo/></SheetTitle>
      </SheetHeader>
      <ul className='h-full w-full flex justify-center items-center flex-col gap-10'>
      {NavList.map(nav =><li><Link href={nav.url}>{nav.name}</Link></li> )}
      </ul>
      

    </SheetContent>
  </Sheet>
  
  )
}

export default MobileToggleMenu