# Deployment Guide

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Requirements

### 1. GitHub Repository Settings

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"

### 2. Required Secrets

The following secrets need to be configured in your GitHub repository:

- `VITE_GITHUB_API_TOKEN`: A GitHub personal access token with `public_repo` scope
  - Go to GitHub Settings > Developer settings > Personal access tokens
  - Generate a new token with `public_repo` scope
  - Add it as a repository secret named `VITE_GITHUB_API_TOKEN`

### 3. Automatic Deployment

The deployment workflow will automatically trigger when:

- Code is pushed to the `master` branch
- The workflow can also be manually triggered from the Actions tab

### 4. Deployment Process

The workflow performs the following steps:

1. Checks out the code
2. Sets up Node.js 18
3. Installs dependencies with `npm ci`
4. Runs linting with `npm run lint`
5. Builds the project with `npm run build`
6. Deploys the built files to GitHub Pages

### 5. SPA Routing Configuration

The project is configured for Single Page Application routing on GitHub Pages:

- `index.html` includes the SPA GitHub Pages script
- `public/404.html` handles client-side routing redirects
- All routes will work correctly when accessed directly

### 6. Build Output

The build process creates optimized files in the `dist` directory:

- Minified JavaScript and CSS
- Optimized assets (images, fonts)
- Proper chunk splitting for better caching
- Source maps disabled for production

## Troubleshooting

### Build Failures

- Check that all dependencies are properly installed
- Ensure the GitHub API token is correctly configured
- Verify that linting passes locally

### Deployment Issues

- Ensure GitHub Pages is enabled in repository settings
- Check that the workflow has proper permissions
- Verify the `VITE_GITHUB_API_TOKEN` secret is set

### Routing Issues

- Ensure the base URL is correctly configured in `vite.config.js`
- Check that the 404.html file is present in the public directory
- Verify the SPA script is included in index.html
