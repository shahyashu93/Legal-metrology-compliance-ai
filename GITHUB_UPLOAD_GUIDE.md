# HYPER LENS — GitHub Upload Guide

This repository is a pnpm workspace containing:

- `artifacts/hyper-lens` — HYPER LENS React web application
- `artifacts/api-server` — extraction API server
- `artifacts/hyper-lens-video` — animated project-video source
- `lib/api-spec` — shared OpenAPI contract
- `HYPER-LENS-Compliance-Made-Visible.mp4` — verified 45-second project video

## 1. Extract the archive

Extract `hyper-lens-github-ready.zip`. Keep the included folder structure unchanged.

## 2. Create the GitHub repository

1. Sign in to GitHub.
2. Select **New repository**.
3. Name it `hyper-lens`.
4. Do not add another README, `.gitignore`, or license when creating it.
5. Create the repository.

## 3. Upload using Git

Open a terminal in the extracted project folder:

```bash
git init
git add .
git commit -m "Initial HYPER LENS project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hyper-lens.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## 4. Install and run locally

Install Node.js 20+ and pnpm, then run:

```bash
pnpm install
```

Start the services in separate terminals:

```bash
pnpm --filter @workspace/api-server run dev
```

```bash
pnpm --filter @workspace/hyper-lens run dev
```

```bash
pnpm --filter @workspace/hyper-lens-video run dev
```

## 5. Configure the Gemini key

The API requires a `GEMINI_API_KEY` environment variable. Never commit the key to GitHub.

For local development, configure it through your operating system or a local environment file that remains ignored by Git. For Replit, add it through **Secrets**.

## 6. Files intentionally excluded

The archive does not include:

- `node_modules`
- compiled `dist` folders
- caches and temporary files
- Git history
- Replit agent/internal files
- secrets or environment values
- broken or superseded video exports

Run `pnpm install` after extraction to restore dependencies.