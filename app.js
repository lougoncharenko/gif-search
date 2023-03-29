// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
const handlebars =  require('express-handlebars');
const hbs = handlebars.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo() { return 'FOO!'; },
        bar() { return 'BAR!'; }
    }
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');
// Routes

app.get('/', function (req, res) {
    const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245'
    res.render('hello-gif', { gifUrl })
});

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.render('greetings', { name });
  })
 
// Start Server

app.listen(3003, () => {
  console.log('Gif Search listening on port localhost:3003!');
});