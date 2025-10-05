
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-sunset': 'linear-gradient(135deg, #FF8C42 0%, #FFA562 50%, #FFB87A 100%)',
        'gradient-dunes': 'linear-gradient(to bottom, #F5E6D3 0%, #E8D5B7 50%, #C9A882 100%)',
        'gradient-heat': 'linear-gradient(180deg, rgba(255,140,66,0.1) 0%, rgba(255,165,98,0.05) 100%)',
        'sand-texture': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://i.etsystatic.com/48836911/r/il/afebd4/5708675163/il_570xN.5708675163_9il0.jpg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8D5B7' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        // Desert Theme Colors
        sand: {
          50: '#FAF5EF',
          100: '#F5E6D3',
          200: '#E8D5B7',
          300: '#DBC49B',
          400: '#CEB37F',
          500: '#C9A882',
          600: '#B8956A',
          700: '#9A7A56',
          800: '#7C6045',
          900: '#5E4834',
        },
        clay: {
          50: '#F2EBE3',
          100: '#E5D7C7',
          200: '#D8C3AB',
          300: '#C9A882',
          400: '#BA8D5A',
          500: '#B8956A',
          600: '#A07B52',
          700: '#88613A',
          800: '#704722',
          900: '#582D0A',
        },
        terracotta: {
          50: '#FDEEE9',
          100: '#FADDD3',
          200: '#F5BBA7',
          300: '#EF997B',
          400: '#D4704B',
          500: '#C45A3A',
          600: '#B44429',
          700: '#9A3318',
          800: '#802207',
          900: '#661100',
        },
        sunset: {
          50: '#FFF4ED',
          100: '#FFE9DB',
          200: '#FFD3B7',
          300: '#FFBD93',
          400: '#FFA562',
          500: '#FF8C42',
          600: '#FF7321',
          700: '#E65A00',
          800: '#CC4100',
          900: '#B32800',
        },
        lizard: {
          50: '#F5F7E8',
          100: '#EBEFD1',
          200: '#D7DFA3',
          300: '#C3CF75',
          400: '#A8B26F',
          500: '#8B9556',
          600: '#6E7845',
          700: '#515B34',
          800: '#343E23',
          900: '#172112',
        },
        // Shadcn UI Colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'sand-drift': {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(10px) translateY(-5px)' },
        },
        'heat-wave': {
          '0%, 100%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(-2px) scaleY(1.02)' },
        },
        'lizard-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'sand-drift': 'sand-drift 8s ease-in-out infinite',
        'heat-wave': 'heat-wave 3s ease-in-out infinite',
        'lizard-pulse': 'lizard-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
