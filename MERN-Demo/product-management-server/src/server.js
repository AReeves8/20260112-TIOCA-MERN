import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';

// configuring dotenv to pull variables from our .env file
dotenv.config();
const PORT = process.env.APP_PORT;  // grabbing port number from enviornment

// running connection function to MongoDB 
connectDB();

app.listen(PORT, ()=> {
    console.log('Server is running on port ' + PORT);
})