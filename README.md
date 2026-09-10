# 🚚 Logistics & Supply Chain Management Portal

A modern, high-performance, minimalistic B2B enterprise logistics website built with **React**, **Vite**, and **Tailwind CSS**.

---

## ✨ Features

- **Centralized Single-Source-of-Truth Branding (`src/config/siteConfig.js`):**
  - Change company name, tagline, phone numbers, email, physical address, and logo in one place to update the entire site automatically.
- **8 Core Logistics Services:**
  - Full Truck Load (FTL)
  - Partial Truck Load (PTL)
  - Warehousing
  - Distribution
  - Reverse Logistics
  - Cold Storage-Transportation
  - Cold Storage-Warehousing
  - Over Dimensional Cargo (ODC)
- **Interactive Modals:**
  - Service Specification Modal with 4-step operational workflow diagrams.
  - Freight Booking & Instant Quote Modal (`EnquireModal`).
- **Smooth Navigation & Conversion:**
  - Sticky glassmorphic Navbar with responsive dropdowns.
  - Auto-sliding and manual Hero carousel featuring all 8 services.
  - Mobile floating quick-action dock (Call, WhatsApp, Book).
  - Desktop vertical floating button suite.
  - Fully responsive across mobile, tablet, laptop, and widescreen displays.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The application will start at `http://localhost:3000/` or `http://localhost:3001/`.

### 3. Production Build
```bash
npm run build
```

---

## 🎨 How to Customize for a Client

Open `src/config/siteConfig.js`:
```javascript
export const siteConfig = {
  company: {
    name: "Your Client Name",
    tagline: "Your Custom Tagline",
    logo: {
      type: "text", // or "image"
      textPrimary: "BRAND",
      textSecondary: "LOGISTICS",
      imageSrc: "/assets/images/logo.png"
    }
  },
  contact: {
    phone: "+91 99999 00000",
    email: "contact@company.com",
    address: "Office Address..."
  }
  // ...
};
```

---

## 📁 Project Structure

```
├── public/
│   └── assets/
│       └── images/         # Local high-definition image assets
├── src/
│   ├── config/
│   │   └── siteConfig.js   # ⭐ Centralized branding & content config
│   ├── components/
│   │   ├── common/         # BrandLogo, SectionHeading
│   │   ├── Navbar.jsx
│   │   ├── HeroSlider.jsx
│   │   ├── StatsBanner.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── IndustriesSection.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── CtaBanner.jsx
│   │   ├── Footer.jsx
│   │   ├── FloatingWidget.jsx
│   │   ├── ServiceModal.jsx
│   │   └── EnquireModal.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── vite.config.js
```
