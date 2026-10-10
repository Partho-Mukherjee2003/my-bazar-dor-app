<div align="center">

# 🛒 বাজার দর | BazarDor

**প্রয়োজনীয় পণ্যের দাম এক নজরে**

A responsive Bangla market-price tracker. Check today's prices, daily ▲▼ changes, and market-wise comparisons for everyday essentials.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-16a34a?style=for-the-badge)](https://my-bazar-dor-app-ir6y.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

</div>

---

## 📖 About

**বাজার দর (BazarDor)** helps people see the latest prices of rice, pulses, oil, vegetables, fish, meat, dairy, and spices across different markets in Bangladesh. All prices are shown in Bengali digits with clear green/red change badges.

🔗 **Live:** [my-bazar-dor-app-ir6y.vercel.app](https://my-bazar-dor-app-ir6y.vercel.app/)

---

## ✨ Key Features

- 📈 **Live price ticker:** an infinite scrolling marquee with emoji, name, price, and ▲/▼ change
- 🔺🔻 **Risers and fallers:** top 6 products whose prices went up and down today
- 🗂️ **Category pages:** browse by category and sort by price (default, low → high, high → low)
- 🏪 **Market-wise details:** minimum, maximum, and average price with a bazaar-by-bazaar table (login required)
- 🔐 **Secure authentication:** email/password, **Google**, and **GitHub** login with Better Auth
- 👤 **Profile management:** view your profile, update your name, and sign out
- ⏳ **Skeleton loaders, toasts, and a custom 404 page** for a smooth user experience
- 📱 **Fully responsive** on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Area | Technologies |
|------|--------------|
| **Framework** | Next.js (App Router), React, TypeScript |
| **Styling** | Tailwind CSS, DaisyUI, HeroUI |
| **Auth** | Better Auth (Email/Password, Google, GitHub) |
| **Database** | MongoDB |
| **UI Extras** | React Toastify, react-marquee-text |
| **Deployment** | Vercel |

---

## 🧭 Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Hero, risers, fallers, all products |
| `/category/[slug]` | Public | Category products with sorting |
| `/product/[Id]` | 🔒 Login | Price summary and market-wise prices |
| `/Sign-in`, `/Sign-up` | Public | Authentication |
| `/Profile` | 🔒 Login | Profile and update name |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Partho-Mukherjee2003/my-bazar-dor-app.git

# Go to the project folder
cd my-bazar-dor-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 🔑 Environment Variables

Create a `.env` file in the project root:

```env
MONGOBD_URL=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_random_secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

> The variable name `MONGOBD_URL` matches the current code in `src/lib/auth.ts`.

---

## 👨‍💻 Author

**Partho Mukherjee**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Partho-Mukherjee2003)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/partho-mukherjee-0012b421b)
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:parthomukherjee582@gmail.com)

---

<div align="center">

*সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।*

⭐ If you like this project, give it a star!

</div>
