
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import Image from "next/image"
import { Leaf, Droplets, Sun, Wind, ShieldCheck } from "lucide-react"

export default function NaturopathyPage() {
  const herbImg = PlaceHolderImages.find(img => img.id === "naturopathy-herbs")

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary py-24 text-primary-foreground relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8 relative z-10">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur">
              <Leaf className="h-12 w-12" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-headline">Naturopathy: The Earth's Cure</h1>
            <p className="text-xl max-w-2xl opacity-90 leading-relaxed">
              Healing is not something that happens to the body, but something the body does itself 
              when given the right environment and natural elements.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Five Elements Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                {herbImg && (
                  <Image 
                    src={herbImg.imageUrl}
                    alt="Herbal Remedies"
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="space-y-12">
                <h2 className="text-4xl font-headline font-bold">The Five Pillars of Vitality</h2>
                <div className="grid grid-cols-1 gap-8">
                  {[
                    { icon: <Droplets className="h-6 w-6" />, title: "Hydrotherapy", desc: "Using water at different temperatures to improve circulation and metabolism." },
                    { icon: <Sun className="h-6 w-6" />, title: "Heliotherapy", desc: "Controlled sun exposure to balance Vitamin D and boost mood." },
                    { icon: <Wind className="h-6 w-6" />, title: "Aerotherapy", desc: "Pure air exposure to oxygenate the cells and clear the lungs." },
                    { icon: <Leaf className="h-6 w-6" />, title: "Dietetics", desc: "Whole food plant-based nutrition designed for detoxification." },
                    { icon: <ShieldCheck className="h-6 w-6" />, title: "Earth Therapy", desc: "Mud packs and grounding to pull inflammation from the body." }
                  ].map((elem, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">{elem.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold font-headline mb-1">{elem.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{elem.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl font-headline font-bold mb-4">Our Core Philosophy</h2>
            <div className="h-1 w-24 bg-primary mx-auto" />
          </div>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "First, Do No Harm", desc: "Utilizing non-invasive, natural therapies that minimize the risk of harmful side effects." },
              { title: "Identify the Root", desc: "Treating the cause of illness rather than just suppressing symptoms." },
              { title: "Doctor as Teacher", desc: "Educating and empowering you to take responsibility for your own health." }
            ].map((p, i) => (
              <div key={i} className="bg-background p-10 rounded-3xl border border-primary/10 text-center">
                <h3 className="text-2xl font-bold font-headline mb-4">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
