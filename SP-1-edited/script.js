let btn = document.querySelector('#new-quote'); // New quote button
let mahatmaBtn = document.querySelector('#mahatma'); // Mahatma button
let quoteDisplay = document.querySelector('.quote'); // Container for quote text
let personDisplay = document.querySelector('.person'); // Container for person name

// Array of quotes
const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: `Mahatma Gandhi`
},{
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: `Albert Einstein`
},{
    quote: `"Your time is limited, so don't waste it living someone else's life."`,
    person: `Steve Jobs`
},{
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: `Benjamin Franklin`
},{
    quote: `“Our greatest ability as humans is not to change the world, but to change ourselves.”`,
    person: `Mahatma Gandhi`
},{
    quote: `“The future depends on what we do in the present.”`,
    person: `Mahatma Gandhi`
}];

// Event listener for "New Quote" button
btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quoteDisplay.innerText = quotes[random].quote;
    personDisplay.innerText = quotes[random].person;
});

// Event listener for "Mahatma" button
mahatmaBtn.addEventListener('click', function() {
    const mahatmaQuotes = quotes.filter(quote => quote.person === 'Mahatma Gandhi');
    let random = Math.floor(Math.random() * mahatmaQuotes.length);
    quoteDisplay.innerText = mahatmaQuotes[random].quote;
    personDisplay.innerText = mahatmaQuotes[random].person;
});