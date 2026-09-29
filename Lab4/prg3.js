import express from 'express';
import path from 'path';
import { fileURLToPath } from 'node:url';

const app = express();

// Get current file path
const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

// Serve HTML pages
app.use(express.static(path.join(dirname, "htmlPages")));

// Handle 404 error
app.use((req, res) => {
    res.status(404).send("Page not found");
});

// Start server
app.listen(3333, () => {
    console.log("Server is running on http://localhost:3333");
});