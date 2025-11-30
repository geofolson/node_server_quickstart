# Node.js Server Quickstart Template

A production-ready template for quickly bootstrapping Node.js web server projects with TypeScript, Express, Prisma ORM, PostgreSQL, and Docker.

## Features

- **TypeScript** - Type-safe development
- **Express** - Fast, unopinionated web framework
- **Prisma ORM** - Modern database toolkit for PostgreSQL
- **Docker Compose** - Containerized development environment
- **SWC** - Fast TypeScript/JavaScript compiler
- **Hot Reload** - Automatic server restart on file changes

## Quick Start

### Prerequisites

- Docker and Docker Compose
- Node.js 22+ (for local development)
  - Recommended: Use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions
  - Install with: `nvm install 22 && nvm use 22`

### Running Locally

1. Start the development environment:

```bash
npm run dev
# or for a fresh build:
npm run dev:build
```

2. The server will be available at `http://localhost:3000`

3. View logs:

```bash
npm run logs
```

4. Stop the application:

```bash
npm run down
```

## Development Workflow

### Define Your Database Schema

1. Edit `prisma/schema.prisma` to define your data models
2. Generate and run migrations:

```bash
npm run db:migrate
```

3. Refresh Prisma client locally after schema changes:

```bash
npx prisma generate
```

**Note:** This template uses Prisma 7. The database URL is configured in `prisma/prisma.config.ts` using the `env()` helper. You'll need to install the `dotenv` package (`npm install dotenv`) for environment variable loading.

### Create Your Services

1. Add service classes in `src/Service/`
2. Add models in `src/Models/`
3. Define routes in `src/index.ts`

### Build and Deploy

```bash
npm run build
npm start
```

## Available Scripts

### Development

- **`npm run dev`** - Start development environment (Docker Compose)
- **`npm run dev:build`** - Start development with fresh build
- **`npm run logs`** - View backend container logs
- **`npm run down`** - Stop all containers
- **`npm run watch`** - Watch files and auto-restart backend

### Build & Run Locally

- **`npm run build`** - Compile TypeScript to `/dist` directory
- **`npm start`** - Run compiled application locally (no Docker)
- **`npm run start:docker`** - Docker entrypoint (builds and starts with debugging)

### Database

- **`npm run db:console`** - Open PostgreSQL console in running container
- **`npm run db:migrate`** - Run Prisma migrations
- **`npm run rebuild:be`** - Rebuild backend only (useful for schema changes)

### Maintenance

- **`npm run prune:docker`** - Remove all unused Docker resources

## Project Structure

```
.
├── src/
│   ├── index.ts              # Main application entry point
│   ├── Models/               # Data models
│   ├── Service/              # Business logic services
│   └── Persistence/          # Database client and utilities
├── prisma/
│   ├── schema.prisma         # Database schema definition
│   └── prisma.config.ts      # Prisma 7 configuration (database URL, migrations)
├── dist/                     # Compiled JavaScript output
├── docker-compose.yml        # Local development environment
└── Dockerfile                # Production container image
```

## Environment Variables

A `.env` file is included in the repository for local development. For production deployments, create a `.env.production` file with your production settings.

**Important for Prisma 7:** This template uses `prisma.config.ts` which requires the `dotenv` package to load environment variables. Install it with:

```bash
npm install dotenv
```

The `prisma.config.ts` file imports `dotenv/config` at the top to automatically load variables from your `.env` file.

## Next Steps

1. Install the `dotenv` package: `npm install dotenv`
2. Define your database models in `prisma/schema.prisma`
3. Create migrations with `npm run db:migrate`
4. Build your services in `src/Service/`
5. Add your API routes in `src/index.ts`
6. Build and deploy!

## License

MIT
