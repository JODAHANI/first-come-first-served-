import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/hwayang')


const db = mongoose.connection;


db.on("error", (err) => {
    console.log(err)
});
db.once("open",() => {
    console.log('DB connected!')
});