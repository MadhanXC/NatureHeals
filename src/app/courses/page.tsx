
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, ArrowRight } from "lucide-react"
import { COURSES } from "@/app/lib/courses"

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary py-24 text-primary-foreground relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold font-headline mb-6">Learning the Path of Healing</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Professional certification programs for both aspiring healers and seasoned practitioners.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32" />
        </section>

        {/* Catalog */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
              {COURSES.map((course) => (
                <div key={course.id} className="group bg-card border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {course.image && (
                      <Image 
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
                        {course.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" /> {course.students}
                      </div>
                      <div className="flex items-center gap-1 text-accent font-bold">
                        <Star className="h-4 w-4 fill-current" /> {course.rating}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold font-headline group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-muted-foreground leading-relaxed h-12 overflow-hidden">{course.description}</p>
                    <div className="pt-4 border-t">
                      <Button asChild className="w-full bg-accent hover:bg-accent/90">
                        <Link href={`/courses/enroll/${course.id}`}>
                          Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment CTA */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-8">
            <h2 className="text-4xl font-headline font-bold">Unsure where to start?</h2>
            <p className="text-xl text-muted-foreground">
              Speak with our lead instructor for a personalized learning roadmap based on your goals.
            </p>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full h-14 px-10 text-lg">
              <Link href="/contact">Request Academic Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
