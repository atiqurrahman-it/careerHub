/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#753cc4",
        
"secondary": "#474747",
        
"accent": "#f4f146",
        
"neutral": "#23222F",
        
"base-100": "#F8F7F8",
        
"info": "#757575",
        
"success": "#59D99B",
        
"warning": "#E1AF19",
        
"error": "#E66B90",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

