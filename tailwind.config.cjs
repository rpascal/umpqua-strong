module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1b5e20",
          "secondary": "#4caf50",
          "accent": "#fdd835",
          "neutral": "#242433",      
          "base-100": "#F9FAFB",                
          "info": "#4672E2",                   
          "success": "#3FDE9C",                   
          "warning": "#EC9427",                   
          "error": "#E93A51",
        },
      },
    ],
  },
}
