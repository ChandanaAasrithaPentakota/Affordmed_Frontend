# 🔗 React URL Shortener

## 📖 About
This is a simple **URL Shortener web app** built with **React** and **Material UI**.  
It allows you to shorten URLs, create custom shortcodes, set expiry times, and track link usage.  
All data is stored in **LocalStorage** (no backend required).

---

## ✨ Features
- Shorten long URLs
- Optional custom shortcode
- Optional expiry time (default 30 minutes)
- Redirect using `http://localhost:3000/:shortcode`
- Statistics page with:
  - Total clicks
  - Click timestamps
  - Source (referrer)
  - Location (mocked)

---

## 🛠️ Tech Used
- **React** (frontend framework)  
- **Material UI** (UI components & styling)  
- **React Router DOM** (routing & redirects)  
- **LocalStorage** (data persistence)

---

## 🚀 How to Run
1. Clone this repository:
   ```bash
   git clone <repo-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react-router-dom
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open in your browser:  
   👉 [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure
```
src/
 ├── App.js              # Main app with routes
 ├── index.js            # Entry point
 ├── utils/
 │    └── storage.js     # LocalStorage helper functions
 └── pages/
      ├── ShortenerPage.js   # Form to shorten URLs
      ├── RedirectPage.js    # Handles redirects
      └── StatsPage.js       # Shows analytics
```

---

## 📌 Notes
- This app works **only on localhost**.
- Location in stats is mocked (`"Unknown"`).
- Clearing browser storage will reset all data.

---

## 🎯 Future Enhancements
- Real backend for permanent storage
- GeoIP-based real location tracking
- QR code generation for links
- Authentication for user-specific data

---

✍️ Developed for a coding evaluation.
