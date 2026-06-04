import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import  companyRoutes  from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";






dotenv.config({});

const app = express();




// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin: 'https://jobslive.netlify.app/', // ← Fixed: was 'http//localhost:5173' (missing colon)
    credentials: true // ← Fixed: was 'Credential' (wrong spelling, should be lowercase 's')
};

app.use(cors(corsOptions));

// apis 
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoutes);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`server running at port ${PORT}`);
});
