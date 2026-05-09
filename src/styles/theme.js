import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#eef4ff" },
          100: { value: "#d4e2ff" },
          200: { value: "#adc6ff" },
          300: { value: "#86a9ff" },
          400: { value: "#5e8dff" },
          500: { value: "#4474e6" },
          600: { value: "#345ab4" },
          700: { value: "#243f82" },
          800: { value: "#142551" },
          900: { value: "#060c22" },
        },
      },
    },
    semanticTokens: {
      colors: {
        pageBg: { value: { base: "white", _dark: "#0F111A" } },
        panelBg: { value: { base: "gray.50", _dark: "#1A1D27" } },
        cardBg: { value: { base: "white", _dark: "#1A1D27" } },
        cardHoverBg: { value: { base: "gray.50", _dark: "#222633" } },
        borderSubtle: { value: { base: "gray.200", _dark: "#2D3142" } },
        textBody: { value: { base: "gray.800", _dark: "gray.100" } },
        textMuted: { value: { base: "gray.600", _dark: "gray.300" } },
      },
    },
  },
});

export const theme = createSystem(defaultConfig, customConfig);
