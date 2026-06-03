
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"

export default function PolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-slate lg:prose-lg max-w-none space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold font-headline text-primary">Policies & Terms</h1>
              <p className="text-xl text-muted-foreground italic">Last Updated: May 2024</p>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold font-headline">Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Nature Heals, your privacy is sacred. We collect only necessary information to facilitate your healing journey and 
                educational experience. We never sell your data to third parties. All personal health information shared during 
                consultations is protected by strict confidentiality agreements.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold font-headline">Course Enrollment & Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Enrollment in our certification courses requires a 25% non-refundable deposit to secure your spot. 
                Full refunds (minus deposit) are available up to 30 days before the course start date. 
                Within 30 days, we offer credit toward future courses.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold font-headline">Sanctuary Code of Conduct</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our rejuvenation camps are spaces of silence and respect. Guests are required to silence mobile devices and 
                refrain from photography in treatment areas to preserve the collective serenity of the camp.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold font-headline">Medical Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                While our methods are rooted in traditional healing arts, they are not intended as a substitute for 
                professional medical advice, diagnosis, or treatment. Always seek the advice of your physician 
                with any questions you may have regarding a medical condition.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
