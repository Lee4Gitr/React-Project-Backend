import express from "express";
import ProductRouter from "./Routes/Product";
import cors from "cors";

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
