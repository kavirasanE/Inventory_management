import express from "express";
import { PORT, MongoDBURL} from "./config.js";
import mongoose from "mongoose";
import DeviceList from "./routes/DeviceList.js"
import cors from 'cors';
import { UserList } from "./models/UserModels.js";

const app = express();

//Middleware for pasing req body
app.use(express.json());

//Middleware for handling CORS policy
//Allow all orgin
app.use(cors());
//Allow only given origin
/*app.use (
    cors({
        origin: 'http://localhost:5174',
        method:['GET' ,'POST','PUT','DELETE'],
        allowedHeader:['Content-Type']
        ,
    })
); */

app.use('/device', DeviceList)
app.use('/list', UserList)

app.get('/Home' ,(req,res) => {
        console.log(req);
        return res.status(200).send('Welcome to the Inventory');
});
app.get('/user' , (req,res)=> {
    console.log(req);
    return res.status(200).send('UserList collections')
});



mongoose
.connect(MongoDBURL)
.then (()=> {
    console.log('mongo connected');
    app.listen(PORT ,() => {
        console.log(`app started on ${PORT}`);
    });
})
.catch ((error) => {
    console.log(error);
});
