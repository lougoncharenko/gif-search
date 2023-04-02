// Require Libraries
const express = require('express');
const Tenor = require("tenorjs").client({
    // Replace with your own key
    "Key": "AIzaSyBWZkd9EYKL356BTQFOtgmJJvFmUHaMlvc", // https://tenor.com/developer/keyregistration
    "Filter": "off", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
  });
  

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
    console.log(req.query) 
    term = ""
    if (req.query.term) {
        term = req.query.term
    }
    // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
    Tenor.Search.Query(term, "10")
        .then(response => {
            // store the gifs we get back from the search
            const gifs = response;
            // pass the gifs as an object into the home page
            res.render('home', { gifs })
        }).catch(console.error);
   })

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.render('greetings', { name });
  })
 
// Start Server

app.listen(3003, () => {
  console.log('Gif Search listening on port localhost:3003!');
});