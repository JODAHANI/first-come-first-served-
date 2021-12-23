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
app.get('/apply', (req, res) => {
    res.render('apply',{result : false})
})
app.post('/apply', async (req, res) => {
  const {name,num,department,time} = req.body;
  if(time == 'one') {
    const form = await Form.create({
      name,num,department,time
    })
    console.log(form)
  } else {
    const form = await FormTwo.create({
      name,num,department,time
    })
    console.log(form)
  }
  res.render('apply',{result : true})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})