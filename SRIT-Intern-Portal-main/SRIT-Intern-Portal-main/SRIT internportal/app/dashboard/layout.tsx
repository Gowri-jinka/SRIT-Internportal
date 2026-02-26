import type { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Briefcase, BookOpen, User, Bell, LogOut, Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-srit-orange">SRIT</span> Intern Portal
          </div>

          <div className="flex items-center gap-4">
            <Link href="/dashboard/notifications">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-srit-orange"></span>
              </Button>
            </Link>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 border-r-srit-wheat">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 font-bold text-xl">
                    <span className="text-srit-orange">SRIT</span> Portal
                  </div>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col gap-4">
                  <Link href="/dashboard">
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover:text-srit-orange hover:bg-srit-orange/10"
                    >
                      <LayoutDashboard className="mr-2 h-5 w-5" />
                      Dashboard
                    </Button>
                  </Link>
                  <Link href="/dashboard/jobs">
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover:text-srit-orange hover:bg-srit-orange/10"
                    >
                      <Briefcase className="mr-2 h-5 w-5" />
                      Jobs & Internships
                    </Button>
                  </Link>
                  <Link href="/dashboard/resources">
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover:text-srit-orange hover:bg-srit-orange/10"
                    >
                      <BookOpen className="mr-2 h-5 w-5" />
                      Resources
                    </Button>
                  </Link>
                  <Link href="/dashboard/profile">
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover:text-srit-orange hover:bg-srit-orange/10"
                    >
                      <User className="mr-2 h-5 w-5" />
                      Profile
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="ghost" className="w-full justify-start text-destructive">
                      <LogOut className="mr-2 h-5 w-5" />
                      Logout
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-srit-cream/20 md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start hover:text-srit-orange hover:bg-srit-orange/10">
                <LayoutDashboard className="mr-2 h-5 w-5" />
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard/jobs">
              <Button variant="ghost" className="w-full justify-start hover:text-srit-orange hover:bg-srit-orange/10">
                <Briefcase className="mr-2 h-5 w-5" />
                Jobs & Internships
              </Button>
            </Link>
            <Link href="/dashboard/resources">
              <Button variant="ghost" className="w-full justify-start hover:text-srit-orange hover:bg-srit-orange/10">
                <BookOpen className="mr-2 h-5 w-5" />
                Resources
              </Button>
            </Link>
            <Link href="/dashboard/profile">
              <Button variant="ghost" className="w-full justify-start hover:text-srit-orange hover:bg-srit-orange/10">
                <User className="mr-2 h-5 w-5" />
                Profile
              </Button>
            </Link>
            <div className="flex-1"></div>
            <Link href="/login">
              <Button variant="ghost" className="w-full justify-start text-destructive">
                <LogOut className="mr-2 h-5 w-5" />
                Logout
              </Button>
            </Link>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

