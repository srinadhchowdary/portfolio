import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { theme } from "./styles/theme";
import { ColorModeProvider } from "./components/common/ColorModeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorModeProvider>
      <ChakraProvider value={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </ColorModeProvider>
  </StrictMode>,
);
