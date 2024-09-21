# syntax=docker/dockerfile:1

FROM node:20-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./

# installs prod dependencies only, from lockfile
RUN npm ci

COPY . .

RUN npx prisma generate

CMD ["npm", "run", "start:docker"]