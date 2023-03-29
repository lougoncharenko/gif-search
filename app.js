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

app.get('/', (req, res) => {
    console.log(req.query) // => "{ term: hey" }[/bold]
    res.render('home')
  })

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.render('greetings', { name });
  })
 
// Start Server

app.listen(3003, () => {
  console.log('Gif Search listening on port localhost:3003!');
});