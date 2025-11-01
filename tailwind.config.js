// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-blue': '#0057FF',
                'brand-blue-dark': '#0044CC',
                'light-blue': '#F0F6FF',
                'dark-gray': '#1F2937',
                'medium-gray': '#6B7280',
                // Sidebar colors (as before)
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                },
                // Standard colors required by classes used in CSS
                // These link to the CSS variables you defined
                background: 'hsl(var(--sidebar-background))', // Used for bg-background
                foreground: 'hsl(var(--sidebar-foreground))', // Used for text-foreground
                border: 'hsl(var(--sidebar-border))',         // Used for border-border
                input: 'hsl(var(--sidebar-border))',          // Commonly needed for input borders
                ring: 'hsl(var(--sidebar-ring))',             // Used for focus rings
            },
            fontFamily: {
                sans: [
                    'Inter',
                    'sans-serif'
                ]
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [],
}