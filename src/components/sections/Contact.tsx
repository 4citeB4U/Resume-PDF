'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Mail, Github, Send, LoaderCircle, MessageCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  errors: {},
  message: '',
  success: false
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function Contact() {
  const [state, formAction] = useFormState(handleContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success && state.message) {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
    } else if (!state.success && state.message) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6 lg:grid-cols-2 lg:text-left lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Let's Build Something Great
          </h2>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl/relaxed lg:mx-0">
            Have a project in mind, a question, or just want to connect? I'm always open to discussing new opportunities and collaborations. Reach out and let's start a conversation.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Button asChild variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
              <a href="mailto:leeway@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
              <a href="mailto:leeway@example.com?subject=Chat Request" aria-label="Chat">
                <MessageCircle className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your Name" required/>
                {state.errors?.name && <p className="text-sm font-medium text-destructive pt-1">{state.errors.name[0]}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" required/>
                {state.errors?.email && <p className="text-sm font-medium text-destructive pt-1">{state.errors.email[0]}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." required/>
                 {state.errors?.message && <p className="text-sm font-medium text-destructive pt-1">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
