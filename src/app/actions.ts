'use server';

import { z } from 'zod';
import { customizeExecutiveSummary } from '@/ai/flows/customize-executive-summary';

const summarySchema = z.object({
  jobDescription: z.string().optional(),
  keywords: z.string().optional(),
});

export async function getExecutiveSummary(formData: FormData) {
  try {
    const validatedData = summarySchema.parse({
      jobDescription: formData.get('jobDescription'),
      keywords: formData.get('keywords'),
    });

    const result = await customizeExecutiveSummary({
      resumeText: `Self-taught developer, builder, and business owner with 15+ years of experience in logistics, operations, and tech innovation. Creator of dozens of full-stack projects across voice AI, logistics forms, business portfolios, CRM platforms, and community tools. Combines hands-on blue-collar experience with advanced AI and automation development. Comfortable on the road, in the field, or writing code in the terminal.`,
      jobDescription: validatedData.jobDescription,
      keywords: validatedData.keywords,
    });

    return { success: true, summary: result.executiveSummary };
  } catch (error) {
    console.error(error);
    return { success: false, summary: null, error: 'Failed to generate summary.' };
  }
}


const contactSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email.' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function handleContactForm(prevState: any, formData: FormData) {
    const validatedFields = contactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }
    
    // In a real app, you'd send an email or save to a database here.
    console.log('Contact form submitted:', validatedFields.data);

    return { success: true, message: 'Thank you for your message! I will get back to you soon.' };
}
