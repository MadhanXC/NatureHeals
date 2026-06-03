
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import Image from "next/image"
import { Zap, Hand, Heart, Sparkles } from "lucide-react"

export default function MudrasPage() {
  const mudraImg = PlaceHolderImages.find(img => img.id === "mudra-hands")

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-secondary/30 py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase">
                  <Hand className="h-4 w-4" />
                  <span>Energy Channels</span>
                </div>
                <h1 className="text-5xl font-bold font-headline">The Power of Mudras</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Mudras are symbolic hand gestures that act as energetic seals. 
                  By connecting specific points in the hands, we can redirect the flow of Prana (life-force) 
                  to specific organs and emotional centers.
                </p>
              </div>
              <div className="flex-1 relative aspect-square w-full max-w-md rounded-full overflow-hidden border-8 border-white shadow-2xl">
                {mudraImg && (
                  <Image 
                    src={mudraImg.imageUrl}
                    alt="Mudra Hands"
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Mudra Catalog */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-headline font-bold text-center mb-16">Core Mudras for Daily Life</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { 
                  title: "Gyan Mudra", 
                  meaning: "Knowledge & Wisdom", 
                  benefit: "Improves memory, concentration, and spiritual growth.",
                  icon: <Sparkles className="h-8 w-8 text-primary" />,
                  desc: "Touch the tip of the thumb to the tip of the index finger, while the other three fingers remain straight."
                },
                { 
                  title: "Apana Mudra", 
                  meaning: "Purification", 
                  benefit: "Detoxifies the body and helps in regular elimination.",
                  icon: <Zap className="h-8 w-8 text-primary" />,
                  desc: "Touch the tips of the middle and ring fingers to the tip of the thumb."
                },
                { 
                  title: "Prana Mudra", 
                  meaning: "Life Force", 
                  benefit: "Boosts immune system and reduces fatigue.",
                  icon: <Heart className="h-8 w-8 text-primary" />,
                  desc: "Touch the tips of the little finger and ring finger to the tip of the thumb."
                },
                { 
                  title: "Anjali Mudra", 
                  meaning: "Salutation", 
                  benefit: "Balances the two hemispheres of the brain.",
                  icon: <Hand className="h-8 w-8 text-primary" />,
                  desc: "Press both palms together at the heart center."
                }
              ].map((m, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-8 p-10 bg-card border rounded-3xl hover:border-primary transition-colors">
                  <div className="p-4 rounded-2xl bg-secondary h-fit">{m.icon}</div>
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-2xl font-bold font-headline">{m.title}</h3>
                      <span className="text-sm text-accent font-bold uppercase tracking-wider">{m.meaning}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                    <div className="pt-4 border-t">
                      <p className="text-sm font-bold text-primary">Benefit:</p>
                      <p className="text-sm text-muted-foreground">{m.benefit}</p>
                    </div>
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
