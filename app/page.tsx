import Link from "next/link"

import { siteConfig } from "@/src/config/site"
import { buttonVariants } from "@/src/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Home Page
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          TODO: Display Event Calendar, Show upcoming games, show upcoming games
          for that user, show user details, show coach details <br />
          refer to the figma for more details
        </p>
      </div>
      <div className="flex gap-4"></div>
    </section>
  )
}
