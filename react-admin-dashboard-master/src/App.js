import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import F5 from "./pages/automations/f5";
import { CssBaseline, MobileStepper, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Ninepayscrapers from "./pages/ninepayscrapers";
import Mobilescrapers from "./pages/mobilescrapers";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/ninepayscrapers" element={<Ninepayscrapers />} />
              <Route path="/mobilescrapers" element={<Mobilescrapers />} />
              <Route path="/automations/f5" element={<F5 />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
