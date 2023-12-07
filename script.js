var currentOutfit = 1;
var totalOutfits = 3;
var clickCounter = 0;
var outfitFlag = 1;

//checks to see if outfit can be changed
function changeOutfit() {
    if (outfitFlag == 1){ //Outfit check
    if (clickCounter > 4){ //gold check
    clickCounter -= 5;
    change();
    document.getElementById("amountNeeded").innerText = "Amount Needed : $10" // update amount needed
    }
}
    if (outfitFlag == 2){
        if (clickCounter > 9){ //outfit check
        clickCounter -= 10; //gold check
        change();
        document.getElementById("amountNeeded").innerText = "Done!" // end
        }
    }

}
//changes character outfit
function change() {
    currentOutfit = (currentOutfit % totalOutfits) + 1;
    var imagePath = "images/stick-figure-outfit" + currentOutfit + ".png";
    document.getElementById("stickImage").src = imagePath;
    document.getElementById("counter").innerText = "Gold: $" + clickCounter; // update counter
    outfitFlag++;
}


//spawns coin on chest click
function spawnCoin() {
    var chestContainer = document.getElementById("chestContainer");
    //set coin image
    var coin = document.createElement("img");
    coin.src = "images/coin.png";
    coin.alt = "Coin";
    coin.className = "coin";

    chestContainer.appendChild(coin);

    //coin spawn
    setTimeout(() => {
        coin.style.transform = "translateY(-300px)";
        updateCounter();
    }, 0);

    //coin despawn
    setTimeout(() => {
        coin.remove();
    }, 1000);
}
//updates gold when chest is clicked
function updateCounter() {
    clickCounter++;
    document.getElementById("counter").innerText = "Gold: $" + clickCounter;
}