
import { PlaceHolderImages } from "@/app/lib/placeholder-images"

export interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  students: string;
  rating: string;
  image: string | undefined;
  description: string;
}

export const COURSES: Course[] = [
  {
    id: "acu-fund",
    title: "Acupuncture Fundamentals",
    category: "Acupuncture",
    duration: "12 Weeks",
    students: "1,200+",
    rating: "4.9",
    image: PlaceHolderImages.find(img => img.id === "acupuncture-detail")?.imageUrl,
    description: "Learn the primary meridians and common acupuncture points used in basic clinical practice."
  },
  {
    id: "acu-adv",
    title: "Advanced Meridian Theory",
    category: "Acupuncture",
    duration: "16 Weeks",
    students: "850+",
    rating: "4.8",
    image: PlaceHolderImages.find(img => img.id === "meridian-theory")?.imageUrl,
    description: "A deep dive into complex energy pathways and therapeutic strategies for chronic conditions."
  },
  {
    id: "prana-mastery",
    title: "Pranayama & Breathwork Mastery",
    category: "Breathing",
    duration: "8 Weeks",
    students: "1,500+",
    rating: "4.9",
    image: PlaceHolderImages.find(img => img.id === "breathing-sky")?.imageUrl,
    description: "Master the science of breath to regulate your nervous system, clear mental fog, and unlock vital life-force energy."
  },
  {
    id: "reflex-basic",
    title: "Reflexology Masterclass",
    category: "Reflexology",
    duration: "6 Weeks",
    students: "450+",
    rating: "4.9",
    image: PlaceHolderImages.find(img => img.id === "reflexology-feet")?.imageUrl,
    description: "Master the mapping of body organs on the soles of the feet for holistic relief through pressure point therapy."
  },
  {
    id: "natu-detox",
    title: "Holistic Naturopathic Wellness Mastery",
    category: "Wellness",
    duration: "8 Weeks",
    students: "2,100+",
    rating: "4.9",
    image: PlaceHolderImages.find(img => img.id === "naturopathy-herbs")?.imageUrl,
    description: "Learn how to design detoxification programs using whole foods, herbs, and natural elements."
  },
  {
    id: "mudra-master",
    title: "Mastering Mudras",
    category: "Yoga & Hands",
    duration: "4 Weeks",
    students: "5,000+",
    rating: "5.0",
    image: PlaceHolderImages.find(img => img.id === "mudra-hands")?.imageUrl,
    description: "Harness the power of hand gestures to influence energy flow and emotional state."
  }
]
