
let btn = document.querySelector('#new-quote'); 
let randomQuoteDisplay = document.querySelector('.random-quote'); 
let randomPersonDisplay = document.querySelector('.random-person'); 

let mahatmaBtn = document.querySelector('#mahatma'); 
let cardList = document.querySelector('.card-list'); 
let card = document.querySelector('.card'); 

let randomQuoteSection = document.querySelector('.random-quote-section'); 
let mahatmaQuoteSection = document.querySelector('.mahatma-quote-section');

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: `Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: `Albert Einstein`
}, {
    quote: `"Your time is limited, so don't waste it living someone else's life."`,
    person: `Steve Jobs`
}, {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: `Benjamin Franklin`
}, {
    quote: `"The way to find yourself is to lose yourself in the service of others."`,
    person: `Mahatma Gandhi`
}];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    randomQuoteDisplay.innerText = quotes[random].quote;
    randomPersonDisplay.innerText = quotes[random].person;

    mahatmaQuoteSection.style.display = 'none';
    randomQuoteSection.style.display = 'block';
});

mahatmaBtn.addEventListener('click', function() {
    const mahatmaQuotes = quotes.filter(quote => quote.person === 'Mahatma Gandhi');
    console.log('Matched quotes', mahatmaQuotes);

    cardList.innerHTML = "";
    mahatmaQuotes.forEach(item => {
        const clonedCardEle = card.cloneNode(true);
        clonedCardEle.hidden = false;

        // Assign values to the cloned card
        const clonedCardQuoteEle = clonedCardEle.querySelector('.quote');
        clonedCardQuoteEle.innerText = item.quote;
        const clonedCardPersonEle = clonedCardEle.querySelector('.person');
        clonedCardPersonEle.innerText = item.person;

        // Append cloned card to the card list
        cardList.appendChild(clonedCardEle);
    });
    randomQuoteSection.style.display = 'none';
    mahatmaQuoteSection.style.display = 'block';
});

