
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.svg" 
                alt="Nature Heals Logo" 
                width={200} 
                height={66} 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-muted-foreground max-w-xs text-balance">
              Dedicated to restoring harmony through natural wisdom and traditional healing arts.
            </p>
            <div className="space-y-1 font-bold text-primary tracking-widest text-sm">
              <p>LOVE NATURE !!</p>
              <p>BACK TO NATURE !!</p>
            </div>
            <div className="flex gap-4">
              <Link 
                href="https://www.instagram.com/naturehealswc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:opacity-80 transition-opacity"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.facebook.com/naturehealswc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:opacity-80 transition-opacity"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.youtube.com/@NatureHeals" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:opacity-80 transition-opacity"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">Courses</Link></li>
              <li><Link href="/videos" className="text-muted-foreground hover:text-primary transition-colors">Videos</Link></li>
              <li><Link href="/practices/meditation" className="text-muted-foreground hover:text-primary transition-colors">Meditation Guide</Link></li>
              <li><Link href="/camps" className="text-muted-foreground hover:text-primary transition-colors">Rejuvenation Camps</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-accent" />
                <span>naturehealswc@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-accent" />
                <span>+91 98651 47190</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Madurai, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/policy" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/policy" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nature Heals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
