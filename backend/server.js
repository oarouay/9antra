import express from 'express';
import dotenv from 'dotenv';
import courseRoutes from './routes/course.route.js';
import { connectDB } from './config/db.js';
import cors from 'cors';
import path from 'path';


dotenv.config();

const __dirname = path.resolve();

const app =express();
app.use(cors());
app.use(express.json());//middleware y5alina nesta3lou json data

app.use('/api/coureses',courseRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/frontend/dist')));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','dist','index.html'));
    });
}
app.listen(process.config.PORT || 5000,()=>{
    connectDB();
    console.log("oussama")
});