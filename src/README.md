# Hudson & Co Marketing Website

## Deployment Instructions

### 1. Add Your Crest Logo
Before deploying, add your crest logo to the `/public` folder:
- Name it: `crest-logo.png`
- Recommended size: 500x500px or larger
- This will display in the Hero section

### 2. Deploy to Vercel

**Vercel Settings:**
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

**Environment Variables:**
Add in Vercel Dashboard → Settings → Environment Variables:
```
RESEND_API_KEY=re_ChVWAKoe_AvDwS21rydXAe7vomShtofWc
```

### 3. After Deployment

1. Test the site thoroughly
2. Test the playbook download form
3. Update Resend sender domain (optional - currently using default `onboarding@resend.dev`)

## Google Analytics

Already configured with tracking ID: `G-8E1GNDTEDG`

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Motion (Framer Motion)
- Vercel Serverless Functions
- Resend API for email delivery
