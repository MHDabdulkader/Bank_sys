"use client"

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathName = usePathname()

  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link
          href="/"
          className='mb-12 flex cursor-pointer items-center gap-2'>
          <Image
            src='/icons/logo.svg'
            width={34}
            height={34}
            alt='logo'
            className='size-[24px] max-xl:size-14' />
          <h1 className='sidebar-logo'>Horizon</h1>
        </Link>

        {sidebarLinks.map((el) => {
          const isActive = pathName === el.route || pathName.startsWith(`${el.route}/`);
          return (
            <Link
              href={el.route}
              key={el.label}
              className={cn('sidebar-link', {'bg-bank-gradient':isActive})}
            >
              <div className='relative size-6'>
                <Image src={el.imgURL} alt={el.label} fill
                        className={cn({
                          'brightness-[3] invert-0':isActive
                        })}/>
              </div>
              <p className={cn('sidebar-label', {'!text-white':isActive})}>{el.label}</p>
            </Link>
          )
        })}

        user
      </nav>

      {/* footer as user */}
    </section>
  )
}

export default Sidebar