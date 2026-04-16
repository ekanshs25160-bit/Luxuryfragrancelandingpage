# Shopify Theme Integration Guide

This guide explains how to reorganize your Vite React project to be compatible with Shopify's GitHub integration.

## 1. Updated Vite Configuration

Your `vite.config.ts` has been updated with the following key changes:

```typescript
build: {
  // Output directly to Shopify assets folder
  outDir: 'assets',
  // Ensure files aren't nested in subdirectories
  assetsDir: '',
  rollupOptions: {
    output: {
      // Ensure consistent naming for Shopify
      entryFileNames: '[name].js',
      chunkFileNames: '[name]-[hash].js',
      assetFileNames: (assetInfo) => {
        const info = assetInfo.name.split('.')
        const ext = info[info.length - 1]
        if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
          return `images/[name].[ext]`
        }
        if (/css/i.test(ext)) {
          return `[name].[ext]`
        }
        return `[name].[ext]`
      }
    }
  }
}
```

**Key Points:**
- `outDir: 'assets'` - Builds directly to Shopify's assets folder
- `assetsDir: ''` - Prevents nested subdirectories
- Custom asset naming ensures Shopify compatibility

## 2. File Structure Mapping

### Current Structure → Shopify Structure

```
Your Current Files          →  Shopify Theme Structure
─────────────────────────────────────────────────────────
src/                        →  (Source files - stay in src/)
├── app/                    →  (React components)
├── styles/                 →  (CSS files)
└── main.tsx               →  (Entry point)

dist/ (removed)            →  assets/ (build output)

New Shopify Folders:
├── layout/                →  theme.liquid (main layout)
├── templates/             →  index.liquid, etc.
├── sections/              →  header.liquid, etc.
├── snippets/              →  meta-tags.liquid, etc.
├── config/                →  settings_schema.json
└── locales/               →  en.default.json
```

### File Mapping Details:

**Keep in `/src` (Development Files):**
- All React components (`src/app/components/`)
- TypeScript files (`src/app/`)
- CSS/SCSS files (`src/styles/`)
- Assets used by React (images, fonts)

**Root Level (Shopify Theme Files):**
- `layout/theme.liquid` - Main theme layout
- `templates/*.liquid` - Page templates
- `sections/*.liquid` - Reusable sections
- `snippets/*.liquid` - Small reusable code snippets
- `config/settings_schema.json` - Theme settings
- `locales/*.json` - Translation files

**Generated (Build Output):**
- `assets/` - All compiled JS, CSS, and processed assets

## 3. Handling .liquid Files

### Strategy: Hybrid Approach

**Liquid files should stay at the root level** for the following reasons:

1. **Shopify Requirements**: Shopify expects liquid files in specific folders at the root
2. **Theme Editor**: Shopify's theme editor needs direct access to liquid files
3. **GitHub Integration**: Shopify's GitHub integration looks for standard theme structure

**Your React app integrates via:**
- `layout/theme.liquid` includes your built JS/CSS files
- React mounts to `<div id="root"></div>` in the layout
- Liquid provides fallback content for when JS is disabled

## 4. Git Architecture & Branch Strategy

### Recommended Branch Strategy:

```
main (production)           →  Shopify-ready theme files
├── layout/
├── templates/
├── sections/
├── assets/                 →  Built files only
└── config/

source (development)        →  Full development environment
├── src/                    →  React source code
├── layout/
├── templates/
├── vite.config.ts
├── package.json
└── node_modules/
```

### Implementation Steps:

1. **Create Source Branch:**
```bash
git checkout -b source
git add .
git commit -m "Move to source branch with full dev environment"
git push -u origin source
```

2. **Prepare Main Branch:**
```bash
git checkout main
npm run deploy:prepare  # Cleans and builds for Shopify
git add assets/ layout/ templates/ sections/ snippets/ config/ locales/
git commit -m "Shopify-ready theme files"
git push origin main
```

3. **Development Workflow:**
```bash
# Work on source branch
git checkout source
npm run dev  # Development server

# When ready to deploy
npm run build:shopify
git add .
git commit -m "Update source code"
git push origin source

# Merge built files to main
git checkout main
git merge source --no-commit
npm run deploy:prepare
git add assets/
git commit -m "Update built theme files"
git push origin main
```

## 5. Updated NPM Scripts

Your `package.json` now includes:

```json
{
  "scripts": {
    "build": "vite build",
    "build:shopify": "vite build && npm run copy:liquid",
    "copy:liquid": "cp -r liquid/* . 2>/dev/null || true",
    "dev": "vite",
    "clean": "rm -rf assets/*.js assets/*.css assets/images/* 2>/dev/null || true",
    "deploy:prepare": "npm run clean && npm run build:shopify"
  }
}
```

**Script Explanations:**
- `build:shopify` - Builds for Shopify and copies liquid files
- `clean` - Removes old build files
- `deploy:prepare` - Full clean and build process for deployment

## 6. Shopify GitHub Integration Setup

1. **Connect Repository:**
   - In Shopify Admin → Online Store → Themes
   - Click "Add theme" → "Connect from GitHub"
   - Select your repository and the `main` branch

2. **Configure Branch:**
   - Shopify will monitor the `main` branch
   - Any pushes to `main` will automatically update your theme
   - Use the `source` branch for development

3. **Theme Structure Validation:**
   - Shopify expects these folders at root: `layout/`, `templates/`, `sections/`, `assets/`, `config/`, `locales/`
   - Your built files will be in `assets/`
   - Liquid files provide the theme structure

## 7. Development Workflow

### Daily Development:
```bash
# 1. Work on source branch
git checkout source
npm run dev

# 2. Make changes to React components in src/
# 3. Test locally

# 4. Build and deploy
npm run deploy:prepare
git add .
git commit -m "Feature: Add new component"
git push origin source

# 5. Update production
git checkout main
git merge source --no-commit
npm run deploy:prepare
git add assets/
git commit -m "Deploy: New component"
git push origin main  # This triggers Shopify update
```

### Key Points:
- Develop on `source` branch with full dev environment
- Deploy built files to `main` branch for Shopify
- React app mounts in `layout/theme.liquid`
- Liquid files provide fallback and theme structure
- Assets are automatically processed and optimized by Vite

## 8. Testing Your Setup

1. **Local Development:**
```bash
git checkout source
npm run dev
# Visit http://localhost:5173
```

2. **Build Test:**
```bash
npm run build:shopify
# Check that files appear in assets/
```

3. **Shopify Integration:**
   - Push to `main` branch
   - Check Shopify admin for theme updates
   - Preview your theme in Shopify

This setup gives you the best of both worlds: modern React development with full Shopify theme compatibility.