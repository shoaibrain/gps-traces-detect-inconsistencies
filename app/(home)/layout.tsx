import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { marketingConfig } from "@/config/site"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({
  children,
}: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center border-t justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter className="border-t" />
    </div>
  )
}