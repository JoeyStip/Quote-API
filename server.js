const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, searchQuotes } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, ()=>{
    console.log('app listening on port #' + PORT);
});

app.get('/api/quotes/random', (req, res, next)=>{
    const quote = getRandomElement(quotes);
    res.status(200).send({quote});
});

app.get('/api/quotes', (req, res, next)=>{
    const person = req.query.person;
    if(person){
        const foundQuotes = searchQuotes(quotes, person);
        if(foundQuotes){
            res.status(200).send(foundQuotes);
        } else {
            res.status(404).send('Not found');
        };
    } else {
        res.status(200).send({quotes});
    };
});

app.post('/api/quotes', (req, res, next)=>{
    const quote = req.query.quote;
    const person = req.query.person;
    if(quote && person){
        const quoteToAdd = {"quote": quote, "person": person};
        quotes.push(quoteToAdd);
        res.status(200).send({"quote":quoteToAdd})
    } else {
        res.status(400).send("Invalid Entry");
    }
})
