/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom Colors for Tropical Dark Theme
      colors: {
        coral: {
          500: '#FF6B6B', // Vibrant coral for errors and required fields
        },
        teal: {
          400: '#4DD0E1', // Lighter teal for focus rings and hover
          500: '#26A69A', // Primary teal for buttons and accents
          900: '#00695C', // Dark teal for gradient background
        },
        purple: {
          900: '#4A148C', // Deep purple for gradient background
        },
        gray: {
          600: '#4B5563', // Border color for inputs
          700: '#374151', // Background for inputs
          800: '#1F2A44', // Form container background
          900: '#111827', // Base background color
        },
      },
      // Optional: Add custom utilities if needed
      backgroundOpacity: {
        90: '0.9', // For form container bg-gray-800/90
      },
      // Optional: Extend spacing, shadows, or other utilities for fine-tuning
      spacing: {
        128: '32rem', // Example for max-w-lg equivalent
      },
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // Enhanced shadow for form
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};