const express = require('express')
const app = express()
const path=require('path')
const favicon=require('serve-favicon')

app.set('view engine','ejs')
app.set('views', path.join(__dirname,"views"))
app.use(express.static("public")); 
// use a middleware before everything else; make the 'public' folder publicly accessible

app.use(favicon(path.join(__dirname,'/public','images/Favicon.png')))

app.get(
    '/', (req,res)=> {
        res.render('home')
    }
)

app.get(
    '/resume', (req,res) => {
        res.render('resume')
    }
)

app.get('/contact', (req, res) => {
    res.render("contact")
})

app.use((req,res) => {
    res.status(404).render("404")
})

app.listen(process.env.PORT || 3000, () =>{
    console.log("listening on port 3000")
})