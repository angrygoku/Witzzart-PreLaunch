# Witzzart Pre-Launch Landing Page

## Overview
Witzzart is a government-backed creative marketplace platform launching soon in India. The project is a pre-launch landing page designed to showcase the platform's vision of connecting artists, venues, and event organizers in a unified creative economy. Built as a modern React application with Express.js backend, it emphasizes trust through government backing and focuses on community building before the main platform launch.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
**Framework**: React 18 with TypeScript using Vite for development and build tooling
- **UI Library**: Comprehensive shadcn/ui component system with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens following the New York style variant
- **State Management**: TanStack Query for server state management with simple local state
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation through Hookform resolvers

### Backend Architecture
**Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with `/api` prefix convention
- **Session Management**: Express sessions with connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement via Vite integration in development mode

### Data Storage Solutions
**Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions in `/shared` directory
- **Migrations**: Drizzle Kit for database migrations and schema changes
- **Session Storage**: PostgreSQL-backed session persistence

### Design System Implementation
**Component Structure**: Modular component architecture with example implementations
- **Design Tokens**: Custom color palette featuring brand magenta (#E91E63), creative purple, and warm orange
- **Typography**: Poppins for headings and Montserrat for body text
- **Layout System**: Consistent spacing using Tailwind utilities (4, 6, 8, 12, 16 units)
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Development Architecture
**Monorepo Structure**: Client-server separation with shared utilities
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Development Experience**: Hot reloading, error overlays, and Replit integration
- **Type Safety**: Full TypeScript coverage across client, server, and shared code
- **Asset Management**: Organized asset structure with generated images and design guidelines

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for form management
- **Backend Framework**: Express.js with TypeScript support via tsx runtime
- **Build Tools**: Vite for frontend, esbuild for backend compilation

### Database and ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **ORM and Validation**: Drizzle ORM with Drizzle Zod for schema validation
- **Session Storage**: connect-pg-simple for PostgreSQL session persistence

### UI and Design System
- **Component Library**: Complete Radix UI primitive collection for accessibility
- **Styling Framework**: Tailwind CSS with PostCSS and Autoprefixer
- **UI Components**: shadcn/ui component system with class-variance-authority
- **Utilities**: clsx and tailwind-merge for conditional styling

### State Management and API
- **Server State**: TanStack React Query for data fetching and caching
- **Date Handling**: date-fns for date manipulation and formatting
- **Carousel Components**: Embla Carousel for interactive content display

### Development and Tooling
- **Development Server**: Vite with React plugin and runtime error overlays
- **Replit Integration**: Vite plugin for Replit development environment
- **Type Checking**: TypeScript with strict mode enabled
- **Linting and Formatting**: Configured for consistent code style

### External Services Integration
- **WhatsApp Integration**: Direct WhatsApp contact functionality for lead generation
- **Government Backing**: Integration points for official government verification systems
- **Email Services**: Placeholder infrastructure for contact form submissions and waitlist management