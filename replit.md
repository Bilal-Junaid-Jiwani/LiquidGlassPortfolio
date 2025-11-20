# Bilal Junaid Jiwani - Portfolio Website

## Overview

A modern, full-stack portfolio website showcasing professional developer projects, skills, and contact information. The application features a liquid glass aesthetic inspired by Apple's iOS design language, with frosted glass effects, translucent layers, and smooth animations. Built using React with TypeScript on the frontend and Express.js on the backend, the portfolio provides an interactive and visually striking user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for optimal HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (instead of React Router)
- **Single Page Application (SPA)** architecture with all routes handled by the Portfolio component

**UI Component System**
- **shadcn/ui** component library (New York style variant) providing pre-built, accessible components
- **Radix UI** primitives for accessible, unstyled component foundations
- **Tailwind CSS** for utility-first styling with custom theme configuration
- **Class Variance Authority (CVA)** for component variant management
- Design system implements "liquid glass" aesthetic with backdrop blur, translucent surfaces, and layered depth effects

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management and API interactions
- **React Hook Form** with Zod validation for form handling
- Custom hooks for responsive design (`useIsMobile`) and toast notifications

**Design System Principles**
- Light and dark mode support with theme persistence via localStorage
- Custom CSS variables for glass effects, elevation levels, and color tokens
- Responsive grid layouts with mobile-first approach
- Animation system using Tailwind transitions and custom keyframes

### Backend Architecture

**Server Framework**
- **Express.js** server handling API routes and serving static assets
- **HTTP server** creation for potential WebSocket upgrades (structure in place)
- Middleware pipeline for JSON parsing, URL encoding, and request/response logging

**API Design**
- RESTful endpoints for contact form submission (`POST /api/contact`)
- Admin endpoint for retrieving contact messages (`GET /api/contact`)
- Standardized response format with `success`, `message`, and `data` properties
- Zod schema validation for incoming request payloads

**Development vs Production**
- Development: Vite middleware integration for HMR and asset serving
- Production: Pre-built static assets served from `dist/public`
- Environment-based configuration with `NODE_ENV` checks

### Data Storage Solutions

**Current Implementation**
- **In-Memory Storage** using JavaScript Map data structures
- `MemStorage` class implementing `IStorage` interface for contact messages
- UUID-based primary keys for message identification
- Automatic timestamp assignment on record creation

**Database Configuration (Prepared but Not Active)**
- **Drizzle ORM** configured for PostgreSQL integration
- **Neon Database** serverless driver included in dependencies
- Schema definitions in `shared/schema.ts` using Zod for validation
- Migration directory structure set up with `drizzle-kit`
- Note: Database is configured but the application currently runs on in-memory storage

**Design Rationale**
- In-memory storage chosen for simplicity and zero external dependencies during development
- Storage interface (`IStorage`) allows seamless migration to database implementation
- Prepared database configuration enables quick transition when persistence is needed

### Type System & Code Sharing

**Shared Schema Layer**
- **Zod schemas** define data contracts shared between frontend and backend
- Type definitions for Portfolio data (Projects, Skills, Timeline, Contact Messages)
- Static portfolio data exported directly from schema file
- Insert types derived from Zod schemas using `z.infer`

**Type Safety**
- TypeScript strict mode enabled across entire codebase
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)
- ESM module system with `.ts` and `.tsx` extensions

### Build & Deployment

**Build Process**
- Frontend: Vite builds React application to `dist/public`
- Backend: esbuild bundles Express server to `dist/index.js` as ESM module
- External packages excluded from bundle for smaller size and faster builds
- Type checking performed separately via `tsc`

**Development Workflow**
- `tsx` for running TypeScript directly in development
- Vite dev server with HMR for instant frontend updates
- Express server restart required for backend changes

## External Dependencies

### Core Framework Dependencies
- **React & React DOM** (v18+) - UI framework
- **Express** - Backend server framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type system

### UI Component Libraries
- **shadcn/ui** - Component library based on Radix UI primitives
- **Radix UI** (complete suite) - Accessible component primitives for dialogs, dropdowns, tooltips, etc.
- **Lucide React** - Icon library
- **Embla Carousel** - Carousel/slider functionality

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework
- **Autoprefixer** - CSS vendor prefix automation
- **class-variance-authority** - Variant-based component styling
- **clsx & tailwind-merge** - Conditional class name handling

### Form Handling & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Integration between React Hook Form and Zod

### Data Fetching & State
- **TanStack React Query** - Server state management
- **Wouter** - Lightweight routing

### Database & ORM (Configured)
- **Drizzle ORM** - Type-safe SQL ORM
- **@neondatabase/serverless** - Neon PostgreSQL driver
- **drizzle-zod** - Zod schema generation from Drizzle schemas
- **connect-pg-simple** - PostgreSQL session store (included but not actively used)

### Development Tools
- **tsx** - TypeScript execution for Node.js
- **esbuild** - JavaScript bundler for server code
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Replit integration
- **@replit/vite-plugin-dev-banner** - Development banner

### Utility Libraries
- **date-fns** - Date manipulation
- **nanoid** - Unique ID generation
- **cmdk** - Command palette component