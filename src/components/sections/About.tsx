import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Cog, Users } from 'lucide-react';

const skills = [
  'Industrial Mechanics & Millwright Expertise',
  'Precision Engineering',
  'Full-Stack Web Development',
  'AI Integration',
  'Project Management',
  'Business Strategy',
];

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              From Millwright to Tech Visionary
            </h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am a versatile professional with a unique blend of hands-on industrial expertise and cutting-edge technological skill. With a decade as a seasoned Millwright, I've honed my abilities in precision engineering and complex problem-solving.
            </p>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Driven by a passion for innovation, I founded RapidWebDevelop.com to empower creators and businesses. My work is about building robust systems—whether mechanical or digital—that are efficient, reliable, and create lasting value.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                {skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                        <Cog className="h-4 w-4 text-accent"/>
                        <span className="font-medium">{skill}</span>
                    </div>
                ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/550x550.png"
              alt="Portrait of Lee"
              width={550}
              height={550}
              className="rounded-xl object-cover shadow-2xl"
              data-ai-hint="professional portrait man"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
