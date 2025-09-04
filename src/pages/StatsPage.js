import React from "react";
import {
  Container,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { getUrls } from "../utils/storage";

function StatsPage() {
  const urls = getUrls();

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        URL Statistics
      </Typography>

      {urls.map((u) => (
        <Paper key={u.shortcode} sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6">
            http://localhost:3000/{u.shortcode}
          </Typography>
          <Typography>
            Created: {new Date(u.createdAt).toLocaleString()} | Expires:{" "}
            {new Date(u.expiryAt).toLocaleString()}
          </Typography>
          <Typography>Total Clicks: {u.clicks.length}</Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Timestamp</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {u.clicks.map((c, i) => (
                <TableRow key={i}>
                  <TableCell>
                    {new Date(c.timestamp).toLocaleString()}
                  </TableCell>
                  <TableCell>{c.source}</TableCell>
                  <TableCell>{c.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      ))}
    </Container>
  );
}

export default StatsPage;
