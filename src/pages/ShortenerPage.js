import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { getUrls, saveUrls } from "../utils/storage";

function ShortenerPage() {
  const [url, setUrl] = useState("");
  const [validity, setValidity] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [urls, setUrls] = useState(getUrls());

  const handleShorten = () => {
    if (!url.startsWith("http")) {
      alert("Enter a valid URL (must start with http/https)");
      return;
    }

    const expiryMinutes = validity ? parseInt(validity) : 30;
    if (isNaN(expiryMinutes) || expiryMinutes <= 0) {
      alert("Validity must be a positive number");
      return;
    }

    let code = shortcode || Math.random().toString(36).substring(2, 7);
    const existing = urls.find((u) => u.shortcode === code);
    if (existing) {
      alert("Shortcode already exists!");
      return;
    }

    const newUrl = {
      originalUrl: url,
      shortcode: code,
      createdAt: new Date().toISOString(),
      expiryAt: new Date(Date.now() + expiryMinutes * 60000).toISOString(),
      clicks: [],
    };

    const updated = [...urls, newUrl];
    saveUrls(updated);
    setUrls(updated);

    setUrl("");
    setValidity("");
    setShortcode("");
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Shorten a URL
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          fullWidth
          label="Original URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <TextField
          label="Validity (minutes)"
          value={validity}
          onChange={(e) => setValidity(e.target.value)}
        />
        <TextField
          label="Custom Shortcode"
          value={shortcode}
          onChange={(e) => setShortcode(e.target.value)}
        />
        <Button variant="contained" onClick={handleShorten}>
          Shorten
        </Button>
      </Box>

      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">Your Shortened URLs</Typography>
        <List>
          {urls.map((u) => (
            <ListItem key={u.shortcode}>
              <ListItemText
                primary={`http://localhost:3000/${u.shortcode}`}
                secondary={`Original: ${u.originalUrl} | Expires: ${new Date(
                  u.expiryAt
                ).toLocaleString()}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default ShortenerPage;
