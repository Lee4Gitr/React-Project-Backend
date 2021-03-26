import express from "express";
import ProductRouter from "./Routes/Product";
import cors from "cors";

// This is just an API for faking the backend. I did not put much time into this, and just write to a file.
// I would use a database, and repository pattern and/or ORM if this were a real API.
const app = express();

// Middleware
app.use(cors())

// ImportRoutes
app.use('/product', ProductRouter)

// Routes
app.get('/', (req, res) =>
{res.send('Express + TypeScript Server')});

app.get('/product', (req, res) =>
{res.send('Product')});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
