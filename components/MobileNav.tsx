"use client"

import React from 'react'

import {
  Sheet,
  // SheetPortal,
  // SheetOverlay,
  SheetTrigger,
  // SheetClose,
  SheetContent,
  SheetHeader,
  // SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'


const MobileNav = ({ user }: MobileNavProps) => {
  const pathName = usePathname()
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30} height={30}
            alt='Navicon mobile'
            className=' cursor-pointer'
          />
        </SheetTrigger>
        <SheetContent side="left" className='border-none bg-white'>
          <Link
            href="/"
            className='flex cursor-pointer items-center gap-1 px-4'>
            <Image
              src='/icons/logo.svg'
              width={34}
              height={34}
              alt='logo'
            />
            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
          </Link>
          <div className='mobilenav-sheet'>
            <SheetClose asChild>
              <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                {sidebarLinks.map((el) => {
                  const isActive = pathName === el.route || pathName.startsWith(`${el.route}/`);
                  return (
                    <SheetClose asChild key={el.route}>
                      <Link
                        href={el.route}
                        key={el.label}
                        className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}
                      >

                        <Image src={el.imgURL} alt={el.label} width={20} height={20}
                          className={cn({
                            'brightness-[3] invert-0': isActive
                          })} />

                        <p className={cn('text-16 font-semibold text-black-2', { 'text-white': isActive })}>{el.label}</p>
                      </Link>
                    </SheetClose>


                  )
                })}

                USER data
              </nav>
            </SheetClose>

            footer 
          </div>


        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav