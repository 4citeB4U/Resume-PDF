// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview Generates an executive summary of skills and experience from a resume and project descriptions.
 *
 * - generateExecutiveSummary - A function that generates the executive summary.
 * - GenerateExecutiveSummaryInput - The input type for the generateExecutiveSummary function.
 * - GenerateExecutiveSummaryOutput - The return type for the generateExecutiveSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateExecutiveSummaryInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The text content of the resume to summarize.'),
  projectDescriptions: z
    .string()
    .describe('Descriptions of projects to include in the summary.'),
  targetAudience: z
    .string()
    .optional()
    .describe('The target audience or job description to tailor the summary to.'),
});
export type GenerateExecutiveSummaryInput = z.infer<
  typeof GenerateExecutiveSummaryInputSchema
>;

const GenerateExecutiveSummaryOutputSchema = z.object({
  executiveSummary: z
    .string()
    .describe('The generated executive summary of skills and experience.'),
});
export type GenerateExecutiveSummaryOutput = z.infer<
  typeof GenerateExecutiveSummaryOutputSchema
>;

export async function generateExecutiveSummary(
  input: GenerateExecutiveSummaryInput
): Promise<GenerateExecutiveSummaryOutput> {
  return generateExecutiveSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateExecutiveSummaryPrompt',
  input: {schema: GenerateExecutiveSummaryInputSchema},
  output: {schema: GenerateExecutiveSummaryOutputSchema},
  prompt: `You are an AI assistant specializing in creating concise and impactful executive summaries for professionals.\n\n  Given the following resume text and project descriptions, create a compelling executive summary that highlights the key skills and experiences. Tailor the summary to the specified target audience or job description if provided.\n\n  Resume Text: {{{resumeText}}}\n  Project Descriptions: {{{projectDescriptions}}}\n  Target Audience: {{{targetAudience}}}\n\n  Executive Summary:`,
});

const generateExecutiveSummaryFlow = ai.defineFlow(
  {
    name: 'generateExecutiveSummaryFlow',
    inputSchema: GenerateExecutiveSummaryInputSchema,
    outputSchema: GenerateExecutiveSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
