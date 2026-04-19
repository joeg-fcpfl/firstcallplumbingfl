# First Call Plumbing — Website Hosting & Feature Analysis

**Prepared for:** Joe & Gordon, First Call Plumbing
**Date:** March 30, 2026
**Website:** React + Vite single-page application (currently local demo)

---

## Executive Summary

The current website is a polished, professional React-based single-page application covering all core business needs: hero section, 10 service listings, animated stats, owner profiles/about section, customer testimonials, service area map, contact form, and footer. It is production-quality code that can be deployed immediately.

The primary decision to make is whether to host it as a **free static site** (lowest friction, no monthly cost) or invest in a **backend-enabled deployment** that makes the contact form actually send emails and unlocks additional interactive features.

---

## Section 1: Free Static Hosting on GitHub Pages

### What "Static Hosting" Means

A static host serves your HTML, CSS, and JavaScript files exactly as built — no server processes, no databases. GitHub Pages is the most common free option, but Cloudflare Pages and Netlify's free tier work identically for this use case.

### What Works Out of the Box

Every feature currently in the website works perfectly on a static host:

| Feature | Status | Notes |
|---|---|---|
| Full page layout & design | Works | Navy/white brand colors, all sections |
| Navbar with mobile menu | Works | Hamburger menu, smooth scroll links |
| Hero section with animations | Works | Fade-in/slide-up scroll animations |
| Services grid (10 services) | Works | All service cards with icons |
| Animated statistics counters | Works | 25+ years, 500+ projects, 3 counties |
| About / owner profiles | Works | Business story, credentials |
| Testimonials carousel | Works | Interactive dot navigation |
| Service area map (visual) | Works | Palm Beach / Broward / Miami-Dade |
| Contact info sidebar | Works | Phone, email, address, hours, license |
| Click-to-call phone button | Works | `tel:` links work on all devices |
| Click-to-email link | Works | Opens default mail client |
| Google Maps link | Works | Opens Google Maps to the address |
| Contact form (UI only) | Partial | Form displays and validates — but **does not actually send** |
| Custom domain (yoursite.com) | Works | Free with GitHub Pages + your domain registrar |
| SSL/HTTPS | Works | Free, automatic |
| Mobile responsive design | Works | Fully responsive layout |

### The One Critical Limitation: The Contact Form

This is the most important thing to understand about static hosting.

The contact form currently has a **simulated submission** — it shows a spinner for 1.2 seconds, then displays a "Message Received!" confirmation screen. **No email is ever sent. No data is stored anywhere.** A visitor who fills out the form and sees the success message will never be contacted, because no record of their submission exists.

On a static host, you cannot add server-side code to fix this without a third-party form service. Your options are:

**Option A — Use a free form service (Formspree, Web3Forms, EmailJS)**
- Add ~10 lines of code to the existing form
- Free tiers allow 50–250 submissions/month
- Emails arrive in your inbox with all form fields
- No backend required, works on GitHub Pages
- Branding/limitations on free tiers; paid plans start at ~$10/month

**Option B — Keep the form as a visual placeholder**
- Only useful if you direct visitors to call instead of using the form
- Not recommended for a business generating leads

**Option C — Deploy with a backend (see Section 2)**

### Other Static Hosting Limitations

- **No appointment booking system** — a calendar/scheduling tool requires a backend or third-party embed (Calendly, Acuity)
- **No CMS** — updating service descriptions or adding photos requires editing code and redeploying
- **No analytics beyond basic** — Google Analytics can be added (free), but heatmaps/session recordings need paid tools
- **No customer portal** — no way for clients to check job status or invoice history
- **No live chat** — can embed a third-party widget (Tidio, HubSpot free tier) without a backend

---

## Section 2: Full React App with Backend

Adding a backend (Node.js/Express, or a serverless function platform) removes all static hosting limitations and enables the following upgrades:

### Contact Form → Real Lead Notifications

**What changes:** The form submission sends a real HTTP POST to your server. Your server sends an email to `info@firstcallplumbingfl.com` with all submitted fields (name, company, phone, email, service type, county, project details), plus optionally sends an auto-reply to the customer confirming receipt.

**Business impact:** Every lead captured. No leads lost due to visitors who didn't want to call.

**What the email looks like:**
```
Subject: New Quote Request — Tenant Improvement | Broward County

Name: John Smith
Company: ABC Construction LLC
Phone: (954) 555-0100
Email: john@abcconstruction.com
Service: Tenant Improvement / Buildout
County: Broward County

Project Details:
New restaurant buildout at 3,500 sqft space in Davie. Need full
rough-in, grease trap, and backflow. Timeline: 8 weeks.
```

### Appointment / Estimate Scheduling

A calendar booking widget lets GCs and property managers self-schedule estimate appointments without a phone call.

**How it works:**
- You set your available time slots in an admin panel
- Website shows a calendar where clients pick a date/time
- Confirmation email sent to both parties automatically
- Reminder emails sent 24 hours before
- You can block off days (holidays, vacations) from the admin panel

**Options:**
- **Embedded third-party** (Calendly, Acuity Scheduling) — fastest to add, $0–$20/month, no backend needed
- **Custom built** — full control, integrated with your contact form data, requires backend development

### Maintenance Contract / PM Program Lead Capture

The site currently describes "Preventive Maintenance — Custom PM contracts for property managers." A backend enables:
- A dedicated landing page for PM contracts with a multi-step form
- Automatic follow-up email sequence (Day 1: thank you, Day 3: case study, Day 7: call-to-action)
- Lead tracking to see which property managers expressed interest

### Admin Dashboard (Optional)

A password-protected page at `/admin` where Joe or Gordon can:
- View all form submissions in one place
- Mark leads as "contacted," "quoted," "won," or "lost"
- See submission trends by month and service type
- Export contacts to a spreadsheet

### Content Management (Optional)

A headless CMS (like Sanity or Contentful, both with free tiers) lets you update the website without touching code:
- Add new project photos to a gallery
- Edit service descriptions
- Add/remove testimonials
- Post news or project highlights

### Enhanced Features Summary

| Feature | Without Backend | With Backend |
|---|---|---|
| Contact form sends real emails | No | Yes |
| Auto-reply to customers | No | Yes |
| Appointment self-scheduling | Third-party embed | Custom or third-party |
| Lead tracking / CRM | No | Yes |
| Email follow-up sequences | No | Yes |
| Project photo gallery w/ CMS | Static only | Fully manageable |
| Customer-facing job portal | No | Possible |
| PM contract lead funnel | No | Yes |

---

## Section 3: Hosting Options & Monthly Cost Comparison

### Tier 1 — Static Hosting (No Backend Required)

These platforms serve the built React app (HTML/CSS/JS files). The contact form requires a separate form service to function.

| Platform | Monthly Cost | Custom Domain | SSL | CDN | Notes |
|---|---|---|---|---|---|
| **GitHub Pages** | **$0** | Yes (free) | Yes | Limited | Best for developers; manual deploy via git push |
| **Cloudflare Pages** | **$0** | Yes (free) | Yes | Yes (global) | Fastest CDN of any free tier; automatic deploys |
| **Netlify Free** | **$0** | Yes (free) | Yes | Yes | 100GB bandwidth/month; easiest CI/CD setup |
| **Vercel Free (Hobby)** | **$0** | Yes (free) | Yes | Yes | Best React/Vite support; 100GB bandwidth/month |
| **Firebase Hosting Free** | **$0** | Yes (free) | Yes | Yes | 10GB storage, 360MB/day transfer |

**Recommendation for static-only:** Cloudflare Pages or Vercel. Both are zero cost, deploy automatically when you push code, and have excellent global CDN performance.

**Add-on cost for working contact form (static hosts):**
| Form Service | Free Tier | Paid Tier |
|---|---|---|
| Formspree | 50 submissions/month | $10/month (unlimited) |
| Web3Forms | 250 submissions/month | $9/month |
| EmailJS | 200 emails/month | $15/month |

### Tier 2 — Serverless / Function-Based Hosting (Light Backend)

These platforms let you add backend logic (API routes, email sending) without managing a server. Ideal for adding a real contact form and simple lead notifications without full infrastructure.

| Platform | Monthly Cost | What You Get | Best For |
|---|---|---|---|
| **Vercel Pro** | **$20/month** | Unlimited serverless functions, 1TB bandwidth, team access | Adding email sending to the contact form; easy upgrade from free tier |
| **Netlify Pro** | **$19/month** | Netlify Functions, 400 build mins, form handling built in | Contact form emails handled natively; no code changes needed |
| **Cloudflare Workers Free** | **$0** | 100,000 requests/day serverless functions | Power users; requires technical setup |
| **Cloudflare Workers Paid** | **$5/month** | 10M requests/month | High traffic; excellent value |

**Note:** For a local commercial plumbing business, Netlify Pro is worth considering specifically because it has **native form handling** — you add one HTML attribute to the existing form and Netlify captures submissions and emails them to you, with no code changes and no third-party service.

### Tier 3 — Full Cloud Hosting (Backend + Database)

For a complete backend with appointment booking, lead tracking, and admin dashboard.

| Platform | Monthly Cost | What You Get | Notes |
|---|---|---|---|
| **Render (Free)** | **$0** | Web service + PostgreSQL (limited) | Free tier sleeps after 15 min inactivity — not suitable for production |
| **Render (Starter)** | **$7–$25/month** | Always-on web service + database | Excellent value; straightforward deployment |
| **Railway** | **~$5–$20/month** | Usage-based; Node.js + database | Pay for what you use; great developer experience |
| **Fly.io** | **~$3–$15/month** | Containerized app + Postgres | Low cost; good for small apps |
| **DigitalOcean App Platform** | **$12–$25/month** | Managed Node.js + database | Simple dashboard; predictable pricing |
| **AWS (Amplify + Lambda + SES)** | **~$5–$20/month** | Enterprise-grade; email via SES is $0.10/1,000 | Most scalable; most complex to configure |
| **Heroku (Basic)** | **$7–$25/month** | Classic PaaS; easy deploys | Simple but more expensive per resource than alternatives |

### Decision Summary

| Scenario | Best Option | Monthly Cost |
|---|---|---|
| Launch fast, minimize cost, owners call all leads | Vercel Free + Formspree | $0–$9/month |
| Working contact form, no backend complexity | Netlify Pro (native forms) | $19/month |
| Working form + appointment scheduling | Vercel Free + Calendly + Formspree | $0–$20/month |
| Full backend: form emails, lead tracking, admin | Render Starter or Railway | $15–$30/month |
| Maximum scale / enterprise features | AWS or DigitalOcean | $20–$50/month |

---

## Recommended Path

### Phase 1 — Launch Now (Week 1): $0/month
Deploy to **Vercel** (free tier) with a custom domain (domain registration ~$12–$15/year through Namecheap or Cloudflare Registrar). Add **Web3Forms** (free, 250 submissions/month) to make the contact form functional. This gets a professional, live website in front of clients immediately.

### Phase 2 — Lead Optimization (Month 2–3): ~$20/month
Upgrade to **Netlify Pro** or **Vercel Pro** and integrate a proper email backend. Add a Calendly embed for estimate scheduling. This directly converts more website visitors into paying customers.

### Phase 3 — Growth (Month 6+): ~$30/month
Build a lightweight admin dashboard to track all leads, follow-up status, and win rate by service type. This transforms the website from a marketing brochure into a business operations tool.

---

*Document prepared based on analysis of the First Call Plumbing React/Vite application — React 18.3, Vite 5.4, 10 service offerings, contact form with 7 fields, tri-county service area (Palm Beach, Broward, Miami-Dade). All pricing as of March 2026 and subject to change.*
