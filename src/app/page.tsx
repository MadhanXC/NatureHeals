import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { MeditationPlayer } from "@/components/MeditationPlayer"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import { COURSES } from "@/app/lib/courses"
import { 
  ArrowRight, 
  Sparkles, 
  Wind, 
  Sun, 
  Heart,
  Calendar,
  GraduationCap
} from "lucide-react"

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-nature")
  const meditationImg = PlaceHolderImages.find(img => img.id === "meditation-zen")
  const healerImg = PlaceHolderImages.find(img => img.id === "healer-vasanthi")
  
  // Select courses to display
  const featuredCourse = COURSES[0]
  const sideCourses = COURSES.slice(1, 4)

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center pt-16 lg:pt-32 pb-16 overflow-hidden bg-background">
          <div className="absolute inset-0 z-0 opacity-10">
            {heroImg && (
              <Image 
                src={heroImg.imageUrl}
                alt="Nature Background"
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium border border-primary/20 mx-auto lg:mx-0">
                  <Sparkles className="h-4 w-4" />
                  <span>Restoring Balance Since 2012</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-headline leading-tight text-foreground text-balance">
                  Nature Heals: <br />
                  <span className="text-primary italic">Wisdom</span> in Wellness.
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Connect with the ancient arts of healing. Under the expert guidance of Healer Vasanthi, 
                  we provide the tools for your journey back to harmony and health.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-14 rounded-full w-full sm:w-auto">
                    <Link href="/courses">Explore Courses</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-300 text-lg px-8 h-14 rounded-full w-full sm:w-auto">
                    <Link href="/about">Our Story</Link>
                  </Button>
                </div>
              </div>

              <div className="flex-1 relative w-full max-w-[500px]">
                <div className="relative aspect-square">
                  <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] sm:rounded-[3rem] -rotate-3" />
                  <div className="absolute -inset-4 bg-accent/5 rounded-[2rem] sm:rounded-[3rem] rotate-3" />
                  
                  <div className="relative h-full w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 sm:ring-8 ring-white">
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

                  <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-primary/10 hidden sm:flex items-center gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-foreground">Healer Vasanthi</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Master Diploma in Acupuncture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid - Core Pillars of Healing */}
        <section className="py-16 lg:py-24 bg-secondary/30 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground">Core Pillars of Healing</h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
              <p className="text-base lg:text-lg text-muted-foreground">We focus on holistic recovery by integrating four fundamental wellness practices.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { 
                  icon: <Sun className="h-8 w-8" />, 
                  title: "Acupuncture", 
                  href: "/practices/acupuncture",
                  desc: "Traditional needle therapy to unblock energy channels and relieve chronic pain." 
                },
                { 
                  icon: <Wind className="h-8 w-8" />, 
                  title: "Pranayama", 
                  href: "/practices/breathing",
                  desc: "Scientific breathing techniques to calm the nervous system and increase vitality." 
                },
                { 
                  icon: <Heart className="h-8 w-8" />, 
                  title: "Naturopathy", 
                  href: "/practices/naturopathy",
                  desc: "Using natural elements like water, air, and sun to trigger self-healing." 
                },
                { 
                  icon: <Calendar className="h-8 w-8" />, 
                  title: "Rejuvenation Camps", 
                  href: "/camps",
                  desc: "Immersive rejuvenation retreats designed for deep physiological cleansing." 
                },
              ].map((feature, i) => (
                <div key={i} className="group relative p-6 sm:p-8 bg-white border border-transparent rounded-[2rem] transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1">
                  <div className="mb-6 h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-6 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 font-headline text-foreground">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed font-light">{feature.desc}</p>
                  <Link href={feature.href} className="text-accent font-bold inline-flex items-center text-sm sm:text-base group-hover:gap-3 transition-all">
                    Explore deeper <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlight Section: Meditation */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
              <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-headline font-bold leading-tight">Guided Meditation: <br />The Portal to Peace</h2>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed italic">
                  "The soul always knows what to do to heal itself. The challenge is to silence the mind."
                </p>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Our meditation modules range from beginner mindfulness to advanced techniques, 
                  helping you build a resilient mind and a radiant presence.
                </p>
                <div className="pt-4 flex justify-center lg:justify-start">
                  <MeditationPlayer 
                    buttonText="Try Free Session" 
                    buttonClassName="rounded-full px-10 w-full sm:w-auto"
                    containerClassName="w-full sm:w-auto"
                  />
                </div>
              </div>
              <div className="flex-1 relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
                <div className="absolute inset-4 sm:inset-8 rounded-full border-2 border-accent/20 animate-pulse delay-700" />
                {meditationImg && (
                  <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image 
                      src={meditationImg.imageUrl}
                      alt={meditationImg.description}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Stories of Healing - Testimonials */}
        <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-2xl" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-white">Stories of Healing</h2>
              <p className="text-lg lg:text-xl text-primary-foreground/80 font-light">Real experiences from those who found balance and health through natural wisdom.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: "Latha",
                  role: "Accountant, Madurai",
                  text: "I experienced a weird feeling and palpitation in my heart. Healer Vasanthi identified it as being related to my cycle and anaemia. I got free from palpitation on the very first day of acupuncture treatment."
                },
                {
                  name: "Monisha",
                  role: "Housewife, Madurai",
                  text: "Suffering from severe abdomen pain during pregnancy, I was told I needed surgery. Healer Vasanthi's acupuncture and nutritional guidance reduced my pain and allowed for a healthy, normal delivery."
                },
                {
                  name: "Parameswari",
                  role: "Idukki, Kerala",
                  text: "In 2018, I found a breast tumour. Healer Vasanthi treated me with acupuncture and seed therapy. Within a month, the tumour was gone and I haven't experienced any pain since. Truly grateful."
                }
              ].map((t, i) => (
                <div key={i} className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-2xl transition-transform duration-300 flex flex-col justify-between group border border-primary/5">
                  <div className="space-y-4">
                    <Sparkles className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    <p className="text-base sm:text-lg italic text-foreground leading-relaxed font-light">"{t.text}"</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-secondary flex items-center gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base text-foreground">{t.name}</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Preview */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 lg:mb-16 gap-4">
              <div className="max-w-xl space-y-4 text-center md:text-left">
                <h2 className="text-3xl lg:text-4xl font-headline font-bold">Certification Courses</h2>
                <p className="text-base lg:text-lg text-muted-foreground">Deepen your knowledge and become a certified practitioner in various healing arts.</p>
              </div>
              <Button asChild variant="ghost" className="text-primary hover:bg-primary/5 hidden md:flex">
                <Link href="/courses">View All Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="group relative rounded-3xl overflow-hidden shadow-xl aspect-video lg:aspect-[16/9]">
                {featuredCourse.image && (
                  <Image 
                    src={featuredCourse.image}
                    alt={featuredCourse.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 sm:p-12 flex flex-col justify-end text-white">
                  <div className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold w-fit mb-4">LATEST ENROLLMENT</div>
                  <h3 className="text-xl sm:text-3xl font-bold font-headline mb-4">{featuredCourse.title}</h3>
                  <p className="text-sm sm:text-base text-white/80 max-w-md mb-6 line-clamp-2">{featuredCourse.description}</p>
                  <Button asChild variant="default" className="bg-white text-primary hover:bg-white/90 w-full sm:w-fit rounded-full">
                    <Link href={`/courses/enroll/${featuredCourse.id}`}>Learn More</Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {sideCourses.map((course) => (
                  <Link 
                    key={course.id} 
                    href={`/courses/enroll/${course.id}`}
                    className="flex items-center p-4 sm:p-6 bg-background border rounded-2xl hover:border-accent transition-all group shadow-sm hover:shadow-md"
                  >
                    <div className="flex-grow">
                      <div className="flex gap-3 mb-2">
                        <span className="text-[10px] font-bold text-accent uppercase tracking-wider">{course.category}</span>
                        <span className="text-[10px] text-muted-foreground">• {course.duration}</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold font-headline group-hover:text-primary transition-colors">{course.title}</h4>
                    </div>
                    <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 text-accent rounded-full border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
                <Button asChild variant="outline" className="w-full md:hidden rounded-full h-12 border-primary text-primary mt-4">
                  <Link href="/courses">View All Courses</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
