const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true},
    num: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    date : {type :Date, required:true,  default: Date.now},    
    time:{type: String , required:true} 
})
const formTwoSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true},
    num: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    date : {type :Date, required:true, default: Date.now},    
    time:{type: String, required:true} 
})


const Form = mongoose.model('Form', formSchema)
export const FormTwo = mongoose.model('FormTwo', formTwoSchema)
export default Form
