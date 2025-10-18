# ⚡ Elektronn-Ray — EV Landing Page

A **Ghibli-inspired Electric Vehicle (EV) landing page** built with **React + Vite**, featuring cinematic animated backgrounds, smooth transitions, and a modern responsive layout.

🌐 **Live Demo:** [https://ev-webiste-hwp4.vercel.app/](https://ev-webiste-hwp4.vercel.app/)

---

## 🚗 Overview

This project is a visually rich landing page that blends **realistic Ghibli-style visuals** with modern React components.  
It showcases:

- A **dynamic background** that alternates between HD images and a video.
- A **responsive hero section** with animated text, slide indicators, and video controls.
- A clean, accessible **navigation bar** with a smooth mobile hamburger menu.
- Built using **Vite + React** for ultra-fast builds and **deployed on Vercel**.

---

## 🧱 Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | [React.js](https://react.dev/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Styling | CSS3 (responsive + animation) |
| Deployment | [Vercel](https://vercel.com/) |
| Media | Custom HD backgrounds & Ghibli-style animations |

---

## ✨ Features

- 🎨 **Realistic Ghibli Aesthetic:** Soft lighting, painterly environments, and warm tones.
- 🎥 **Dynamic Background:** Switches between looping HD video and static images.
- 🖱️ **Interactive Hero Section:** Clickable dots and video toggle button.
- 📱 **Responsive Navbar:** Modern mobile hamburger menu with slide animation.
- ⚡ **High Performance:** Vite + React for fast load and HMR in development.

---

## 🧩 Folder Structure
```
src/
├── assets/ # Images, videos, icons
├── components/
│ ├── background/ # Background video/image logic
│ ├── hero/ # Hero text, dots, and play controls
│ └── navbar/ # Navigation bar with responsive menu
├── App.jsx # Main app component
├── App.css
└── index.css # Global base styles
```
---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/ev-website.git
cd ev-website
```
2️⃣ Install dependencies
bash```
npm install```
3️⃣ Run locally
bash
```
npm run dev
```
Then open http://localhost:5173 in your browser.

4️⃣ Build for production
bash
```
npm run build
```
5️⃣ Preview locally (optional)
bash
```
npm run preview
```
☁️ Deployment on Vercel
This project is deployed on Vercel.

To deploy your own version:

Push the project to a GitHub repository.

Go to Vercel Dashboard.

Import your repo → Framework Preset: Vite.

Set build command: npm run build

Set output directory: dist

Click Deploy 🚀

🧠 Customization Tips
Replace background images/videos in src/assets/.

Edit hero text inside App.jsx (heroData array).

Change navbar brand name in navbar.jsx.

Modify timing or transitions in component CSS files.


🧑‍💻 Author
Shubhangam Singh
💼 Developer
🌐 Live Site : https://ev-webiste-hwp4.vercel.app/

📜 License
This project is licensed under the MIT License — feel free to use and modify.

💡 Built with passion, code, and a touch of Ghibli magic.
