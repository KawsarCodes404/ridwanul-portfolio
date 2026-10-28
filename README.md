# Ridwanul Hoque Kawsar - Developer Portfolio

A modern, high-performance, responsive developer portfolio engineered with **React**, **Vite**, and **Tailwind CSS**. Designed following contemporary Bento-Grid and Glassmorphic UX patterns seen in leading silicon valley developer portfolios.

---

## 🚀 Key Features & Assignment Requirements Met

| Requirement | Implementation Detail |
|---|---|
| **1. Navbar** | Sticky glassmorphic navbar with smooth active-section scrollspy and mobile animated drawer. |
| **2. Designation & Intro** | Professional title ("Frontend & Full-Stack Developer \| Algorithmic Problem Solver") + embedded professional portrait photo. |
| **3. Resume Button** | Clearly visible hero CTA allowing 1-click preview and instant formatted resume download. |
| **4. Social Links** | Linked badges for GitHub (`@KawsarCodes404`), LinkedIn, Twitter, and Facebook. |
| **5. About Me** | Bento-grid story: CP roots on Codeforces/CodeChef, passion for clean UI/UX, hobbies (Cricket, painting, tech), and personality. |
| **6. Skills Section** | Categorized visually into Frontend, Backend & Database, and Tools & Problem Solving with proficiency meters. |
| **7. Education** | Detailed higher education cards: B.Sc. in Computer Science & Engineering and HSC in Science with GPA & coursework. |
| **8. Experience** | Career milestones in freelance frontend engineering and competitive programming mentorship. |
| **9. Projects (3 Featured)** | High-fidelity cards with images, tags, and **"View More / Details" buttons** leading to an interactive modal detailing: <br/>• Main tech stack <br/>• Full description <br/>• Live project link <br/>• Client GitHub repository <br/>• Challenges faced during development <br/>• Future improvement roadmap |
| **10. Contact Info** | Direct links for Email, Phone, WhatsApp quick-chat (`wa.me`), plus an interactive validated contact form. |
| **11. Footer** | Elegant footer with quick jump links, copyright, and smooth "Back to Top" button. |
| **12. Responsive UI** | 100% responsive across mobile, tablet, laptop, and ultra-wide screens. |

---

## 🛠️ Project Setup & Local Preview

### 1. Run Development Server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production:
```bash
npm run build
```
The optimized production bundle will be generated inside the `dist/` directory.

---

## 🌐 Instant Live Hosting (Vercel / Netlify / GitHub Pages)

### Option A: 1-Click Deploy with Vercel CLI (Recommended)
1. Open PowerShell or Terminal in this folder:
```bash
npm install -g vercel
vercel
```
2. Follow the 3 prompts (enter `y` for defaults). Vercel will provide your live URL (e.g., `https://ridwanul-portfolio.vercel.app`) in under 30 seconds!

### Option B: Netlify Drag-and-Drop
1. Run `npm run build`.
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist` folder directly onto the page. Your live link is generated instantly!

### Option C: GitHub Pages
1. Push this repository to GitHub under `KawsarCodes404/portfolio`.
2. In `package.json`, set `"homepage": "https://kawsarcodes404.github.io/portfolio"`.
3. Enable GitHub Pages in Repository Settings -> Pages -> Deploy from Branch (`gh-pages` or GitHub Actions).
