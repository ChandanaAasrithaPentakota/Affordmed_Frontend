import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import ShortenerPage from "./pages/ShortenerPage";
import StatsPage from "./pages/StatsPage";
import RedirectPage from "./pages/RedirectPage";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            URL Shortener
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Shorten
          </Button>
          <Button color="inherit" component={Link} to="/stats">
            Stats
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<ShortenerPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/:shortcode" element={<RedirectPage />} />
      </Routes>
    </>
  );
}

export default App;
