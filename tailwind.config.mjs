import tailwindCSSAnimate from "tailwindcss-animate";
import tailwindCSSTypography from "@tailwindcss/typography";
import tailwindCSSContainerQueries from "@tailwindcss/container-queries";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      green: {
        DEFAULT: "#21cb6e",
      },
      brand: {
        orange: "#f87211",
        red: "#ff003d",
        purple: "#7361E6",
        "dark-purple": "#180848",
        sage: "#262c32",
        white: "#fdfdfd",
        black: "#000000",
      },
      red: {
        50: "#fff1f1",
        100: "#ffe3e4",
        200: "#ffcbd0",
        300: "#ffa1a9",
        400: "#ff6d7c",
        500: "#fa3953",
        600: "#dd163a",
        700: "#c30d32",
        800: "#a30e31",
        900: "#8c0f31",
        950: "#4e0315",
      },
      purple: {
        50: "#eff1fe",
        100: "#e2e4fd",
        200: "#cbccfa",
        300: "#abacf6",
        400: "#9189f0",
        500: "#7a68e7",
        600: "#6f50db",
        700: "#6042c0",
        800: "#4e389b",
        900: "#42337c",
        950: "#281e48",
      },
      "dark-purple": {
        50: "#eef0ff",
        100: "#e0e4ff",
        200: "#c7ccfe",
        300: "#a6abfb",
        400: "#8482f7",
        500: "#7064f0",
        600: "#6147e4",
        700: "#5439c9",
        800: "#4431a2",
        900: "#40338d",
        950: "#231b4b",
      },
      orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed8aa",
        300: "#fcbb75",
        400: "#fa943d",
        500: "#f87211",
        600: "#e95a0d",
        700: "#c1430d",
        800: "#9a3512",
        900: "#7c2e12",
        950: "#431507",
      },
      grey: {
        50: "#f4f6f7",
        100: "#e2e8eb",
        200: "#c9d3d8",
        300: "#a3b4bd",
        400: "#768d9a",
        500: "#5b727f",
        600: "#4e606c",
        700: "#44505a",
        800: "#3d464d",
        900: "#363d43",
        950: "#262c32",
      },
      white: {
        50: "#fdfdfd",
        100: "#efefef",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#989898",
        500: "#7c7c7c",
        600: "#656565",
        700: "#525252",
        800: "#373737",
        900: "#262626",
        950: "#292929",
      },
      black: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#171717",
        950: "#000000",
      },
      blue: {
        50: "#f0f8ff",
        100: "#e0f1fe",
        200: "#b9e3fe",
        300: "#7ccdfd",
        400: "#37b5f9",
        500: "#0c97e4",
        600: "#017bc8",
        700: "#0262a2",
        800: "#065386",
        900: "#0b456f",
        950: "#082c49",
      },
      lowercase: {
        blue: "#0000ff",
        black: "#232326",
        white: "#FFF",
      },
    },
    fontFamily: {
      oracle: "'Oracle Variable', sans-serif",
      "fira-code": "'Fira Code', monospace",
      "repetition-scrolling": "'Repetition Scrolling', sans-serif",
      jersey: "'Jersey20', sans-serif",
      mondwest: "'Mondwest', sans-serif",
    },
    fontWeight: {
      book: 400,
      bold: 700,
      medium: 500,
      semibold: 600,
      thin: 100,
    },
    fontSize: {
      "4xs": [
        "8.7px",
        {
          lineHeight: "1.5",
          fontWeight: "300",
        },
      ],
      "3xs": [
        "10.4px",
        {
          lineHeight: "1.4",
          fontWeight: "400",
        },
      ],
      "2xs": [
        "12.5px",
        {
          lineHeight: "1.4",
          fontWeight: "400",
        },
      ],
      xs: [
        "15px",
        {
          lineHeight: "1.33",
          fontWeight: "400",
        },
      ],
      sm: [
        "16px",
        {
          lineHeight: "1.33",
          fontWeight: "400",
        },
      ],
      base: [
        "18px",
        {
          lineHeight: "1.4",
          fontWeight: "400",
        },
      ],
      md: [
        "21.6px",
        {
          lineHeight: "1.2",
          fontWeight: "400",
        },
      ],
      lg: [
        "25.9px",
        {
          lineHeight: "1.3",
          fontWeight: "400",
          letterSpacing: "-0.01em",
        },
      ],
      xl: [
        "31.1px",
        {
          lineHeight: "1.3",
          fontWeight: "500",
          letterSpacing: "-0.02em",
        },
      ],
      "2xl": [
        "37.3px",
        {
          lineHeight: "1.2",
          fontWeight: "500",
          letterSpacing: "-0.03em",
        },
      ],
      "3xl": [
        "44.8px",
        {
          lineHeight: "1.2",
          fontWeight: "500",
          letterSpacing: "-0.04em",
        },
      ],
      "4xl": [
        "53.8px",
        {
          lineHeight: "1.1",
          fontWeight: "500",
          letterSpacing: "-0.05em",
        },
      ],
      "5xl": [
        "64.5px",
        {
          lineHeight: "1.2",
          fontWeight: "500",
          letterSpacing: "-0.05em",
        },
      ],
      "6xl": [
        "77.4px",
        {
          lineHeight: "1.2",
          fontWeight: "500",
          letterSpacing: "-0.04em",
        },
      ],
      "7xl": [
        "92.88px",
        {
          lineHeight: "1.1",
          fontWeight: "500",
          letterSpacing: "-0.05em",
        },
      ],
      "8xl": [
        "111.46px",
        {
          lineHeight: "1.1",
          fontWeight: "500",
          letterSpacing: "-0.05em",
        },
      ],
    },
    extend: {
      transitionTimingFunction: {
        "in-quad": "var(--ease-in-quad)",
        "in-cubic": "var(--ease-in-cubic)",
        "in-quart": "var(--ease-in-quart)",
        "in-quint": "var(--ease-in-quint)",
        "in-expo": "var(--ease-in-expo)",
        "in-circ": "var(--ease-in-circ)",

        "out-quad": "var(--ease-out-quad)",
        "out-cubic": "var(--ease-out-cubic)",
        "out-quart": "var(--ease-out-quart)",
        "out-quint": "var(--ease-out-quint)",
        "out-expo": "var(--ease-out-expo)",
        "out-circ": "var(--ease-out-circ)",

        "in-out-quad": "var(--ease-in-out-quad)",
        "in-out-cubic": "var(--ease-in-out-cubic)",
        "in-out-quart": "var(--ease-in-out-quart)",
        "in-out-quint": "var(--ease-in-out-quint)",
        "in-out-expo": "var(--ease-in-out-expo)",
        "in-out-circ": "var(--ease-in-out-circ)",

        "in-out-strong": "var(--ease-in-out-strong)",
        "bounce-soft": "var(--ease-bounce-soft)",
        "bounce-elegant": "var(--ease-bounce-elegant)",
      },
      screens: {
        phover: { raw: "(hover: hover) and (pointer: fine)" },
        "prefers-dark": { raw: "(prefers-color-scheme: dark)" },

        "4xl": "2200px",
        "3xl": "1800px",

        "max-4xl": { max: "2200px" },
        "max-3xl": { max: "1800px" },

        "max-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "max-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "max-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "max-lg-2": { max: "890px" },
        // => @media (max-width: 991px) { ... }

        "min-lg-2": { min: "890px" },
        // => @media (min-width: 890px) { ... }

        "max-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "max-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }

        "max-xs": { max: "400px" },
        // => @media (max-width: 400px) { ... }

        "max-2xs": { max: "350px" },
        // => @media (max-width: 340px) { ... }
      },
      width: {
        section: "1440px",
        article: "768px",
        "fake-editor": "1032px",
      },
      height: {
        header: "80px",
      },
      maxWidth: {
        section: "1440px",
        article: "768px",
        "fake-editor": "1032px",
      },
      margin: {
        section: "20px",
        "section-sm": "32px",
        "section-lg": "40px",
        "section-xl": "60px",
        "section-2xl": "80px",
      },
      padding: {
        header: "80px",
        section: "16px",
        "section-sm": "32px",
        "section-lg": "40px",
        "section-xl": "60px",
        "section-2xl": "80px",
        article: "20px",
        "article-xs": "32px",
        "article-md": "40px",
        "article-lg": "200px",
      },
      spacing: {
        header: "80px",
        "header-lg": "70px",
      },
      boxShadow: {
        "lowercase-button": "0px 0px 10.476px -2.669px #FFF inset",
      },
      backgroundImage: {
        glare:
          "radial-gradient(farthest-corner circle at var(--m-x) var(--m-y),hsl(0, 0%, 75%) 5%,hsl(200, 5%, 35%) 90%,hsl(320, 40%, 0%) 100%)",
        credits:
          "linear-gradient(147deg, rgba(255, 255, 255, 0.40) 15.97%, rgba(255, 255, 255, 0.80) 58.42%, rgba(255, 255, 255, 0.40) 86.62%);",
      },
      keyframes: {
        "team-cards-fade-in": {
          "0%": {
            opacity: "0",
            filter: "blur(10px)",
            transform: "translateX(400px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0px)",
            transform: "translateX(0px)",
          },
        },
        "border-increase": {
          "20%": {
            height: "130%",
          },
          "100%": {
            width: "250%",
            height: "130%",
          },
        },
        "problem-enter": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "problem-exit": {
          // to: {
          //   opacity: "0",
          //   // filter: "blur(10px)",
          //   transform: "scale(0.9)",
          // },
          "0%": {
            opacity: "1",
            // filter: "blur(0px)",
            transform: "scale(1)",
          },
          "100%": {
            opacity: "0",
            // filter: "blur(10px)",
            transform: "scale(0.9)",
          },
        },
        "toast-enter": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "toast-exit": {
          to: {
            opacity: "0",
            // filter: "blur(10px)",
            transform: "scale(0.9)",
          },
          // "0%": {
          //   opacity: "1",
          //   // filter: "blur(0px)",
          //   transform: "scale(1)",
          // },
          // "100%": {
          //   opacity: "0",
          //   // filter: "blur(10px)",
          //   transform: "scale(0.9)",
          // },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "var(--fade-in-opacity, 1)" },
        },
        "turn-on-light-red": {
          "0%": {
            backgroundColor: "#262626",
          },
          "100%": {
            backgroundColor: "#FF003D",
          },
        },
        "turn-on-light-orange": {
          "0%": {
            backgroundColor: "#262626",
          },
          "100%": {
            backgroundColor: "#F87211",
          },
        },
        "turn-on-light-white": {
          "0%": {
            backgroundColor: "#262626",
          },
          "100%": {
            backgroundColor: "#FDFDFD",
          },
        },
        shimmer: {
          "0%": { transform: "translateX(-200%)" },
          "33%, 100%": { transform: "translateX(200%)" },
        },
        "marquee-horizontal": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(-100% - var(--gap, 1rem)))" },
        },
        "skeleton-loader-shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "line-shrink": {
          from: { "stroke-dashoffset": "0" },
          to: { "stroke-dashoffset": "22" },
        },
        "line-grow": {
          from: { "stroke-dashoffset": "22" },
          to: { "stroke-dashoffset": "0" },
        },
        "circle-draw": {
          from: { "stroke-dashoffset": "335" },
          to: { "stroke-dashoffset": "0" },
        },
        "menu-item-enter-1": {
          "0%": {
            transform: "translateY(-10px) scale(0.9) rotate(-6deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px) scale(1) rotate(-6deg)",
            opacity: "1",
          },
        },
        "menu-item-enter-2": {
          "0%": {
            transform: "translateY(-10px) scale(0.9) rotate(8deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px) scale(1) rotate(8deg)",
            opacity: "1",
          },
        },
        "menu-item-enter-3": {
          "0%": {
            transform: "translateY(-10px) scale(0.9) rotate(-5deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px) scale(1) rotate(-5deg)",
            opacity: "1",
          },
        },
        "menu-panel-enter": {
          "0%": {
            transform: "translateY(-10px) scale(0.95)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px) scale(1)",
            opacity: "1",
          },
        },
        "hero-cars-drive": {
          "0%": {
            "--hero-mask-position": "0%",
          },
          "100%": {
            "--hero-mask-position": "110%",
          },
        },
        "loader-spin": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "choppy-loader-spin": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "20%": {
            transform: "rotate(72deg)",
          },
          "30%": {
            transform: "rotate(72deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "60%": {
            transform: "rotate(180deg)",
          },
          "70%": {
            transform: "rotate(252deg)",
          },
          "79%": {
            transform: "rotate(252deg)",
          },
          "90%": {
            transform: "rotate(324deg)",
          },
          "95%": {
            transform: "rotate(324deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "hero-cars-drive": {
          "0%": {
            "--hero-mask-position": "0%",
          },
          "100%": {
            "--hero-mask-position": "110%",
          },
        },
        "loader-spin": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "choppy-loader-spin": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "20%": {
            transform: "rotate(72deg)",
          },
          "30%": {
            transform: "rotate(72deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "60%": {
            transform: "rotate(180deg)",
          },
          "70%": {
            transform: "rotate(252deg)",
          },
          "79%": {
            transform: "rotate(252deg)",
          },
          "90%": {
            transform: "rotate(324deg)",
          },
          "95%": {
            transform: "rotate(324deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "menu-panel-exit": {
          from: { opacity: "1", transform: "scale(1)" },
          to: { opacity: "0", transform: "scale(0.9)" },
        },

        // opacity: [0, 0.1, 0, 0.6, 0.2, 1, 1, 1, 0.8, 1],
        "lowercase-light-on": {
          "0%, 18%": {
            opacity: "0",
          },
          "9%": {
            opacity: "0.1",
          },
          "27%": {
            opacity: "0.4",
          },
          "36%": {
            opacity: "0.2",
          },
          "45%, 77%": {
            opacity: "1",
          },
          "85%": {
            opacity: "0.8",
          },
          "93%, 100%": {
            opacity: "1",
          },
        },
        "lowercase-light-off": {
          to: {
            opacity: "0",
          },
        },
        swap: {
          "0%, 100%": {
            opacity: "0",
          },
          "0.165%, 1.5%": {
            opacity: "1",
          },
          "1.665%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "team-cards-fade-in":
          "team-cards-fade-in 0.5s  var(--ease-in-out-quad) forwards",
        "border-increase": "border-increase 2s var(--ease-out-quad) forwards",
        "toast-enter": "toast-enter 0.6s var(--ease-out-quad) forwards",
        "toast-exit": "toast-exit 0.6s var(--ease-out-quad) forwards",
        "problem-enter":
          "problem-enter 0.6s 0.35s var(--ease-in-out-quad) both",
        "problem-exit": "problem-exit 0.6s 0s var(--ease-in-out-quad) both",
        "fade-in":
          "fade-in 1.6s var(--delay, 0s) var(--ease-out-quad) forwards",
        "turn-on-light-red":
          "turn-on-light-red 1.6s var(--delay, 0s) var(--ease-out-quad) forwards",
        "turn-on-light-orange":
          "turn-on-light-orange 1.6s var(--delay, 0s) var(--ease-out-quad) forwards",
        "turn-on-light-white":
          "turn-on-light-white 1.6s var(--delay, 0s) var(--ease-out-quad) forwards",
        shimmer: "shimmer var(--shimmer-duration, 2s) linear infinite",
        "marquee-horizontal":
          "marquee-horizontal var(--duration,60s) linear infinite",
        "skeleton-loader-shimmer": "skeleton-loader-shimmer 2s infinite",
        "line-shrink": "line-shrink 0.2s ease-out",
        "line-grow": "line-grow 0.2s ease-out",
        "circle-draw": "circle-draw 2s var(--ease-out-quad)",
        "menu-team-slide-right":
          "menu-team-slide-right 0.6s var(--ease-out-quad) forwards",
        "menu-team-slide-left":
          "menu-team-slide-left 0.6s var(--ease-out-quad) forwards",
        "hero-cars-drive-1":
          "hero-cars-drive 1s 0.08s var(--ease-in-quart) forwards",
        "hero-cars-drive-2":
          "hero-cars-drive 1s 0.05s var(--ease-in-quad) forwards",
        "hero-cars-drive-3":
          "hero-cars-drive 1s 0.1s var(--ease-in-cubic) forwards",
        "hero-cars-drive-4": "hero-cars-drive 1s var(--ease-in-circ) forwards",
        "loader-spin": "loader-spin 3.5s linear infinite",
        "choppy-loader-spin": "choppy-loader-spin 6s linear infinite",
        "menu-item-enter-1":
          "menu-item-enter-1 0.5s var(--ease-bounce-elegant) both",
        "menu-item-enter-2":
          "menu-item-enter-2 0.5s 0.05s var(--ease-bounce-elegant) both",
        "menu-item-enter-3":
          "menu-item-enter-3 0.5s 0.1s var(--ease-bounce-elegant) both",
        "menu-panel-enter":
          "menu-panel-enter 0.5s var(--ease-bounce-soft) both",
        "menu-panel-exit": "menu-panel-exit 0.4s var(--ease-bounce-soft) both",
        "lowercase-light-on":
          "lowercase-light-on 1.6s 0.5s var(--ease-lowercase) both",
        "lowercase-light-off":
          "lowercase-light-off 0.2s var(--ease-lowercase) both",
        swap: "swap 3s infinite both",
      },
    },
  },
  plugins: [
    tailwindCSSAnimate,
    tailwindCSSTypography,
    tailwindCSSContainerQueries,
    plugin(({ addUtilities, addVariant }) => {
      addUtilities({
        ".animation-running": {
          "animation-play-state": "running",
        },
        ".animation-paused": {
          "animation-play-state": "paused",
        },
      });
      addUtilities({
        ".button-press-effect": {
          "transition-timing-function": "var(--ease-out-quad)",
          "transition-duration": "200ms",
          "transition-property": "transform",
          "will-change": "transform",
        },
        ".button-press-effect:active": {
          transform: "scale(0.97)",
        },
        ".opacify-link": {
          "transition-timing-function": "var(--ease-out-quad)",
          "transition-duration": "200ms",
          "transition-property": "opacity",
        },
        ".opacify-link:hover": {
          opacity: "0.5",
        },
      });

      addVariant("fullscreen", "[data-fullscreen='true'] &");
      addVariant("invert-colors", "[data-invert-colors='true'] &");

      addUtilities({
        ".steps": {
          "counter-reset": "step",
          "border-left-width": "1px",
          "margin-left": "1rem",
          "padding-left": "1.75rem",
          position: "relative",
        },
        ".step:before": {
          "background-color": `theme('colors.white.50')`,
          color: `theme('colors.black.950')`,
          content: "counter(step)",
          "counter-increment": "step",
          "justify-content": "center",
          "align-items": "center",
          width: "2rem",
          height: "2rem",
          "font-size": ".875rem",
          "line-height": "1.25rem",
          display: "flex",
          position: "absolute",
          left: "-1rem",
        },
        ".prose-no-margin": {
          "& > :first-child": {
            marginTop: "0",
          },
          "& > :last-child": {
            marginBottom: "0",
          },
        },
      });
    }),
  ],
};
