'use server';

import { resend } from '@/lib/resend';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function sendContactMessage(formData: FormData) {
  try {
    // Parse and validate form data
    const rawData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    const validatedData = contactSchema.parse(rawData);

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['matt.o.cascagnette@gmail.com'], // Using your email for testing
      replyTo: validatedData.email,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #6B9E87; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${validatedData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f8f0; border-left: 4px solid #6B9E87;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This message was sent from the TaDal Interiors contact form.
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}

Message:
${validatedData.message}

This message was sent from the TaDal Interiors contact form.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { 
        success: false, 
        error: 'Failed to send message. Please try again.' 
      };
    }

    return { 
      success: true, 
      message: 'Thank you! Your message has been sent successfully.' 
    };

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        error: error.errors[0]?.message || 'Please check your form data.' 
      };
    }

    return { 
      success: false, 
      error: 'Something went wrong. Please try again.' 
    };
  }
} 