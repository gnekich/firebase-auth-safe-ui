// Used for suspense
import React from "react";

// // Language support
// import "./i18n";

// Toast notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import WebAppTitleEffect from "@/components/WebAppTitle/WebAppTitleEffect";

// Routes and route suspense
import LoadingSuspenseComponent from "@/components/Suspense/LoadingSuspenseComponentSimple";
import BrowserRouter from "@/routes/BrowserRouter";

// MUI Theme and CssBaseline
import ThemeProviderWithTheTheme from "@/theme";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <React.Suspense fallback={<LoadingSuspenseComponent />}>
        <ThemeProviderWithTheTheme>
          <CssBaseline />
          <WebAppTitleEffect />
          <BrowserRouter />
        </ThemeProviderWithTheTheme>
      </React.Suspense>
      <ToastContainer stacked={false} limit={1} />
    </>
  );
}

export default App;
