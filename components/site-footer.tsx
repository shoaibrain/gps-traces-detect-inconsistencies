import * as React from "react"

import { cn } from "@/lib/utils"


export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="flex justify-around mr-8 p-4">
        <p className="text-center text-sm leading-loose md:text-left">
          canvas &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}