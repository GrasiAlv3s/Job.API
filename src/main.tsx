import { SpeedInsights } from "@vercel/speed-insights/react";
import "leaflet/dist/leaflet.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
<div>oie</div>
      <SpeedInsights />
  </StrictMode>
);