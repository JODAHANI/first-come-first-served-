import express from 'express'
const app = express()
import bcrypt from "bcrypt";
require('dotenv').config()
import Form, { FormTwo, isNumRemove, Account } from './src/Models/Form'
import './src/js/db'

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug')
app.set('views', `${__dirname}/src/views`);

app.use('/css', express.static(__dirname + '/src/css'))
app.use('/img', express.static(__dirname + '/src/img'))
app.use('/js', express.static(__dirname + '/src/js'))

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/apply', async (req, res) => {
    let one = await Form.find({})
    let two = await FormTwo.find({})
    res.render('apply',{result : false, one: one.length,two : two.length})
})
app.post('/apply', async (req, res) => {
  const {name,department,time} = req.body;
  let { num } = req.body
  num = isNumRemove(num)
  let one = await Form.find({})
  let two = await FormTwo.find({})
  let find = await Form.findOne({
    num
  });
  let findTwo = await FormTwo.findOne({
    num
  });
  if(find == null && findTwo == null) {
    if(time == '1부') {
      const form = await Form.create({
        name,num,department,time
      })
      return res.render('apply',{result : '신청이 완료 되었습니다~! 할렐루야~^^', one: one.length,two : two.length, status: true})
    } else {
      const form = await FormTwo.create({
        name,num,department,time
      })
      return res.render('apply',{result : '신청이 완료 되었습니다~! 할렐루야~^^', one: one.length,two : two.length, statusTwo: true})
    }
  } else {
    return res.render('apply',{result : '이미 신청을 하셨습니다.', one: one.length,two : two.length})
  }
})

app.get('/result' , (req,res) => {
  res.render('result', {result : false})
})
app.post('/result' , async (req,res) => {
  const { name } = req.body;
  let { num } = req.body;
  num = isNumRemove(num)
  let find = await Form.findOne({
    num
  })
  if(find) {
    return res.render('result',{result: true, find})
  } else {
    find = await FormTwo.findOne({
      num
    });
    if(find != null) {
      return res.render('result',{result: true, find})    
    } else {
      return res.render('result',{result: name, find : false})
    }
  }
})

app.get('/admin' , (req,res) => {
  res.render('admin')
})

app.post('/admin' , async (req,res) => {
  const {id,pw} = req.body
  const user = await Account.findOne({ name : id})
  console.log(user)
  if(user) {
    const userPwCheck = await bcrypt.compare(pw,user.pw);
    if(userPwCheck) {

    }
  }
  res.send('i')
})
app.listen(process.env.DB_PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.DB_PORT}`)
})