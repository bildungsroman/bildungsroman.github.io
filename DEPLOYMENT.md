# Deployment Guide

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Requirements

### 1. GitHub Repository Settings

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"

### 2. Secrets

No custom secrets are required. The build uses the workflow's built-in `GITHUB_TOKEN` to fetch pinned repositories for the Coding page.

The old `VITE_GITHUB_API_TOKEN` secret is no longer used and can be deleted from the repository settings. Revoke the matching personal access token in GitHub Settings > Developer settings > Personal access tokens, since it was previously embedded in the public JavaScript bundle.

### 3. Automatic Deployment

The deployment workflow runs when:

- Code is pushed to the `master` branch
- It is manually triggered from the Actions tab
- Every Monday at 12:00 UTC, so pinned repository data stays current

### 4. Deployment Process

The workflow performs the following steps:

1. Checks out the code
2. Sets up Node.js 24
3. Installs dependencies with `npm ci`
4. Runs linting with `npm run lint`
5. Builds the project with `npm run build`, which first runs `scripts/fetch-repos.mjs` to refresh `src/data/repos.json`
6. Deploys the built files to GitHub Pages

## Pinned Repositories

The Coding page renders `src/data/repos.json`, generated at build time from the repositories pinned on the [bildungsroman GitHub profile](https://github.com/bildungsroman). No token ships to the browser.

To refresh the data locally, run:

```bash
GH_TOKEN=$(gh auth token) npm run fetch-repos
```

Without `GITHUB_TOKEN` or `GH_TOKEN` set, the build keeps the committed `repos.json`.

## SPA Routing Configuration

The project is configured for Single Page Application routing on GitHub Pages:

- `index.html` includes the SPA GitHub Pages script
- `public/404.html` handles client-side routing redirects
- All routes will work correctly when accessed directly

## Build Output

The build process creates optimized files in the `dist` directory:

- Minified JavaScript and CSS
- Optimized assets (images, fonts)
- Chunk splitting for better caching
- Source maps disabled for production

## Troubleshooting

### Build Failures

- Check that all dependencies are properly installed (Node.js 22.22 or newer is required)
- Verify that linting passes locally
- If `fetch-repos` fails with an HTTP error, check the GitHub API status and the workflow's token permissions

### Deployment Issues

- Ensure GitHub Pages is enabled in repository settings
- Check that the workflow has proper permissions

### Routing Issues

- Ensure the base URL is correctly configured in `vite.config.js`
- Check that the 404.html file is present in the public directory
- Verify the SPA script is included in index.html
