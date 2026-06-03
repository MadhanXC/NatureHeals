"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  Menu, 
  X, 
  ChevronDown 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/about" },
  { name: "Courses", href: "/courses" },
  { 
    name: "Wellness Practices", 
    href: "/practices",
    children: [
      { name: "Acupuncture", href: "/practices/acupuncture" },
      { name: "Meditation", href: "/practices/meditation" },
      { name: "Breathing", href: "/practices/breathing" },
      { name: "Mudras", href: "/practices/mudras" },
      { name: "Naturopathy", href: "/practices/naturopathy" },
      { name: "Reflexology", href: "/practices/reflexology" },
    ]
  },
  { name: "Videos", href: "/videos" },
  { name: "Rejuvenation Camps", href: "/camps" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  // Close mobile menu on path change
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scrolling when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <nav className="sticky top-0 z-[100] w-full border-b bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="Nature Heals Logo" 
              width={320} 
              height={108} 
              className="h-12 lg:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className={cn(
                        "flex items-center gap-1 text-base font-medium transition-colors hover:text-primary outline-none",
                        pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground"
                      )}>
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56 p-2 z-[110]">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link 
                            href={child.href}
                            className={cn(
                              "w-full cursor-pointer rounded-md p-2 transition-colors text-base",
                              pathname === child.href ? "bg-primary/10 text-primary" : "hover:bg-muted"
                            )}
                          >
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild variant="default" className="bg-accent hover:bg-accent/90 rounded-full px-6 text-base h-11">
              <Link href="/consultation">Online Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground h-12 w-12"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background z-[150] h-[calc(100vh-4rem)] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="container mx-auto px-4 py-8 space-y-8 pb-32">
            {navItems.map((item) => (
              <div key={item.name} className="space-y-4">
                {item.children ? (
                  <>
                    <div className="text-xl font-bold text-primary uppercase tracking-widest px-2">{item.name}</div>
                    <div className="grid grid-cols-1 gap-1 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={cn(
                            "text-lg py-3 transition-colors border-b border-muted/30",
                            pathname === child.href ? "text-primary font-bold" : "text-muted-foreground"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "block text-2xl font-bold py-3 transition-colors px-2 border-b border-muted",
                      pathname === item.href ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-8">
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 rounded-full text-xl h-16">
                <Link href="/consultation">Online Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
