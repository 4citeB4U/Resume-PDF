'use server';

/**
 * @fileOverview AI-powered executive summary customization flow.
 *
 * - customizeExecutiveSummary - A function that customizes an executive summary based on input.
 * - CustomizeExecutiveSummaryInput - The input type for the customizeExecutiveSummary function.
 * - CustomizeExecutiveSummaryOutput - The return type for the customizeExecutiveSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CustomizeExecutiveSummaryInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The text of the resume to generate an executive summary from.'),
  jobDescription: z
    .string()
    .optional()
    .describe(
      'The job description to tailor the executive summary towards. If not provided, a general executive summary will be generated.'
    ),
  keywords: z
    .string()
    .optional()
    .describe(
      'Comma separated list of keywords to emphasize in the executive summary.'
    ),
});
export type CustomizeExecutiveSummaryInput = z.infer<
  typeof CustomizeExecutiveSummaryInputSchema
>;

const CustomizeExecutiveSummaryOutputSchema = z.object({
  executiveSummary: z.string().describe('The customized executive summary.'),
});
export type CustomizeExecutiveSummaryOutput = z.infer<
  typeof CustomizeExecutiveSummaryOutputSchema
>;

export async function customizeExecutiveSummary(
  input: CustomizeExecutiveSummaryInput
): Promise<CustomizeExecutiveSummaryOutput> {
  return customizeExecutiveSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'customizeExecutiveSummaryPrompt',
  input: {schema: CustomizeExecutiveSummaryInputSchema},
  output: {schema: CustomizeExecutiveSummaryOutputSchema},
  prompt: `You are an expert resume writer who specializes in creating concise and impactful executive summaries.

  Based on the provided resume and job description, create a customized executive summary that highlights the most relevant skills and experiences.

  If a job description is provided, tailor the summary to match the requirements of the job.
  If keywords are provided, ensure they are naturally incorporated into the summary.

  Resume:
  {{resumeText}}

  Job Description:
  {{jobDescription}}

  Keywords:
  {{keywords}}

  Executive Summary:`,
});

const customizeExecutiveSummaryFlow = ai.defineFlow(
  {
    name: 'customizeExecutiveSummaryFlow',
    inputSchema: CustomizeExecutiveSummaryInputSchema,
    outputSchema: CustomizeExecutiveSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
