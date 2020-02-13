const express = require('express')
const path = require('path')
const hbs =  require('hbs')
const getWeather = require('../utils/getWeather')






const app = express()
// views custom path
const viewPath = path.join(__dirname , '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//handel bar fo express to make daynamic pages

app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)


//the static stuff
 app.use(express.static(path.join(__dirname, '../public/')))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name: 'Shehab'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        name:'Shehab'
    })
})
app.get('/about',(req,res)=>{
    
    res.render('about',{
        title:'About',
        name : 'Shehab'
    })
})

app.get('/weather',(req,res)=>{

getWeather(req.query.loc,(error,response)=>{
    res.send(response)
})

    
})
app.listen(3000, ()=>
{
    console.log('done')
})