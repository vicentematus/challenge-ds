# DS Local Publish Workflow

## Single Command
```bash
pnpm ds:publish
```

This runs: build → version patch → git commit → npm publish

## What It Does

1. **Build** - Compiles TypeScript to dist/
   - Types (.d.ts)
   - CommonJS (.js)
   - ESM (.mjs)

2. **Version Bump** - Patches version (1.0.10 → 1.0.11)

3. **Git Commit** - Commits all changes with message `chore(ds): bump version`

4. **Publish** - Pushes to npm registry

## After Publishing
```bash
git push   # manual push to remote
```

## Script Location
- Root: `package.json` → `ds:publish`
- Package: `packages/fintual-ds/package.json` → `publish:local`

## Troubleshooting

**"Unclean working tree" error:**
- Script uses `git add -A` to stage all repo changes
- If error persists, commit unrelated changes first

**npm warnings about config:**
- Safe to ignore (pnpm config not recognized by npm)
