module.exports = {
  theme: {
    fontSize: {
      "2xs": "0.75rem",
      xs: "0.875rem",
      sm: "1rem",
      base: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.875rem",
      "3xl": "2.25rem",
      "4xl": "3rem",
      "5xl": "4rem",
      "6xl": "5rem",
    },
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(20px)",
    },
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1900px",
    },
    fontFamily: {
      sans: ["Source Sans Pro", "sans-serif"],
      slab: ["Zilla Slab", "serif"],
    },
    extend: {
      colors: {
        pink: {
          50: "#FDF3F9",
          100: "#FCE8F3",
          200: "#F7C4E0",
          300: "#F3A1CD",
          400: "#E95BA8",
          500: "#E01482",
          600: "#CA1275",
          700: "#860C4E",
          800: "#65093B",
          900: "#430627",
        },
        gray: {
          "100": "#f5f5f5",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121",
        },
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      backgroundOpacity: {
        "90": "0.9",
      },
      screens: {
        "2xl": "1530px",
        "3xl": "1800px",
        "4xl": "2000px",
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "128": "32rem",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      inset: (theme, { negative }) => ({
        full: "100%",
        "1/2": "50%",
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      maxWidth: theme => ({
        ...theme("spacing"),
        ...theme("screens"),
      }),
      minHeight: theme => ({
        ...theme("spacing"),
        "25": "25vh",
        "50": "50vh",
        "75": "75vh",
      }),
    },
  },
  purge: [
    './src/**/*.js',
  ],
  variants: {
    backgroundColor: ["responsive", "hover", "group-hover"],
    borderColor: ["responsive", "hover", "group-hover"],
    scale: ["responsive", "hover", "group-hover"],
    boxShadow: ["responsive", "hover", "group-hover"],
  },
  corePlugins: {
    container: false,
  },
}
