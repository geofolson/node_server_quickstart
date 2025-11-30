# syntax=docker/dockerfile:1

# Development stage
FROM node:22.12-alpine3.21 AS development
WORKDIR /usr/src/app

# Copy dependency files
COPY package.json package-lock.json ./

# Install all dependencies (including dev dependencies)
RUN npm ci

# Copy prisma schema for generation
COPY prisma ./prisma

# Generate Prisma Client
RUN npx prisma generate

# Expose port and debugger port
EXPOSE 3000 9229

# Command will be overridden by docker-compose for development
CMD ["npm", "run", "start:docker"]

# Build stage
FROM node:22.12-alpine3.21 AS builder
WORKDIR /usr/src/app

# Copy dependency files
COPY package.json package-lock.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci

# Copy source files and config
COPY tsconfig.json .swcrc ./
COPY prisma ./prisma
COPY src ./src

# Generate Prisma Client
RUN npx prisma generate

# Build the application
RUN npm run build

# Production stage
FROM node:22.12-alpine3.21 AS production
WORKDIR /usr/src/app

# Install production dependencies only
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy generated Prisma Client from builder
COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /usr/src/app/node_modules/@prisma ./node_modules/@prisma

# Copy built application
COPY --from=builder /usr/src/app/dist ./dist

# Copy prisma schema (needed for migrations)
COPY --from=builder /usr/src/app/prisma ./prisma

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs

# Expose port
EXPOSE 3000

CMD ["node", "./dist/src/index.js"]