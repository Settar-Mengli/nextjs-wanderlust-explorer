# Wanderlust Explorer — Project Context

## Author
Settar Mengli

## Project Type
Bootcamp portfolio project for 4Geeks Academy.

## Main Objective
Create a professional frontend travel explorer application using Next.js, React, TypeScript, and Tailwind CSS.

## Important Constraint
This project must not use API keys, databases, authentication services, external backends, or paid third-party services.

All experience data must be local and stored inside the repository.

## AI Coding Agent
Codex is used as the coding assistant.

Codex should be used for targeted coding tasks only. It should not rewrite the whole application at once.

## Coding Standards
- Use Next.js App Router
- Use TypeScript
- Use Tailwind CSS
- Use functional React components
- Keep components reusable
- Prefer clear naming over clever naming
- Keep logic separated from UI where possible
- Avoid unnecessary dependencies
- No Redux, Zustand, or external state management
- No API keys
- No backend

## Expected Routes
- `/`
- `/experiences`
- `/experiences/[id]`
- `/favorites`
- `/profile`

## Required Data Shape

```ts
export interface Experience {
  id: string;
  title: string;
  description: string;
  category: "Adventure" | "Culture" | "Food" | "Wellness" | "Nature";
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}