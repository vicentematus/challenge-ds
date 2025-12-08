# Monorepo Workflow

pnpm has some weird issues with Expo because package hoisting and the way it resolves dependencies. I found a solution on how to handle this on the following link:
https://gist.github.com/Zn4rK/ed60c380e7b672e3089074f51792a2b8

It recommends setting up like https://github.com/t3-oss/create-t3-turbo/blob/main/README.md, specially with the pnpm configuration.

## Creating new Expo app in packages/

```bash
# Option 1: pnpm create
pnpm create expo packages/your-app-name

# Option 2: npx
npx create-expo-app@latest packages/your-app-name

# After creation
pnpm install
pnpm --filter your-app-name start
```

To use fintual-ui in new app, add to package.json:

````bash
pnpm --filter interview-mock add fintual-ui@"workspace:*"
```json

```json
"dependencies": {
  "fintual-ui": "workspace:*"
}
```

## Local Development (fintual-ui → mobile/web)

With `linkWorkspacePackages: true`, changes reflect automatically via symlinks.

### JS/TS changes (components, styles)

Just edit fintual-ui source files. Metro hot reload picks up changes automatically.

### New exports (adding new component)

1. Create component in `packages/fintual-ds/src/components/NewComponent/`
2. Export from `packages/fintual-ds/src/index.ts`
3. Import in mobile/web: `import { NewComponent } from 'fintual-ui'`
4. Metro hot reload handles it

### If changes aren't reflecting (cache issues)

```bash
pnpm --filter mobile start --clear
pnpm --filter fintual-ui start --clear
```

## Publishing (external consumers)

Only needed when publishing to npm, not for local dev:

```bash
pnpm ds:build      # builds dist/
pnpm ds:bump       # version patch
pnpm ds:publish    # publish to npm
```

## TL;DR

Edit `fintual-ui` source → save → mobile/web auto-updates. If stuck, `--clear` Metro cache.
````
