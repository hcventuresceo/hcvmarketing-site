import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Download, CheckCircle2 } from 'lucide-react';

export function PlaybookDownload() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Call the API route to send email
      const response = await fetch('/api/send-playbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error('Failed to send email');
      }

      // Track conversion in Google Analytics
      if (window.gtag) {
        window.gtag('event', 'playbook_download', {
          event_category: 'Lead Generation',
          event_label: 'Playbook Download',
          value: 1,
        });
      }

      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      console.error('Email send error:', err);
      setError('Something went wrong. Please try again or email us directly at admin@hudsoncoventures.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 bg-[#0B0B0B]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#141414] rounded-lg p-8 md:p-12 border border-[#D4AF37]/20"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF37]/10 mb-4">
              <Download className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get The Growth Execution Playbook
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The exact frameworks we use to scale service businesses from $100K to $1M+ ARR. 
              No fluff, just execution.
            </p>
          </div>

          {/* Success State */}
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Check Your Email! 📬</h3>
              <p className="text-gray-400 mb-6">
                We've sent the playbook to your inbox. Check your spam folder if you don't see it.
              </p>
              <Button
                onClick={() => setIsSuccess(false)}
                variant="outline"
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
              >
                Download Another Copy
              </Button>
            </motion.div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-6">
                <Label htmlFor="email" className="text-white mb-2 block">
                  Email Address <span className="text-[#D4AF37]">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="founder@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[#0B0B0B] border-[#D4AF37]/30 text-white placeholder:text-gray-500 focus:border-[#D4AF37] h-12"
                />
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D4AF37] text-black hover:bg-[#F2D27C] font-semibold h-12 text-lg"
              >
                {isSubmitting ? 'Sending...' : 'Get The Playbook'}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}