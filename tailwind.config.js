module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        screen80: "80vh",
      },
      maxHeight: {
        90: "90%",
      },
      borderWidth: {
        3: "3px",
      },
      spacing: {
        expcard: "31.5rem",
        expcardmobile: "20rem",
      },
      width: {
        "4.5/12": "37.2857143%",
        104: "28rem",
      },
      maxWidth: {
        expcard: "31.5rem",
        hobbiesImg: "15rem",
        xxs: "10rem",
        "screen-3xl": "2335px",
      },
      minWidth: {
        navBarArrow: "28px",
        skillsBar: "150px",
      },
      inset: {
        "1/5": "10%",
      },
      padding: {
        22: "5.5rem",
      },
      animation: {
        fadeOut: "fadeOut 0.5s ease-in infinite",
        fadeIn: "fadeIn 0.5s ease-in infinite",
        fadeOutFast: "fadeOut 0.3s ease-in forwards",
        fadeInFast: "fadeIn 0.3s ease-in forwards",
        bouncePulseOnce: "bouncePulseOnce 1s ease-in-out forwards",
        pulseOnce: "pulseOnce 1s cubic-bezier(0.4, 0, 0.6, 1) forwards",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        bouncePulseOnce: {
          "0%": {
            transform: "translateY(0)",
            opacity: 1,
          },
          "50%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
            opacity: 0.5,
          },
          "100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
            opacity: 1,
          },
        },
        pulseOnce: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      gradientColorStops: (theme) => ({
        orange: "#e65c00",
        skillsYellow: "#F9D423",
      }),
    },

    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      xl: "24px",
      xlg: "32px",
    },

    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      expCardDarkMode: "0px 0px 20px 13px rgba(62, 62, 62, 0.25)",
      tooltip: "0px 0px 10px 4px rgba(62, 62, 62, 0.25)",
    },

    screens: {
      sm: "670px",
      // => @media (min-width: 670px) { ... }

      md: "980px",
      // => @media (min-width: 980px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["group-focus"],
      boxShadow: ["group-focus"],
      textColor: ["group-focus"],
    },
  },
  plugins: [],
};
