import { ThemeProvider, useTheme } from "next-themes";

export function ColorModeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

// Custom hook to match Chakra v2 API for convenience
export function useColorMode() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  
  const currentTheme = resolvedTheme || theme;
  
  return {
    colorMode: currentTheme,
    toggleColorMode: () => setTheme(currentTheme === "light" ? "dark" : "light"),
  };
}
