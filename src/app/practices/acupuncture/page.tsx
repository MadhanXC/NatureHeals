
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import Image from "next/image"
import { Zap, Activity, ShieldCheck, HeartPulse, Info } from "lucide-react"

export default function AcupuncturePage() {
  const acuImg = PlaceHolderImages.find(img => img.id === "acupuncture-detail")

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary/10 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
                  <Activity className="h-4 w-4" />
                  <span>Ancient Healing Wisdom</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold font-headline leading-tight">
                  Acupuncture: <br />
                  Restoring the <span className="text-primary italic">Flow of Life</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Acupuncture is a key component of traditional medicine that involves inserting extremely 
                  thin needles through your skin at strategic points on your body. Most commonly used to 
                  treat pain, it is increasingly being used for overall wellness, including stress management.
                </p>
              </div>
              <div className="flex-1 relative aspect-square w-full max-w-md rounded-[3rem] overflow-hidden shadow-2xl ring-8 ring-white">
                {acuImg && (
                  <Image 
                    src={acuImg.imageUrl}
                    alt="Detailed view of acupuncture needles"
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* The Meridian System */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-headline font-bold">The Meridian System</h2>
                <div className="h-1 w-20 bg-accent mx-auto" />
                <p className="text-lg text-muted-foreground">
                  Traditional Chinese Medicine explains acupuncture as a technique for balancing the flow 
                  of energy or life force — known as Qi (chee) — believed to flow through 14 main pathways 
                  (meridians) in your body.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { 
                    title: "Energy Pathways", 
                    desc: "By inserting needles into specific points along these meridians, acupuncture practitioners believe that your energy flow will re-balance.",
                    icon: <Zap className="h-6 w-6" />
                  },
                  { 
                    title: "Nervous System", 
                    desc: "In contrast, many Western practitioners view the acupuncture points as places to stimulate nerves, muscles and connective tissue.",
                    icon: <Activity className="h-6 w-6" />
                  },
                  { 
                    title: "Natural Painkillers", 
                    desc: "This stimulation boosts your body's natural painkillers (endorphins) and increases blood flow to localized areas.",
                    icon: <HeartPulse className="h-6 w-6" />
                  },
                  { 
                    title: "Holistic Homeostasis", 
                    desc: "The ultimate goal is to restore the body's natural state of homeostatis, allowing it to heal itself without drugs.",
                    icon: <ShieldCheck className="h-6 w-6" />
                  }
                ].map((item, i) => (
                  <div key={i} className="p-8 border rounded-3xl space-y-4 hover:shadow-lg transition-all group">
                    <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-headline">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Points Section */}
        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl space-y-10 border">
              <div className="flex items-center gap-4 text-accent">
                <Info className="h-8 w-8" />
                <h2 className="text-3xl font-headline font-bold">What to Expect</h2>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold font-headline text-primary">1. Assessment</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Healer Vasanthi performs a thorough pulse and tongue diagnosis, a traditional method to 
                    gauge the internal state of your organs and energy flow.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold font-headline text-primary">2. Needle Insertion</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Extremely fine, sterile needles are inserted to various depths at specific acupuncture points. 
                    Most people feel very little pain as the needles are inserted.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold font-headline text-primary">3. The Sensation</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    You may feel a mild aching sensation when a needle reaches the correct depth. 
                    This is often a sign that the Qi is being activated.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t">
                <p className="italic text-center text-muted-foreground">
                  "Acupuncture doesn't just treat the symptoms; it awakens the healer within you."
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
