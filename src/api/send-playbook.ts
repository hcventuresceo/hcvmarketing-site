import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    const playbookLink = 'https://docs.google.com/presentation/d/1eTnG7GMV-UbKHXDpkHK2w9PTFhPjW4fb/edit?usp=sharing&ouid=113890403934392078795&rtpof=true&sd=true';

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Hudson & Co Marketing <onboarding@resend.dev>', // You'll change this to your domain later
        to: email,
        subject: 'Your Growth Execution Playbook from Hudson & Co',
        html: `
          <h2>Thanks for downloading our Growth Execution Playbook!</h2>
          
          <p>Here's your direct link:</p>
          <p><a href="${playbookLink}" style="color: #D4AF37; font-weight: bold;">📥 Download The Playbook</a></p>
          
          <p>This is the exact framework we use to help service-based businesses scale from $100K to $1M+ ARR.</p>
          
          <p>While you're here - you might also enjoy our podcast <strong>"Margins Over Mindsets"</strong> where we break down real growth strategies:</p>
          <p>👉 <a href="https://www.instagram.com/hcv_marketing/">https://www.instagram.com/hcv_marketing/</a></p>
          
          <p>Questions? Just reply to this email.</p>
          
          <p>Best,<br>Hudson & Co Marketing<br>admin@hudsoncoventures.com</p>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send email');
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
