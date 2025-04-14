// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%', 
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            code: {
              'background-color': '#e5e7eb',
              color: '#374151',
              padding: '2px 4px',
              'border-radius': '3px',
              fontWeight: '400',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          }
        },
        invert: {
          css: {
            'code:not(pre code)': {
              'background-color': '#696969',
              color: '#ffffff',
              padding: '2px 4px',
              'border-radius': '3px',
              fontWeight: '400',
            },
          }
        }
      }
    }
  },
  plugins: []
}