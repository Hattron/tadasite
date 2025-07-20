'use client';

import { useState } from 'react';
import { sendContactMessage } from '../actions';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setMessage(null);

    try {
      const result = await sendContactMessage(formData);
      
      if (result.success) {
        setMessage({ type: 'success', text: result.message || 'Message sent successfully!' });
        // Reset form
        (document.getElementById('contact-form') as HTMLFormElement)?.reset();
      } else {
        setMessage({ type: 'error', text: result.error || 'Something went wrong' });
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div 
        className="rounded-lg shadow-sm flex-1 flex flex-col"
        style={{
          backgroundColor: 'var(--color-background)',
          border: `1px solid var(--color-text-muted)`,
          padding: 'var(--spacing-xl)',
        }}
      >
        <h2 
          className="text-2xl font-medium"
          style={{ 
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-primary)',
            marginBottom: 'var(--spacing-lg)',
          }}
        >
          Send us a message
        </h2>

        {message && (
          <div 
            className={`p-4 rounded-lg ${
              message.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
            style={{ marginBottom: 'var(--spacing-md)' }}
          >
            {message.text}
          </div>
        )}

        <form id="contact-form" action={handleSubmit} className="space-y-4 flex-1 flex flex-col">
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                marginBottom: 'var(--spacing-xs)',
              }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={isSubmitting}
              placeholder="Your Name"
              className="w-full rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:opacity-50"
              style={{ 
                padding: 'var(--spacing-sm) var(--spacing-sm)',
                border: `1px solid var(--color-text-muted)`,
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                '--tw-ring-color': 'var(--color-primary)',
              } as React.CSSProperties}
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                marginBottom: 'var(--spacing-xs)',
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isSubmitting}
              placeholder="your.email@example.com"
              className="w-full rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:opacity-50"
              style={{ 
                padding: 'var(--spacing-sm) var(--spacing-sm)',
                border: `1px solid var(--color-text-muted)`,
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                '--tw-ring-color': 'var(--color-primary)',
              } as React.CSSProperties}
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label 
              htmlFor="message" 
              className="block text-sm font-medium"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                marginBottom: 'var(--spacing-xs)',
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              disabled={isSubmitting}
              placeholder="How can we help you?"
              className="w-full flex-1 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:opacity-50 resize-none"
              style={{ 
                padding: 'var(--spacing-sm) var(--spacing-sm)',
                border: `1px solid var(--color-text-muted)`,
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                '--tw-ring-color': 'var(--color-primary)',
                minHeight: '120px',
              } as React.CSSProperties}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-background)',
              fontFamily: 'var(--font-secondary)',
              padding: 'var(--spacing-sm) var(--spacing-md)',
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Business Hours Section */}
        <div 
          style={{ 
            marginTop: 'var(--spacing-lg)',
            paddingTop: 'var(--spacing-lg)',
            borderTop: `1px solid var(--color-text-muted)`,
          }}
        >
          <h3
            style={{
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--font-size-lg)',
              fontWeight: '600',
              marginBottom: 'var(--spacing-sm)',
            }}
          >
            Business Hours
          </h3>
          <div
            style={{
              color: 'var(--color-text)',
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--font-size-sm)',
              lineHeight: '1.5',
            }}
          >
            <div style={{ marginBottom: 'var(--spacing-xs)' }}>
              Office hours are <strong>Monday to Friday 9:00 - 5:00pm</strong>.
            </div>
            <div>
              We are <strong>closed on weekends and holidays</strong>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 