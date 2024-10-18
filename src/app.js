import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(express.json({
    limit: "25kb"
}));
app.use(express.urlencoded({
     limit: "500kb"
}));
app.use(cors({
   origin : "*"
}));

export default app;