
"use client"

import * as React from "react"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Sparkles, Video, Clock, Send, AlertCircle, CheckCircle2 } from "lucide-react"
import { useFirestore } from "@/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { errorEmitter } from "@/firebase/error-emitter"
import { FirestorePermissionError } from "@/firebase/errors"
import { isFirebaseConfigValid } from "@/firebase/config"

export default function ConsultationPage() {
  const { toast } = useToast()
  const db = useFirestore()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
    timePreference: "",
    message: "",
    hp_field: "" 
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isFirebaseConfigValid()) {
      toast({
        variant: "destructive",
        title: "Configuration Missing",
        description: "Please add your Firebase keys to the .env file to enable form submissions.",
      })
      return
    }

    if (!db) {
      toast({
        variant: "destructive",
        title: "Database Error",
        description: "Firestore instance is not available. Please refresh the page.",
      })
      return
    }

    // Honeypot check
    if (formData.hp_field) {
      setIsSuccess(true)
      return
    }

    setIsSubmitting(true)
    
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      issue: formData.issue,
      timePreference: formData.timePreference,
      message: formData.message,
      createdAt: serverTimestamp(),
    }

    const consultationsRef = collection(db, "consultations")
    
    addDoc(consultationsRef, data)
      .then(() => {
        setIsSuccess(true)
        toast({
          title: "Request Sent Successfully",
          description: "Healer Vasanthi's team will contact you to schedule your session.",
        })
      })
      .catch(async (err) => {
        if (err.code === 'permission-denied' || err.message?.includes('permission')) {
          const permissionError = new FirestorePermissionError({
            path: consultationsRef.path,
            operation: 'create',
            requestResourceData: data,
          });
          errorEmitter.emit('permission-error', permissionError);
        } else {
          toast({
            variant: "destructive",
            title: "Submission Failed",
            description: "Check your internet connection and Firebase project settings.",
          })
        }
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold font-headline text-balance text-white">Online Healing Consultation</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
              Experience the benefits of non-medicinal therapies from the comfort of your home. 
              Book a personalized session with Healer Vasanthi.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        </section>

        {!isFirebaseConfigValid() && (
          <div className="container mx-auto px-4 mt-8">
            <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-xl flex items-center gap-4 text-destructive">
              <AlertCircle className="h-5 w-5" />
              <p className="text-sm"><strong>Developer Note:</strong> Firebase environment variables are missing. Form submissions are currently disabled.</p>
            </div>
          </div>
        )}

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-4xl font-headline font-bold text-primary">How Online Sessions Work</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our digital consultations are designed to be as effective as in-person visits, 
                    focusing on root-cause analysis and natural lifestyle adjustments.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="bg-primary/10 p-4 rounded-2xl text-primary h-fit shrink-0">
                      <Video className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Video Assessment</h3>
                      <p className="text-muted-foreground">A deep-dive video call to discuss your health history and current concerns.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="bg-primary/10 p-4 rounded-2xl text-primary h-fit shrink-0">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Customized Protocol</h3>
                      <p className="text-muted-foreground">Receive a personalized plan including food therapy, mudras, and breathing exercises.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="bg-primary/10 p-4 rounded-2xl text-primary h-fit shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Follow-up Support</h3>
                      <p className="text-muted-foreground">Continuous guidance to ensure you are on the right path to natural recovery.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative h-fit">
                {isSuccess ? (
                  <div className="text-center py-12 space-y-6 animate-in fade-in duration-500">
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-primary">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h2 className="text-3xl font-bold font-headline">Request Received!</h2>
                    <p className="text-muted-foreground">
                      Thank you for your interest. We have received your consultation request and will be in touch shortly to schedule your session.
                    </p>
                    <div className="pt-4">
                      <Button variant="outline" className="rounded-full" disabled>
                        Request Already Sent
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="absolute top-0 right-12 -translate-y-1/2 bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Limited Availability
                    </div>
                    
                    <h2 className="text-3xl font-bold font-headline mb-8">Request a Session</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot Field */}
                      <div className="hidden" aria-hidden="true">
                        <Label htmlFor="hp_field">Ignore this field</Label>
                        <Input 
                          id="hp_field" 
                          tabIndex={-1} 
                          autoComplete="off" 
                          value={formData.hp_field}
                          onChange={(e) => setFormData(prev => ({ ...prev, hp_field: e.target.value }))}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name" 
                            placeholder="Anaya Smith" 
                            required 
                            className="rounded-xl"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="anaya@example.com" 
                            required 
                            className="rounded-xl"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+91 00000 00000" 
                          required 
                          className="rounded-xl"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="issue">Primary Health Concern</Label>
                        <Input 
                          id="issue" 
                          placeholder="e.g., Chronic fatigue, digestive issues..." 
                          required 
                          className="rounded-xl"
                          value={formData.issue}
                          onChange={(e) => setFormData(prev => ({ ...prev, issue: e.target.value }))}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time Zone / Slot</Label>
                        <Input 
                          id="time" 
                          placeholder="e.g., IST, Weekday Evenings" 
                          className="rounded-xl"
                          value={formData.timePreference}
                          onChange={(e) => setFormData(prev => ({ ...prev, timePreference: e.target.value }))}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Context (Optional)</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us more about your lifestyle or healing goals..." 
                          rows={4} 
                          className="rounded-xl"
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        />
                      </div>

                      <div className="pt-4">
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-accent hover:bg-accent/90 text-lg py-7 rounded-2xl text-white" 
                          disabled={isSubmitting || !isFirebaseConfigValid()}
                        >
                          {isSubmitting ? "Sending Request..." : "Request Online Consultation"} <Send className="ml-2 h-4 w-4" />
                        </Button>
                        <p className="text-center text-xs text-muted-foreground mt-4 italic">
                          Healer Vasanthi personally reviews all consultation requests.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
