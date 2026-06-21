#  Musinsa (E‑Commerce) Clone 🛍️

A modern, responsive e‑commerce web application inspired by **Musinsa**, built with **React** and **Tailwind CSS**.  
This project demonstrates dynamic product rendering, interactive favorites and cart functionality, and scalable architecture suitable for large product catalogs.

---

## Features 🚀

- **Responsive UI**: Clean, mobile‑friendly design using Tailwind CSS.
- **Dynamic Product Catalog**: 350+ products rendered from JSON data across multiple categories (Fashion, Beauty, Accessories, Home, Snap, New).
- **Favorites System**:
   - Heart icon toggle on each product.
   - Favorites count displayed in the header.
   - Persistent state using `localStorage`.
- **Cart System**:
   - Add to Cart button on product cards.
   - Dedicated Cart page with product details, tax, delivery, and total calculation.
   - Cart count displayed in the header.
- **Routing**: Category pages (Fashion, Beauty, New, Snap, Accessories, Home) managed with React Router.
- **Scalability**: Product data stored in JSON files for easy expansion and maintenance.

---

## Tech Stack 🛠️ 

- **Frontend**: React (Hooks, Router)
- **Styling**: Tailwind CSS
- **State Management**: React useState + localStorage persistence
- **Data**: JSON product files for categories
- **Icons**: Font Awesome

---

##  Project Structure 📂

musinsa-clone/
├── src/
│   ├── components/
│   │   ├── Header |--- Head.jsx
│   │   ├── Hero   |--- Hero.jsx
│   │    
│   ├── pages/
│   │   ├── Fashion.jsx
│   │   ├── Beauty.jsx
│   │   ├── New.jsx
│   │   ├── Snap.jsx
│   │   ├── Bag.jsx
│   │   ├── Cart.jsx
│   │   ├── Hoodies.jsx
│   │   ├── Member.jsx
│   │   ├── Muahmuah.jsx
│   │   ├── Musinsa.jsx
│   │   ├── Pant.jsx
│   │   ├── Sale.jsx
│   │   ├── Shirts.jsx
│   │   ├── Shoes.jsx
│   │   ├── Sports.jsx
│   │   ├── Snap.jsx
│   │   ├── Accessories.jsx
│   │   └── Home.jsx
│   ├── data/
│   │   ├── BeautyProductMap.jsx
│   │   ├── BagProductMap.jsx
│   │   ├── FashionProductMap.jsx
│   │   ├── HoodieProductMap.jsx
│   │   ├── MemProductMap.jsx
│   │   ├── NewProductMap.jsx
│   │   ├── MuahProductMap.jsx
│   │   ├── MusinsaProductMap.jsx
│   │   ├── PantMap.jsx
│   │   ├── SaleProductMap.jsx
│   │   ├── ShirtMap.jsx
│   │   ├── ShoesMap.jsx
│   │   ├── SportMap.jsx
│   │   ├── AcceProductMap.jsx
│   │   └── HomeMap.jsx
│   ├── App.jsx
│   └── index.js
└── README.md

------------------------

## How to Run ✨

--------------------------------------

## SCREENSHOTS 📸

- [Click here for *musinsa navbar dropdown* page screenshot](ss-1.png)
- [Click here for *musinsa home* page screenshot](ss-2.png)
- [Click here for *musinsa wishlist* page screenshot](ss-3.png)
- [Click here for *musinsa cart* page screenshot](ss-4.png)

-------------

## LIVE DEMO 🌐

- [Click here for *musinsa* clone live-demo to experience yourself](https://amnaakhtar1213.github.io/musinsa/)

-----------------------------

## Clone the Repository
```bash
git clone https://github.com/Amnaakhtar1213/musinsa.git