import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      <div className="absolute inset-0 z-0">
         <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-20"
          data-ai-hint="abstract technology"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      <div className="container px-4 md:px-6 text-center z-10">
        <div className="grid gap-6">
          <h1 className="font-headline tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
            The Netflix Theater of Innovation
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
            A dynamic showcase of experience, skill, and creative vision. Explore a curated collection of projects that blend technical expertise with mission-driven impact.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#projects">
                Explore My Work <MoveDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
