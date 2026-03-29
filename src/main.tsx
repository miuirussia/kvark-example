import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "@kdeveloper/kvark";
import { Provider as KvarkProvider } from "@kdeveloper/kvark/react";
import "./index.css";
import App from "./App.tsx";

const store = createStore();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KvarkProvider store={store}>
      <App />
    </KvarkProvider>
  </StrictMode>,
);
