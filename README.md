# Wanderlust Explorer

Wanderlust Explorer is a premium, mobile-first travel discovery app built with Next.js. It showcases curated travel experiences across adventure, culture, food, wellness, and nature with polished routing, filtering, detail pages, and client-side favorites.

---

## Overview

This project is designed as a portfolio-level travel explorer inspired by modern booking platforms. Users can browse featured trips on the homepage, explore a full catalog, apply filters, view detailed experiences, and build a temporary favorites list during the current session.

---

## Features

- Premium responsive homepage with hero, stats, and featured experiences  
- Catalog page with all 100 travel experiences  
- Search by experience title  
- Category and destination filters  
- URL query params for shareable filter state  
- Individual detail pages for every experience  
- React `useState` favorites with visual heart toggles  
- Favorites page showing selected experiences  
- Profile page with live favorites count  
- Mobile-first sticky navigation  
- Optimized images using `next/image`  

---

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- next/image

---

## Project Structure

```
src/
  app/
    experiences/
    favorites/
    profile/
    layout.tsx
    page.tsx
  components/
  data/
  types/
```

- `app/` → routes and pages  
- `components/` → reusable UI components  
- `data/` → static experience dataset  
- `types/` → TypeScript types  

---

## Routes

- `/` → Homepage with hero and 6 featured experiences  
- `/experiences` → Full catalog with filters  
- `/experiences/[id]` → Individual experience page  
- `/favorites` → Session-based favorites  
- `/profile` → Mock profile and stats  

---

## Search and Filter Behavior

The `/experiences` page supports:

- `q` → search by title  
- `category` → filter by category  
- `destination` → filter by destination  

Filters sync with URL query parameters and persist on reload.

Example:

```
/experiences?q=Kyoto&category=Culture
```

If no results match, a clean empty-state UI is displayed with a reset option.

---

## Favorites Behavior

Favorites are implemented using React `useState` in a top-level provider.

- No backend  
- No localStorage  
- No API calls  
- No API keys  
- No external dependencies  

Favorites persist during navigation but reset on refresh (intentional for this assignment).

---

## Image Strategy

All experiences use curated Unsplash images that match the destination and activity.

- Images reflect real locations and activities (e.g., Cappadocia balloons, Kyoto temples, Patagonia glaciers)  
- Loaded with `next/image` for optimization  
- Responsive sizing for fast mobile performance  

---

## Performance & SEO

- Mobile-first responsive design  
- Optimized images with `next/image`  
- Semantic HTML structure  
- Page metadata for SEO  
- Lightweight client-side state  

---

## Key Design Decisions

- Mobile-first layout to match real travel browsing behavior  
- URL-driven filters for shareable and reload-safe state  
- Client-only favorites to meet assignment constraints  
- Reusable components for maintainability  
- Premium UI inspired by real-world travel platforms  

---

## Design Inspiration

This project is inspired by:

- https://www.airbnb.com/  
- https://www.getyourguide.com/  
- https://www.kayak.com/  

It borrows design principles such as strong imagery, clear navigation, card-based layouts, and mobile-first interaction.

---

## Limitations

- Favorites do not persist after refresh  
- No backend or booking functionality  
- Static dataset (no live API integration)  

---

## Setup Instructions

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open in browser:

```
http://localhost:3000
```

Run lint:

```
npm run lint
```

Build for production:

```
npm run build
```

---

## No Backend or API Keys

This project is fully frontend-only. It does not use a backend, database, API keys, or persistent browser storage.

---

## Author

Settar Mengli