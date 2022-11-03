let firstNumber = 4;
let secondNumber = 17;

let sum = firstNumber + secondNumber;

let isBlackJack = false;

if (sum <= 20){
    console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21){
    console.log("Wohoo! You've got Blackjack! 🥳");
    isBlackJack = true;
} else{
    console.log("You're out of the game! 😭");
};

if (isBlackJack === true){
    console.log("Yeah!!!!")
} else{
    console.log("Try again!!!")
}