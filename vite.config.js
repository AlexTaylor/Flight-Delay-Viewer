import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import flights from "./src/mock/flights.json";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "mock-api",
      configureServer(server) {
        server.middlewares.use("/api/flights", (req, res) => {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(flights));
        });
      }
    }
  ]
});