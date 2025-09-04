import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUrls, addClick } from "../utils/storage";

function RedirectPage() {
  const { shortcode } = useParams();

  useEffect(() => {
    const urls = getUrls();
    const entry = urls.find((u) => u.shortcode === shortcode);

    if (!entry) {
      alert("Shortcode not found!");
      window.location.href = "/";
      return;
    }

    const now = new Date();
    if (new Date(entry.expiryAt) < now) {
      alert("This link has expired!");
      window.location.href = "/";
      return;
    }

    addClick(shortcode);
    window.location.href = entry.originalUrl;
  }, [shortcode]);

  return <div>Redirecting...</div>;
}

export default RedirectPage;
