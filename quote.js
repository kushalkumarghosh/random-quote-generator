const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        person: "Robert Frost"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
        person: "Edmund Burke"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        person: "Henry David Thoreau"
    },
    {
        quote: "The best revenge is massive success.",
        person: "Frank Sinatra"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        person: "Charles R. Swindoll"
    },
];

document.querySelector("#quote").addEventListener("click", function () {

    const p = document.getElementById("quotes-p");
    const name = document.getElementById("name");

    const randomQuote = Math.floor( Math.random() * quotes.length);

    // console.log(quotes[randomQuote].quote);
    // console.log(quotes[randomQuote].person);

    p.innerText = quotes[randomQuote].quote;
    name.innerText = quotes[randomQuote].person;

});