import { themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <>
      <div className="app">
        <ThemeProvider theme={theme}>
          <CssBaseline />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
