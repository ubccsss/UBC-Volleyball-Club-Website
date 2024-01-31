import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/src/types/nav"
import { siteConfig } from "@/src/config/site"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <img className="size-14" src="https://www.ubcvolleyball.club/uploads/6/9/6/2/69627653/published/ubc-volleyball-club.png?1679899044" alt="UBC Volleyball Club"/> 
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
    </div>
  )
}
