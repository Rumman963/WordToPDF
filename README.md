# Word To PDF Converter

This repository contains a simple web application for converting `.docx` Word documents to PDF format. The project is split into two main parts:

- **Backend** – an Express server handling file uploads and conversion using `docx-pdf`.
- **Frontend** – a Vite-powered React application providing a user interface.

---

## 🛠️ Backend

Located in the `Backend/` directory.

### Features

- Accepts file uploads via a POST request to `/convertFile`.
- Saves uploaded `.docx` files in `uploads/`.
- Converts documents to PDF using the `docx-pdf` package.
- Returns the generated PDF as a download.

### Getting started

```bash
cd Backend
npm install
node index.js
```

Access the server at `http://localhost:3000` (default port).

> The port and other settings are currently hard-coded; you can introduce environment variables later if needed.

### Dependencies

- express
- multer
- cors
- docx-pdf

---

## 🎨 Frontend

The React application is inside `Frontend/vite-project`.

### Running the client

```bash
cd Frontend/vite-project
npm install
npm run dev
```

This will start the Vite development server (typically at `http://localhost:5173`).

The UI allows users to select a `.docx` file and submit it to the backend for conversion.

---

## 📁 Directory structure

```
Backend/
  index.js
  package.json
  files/
  uploads/
Frontend/
  vite-project/
    src/
      components/
      App.jsx
      main.jsx
    package.json
    vite.config.js
```

---

## 📝 Notes

- No environment variables are currently used, everything is configured inline in `index.js`.
- Be sure to create the `files/` and `uploads/` directories if they don’t already exist—they are used for storage.

---

## 🙌 Contributions

Feel free to open issues or submit pull requests to add features such as:

- Environment variable support (e.g. configurable port/path).
- Authentication or rate‑limiting.
- Support for additional document formats.

---

**Enjoy converting your documents!**
