## To run locally

`docker compose up`

to refresh prisma client locally after making local schema changes:
`prisma generate`

## Explanations for package.json scripts

### "prune:docker"

Removes all unused containers, networks, images (both dangling and unused), and optionally, volumes.

### "build":

removes contents of `/dist` directory, compiles contents of `/src` and puts output in `/dist`

### "db:console"

Opens up a db console for the DB running in docker compose

### "db:migrate"

Runs prisma migration inside docker compose backend

### "db:migrate:undo"

Not implemented yet. Would be for reversing the last migration.

### "rebuild:be":

For use when developing - useful for DB schema changes without stopping entire app.
Builds backend, stops and removes running backend, starts backend with new build to use latest schema in calls to DB. Leaves DB running. Then you can do your db migration and seeding.

### "seed:dev": "

Runs the DB seed script at `scripts/seed/dev.ts` using `docker compose run backend`

### "start"

Basic node start of the `index.js`

### "start:docker"

Used as the start command in the Dockerfile

### "watch"

Alternative to using vscode configured "task" that runs 'restart backend' on save
