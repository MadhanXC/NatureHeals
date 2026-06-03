
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { BreathingExercise } from "@/components/BreathingExercise"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import Image from "next/image"
import { Wind, ShieldCheck, HeartPulse, Brain } from "lucide-react"

export default function BreathingPage() {
  const skyImg = PlaceHolderImages.find(img => img.id === "breathing-sky")

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs">
                  <Wind className="h-4 w-4" />
                  <span>Pranayama</span>
                </div>
                <h1 className="text-5xl font-bold font-headline">The Art of Breathing</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Pranayama is the science of breath control. It is the bridge between the physical and spiritual worlds, 
                  allowing you to direct the life-force energy (Prana) throughout your body.
                </p>
              </div>
              <div className="flex-1 relative aspect-[4/3] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
                {skyImg && (
                  <Image 
                    src={skyImg.imageUrl}
                    alt={skyImg.description}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Player Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <BreathingExercise />
              </div>
              <div className="space-y-8 order-1 lg:order-2">
                <h2 className="text-4xl font-headline font-bold">Try our Interactive Breathing Guide</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Start your daily practice with our digital breathing assistant. 
                  Focused on the "Box Breathing" technique, this session helps regulate your heart rate 
                  and lowers cortisol levels within minutes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-4 p-4 border rounded-xl">
                    <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Stress Relief</h4>
                      <p className="text-sm text-muted-foreground">Instantly calms the fight-or-flight response.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 border rounded-xl">
                    <Brain className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Focus</h4>
                      <p className="text-sm text-muted-foreground">Clears mental fog and improves concentration.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 border rounded-xl">
                    <HeartPulse className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Energy</h4>
                      <p className="text-sm text-muted-foreground">Oxygenates the blood for natural vitality.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-24 bg-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-headline font-bold mb-12 text-center">Beyond the Basics</h2>
            <div className="space-y-12">
              <div className="bg-background p-8 rounded-2xl border">
                <h3 className="text-2xl font-bold mb-4 font-headline">Nadi Shodhana (Alternate Nostril Breathing)</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ideal for restoring balance between the left and right hemispheres of the brain. 
                  Sit comfortably, close your right nostril with your thumb, and inhale through the left. 
                  Switch and exhale through the right.
                </p>
              </div>
              <div className="bg-background p-8 rounded-2xl border">
                <h3 className="text-2xl font-bold mb-4 font-headline">Bhramari (Bee Breath)</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A powerful technique for releasing cerebral tension. 
                  Inhale deeply, and as you exhale, make a low-pitched humming sound like a bee. 
                  The vibration works wonders for soothing the auditory nerves.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
