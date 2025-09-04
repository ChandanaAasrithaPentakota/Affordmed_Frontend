export function getUrls() {
  const data = localStorage.getItem("urls");
  return data ? JSON.parse(data) : [];
}

export function saveUrls(urls) {
  localStorage.setItem("urls", JSON.stringify(urls));
}

export function addClick(shortcode) {
  const urls = getUrls();
  const idx = urls.findIndex((u) => u.shortcode === shortcode);
  if (idx !== -1) {
    urls[idx].clicks.push({
      timestamp: new Date().toISOString(),
      source: document.referrer || "direct",
      location: "Unknown", // fake location
    });
    saveUrls(urls);
  }
}
