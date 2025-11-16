🚀 AI Discoverer – Explore the Best AI Agents

Discover the latest AI tools and agents that help you work smarter and save time.
Browse, filter, search, and compare AI tools across different categories — with smooth animations, dark/light mode, and infinite scroll.

<div align="center">
🌟 Live Demo (optional)

Your deployment link here


## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-000000?style=for-the-badge&logo=lucide&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)










</div>
🌟 Features

✔ Explore 40+ AI tools
✔ Search + category filtering
✔ Infinite scroll with smooth animations
✔ Beautiful dark/light mode
✔ Detailed tool pages
✔ Cloud-based logos (Cloudinary)
✔ Responsive UI
✔ Smooth Framer Motion animations
✔ User reviews on each AI tool (upcoming)
✔ Auth system for adding reviews

🧑‍💻 Upcoming Feature: User Reviews After Login

You mentioned you want users to review AI tools after creating an account.
This feature will be added in the roadmap:

📝 How It Will Work

User signs up/login (NextAuth or Firebase Auth)

On each tool page, a new “Write a Review” section appears

Users can submit:

⭐ Rating (1 to 5)

📝 Review text

Reviews are stored in:

Firebase

MongoDB

Or PostgreSQL
(Your choice — tell me and I'll generate the schema.)

Reviews display publicly under each tool page

Users can delete their own reviews

Admin can moderate reviews from the dashboard

If you want, I can generate:

✔ Review form UI
✔ Review list UI
✔ Database schema
✔ API routes
✔ Protected routes
✔ Admin moderation panel

Just tell me — "generate review system for Next.js".

📝 Dataset Used

Dataset of 40+ AI tools
Source: ChatGPT-generated + manually refined
Converted logos to PNG using Cloudinary
Stored dataset at /data/data.ts

🤖 AI Prompts Used
1️⃣ Generate AI Tools Dataset
Generate 40 AI tools with name, category, description, pricing, image URL, usage steps, and ProductHunt link.

2️⃣ Logo Creation
Create a clean vector-style logo for an AI tool. Dark-mode friendly. Transparent background.

3️⃣ UI Enhancements
Improve this card UI using TailwindCSS and Framer Motion. Make it look premium.

🎨 Design Inspiration

Inspired by:

🟦 https://theresanaiforthat.com

Clean, modern, simple category-based design.

📁 Project Structure
/app
    /tool/[id]
    page.tsx

  globals.css
  favicon.ico
  layout.tsx
  page.tsx
  

/components
  Header.tsx
  ToolCard.tsx
  CategoryChip.tsx
  HeroSlider.tsx
  HeroSlider.tsx
  Footer.tsx

 /contexts
  ThemeContext.tsx

/data
  data.ts

/provider
  ClientProvider.tsx

/types
  type.ts

🎯 Future Improvements (If given 2 more days)
🚀 1. Add Login + Signup

Using NextAuth or Firebase.

🎤 2. Review System

Users can rate and review any AI tool.

🧑‍💼 3. Admin Dashboard

Add/remove/edit AI tools
Change logos
Feature new tools
View reviews

🎨 4. More UI Enhancements

Better dark mode
Shadows, gradients, transitions

📸 Screenshots


⚙️ Installation
git clone 
cd ai-discoverer
npm install
npm run dev


Runs on:
👉 http://localhost:3000

🤝 Contribution

Feel free to open PRs or issues.
Suggestions for new AI tools are welcome.

📜 License

MIT License © 2025 Arpit Khandelwal
Free to use and modify.