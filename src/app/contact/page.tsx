
"use client"

import * as React from "react"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, MessageSquare, AlertCircle, CheckCircle2 } from "lucide-react"
import { useFirestore } from "@/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { errorEmitter } from "@/firebase/error-emitter"
import { FirestorePermissionError } from "@/firebase/errors"
import { isFirebaseConfigValid } from "@/firebase/config"

export default function ContactPage() {
  const { toast } = useToast()
  const db = useFirestore()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!isFirebaseConfigValid()) {
      toast({
        variant: "destructive",
        title: "Setup Incomplete",
        description: "Firebase credentials missing in .env file.",
      })
      return
    }

    if (!db) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Database connection failed.",
      })
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)
    
    const honeypot = formData.get('hp_field') as string
    if (honeypot) {
      setIsSuccess(true)
      return
    }

    setIsSubmitting(true)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      inquiryType: formData.get('inquiryType') as string,
      message: formData.get('message') as string,
      createdAt: serverTimestamp(),
    }

    const inquiriesRef = collection(db, "inquiries")
    
    addDoc(inquiriesRef, data)
      .then(() => {
        setIsSuccess(true)
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you soon.",
        })
      })
      .catch(async (err) => {
        if (err.code === 'permission-denied' || err.message?.includes('permission')) {
          const permissionError = new FirestorePermissionError({
            path: inquiriesRef.path,
            operation: 'create',
            requestResourceData: data,
          });
          errorEmitter.emit('permission-error', permissionError);
        } else {
          toast({
            variant: "destructive",
            title: "Error sending message",
            description: err.message || "Please check your internet connection.",
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
      <main className="flex-grow py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                  <MessageSquare className="h-4 w-4" />
                  <span>General Inquiry</span>
                </div>
                <h1 className="text-5xl font-bold font-headline text-primary">Get in Touch</h1>
                {!isFirebaseConfigValid() && (
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-xl flex items-center gap-4 text-destructive">
                    <AlertCircle className="h-5 w-5" />
                    <p className="text-sm">Firebase is not configured. Form submissions are disabled.</p>
                  </div>
                )}
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Have questions about our rejuvenation camps, certification courses, or 
                  traditional healing practices? Our community team is here to help.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="bg-accent/10 p-4 rounded-2xl text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-muted-foreground">naturehealswc@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-accent/10 p-4 rounded-2xl text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+91 98651 47190</p>
                    <p className="text-muted-foreground">Mon - Sat, 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-accent/10 p-4 rounded-2xl text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">Madurai, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-[2.5rem] p-8 md:p-12 shadow-xl">
              {isSuccess ? (
                <div className="text-center py-12 space-y-6 animate-in fade-in duration-500">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-primary">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h2 className="text-2xl font-bold font-headline">Message Sent!</h2>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We have received your message and will respond as soon as possible.
                  </p>
                  <Button variant="outline" className="rounded-xl" disabled>
                    Inquiry Submitted
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold font-headline mb-8">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="hidden" aria-hidden="true">
                      <Label htmlFor="hp_field">Ignore this field</Label>
                      <Input name="hp_field" id="hp_field" tabIndex={-1} autoComplete="off" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input name="name" id="name" placeholder="John Doe" required className="rounded-xl border-muted focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input name="email" id="email" type="email" placeholder="john@example.com" required className="rounded-xl border-muted focus:border-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <select name="inquiryType" id="inquiryType" className="w-full flex h-10 rounded-xl border border-muted bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Rejuvenation Camps">Rejuvenation Camps</option>
                        <option value="Certification Courses">Certification Courses</option>
                        <option value="Community Outreach">Community Outreach</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea name="message" id="message" placeholder="How can we help you today?" rows={6} className="rounded-xl border-muted focus:border-primary" />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-lg rounded-2xl h-14 text-white" disabled={isSubmitting}>
                      {isSubmitting ? "Processing..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
