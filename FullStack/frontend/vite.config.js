import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  //benefit of adding the proxy
  server: {
    proxy: {
      //whenever user will access the /api endpoint http://localhost:3000 this will get appended in front of it.
      //plus the server will believe the request is being sent from localhost:3000 only
      "/api": "http://localhost:3000",
    },
  },
  plugins: [react()],
});
