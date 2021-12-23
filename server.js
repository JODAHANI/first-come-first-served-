import express from 'express'
const app = express()
const port = 4000
import './src/js/db'
import Form, {FormTwo} from './src/Models/Form'

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
  const {name,num,department,time} = req.body;
  let one = await Form.find({})
  let two = await FormTwo.find({})
  let find = await Form.find({
    name,
    num
  });
  let findTwo = await FormTwo.find({
    name,
    num
  });
  if(find == 0 && findTwo == 0) {
    if(time == 'one') {
      const form = await Form.create({
        name,num,department,time
      })
    } else {
      const form = await FormTwo.create({
        name,num,department,time
      })
    }
    return res.render('apply',{result : '신청이 완료 되었습니다~! 할렐루야~^^', one: one.length,two : two.length})
  } else {
    return res.render('apply',{result : '이미 신청을 하셨습니다.', one: one.length,two : two.length})
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})