import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const storedTheme = window.localStorage.getItem("cropxon-theme");
const initialTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";
document.documentElement.classList.toggle("dark", initialTheme === "dark");
document.documentElement.style.colorScheme = initialTheme;

createRoot(document.getElementById("root")!).render(<App />);
