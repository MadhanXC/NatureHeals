
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import Image from "next/image"
import { Calendar, Heart, Sparkles, Waves, Users, Gavel, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function CampsPage() {
  const camp6thImg = PlaceHolderImages.find(img => img.id === "camp-2017-6th")
  const campHCImg = PlaceHolderImages.find(img => img.id === "camp-2017-hc")
  const camp2016Img = PlaceHolderImages.find(img => img.id === "camp-2016")
  const camp2015Img = PlaceHolderImages.find(img => img.id === "camp-2015")
  const heroImg = PlaceHolderImages.find(img => img.id === "camp-retreat")

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            {heroImg && (
              <Image 
                src={heroImg.imageUrl}
                alt="Rejuvenation Camp Background"
                fill
                className="object-cover brightness-50"
                priority
              />
            )}
          </div>
          <div className="container relative z-10 px-4 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">Healing Communities</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-light opacity-90 text-balance">
              Spreading the wisdom of natural therapy through camps and community outreach.
            </p>
          </div>
        </section>

        {/* Camp List */}
        <div className="py-24 space-y-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 1. Camp 2015 - OLDEST FIRST */}
            <div className="bg-card border rounded-[2rem] overflow-hidden shadow-xl flex flex-col lg:flex-row mb-24">
              <div className="flex-1 p-8 md:p-12 space-y-6 flex flex-col justify-center order-1 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest w-fit">
                  <Calendar className="h-4 w-4" />
                  <span>December 2015</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary uppercase">Rejuvenation Camp – December 2015</h2>
                <div className="prose prose-slate lg:prose-lg text-muted-foreground leading-relaxed font-light">
                  <p>
                    Nature Heals conducted a 48-hour rejuvenation camp in Madurai to refresh body and mind. Participants enjoyed traditional foods, games, and the creative joy of mud sculpting on the theme "Pongal".
                  </p>
                  <p>
                    They learned that being in resonance with nature is the true fulfillment of human life.
                  </p>
                  <p className="italic text-foreground font-medium">
                    "Participants left feeling thrilled and completely rejuvenated by the experience."
                  </p>
                </div>
              </div>
              <div className="flex-1 min-h-[400px] relative bg-secondary/5 order-2 lg:order-2 border-t lg:border-t-0 lg:border-l">
                {camp2015Img && (
                  <Image 
                    src={camp2015Img.imageUrl} 
                    alt={camp2015Img.description}
                    fill
                    className="object-contain p-4"
                  />
                )}
              </div>
            </div>

            {/* 2. Camp 2016 */}
            <div className="bg-card border rounded-[2rem] overflow-hidden shadow-xl flex flex-col lg:flex-row-reverse mb-24">
              <div className="flex-1 p-8 md:p-12 space-y-6 flex flex-col justify-center order-1 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest w-fit">
                  <Calendar className="h-4 w-4" />
                  <span>February 2016</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary uppercase">Rejuvenation Camp – February 2016</h2>
                <div className="prose prose-slate lg:prose-lg text-muted-foreground leading-relaxed font-light">
                  <p>
                    Nature Heals organized a 48-hour rejuvenation camp in Madurai. Men and women of all ages participated and benefited in many ways.
                  </p>
                  <p>
                    The camp focused on non-medicinal therapies, traditional foods, yoga, and exercise. A notable highlight was a woman aged 75 who actively participated in every single event.
                  </p>
                  <p className="italic text-foreground font-medium">
                    "Rediscovering the joy of traditional indoor and outdoor games and the benefits of scientific lifestyle."
                  </p>
                </div>
              </div>
              <div className="flex-1 min-h-[400px] relative bg-secondary/5 order-2 lg:order-2 border-t lg:border-t-0 lg:border-r">
                {camp2016Img && (
                  <Image 
                    src={camp2016Img.imageUrl} 
                    alt={camp2016Img.description}
                    fill
                    className="object-contain p-4"
                  />
                )}
              </div>
            </div>

            {/* 3. Camp High Court 2017 */}
            <div className="bg-card border rounded-[2rem] overflow-hidden shadow-xl flex flex-col lg:flex-row mb-24">
              <div className="flex-1 p-8 md:p-12 space-y-6 flex flex-col justify-center order-1 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest w-fit">
                  <Gavel className="h-4 w-4" />
                  <span>March 2017</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary uppercase">Free Non-Medicine Therapy Camp – High Court</h2>
                <div className="prose prose-slate lg:prose-lg text-muted-foreground leading-relaxed font-light">
                  <p>
                    Nature Heals Wellness Centre, in association with the MBHAA sangam of the Madurai Bench, Chennai High Court, conducted a one-day free consultation camp in March 2017.
                  </p>
                  <p>
                    Over 200 High Court officials attended, showing great interest in natural therapies for their health issues.
                  </p>
                  <p className="italic text-foreground font-medium">
                    "Expert consultations were provided in Acupuncture, Reflexology, Food Therapy, Mudras, Pranayamam, and Yoga."
                  </p>
                </div>
              </div>
              <div className="flex-1 min-h-[400px] relative bg-secondary/5 order-2 lg:order-2 border-t lg:border-t-0 lg:border-l">
                {campHCImg && (
                  <Image 
                    src={campHCImg.imageUrl} 
                    alt={campHCImg.description}
                    fill
                    className="object-contain p-4"
                  />
                )}
              </div>
            </div>

            {/* 4. Camp 6th Battalion 2017 */}
            <div className="bg-card border rounded-[2rem] overflow-hidden shadow-xl flex flex-col lg:flex-row-reverse">
              <div className="flex-1 p-8 md:p-12 space-y-6 flex flex-col justify-center order-1 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest w-fit">
                  <ShieldCheck className="h-4 w-4" />
                  <span>March 2017</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary uppercase">Free Non-Medicine Therapy Camp – Madurai 6th Battalion</h2>
                <div className="prose prose-slate lg:prose-lg text-muted-foreground leading-relaxed font-light">
                  <p>
                    Nature Heals Wellness Centre, in association with the 6th Battalion, Madurai, conducted a one-day free non-medicinal therapy and consultation camp in March 2017.
                  </p>
                  <p>
                    More than 250 police personnel participated, showing deep interest in non-medicinal therapies. They sought consultation for specific health issues and general wellness for themselves and their families.
                  </p>
                  <p className="italic text-foreground font-medium">
                    "Participants gained awareness about Acupuncture, Reflexology, Food Therapy, Mudras, Yoga, and Pranayamam."
                  </p>
                </div>
              </div>
              <div className="flex-1 min-h-[400px] relative bg-secondary/5 order-2 lg:order-2 border-t lg:border-t-0 lg:border-r">
                {camp6thImg && (
                  <Image 
                    src={camp6thImg.imageUrl} 
                    alt={camp6thImg.description}
                    fill
                    className="object-contain p-4"
                  />
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            <h2 className="text-4xl font-headline font-bold">Ready to Resonate with Nature?</h2>
            <p className="text-xl opacity-90 font-light">
              Join our upcoming sessions and feel the betterment in your health. 
              Experience the joy of coexisting in harmony with the natural world.
            </p>
            <div className="pt-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-12 h-14 rounded-full">
                <Link href="/contact">Inquire About Next Camp</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
