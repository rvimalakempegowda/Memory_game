const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.jpeg',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jpeg',
       
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpeg',
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpeg',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpeg',
    },
    {
        name:'pizza',
        img:'images/pizza.jpeg',
     }, 
     {
        name: 'fries',
        img: 'images/fries.jpeg',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jpeg',
       
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpeg',
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpeg',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpeg',
    },
    {
        name:'pizza',
        img:'images/pizza.jpeg',
     },

]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen=[];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard(){
    for(let i=0; i< cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.jpeg');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('#grid img');
    
    console.log('check for match');
    if (cardsChosenIds[0] == cardsChosenIds[1]){
        alert("You have clicked the same image!");
    }

    if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png');
        cards[cardsChosenIds[0]].removeEventListener('click',flipCard);
        cards[cardsChosenIds[1]].removeEventListener('clcik',flipCard);
        cardsWon.push(cardsChosen)
    } else{
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.jpeg');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.jpeg');
        alert("Sorry try again!");
    }
    resultDisplay.textContent= cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == (cardArray.length/2)){
        resultDisplay.textContent = "Congragulations you found them all!";
    }
}

function flipCard(){
    console.log(cardArray)
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length == 2){
        setTimeout(checkMatch,500)
    }
}