//define variables
const express = require('express'),
    handlebars = require('express-handlebars');


//load routes
const carousel = require('./routes/carousel');

//define variable port
const port = process.env.PORT || 3035;
const app = express();

//define handlebars middleware
app.engine('handlebars', handlebars({


    //define layout by default
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//set define public folder
app.use(express.static(__dirname + '/public'));

//routes
app.get('/', (req, res) => {
    res.render('index/index');

    
});

app.get('/agenda', (req, res) => {
    res.render('reserve/reserve');

});




//use routes
app.use('/carousel', carousel)

//listen server
app.listen(port, () => {
    console.log('Server surf UP')
})