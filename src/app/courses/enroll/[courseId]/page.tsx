"use client"

import * as React from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { COURSES } from "@/app/lib/courses"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { useFirestore } from "@/firebase"
import { errorEmitter } from "@/firebase/error-emitter"
import { FirestorePermissionError } from "@/firebase/errors"
import { ArrowLeft, Send, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function EnrollPage() {
  const params = useParams()
  const db = useFirestore()
  const { toast } = useToast()
  
  const courseId = params.courseId as string
  const course = COURSES.find(c => c.id === courseId)

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    hp_field: "" 
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  if (!course) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Course not found</h1>
            <Button asChild variant="outline">
              <Link href="/courses"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!db) {
      toast({
        variant: "destructive",
        title: "Setup Incomplete",
        description: "Firebase database is not configured.",
      })
      return
    }

    // Honeypot check
    if (formData.hp_field) {
      setIsSuccess(true)
      return
    }

    setIsSubmitting(true)
    const enrollmentsRef = collection(db, "enrollments")
    const enrollmentData = {
      courseId: course.id,
      courseTitle: course.title,
      studentName: formData.name,
      studentEmail: formData.email,
      studentPhone: formData.phone,
      message: formData.message,
      status: "pending",
      createdAt: serverTimestamp()
    }

    addDoc(enrollmentsRef, enrollmentData)
      .then(() => {
        setIsSuccess(true)
        toast({
          title: "Enrollment Submitted",
          description: "We have received your application.",
        })
      })
      .catch(async (err) => {
        if (err.code === 'permission-denied' || err.message?.includes('permission')) {
          const permissionError = new FirestorePermissionError({
            path: enrollmentsRef.path,
            operation: 'create',
            requestResourceData: enrollmentData,
          });
          errorEmitter.emit('permission-error', permissionError);
        } else {
          toast({
            variant: "destructive",
            title: "Error submitting enrollment",
            description: "Check your internet connection.",
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
      <main className="flex-grow py-16 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-8 hover:bg-primary/10 hover:text-primary transition-colors">
              <Link href="/courses"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Catalog</Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white border rounded-3xl p-8 shadow-sm">
                  <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">You are enrolling in:</h2>
                  <h1 className="text-3xl font-bold font-headline text-primary mb-4">{course.title}</h1>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{course.description}</p>
                  <div className="space-y-4 pt-6 border-t">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                  <h3 className="font-bold mb-4">What happens next?</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] shrink-0">1</div>
                      <span>Submit this enrollment form.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] shrink-0">2</div>
                      <span>Check your email for confirmation.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] shrink-0">3</div>
                      <span>Finalize registration details with our team.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-3 bg-white border rounded-3xl p-8 md:p-12 shadow-xl">
                {isSuccess ? (
                  <div className="text-center py-12 space-y-6 animate-in fade-in duration-500">
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-primary">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h2 className="text-3xl font-bold font-headline">Application Received!</h2>
                    <p className="text-muted-foreground">
                      Thank you for your interest in <strong>{course.title}</strong>. We have received your information and will contact you at <strong>{formData.email}</strong> to finalize your enrollment.
                    </p>
                    <div className="pt-6">
                      <Button asChild variant="outline" className="rounded-full">
                        <Link href="/courses">Browse Other Courses</Link>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold font-headline mb-8">Personal Information</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot Field */}
                      <div className="hidden" aria-hidden="true">
                        <Label htmlFor="hp_field">Ignore this field</Label>
                        <Input 
                          id="hp_field" 
                          tabIndex={-1} 
                          autoComplete="off" 
                          value={formData.hp_field}
                          onChange={(e) => setFormData({...formData, hp_field: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Anaya Smith" 
                          required 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="anaya@example.com" 
                            required 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="+91 00000 00000" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="rounded-xl"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Why are you interested in this course? (Optional)</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your background or healing goals..." 
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="pt-4">
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-accent hover:bg-accent/90 text-lg py-7 rounded-2xl text-white" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Processing..." : "Submit Enrollment Request"} <Send className="ml-2 h-4 w-4" />
                        </Button>
                        <p className="text-center text-xs text-muted-foreground mt-4 italic">
                          No payment is required today. We will contact you with registration details.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
