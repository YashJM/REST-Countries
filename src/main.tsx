import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraBaseProvider>
  </React.StrictMode>
);
