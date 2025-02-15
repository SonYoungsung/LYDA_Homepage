import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import theme from "./theme";
import { Router } from "./pages/Router";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");

if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

// ReactDOM.render(
//   <React.StrictMode>
//     <ColorModeScript />
//     <ChakraProvider resetCSS theme={theme}>
//   <Router/>
//     </ChakraProvider>

//   </React.StrictMode>,
//     document.getElementById('root'),
// )

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorModeScript />
      <ChakraProvider resetCSS theme={theme}>
        <Router />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
