<div align="center">

# 🛒 বাজার দর | BazarDor

### প্রয়োজনীয় পণ্যের দাম এক নজরে

A modern, fully responsive Bangla market-price tracker. See today's prices, daily price changes, and market-wise price comparisons for everyday essentials such as rice, oil, vegetables, fish, and more.

[![Live Demo](https://img.shields.io/badge/Live-Demo-16a34a?style=for-the-badge&logo=vercel&logoColor=white)](https://my-bazar-dor-app.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Better Auth](https://img.shields.io/badge/Better-Auth-F59E0B?style=for-the-badge)](https://better-auth.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

[**🌐 Live Demo**](https://my-bazar-dor-app.vercel.app) · [**🐞 Report a Bug**](../../issues) · [**✨ Request a Feature**](../../issues)

</div>

---

## 📖 Table of Contents

- [🛒 বাজার দর | BazarDor](#-বাজার-দর--bazardor)
    - [প্রয়োজনীয় পণ্যের দাম এক নজরে](#প্রয়োজনীয়-পণ্যের-দাম-এক-নজরে)
  - [📖 Table of Contents](#-table-of-contents)
  - [🎯 About the Project](#-about-the-project)
  - [✨ Key Features](#-key-features)
  - [📸 Screenshots](#-screenshots)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [📁 Project Structure](#-project-structure)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Available Scripts](#available-scripts)
  - [🔑 Environment Variables](#-environment-variables)
  - [🔐 Authentication Setup](#-authentication-setup)
    - [Google](#google)
    - [GitHub](#github)
    - [Account Linking](#account-linking)
  - [🧭 Pages and Routes](#-pages-and-routes)
  - [☁️ Deployment](#️-deployment)
  - [🏆 Challenges Completed](#-challenges-completed)
  - [👨‍💻 Author](#-author)
  - [⚠️ Disclaimer](#️-disclaimer)

---

## 🎯 About the Project

**বাজার দর (BazarDor)** helps everyday people check the latest prices of essential goods across different markets and divisions of Bangladesh. Prices are shown in Bengali digits, with clear ▲ / ▼ indicators that show whether a price went up or down compared with yesterday.

The app is built with the **Next.js App Router**, with server-side data fetching, **Suspense streaming** with skeleton loaders, protected routes, and secure authentication with **Better Auth** (email/password, Google, and GitHub).

---

## ✨ Key Features

| # | Feature | Description |
|---|---------|-------------|
| 1 | 📈 **Live Price Ticker** | An infinite scrolling marquee below the navbar showing the emoji, name, price (৳/unit), and ▲/▼ percentage change of every product. Each item links to its details page. |
| 2 | 🔺🔻 **Risers and Fallers** | Dedicated home page sections for the top 6 products whose prices **went up** and the top 6 whose prices **went down** today. |
| 3 | 🗂️ **Category Browsing and Sorting** | Browse by category with a sort dropdown (Default, Low → High, High → Low). Sorting uses the numeric value, so it is always correct. |
| 4 | 🏪 **Market-wise Price Comparison** | A protected product details page with minimum, maximum, and average price, plus a table of prices in different bazaars and divisions. |
| 5 | 🔐 **Secure Authentication** | Better Auth with Email/Password, **Google**, and **GitHub** login, with account linking and toast feedback. |
| 6 | 👤 **Profile and Update Info** | A profile page showing the user's photo, name, and email, with a form to update the display name and a sign-out button. |
| 7 | ⏳ **Skeleton Loading States** | Skeleton loaders on Home, Category, and Product pages while data is being fetched, using React Suspense. |
| 8 | 🚫 **Friendly 404 and Empty States** | A custom 404 page and an empty state for invalid routes or empty categories, with a "হোম পেজে ফিরে যান" button. |
| 9 | 🔔 **Toast Notifications** | Distinct, styled toasts in Bangla for sign in, sign up, sign out, validation errors, and protected-route redirects. |
| 10 | 📱 **Fully Responsive** | Mobile-first design for phones, tablets, and desktops, with a collapsing grid, a usable navbar, and a stacked hero. |

---

## 📸 Screenshots

> Add your screenshots to a `/screenshots` folder and update the paths below.

| Home | Product Details |
|:---:|:---:|
| ![Home](./screenshots/home.png) | ![Details](./screenshots/details.png) |

| Category | Sign In |
|:---:|:---:|
| ![Category](./screenshots/category.png) | ![Sign In](./screenshots/signin.png) |

| Profile | Mobile View |
|:---:|:---:|
| ![Profile](./screenshots/profile.png) | ![Mobile](./screenshots/mobile.png) |

---

## 🛠️ Tech Stack

**Frontend**

- [Next.js 16](https://nextjs.org/) (App Router, Server Components, Cache Components, Suspense)
- [React 19](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/), and [HeroUI](https://www.heroui.com/) (forms and inputs)
- [React Toastify](https://fkhadra.github.io/react-toastify/) (notifications)
- [react-marquee-text](https://www.npmjs.com/package/react-marquee-text) (price ticker)

**Backend and Auth**

- [Better Auth](https://better-auth.com/) (Email/Password, Google, GitHub, account linking)
- [MongoDB](https://www.mongodb.com/) with the Better Auth MongoDB adapter

**Data and Deployment**

- REST API (Cloudflare Workers) for product prices
- [Vercel](https://vercel.com/) for hosting

---

## 📁 Project Structure

```
my-bazar-dor-app/
├── public/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── Sign-in/page.tsx
│   │   │   ├── Sign-up/page.tsx
│   │   │   └── Sign-out/
│   │   ├── api/auth/[...all]/route.ts   # Better Auth handler
│   │   ├── category/[slug]/             # Category page (+ loading.tsx)
│   │   ├── product/[Id]/                # Protected product details
│   │   ├── layout.tsx
│   │   ├── not-found.tsx                # Custom 404
│   │   └── page.tsx                     # Home
│   ├── Components/
│   │   ├── AllProductsSection/
│   │   ├── CategoryProducts.tsx         # Client-side sorting
│   │   ├── SignWithGoogle.tsx
│   │   ├── SignWithGithub.tsx
│   │   └── ...
│   ├── lib/
│   │   ├── auth.ts                      # Better Auth server config
│   │   ├── auth-client.ts               # Better Auth client
│   │   └── toast.tsx                    # Custom toast helpers
│   └── Types/
├── proxy.tsx                            # Route protection
├── next.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or later
- npm (or yarn/pnpm)
- A MongoDB database (a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster works well)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/my-bazar-dor-app.git

# 2. Go to the project folder
cd my-bazar-dor-app

# 3. Install dependencies
npm install

# 4. Create your environment file (see the next section)
cp .env.example .env

# 5. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

---

## 🔑 Environment Variables

Create a `.env` file in the project root:

```env
# Database
MONGOBD_URL=your_mongodb_connection_string

# Better Auth
BETTER_AUTH_SECRET=your_long_random_secret
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

> ⚠️ **Note:** The variable is named `MONGOBD_URL` to match the current code in `src/lib/auth.ts`. If you rename it to `MONGODB_URL`, update `auth.ts` as well.

> 🔒 Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 🔐 Authentication Setup

### Google

1. Open the [Google Cloud Console](https://console.cloud.google.com/) and create OAuth credentials.
2. Add these redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://your-domain.vercel.app/api/auth/callback/google`

### GitHub

1. Go to **GitHub → Settings → Developer settings → OAuth Apps** and create a new app.
2. Set the callback URLs:
   - `http://localhost:3000/api/auth/callback/github`
   - `https://your-domain.vercel.app/api/auth/callback/github`

### Account Linking

Account linking is enabled for Google, GitHub, and email/password, so users with the same email can sign in with any provider without creating duplicate accounts.

---

## 🧭 Pages and Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Hero, risers, fallers, and all products |
| `/category/[slug]` | Public | Products of a category with sorting |
| `/product/[Id]` | 🔒 Protected | Price summary and market-wise price table |
| `/Sign-in` | Public | Login with email, Google, or GitHub |
| `/Sign-up` | Public | Register a new account |
| `/Profile` | 🔒 Protected | User info, update name, and sign out |
| `*` | Public | Custom 404 page |

---

## ☁️ Deployment

The app is deployed on **Vercel**.

1. Push the project to GitHub.
2. Import the repository on [Vercel](https://vercel.com/new).
3. Add all the [environment variables](#-environment-variables) in **Project Settings → Environment Variables**.
4. Set `BETTER_AUTH_URL` to your production URL.
5. Add the production callback URLs to your Google and GitHub OAuth apps.
6. In MongoDB Atlas, allow network access for Vercel (**Network Access → `0.0.0.0/0`**).
7. Click **Deploy** (or push to `main` for automatic deployments).

Dynamic routes (`/category/[slug]`, `/product/[Id]`) work on refresh without a hard 404.

---

## 🏆 Challenges Completed

- ✅ **C1 – Sort dropdown:** ডিফল্ট, দাম: কম থেকে বেশি, দাম: বেশি থেকে কম, sorted by numeric value.
- ✅ **C2 – Professional README:** this file.
- ✅ **C3 – Update Information:** the profile page has a form to update the user's name using [Better Auth `updateUser`](https://better-auth.com/docs/concepts/users-accounts#update-user).

---

## 👨‍💻 Author

**Partho Mukherjee**

- GitHub: [@YOUR-USERNAME](https://github.com/YOUR-USERNAME)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-linkedin)

---

## ⚠️ Disclaimer

সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
*All prices are indicative and may change depending on market conditions.*

---

<div align="center">

⭐ If you like this project, please give it a star! ⭐

Made with ❤️ in Bangladesh

</div>
