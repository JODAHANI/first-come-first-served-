import mongoose from 'mongoose'
import { Account } from "../Models/Form";
require('dotenv').config()
import bcrypt from "bcrypt";



mongoose.connect('mongodb://127.0.0.1:27017/hwayang')


const db = mongoose.connection;


db.on("error", (err) => {
    console.log(err)
});
db.once("open", async() => {
    console.log('DB connected!')
    let find = await Account.find({})
    if(!find.length) {
        const hashPw = await bcrypt.hash(process.env.DB_PW,4)
        await Account.create({
            name : 'master',
            pw : hashPw
        })
    } 
}); 
