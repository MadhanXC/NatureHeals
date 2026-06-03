
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import Image from "next/image"
import { HeartPulse, Waves, Sparkles, Map } from "lucide-react"

export default function ReflexologyPage() {
  const reflexImg = PlaceHolderImages.find(img => img.id === "reflexology-feet")

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase">
                  <HeartPulse className="h-4 w-4" />
                  <span>Therapeutic Touch</span>
                </div>
                <h1 className="text-5xl font-bold font-headline">The Science of Reflexology</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Reflexology is more than a foot massage. It is a targeted pressure point therapy 
                  that maps the entire body onto the feet, hands, and ears, stimulating natural 
                  healing responses in distant organs.
                </p>
              </div>
              <div className="flex-1 relative aspect-square w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">
                {reflexImg && (
                  <Image 
                    src={reflexImg.imageUrl}
                    alt="Reflexology session"
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-headline font-bold text-center mb-16">How it Heals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: <Waves className="h-10 w-10" />, title: "Circulation", desc: "Increases blood flow to revitalize tired tissues and improve oxygen delivery." },
                { icon: <Map className="h-10 w-10" />, title: "Mapping", desc: "Accessing deep internal systems through surface-level terminal points." },
                { icon: <Sparkles className="h-10 w-10" />, title: "Neural Relief", desc: "Interrupting pain signals and soothing the central nervous system." }
              ].map((item, i) => (
                <div key={i} className="bg-secondary/20 p-12 rounded-3xl text-center space-y-6">
                  <div className="flex justify-center text-primary">{item.icon}</div>
                  <h3 className="text-2xl font-bold font-headline">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
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
