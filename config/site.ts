import { MarketingConfig } from "@/types"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "canvas",
  description:"canvas",
  url: "http://localhost:3000",
  mainNav: [
    {
      title: "home page",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shoaib_rain",
    
  },
}

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "nav-A",
      href: "/",
    },
    {
      title:"link-B",
      href:"/"
    },
  ],
}