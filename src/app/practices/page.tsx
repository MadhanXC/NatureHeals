
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sun, Wind, Heart, Sparkles, ArrowRight } from "lucide-react"

export default function PracticesPage() {
  const practices = [
    {
      title: "Meditation",
      href: "/practices/meditation",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      image: PlaceHolderImages.find(img => img.id === "meditation-zen")?.imageUrl,
      desc: "Quiet the mind and find your inner sanctuary through guided stillness."
    },
    {
      title: "Pranayama Breathing",
      href: "/practices/breathing",
      icon: <Wind className="h-8 w-8 text-primary" />,
      image: PlaceHolderImages.find(img => img.id === "breathing-sky")?.imageUrl,
      desc: "Harness the life-force energy through scientific breath control."
    },
    {
      title: "Sacred Mudras",
      href: "/practices/mudras",
      icon: <Sun className="h-8 w-8 text-primary" />,
      image: PlaceHolderImages.find(img => img.id === "mudra-hands")?.imageUrl,
      desc: "Utilize therapeutic hand gestures to influence energy flow and emotional state."
    },
    {
      title: "Naturopathy",
      href: "/practices/naturopathy",
      icon: <Heart className="h-8 w-8 text-primary" />,
      image: PlaceHolderImages.find(img => img.id === "naturopathy-herbs")?.imageUrl,
      desc: "Activate your body's self-healing mechanisms through natural elements."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-primary py-24 text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold font-headline">The Four Pillars of Healing</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our holistic approach integrates ancient wisdom with modern physiological understanding 
              to restore your natural state of balance.
            </p>
          </div>
        </section>

        {/* Practices Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {practices.map((p, i) => (
                <div key={i} className="group bg-card border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {p.image && (
                      <Image 
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="p-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-secondary">{p.icon}</div>
                      <h3 className="text-3xl font-bold font-headline">{p.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">{p.desc}</p>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      <Link href={p.href}>Explore Practice <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
