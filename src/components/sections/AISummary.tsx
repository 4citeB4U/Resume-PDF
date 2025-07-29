'use client';

import { useState, useTransition, useEffect } from 'react';
import { getExecutiveSummary } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Wand2, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function AISummary() {
  const [isPending, startTransition] = useTransition();
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (formData: FormData) => {
    setError(null);
    setSummary(null);
    startTransition(async () => {
      const result = await getExecutiveSummary(formData);
      if (result.success) {
        setSummary(result.summary);
      } else {
        setError(result.error || 'An unknown error occurred.');
      }
    });
  };
  
  useEffect(() => {
    const initialFormData = new FormData();
    initialFormData.append('jobDescription', 'A versatile and experienced professional for a leadership role.');
    handleSubmit(initialFormData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="ai-summary" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">AI-Powered Executive Summary</h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Leverage AI to distill my skills and experience into a concise, impactful summary. Tailor it to a specific job description or add keywords to see how my experience aligns with your needs.
            </p>
            <form action={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="jobDescription" className="font-semibold">Target Job Description or Audience</Label>
                <Textarea
                  id="jobDescription"
                  name="jobDescription"
                  placeholder="e.g., Senior Project Manager for a tech startup..."
                  className="mt-2 min-h-[100px]"
                  disabled={isPending}
                />
              </div>
              <div>
                 <Label htmlFor="keywords" className="font-semibold">Keywords to Emphasize</Label>
                 <Textarea
                    id="keywords"
                    name="keywords"
                    placeholder="e.g., agile, leadership, SaaS..."
                    className="mt-2 min-h-[60px]"
                    disabled={isPending}
                 />
              </div>
              <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
                <Wand2 className="mr-2 h-4 w-4" />
                {isPending ? 'Generating...' : 'Generate Summary'}
              </Button>
            </form>
          </div>
          <div className="flex flex-col justify-center">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <Sparkles className="h-6 w-6 text-accent" />
                  Your Customized Summary
                </CardTitle>
                <CardDescription>This summary has been generated based on your input.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {isPending && (
                    <div className="space-y-2 animate-pulse">
                        <div className="h-4 bg-muted rounded w-full"></div>
                        <div className="h-4 bg-muted rounded w-5/6"></div>
                        <div className="h-4 bg-muted rounded w-full"></div>
                        <div className="h-4 bg-muted rounded w-4/6"></div>
                        <div className="h-4 bg-muted rounded w-full"></div>
                    </div>
                )}
                {error && (
                  <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                {summary && (
                  <div className="text-sm text-foreground/90 space-y-4">
                    <p>{summary}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
