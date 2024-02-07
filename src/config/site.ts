export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "UBC Volleyball Club Dashboard",
  description: "Playing competitive club volleyball est.2022",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Roster",
      href: "/roster",
    },
    {
      title: "Schedule",
      href: "/schedule",
    },
    {
      title: "Statistics",
      href: "/statistics",
    },
    {
      title: "Admin",
      href: "/admin",
    },
  ],
}
