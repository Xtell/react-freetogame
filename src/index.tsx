import React from "react";
import "./app/styles/index.pcss";
import { createRoot } from "react-dom/client";
import App from "./app/App";

const rootNode = document.querySelector("[data-js-root]");

if (rootNode) {
  const root = createRoot(rootNode);
  root.render(<App/>);
}
