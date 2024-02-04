/* eslint-disable @next/next/no-img-element */
'use client'

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/src/types/nav"
import { siteConfig } from "@/src/config/site"
import { Avatar, AvatarImage,AvatarFallback} from "../ui/avatar"  
import { logout } from "@/src/utils/supabase/logout_action"

interface MainNavProps {
  items?: NavItem[]
}

const handleLogout = async () => {

  await logout()
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <img className="size-14" src="https://www.ubcvolleyball.club/uploads/6/9/6/2/69627653/s105778333429576097_p6_i1_w1563.png" alt="UBC Volleyball Club"/> 
        {/* <span className="inline-block font-bold">{siteConfig.name}</span> */}
      </Link>
      {/* {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null} */}
      <button>
        <Avatar onClick={handleLogout}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </button>
    </div>
  )
}
