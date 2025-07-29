import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { PROJECTS_DATA } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Project Spotlight</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A curated selection of my work, from industrial solutions to innovative digital platforms. Each project reflects a commitment to quality, ownership, and impactful results.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {PROJECTS_DATA.map((project) => (
            <Card key={project.title} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 border-border/80 hover:border-primary">
                <CardHeader className="p-0">
                    <div className="relative h-48 w-full">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-500 group-hover:scale-105"
                            data-ai-hint={project.hint}
                        />
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <h3 className="text-xl font-headline font-bold text-primary mb-2">{project.title}</h3>
                    <CardDescription className="mb-4 text-foreground/80">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">{tag}</Badge>
                        ))}
                    </div>
                    <a href="#" className="text-sm font-semibold text-accent hover:underline flex items-center">
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
