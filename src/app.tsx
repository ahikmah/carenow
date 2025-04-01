import { Toaster } from "src/components/ui/toaster";

import { Router } from "./routes";
import { ThemeProvider } from "./theme";

function App() {
  return (
    <ThemeProvider>
      <Router />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
