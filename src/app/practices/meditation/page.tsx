
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import Image from "next/image"
import { MeditationPlayer } from "@/components/MeditationPlayer"
import { Sparkles, Moon, Sun, Cloud } from "lucide-react"

export default function MeditationPage() {
  const medImg = PlaceHolderImages.find(img => img.id === "meditation-zen")

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 z-0">
            {medImg && (
              <Image 
                src={medImg.imageUrl}
                alt="Meditation"
                fill
                className="object-cover brightness-50"
              />
            )}
          </div>
          <div className="container relative z-10 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold font-headline">Silence the Mind</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              The soul always knows what to do to heal itself. The challenge is to silence the mind.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-24">
              <div className="space-y-8 text-center">
                <h2 className="text-4xl font-headline font-bold">The Journey Inward</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Meditation is not about stopping thoughts; it's about not letting them stop you. 
                  Our approach combines traditional mindfulness with modern neuro-resilience techniques.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { icon: <Cloud className="h-10 w-10" />, title: "Mindfulness", desc: "Observing thoughts without judgment to reduce anxiety." },
                  { icon: <Moon className="h-10 w-10" />, title: "Deep Sleep", desc: "Yoga Nidra techniques for profound restorative rest." },
                  { icon: <Sun className="h-10 w-10" />, title: "Vipassana", desc: "Insight meditation to see the true nature of reality." }
                ].map((item, i) => (
                  <div key={i} className="text-center space-y-4 p-8 rounded-3xl bg-secondary/20">
                    <div className="flex justify-center text-primary">{item.icon}</div>
                    <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 p-12 rounded-3xl border border-primary/10 space-y-8">
                <h3 className="text-3xl font-headline font-bold text-center">Daily Meditation Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-accent" />
                      <span>Reduced Cortisol Levels</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-accent" />
                      <span>Improved Concentration</span>
                    </li>
                  </ul>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-accent" />
                      <span>Emotional Stability</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-accent" />
                      <span>Lower Blood Pressure</span>
                    </li>
                  </ul>
                </div>
              </div>

              <MeditationPlayer containerClassName="pt-8" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
