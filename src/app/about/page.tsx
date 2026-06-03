
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import Image from "next/image"
import { Leaf, GraduationCap, Award, History, Heart } from "lucide-react"

export default function AboutPage() {
  const healerImg = PlaceHolderImages.find(img => img.id === "healer-vasanthi")
  const mentorImg = PlaceHolderImages.find(img => img.id === "mentor-david")

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Philosophy Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest">
                <Leaf className="h-4 w-4" />
                <span>Our Philosophy</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold font-headline text-foreground leading-tight">
                Harmony in <span className="text-primary italic">Nature</span>
              </h1>
              <div className="space-y-6 text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                <p>
                  We believe NATURE offers us everything to live a Healthy and Happy life. 
                  Coexisting with Nature is the best way of life.
                </p>
              
              </div>
            </div>
          </div>
        </section>

        {/* Healer Section */}
        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="flex-1 relative aspect-square w-full max-w-md rounded-3xl overflow-hidden shadow-2xl mx-auto lg:mx-0 ring-8 ring-white">
                {healerImg && (
                  <Image 
                    src={healerImg.imageUrl}
                    alt={healerImg.description}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-sm font-bold text-accent uppercase tracking-widest">Our Expert</h2>
                  <h3 className="text-5xl font-bold font-headline text-primary uppercase">Healer Vasanthi</h3>
                  <div className="h-1 w-20 bg-accent" />
                </div>
                
                <div className="prose prose-slate lg:prose-lg text-muted-foreground leading-relaxed">
                  <p className="text-xl font-medium text-foreground mb-4">
                    Healer Vasanthi is a licensed Acupuncturist based in Madurai, Tamil Nadu, 
                    and a Master Diploma holder in Acupuncture from BSS.
                  </p>
                  <p>
                    With a postgraduate degree in Sociology, her prime mission is to foster a healthier 
                    society through natural lifestyles. She bases her practice on entirely 
                    non-medicinal therapies, focusing on the body's innate ability to heal without drugs.
                  </p>
                  <p>
                    A dedicated educator, she has served as a tutor at Arokialaya, a renowned institute 
                    for acupuncture training in Madurai. Today, she continues to empower others through 
                    both live classroom sessions and online training, offering specialized short courses 
                    in non-medicinal healing arts.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-bold text-sm">Master Diploma</p>
                      <p className="text-xs text-muted-foreground">Acupuncture (BSS)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border">
                    <Award className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-bold text-sm">Specialist</p>
                      <p className="text-xs text-muted-foreground">Non-Medicinal Arts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentor/Legacy Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
              <div className="flex-1 relative aspect-square w-full max-w-md rounded-3xl overflow-hidden shadow-2xl mx-auto lg:mx-0 ring-8 ring-secondary/20">
                {mentorImg && (
                  <Image 
                    src={mentorImg.imageUrl}
                    alt={mentorImg.description}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-sm font-bold text-accent uppercase tracking-widest">Our Legacy</h2>
                  <h3 className="text-5xl font-bold font-headline text-primary uppercase">Mr. Y. David</h3>
                  <div className="h-1 w-20 bg-accent" />
                </div>
                
                <div className="prose prose-slate lg:prose-lg text-muted-foreground leading-relaxed">
                  <p className="text-xl font-medium text-foreground mb-4">
                    Mr. Y. David, widely revered as the 'Father of NGOs' in Tamil Nadu, was a visionary 
                    leader and the founder of PEAL (People’s Education for Action and Liberation).
                  </p>
                  <p>
                    For over 50 years, his organization served the community of Madurai. A passionate 
                    environmentalist, he dedicated his life to preserving nature. In 1997, he earned his 
                    Master Diploma in Acupuncture and subsequently established 'Arokialaya' to spread 
                    awareness about acupuncture and acupressure.
                  </p>
                  <p>
                    Healer Vasanthi first met Mr. David as his student in 1998. Their shared vision for a 
                    medicine-free institution for health led to a deep mentorship. Today, she carries 
                    forward this mission, pursuing their collective dream of a healthier society with 
                    his blessings.
                  </p>
                </div>

                <div className="flex items-center gap-4 p-6 bg-secondary/10 rounded-2xl border border-secondary/20">
                  <History className="h-8 w-8 text-accent shrink-0" />
                  <p className="text-sm italic text-foreground">
                    "Honoring over five decades of community service and the pioneering spirit of 
                    non-medicinal healing in Madurai."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission/Motto */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            <Heart className="h-12 w-12 mx-auto opacity-50 mb-4" />
            <h2 className="text-4xl font-headline font-bold italic text-balance">
              "Making a Society have a Healthy lifestyle is Healer Vasanthi's Prime Motto."
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto" />
            <p className="text-lg opacity-80">
              Dedicated to success in treating diseases and disorders through the profound 
              wisdom of traditional, drug-free healing.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
