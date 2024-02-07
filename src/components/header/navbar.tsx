/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import { logout } from "@/src/utils/supabase/logout_action"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { MenuLinks } from "./menu_links"

const handleLogout = async () => {
  await logout()
}

export function SiteHeader() {
  // return (
  //   <header className="sticky top-0 z-40 w-full border-b bg-background">
  //     <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
  //       <MainNav items={siteConfig.mainNav} />
  //       <div className="flex flex-1 items-center justify-end space-x-4">
  //         <nav className="flex items-center space-x-1"></nav>
  //       </div>
  //     </div>
  //   </header>
  // )
  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Title */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link href="/" className="flex items-center space-x-2">
            <img
              className="size-14"
              src="https://www.ubcvolleyball.club/uploads/6/9/6/2/69627653/s105778333429576097_p6_i1_w1563.png"
              alt="UBC Volleyball Club"
            />
            {/* <span classNameName="inline-block font-bold">{siteConfig.name}</span> */}
          </Link>
          <span className="self-center whitespace-nowrap text-xl font-extrabold leading-tight tracking-tighter md:text-xl">
            UBC <span className="text-primary">Volleyball</span> Club Dashboard
          </span>
        </div>
        {/* User menu */}
        <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button className="flex rounded-full bg-primary text-sm focus:ring-4 focus:ring-primary dark:focus:ring-gray-600 md:me-0">
            <Avatar
              onClick={handleLogout}
              className="border-transparent transition duration-300 ease-in-out hover:border hover:border-primary"
            >
              <AvatarImage src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg" />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
          </button>
          {/* <div
            className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block truncate  text-sm text-gray-500 dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div> */}
          {/* Mobile Button TODO:*/}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {/* menu links*/}
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-user"
        >
          <div className="flex gap-6 md:gap-10">
            <MenuLinks />
          </div>
        </div>
      </div>
    </nav>
  )
}
