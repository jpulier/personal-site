# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Start Next.js dev server (port 3000)
- `npm run build` — Production build
- `npm start` — Run production server
- `npm run lint` — Run ESLint

## Architecture

This is a personal portfolio site built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS 4**.

### App Structure

- `app/` — Next.js App Router: `layout.tsx` (root layout with font loading), `page.tsx` (single-page site), `globals.css` (all custom CSS)
- `components/` — React components: `Card`, `MessageBox`, `EyeIllustration`, `ContactStrip`, `GrainOverlay`, `DiamondStar`
- `public/fonts/` — Custom fonts (Space Mono, Digital-7 Mono)

### Key Patterns

- **Server components by default**; only `GrainOverlay` uses `"use client"` (canvas-based noise effect)
- **Path alias**: `@/*` maps to project root (e.g., `@/components/Card`)
- **Styling**: Tailwind utilities + custom CSS in `globals.css` for fonts, animations (background drift, eye blink), and responsive breakpoints (600px mobile)
- **SVG components**: Inline SVGs with computed geometry (e.g., `EyeIllustration` uses trigonometric calculations for ray patterns)
- **Design aesthetic**: Retro/Y2K with animated background bands, diamond corner decorations, grain texture overlay
