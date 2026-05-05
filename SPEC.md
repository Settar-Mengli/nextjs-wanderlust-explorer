# Wanderlust Explorer — Project Specification

## Overview

Build an interactive travel experience explorer using React and Next.js.

## Core Requirements

### Pages

* `/` — Home page with hero section and CTA to `/experiences`
* `/experiences` — Explorer page with all experiences
* `/experiences/[id]` — Detail page for a single experience
* `/favorites` — List of favorited experiences
* `/profile` — Mock profile with favorites summary

### Data

* 100 generated experience objects
* Stored locally in a TypeScript file
* Each object includes:

  * id
  * title
  * description
  * category (Adventure, Culture, Food, Wellness, Nature)
  * destination (city + country)
  * price
  * rating
  * imageUrl

### Search & Filters

* Search by title (case-insensitive regex)
* Filter by category
* Filter by destination
* Filters must:

  * Work independently
  * Combine together
  * Persist in URL query parameters

### Favorites

* Toggle favorite using a heart icon
* Store favorites in React `useState`
* Pass favorites via props

### Technical Requirements

* Use Next.js App Router
* Use TypeScript
* Use Tailwind CSS
* No external state libraries (Redux, Zustand, etc.)
* No backend / no API usage

### UX Requirements

* Responsive design (mobile + desktop)
* Show "No results found" when filters return empty
* Active navigation highlighting
* Pre-fill filters from URL on page load

### Evaluation Criteria

* Clean component structure
* Correct use of hooks (`useState`, `useEffect`)
* URL-driven filtering
* Code organization
* UI consistency
