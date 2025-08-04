import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      open: false,
      gzipSize: true,
    }),
  ],
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false, // Disable sourcemaps for production
    minify: "esbuild", // Use esbuild for faster minification
    target: "es2015", // Support older browsers
    cssCodeSplit: true, // Enable CSS code splitting
    rollupOptions: {
      output: {
        // Optimize chunk splitting for better caching
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          icons: [
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/react-fontawesome",
            "@fortawesome/free-brands-svg-icons",
            "@fortawesome/free-solid-svg-icons",
            "react-icons",
          ],
          styling: ["styled-components"],
        },
        // Optimize asset file naming for caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(extType)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        // Optimize chunk file naming
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
    // Optimize build performance
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false, // Disable gzip size reporting for faster builds
  },
  server: {
    port: 3000,
    open: true,
  },
  publicDir: "public",
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "styled-components",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/react-fontawesome",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-solid-svg-icons",
      "react-icons/fi",
    ],
    exclude: ["react-feather", "react-github-btn"], // These are small and can be bundled normally
  },
});
