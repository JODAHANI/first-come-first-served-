const mongoose = require('mongoose');

export const isNumRemove = (data) => {
    return data.replace(/[^0-9]/g,'')
}

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

const account = new mongoose.Schema({
    name: { type: String, required: true, trim: true},
    pw:{type: String, required:true, trim: true} 
})



const Form = mongoose.model('Form', formSchema)
export const FormTwo = mongoose.model('FormTwo', formTwoSchema)
export const Account = mongoose.model('Account', account)
export default Form
