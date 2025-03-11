import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "white-general": "#F2F2F2",
        "green-nosotros": "#A9D18E",
        "orange-nosotros": "#F4B183",
        "blue-nosotros": "#0F98C2",
        "purple-nosotros": "#523851",
        "background-proser": "#595959",
        "background-values": "#13467C",
        "color-values": "#F78D1B",
        "text-values": "#f6f0f7",
        "box-bg": "#E6E6E6",
      },
      backgroundImage: {
        hero: "url(/fondo.jpg)",
        header: "url(/header/header.png)",
        btnr: "url(/header/btnr.png)",
        fondo: "url(/header/fondo_btnr.png)",
        li_green: "url(/header/btnr_over.png)",
      },
      keyframes: {
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(-35px)" },
          "100%": {
            opacity: "1",
            transform: "translateX(0px)",
            visibility: "visible",
          },
        },
        "slide-left": {
          "0%": { opacity: "0", transform: "translateX(35px)" },
          "100%": {
            opacity: "1",
            transform: "translateX(0px)",
            visibility: "visible",
          },
        },
        "slide-top": {
          "0%": { opacity: "0", transform: "translateY(35px)" },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
            visibility: "visible",
          },
        },
        "slide-right-desktop": {
          "0%": { opacity: "0", transform: "translateX(-150px)" },
          "100%": {
            opacity: "1",
            transform: "translateX(0px)",
            visibility: "visible",
          },
        },
        "slide-left-desktop": {
          "0%": { opacity: "0", transform: "translateX(150px)" },
          "100%": {
            opacity: "1",
            transform: "translateX(0px)",
            visibility: "visible",
          },
        },
        "slide-top-desktop": {
          "0%": { opacity: "0", transform: "translateY(150px)" },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
            visibility: "visible",
          },
        },
      },
      animation: {
        "slide-right": "slide-right 0.75s ease-out forwards",
        "slide-right-slow": "slide-right 1.25s ease-out forwards",
        "slide-left": "slide-left 1s ease-out forwards",
        "slide-top": "slide-top 1s ease-out forwards",

        // Versión para Desktop
        "slide-right-desktop": "slide-right-desktop 0.75s ease-out forwards",
        "slide-left-desktop": "slide-left-desktop 1s ease-out forwards",
        "slide-top-desktop": "slide-top-desktop 1s ease-out forwards",
      },
    },
  },
  plugins: [typography, "prettier-plugin-tailwindcss", "prettier-plugin-astro"],
};
