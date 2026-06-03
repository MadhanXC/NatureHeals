
"use client"

import * as React from "react"
import { Play, Pause, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function BreathingExercise() {
  const [isActive, setIsActive] = React.useState(false)
  const [phase, setPhase] = React.useState<"Inhale" | "Hold" | "Exhale">("Inhale")
  const [progress, setProgress] = React.useState(0)
  
  const cycleTime = 12000 // 12 seconds per cycle
  const inhaleTime = 4000
  const holdTime = 4000
  const exhaleTime = 4000

  React.useEffect(() => {
    let interval: NodeJS.Timeout
    if (isActive) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + (100 / (cycleTime / 100))
          if (next >= 100) return 0
          return next
        })
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isActive])

  React.useEffect(() => {
    if (progress < (inhaleTime / cycleTime) * 100) {
      setPhase("Inhale")
    } else if (progress < ((inhaleTime + holdTime) / cycleTime) * 100) {
      setPhase("Hold")
    } else {
      setPhase("Exhale")
    }
  }, [progress])

  const toggle = () => setIsActive(!isActive)
  const reset = () => {
    setIsActive(false)
    setProgress(0)
    setPhase("Inhale")
  }

  return (
    <div className="bg-card border rounded-2xl p-8 flex flex-col items-center justify-center space-y-8 shadow-xl max-w-md mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-muted">
        <Progress value={progress} className="rounded-none h-1 bg-primary/20" />
      </div>

      <div className="text-center space-y-2">
        <h3 className="text-2xl font-headline font-bold text-primary">Pranayama Guide</h3>
        <p className="text-muted-foreground text-sm">Box Breathing (4-4-4 Technique)</p>
      </div>

      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Animated breathing circle */}
        <div className={`absolute w-full h-full rounded-full bg-primary/10 transition-transform duration-1000 ease-in-out ${
          phase === "Inhale" ? "scale-110" : 
          phase === "Hold" ? "scale-110" : "scale-75"
        }`} />
        <div className={`absolute w-32 h-32 rounded-full border-4 border-primary flex items-center justify-center transition-all duration-1000 ${
          phase === "Inhale" ? "bg-primary/20" : "bg-transparent"
        }`}>
          <span className="text-xl font-bold text-primary animate-pulse">{phase}</span>
        </div>
      </div>

      <div className="flex gap-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={reset}
          className="rounded-full h-12 w-12"
        >
          <RotateCcw className="h-5 w-5" />
        </Button>
        <Button 
          variant={isActive ? "outline" : "default"}
          size="lg"
          onClick={toggle}
          className={isActive ? "border-primary text-primary" : "bg-primary hover:bg-primary/90"}
        >
          {isActive ? <><Pause className="mr-2 h-4 w-4" /> Pause</> : <><Play className="mr-2 h-4 w-4" /> Start</>}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center italic">
        Find a comfortable position. Breathe deeply through your nose.
      </p>
    </div>
  )
}
