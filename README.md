# annaspysz.com

A personal portfolio website built with Vite + React.

View it at [annaspysz.com](https://annaspysz.com)

## Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/bildungsroman/bildungsroman.github.io.git
cd bildungsroman.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

To build and deploy manually:

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Styled Components
- **Routing**: React Router
- **Icons**: FontAwesome + React Icons
- **Deployment**: GitHub Pages

## Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (theme, etc.)
├── data/              # Static data and configuration
├── pages/             # Page components
├── services/          # API services
└── App.jsx            # Main application component
```
