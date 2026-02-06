import express from 'express';
import movieRoutes from './routes/movie.routes.js';
import directorRoutes from './routes/director.routes.js';

const app = express();

app.use(express.json());

// registering routes
app.use("/api/movies", movieRoutes);
app.use("/api/directors", directorRoutes);

export default app;