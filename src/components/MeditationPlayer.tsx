
'use client';

import * as React from 'react';
import { Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface MeditationPlayerProps {
  buttonText?: string;
  buttonClassName?: string;
  containerClassName?: string;
}

export function MeditationPlayer({ 
  buttonText = "Begin a Free Session", 
  buttonClassName,
  containerClassName 
}: MeditationPlayerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handleClose = () => {
    setIsOpen(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <div className={cn("text-center", containerClassName)}>
        <Button 
          size="lg" 
          className={cn("bg-accent hover:bg-accent/90 px-12 rounded-full h-14 text-lg transition-all shadow-lg hover:shadow-accent/20", buttonClassName)}
          onClick={() => setIsOpen(true)}
        >
          {buttonText}
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md bg-white rounded-3xl border-none shadow-2xl">
          <DialogHeader className="space-y-4">
            <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary">
              <Volume2 className="h-8 w-8" />
            </div>
            <DialogTitle className="text-center text-2xl font-headline font-bold">
              Guided Meditation
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground">
              Find a quiet space, sit comfortably, and let the voice guide you.
            </DialogDescription>
          </DialogHeader>

          <div className="py-6 flex flex-col items-center justify-center space-y-6">
            <div className="p-6 bg-secondary/30 rounded-2xl w-full text-center border border-primary/5">
              <p className="italic text-foreground leading-relaxed font-medium">
                "Finding Stillness: A 5-minute introduction to mindfulness and inner peace."
              </p>
            </div>
            
            <div className="w-full bg-secondary/10 p-4 rounded-xl border border-secondary">
              <audio 
                controls 
                ref={audioRef}
                className="w-full h-10"
              >
                <source src="https://actions.google.com/sounds/v1/ambiences/morning_birds.ogg" type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <div className="space-y-2 text-center">
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">Estimated Duration: 05:00</p>
              <p className="text-xs text-muted-foreground italic">
                Connect your headphones for the best experience.
              </p>
            </div>
          </div>

          <div className="flex justify-center pb-2">
            <Button 
              variant="ghost" 
              onClick={handleClose} 
              className="rounded-full px-8 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-bold"
            >
              End Session
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
