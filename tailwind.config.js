/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",    './**/*.{html,js,jsx,ts,tsx}'  ],
  theme: {
    extend: {},
  },
  safelist: [
    'bg-slate-900', 'bg-slate-800/50', 'bg-emerald-600', 'text-white', 'text-emerald-400',
    'font-sans', 'backdrop-blur', 'shadow-lg', 'border-slate-700', 'border-slate-800',
    'bg-slate-50', 'text-slate-900', 'bg-emerald-50', 'from-emerald-400', 'to-teal-400',
    'bg-emerald-500/90', 'bg-slate-500/90', 'bg-emerald-600', 'hover:bg-emerald-600'
  ],
  plugins: [],
}