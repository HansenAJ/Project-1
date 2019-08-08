console.log("Hello World!");
let roundScore = 0;
let roundWrong = 0;

let movieTitles = ["Star Wars", "Star Trek", "Starship Troopers"];

//Creates On-screen keyboard and assigns individual classes to each character as well as styling class.
for (let i = 65; i <=90; i++){
    let keyBtn = document.createElement("BUTTON"); 
    keyBtn.innerHTML = String.fromCharCode(i);
    keyBtn.classList.add(String.fromCharCode(i), "keyboardBtn");
    //**********Test functionality only. Replace with "Button Click" Function once it is created**********
    keyBtn.addEventListener("click", buttonClick);
    document.getElementsByClassName("keyboard")[0].appendChild(keyBtn); 
}

//Clears current 'blank boxes', resets 'round counter', and selects new word
document.getElementsByClassName("newGame")[0].addEventListener("click", function(){
    //removes old box container
    roundScore = 0;
    roundWrong = 0;
    let boxHolder = document.getElementsByClassName("boxes")[0];
    boxHolder.remove(0);
    //creates and appends new box container
    boxHolder = document.createElement("div");
    boxHolder.classList.add("boxes");
    document.getElementsByClassName("motherBox")[0].appendChild(boxHolder);
    //assigns random title from array to 'movie' and breaks individual letters into each array
    let movieArray = (movieTitles[Math.floor(Math.random()*movieTitles.length)]).split('');
    for (let i = 0; i < movieArray.length; i++){
        let blankBox = document.createElement("DIV"); 
        blankBox.innerHTML = movieArray[i];
        //
        console.log(blankBox.innerHTML)
        if(blankBox.innerHTML == ' '){
            blankBox.classList.add("spaceBox")
        }else{
            blankBox.classList.add("emptyBox")
        }
        document.getElementsByClassName("boxes")[0].appendChild(blankBox); 
    }
    let keyboardTotal = document.getElementsByClassName("keyboardBtn").length;
    //gets count of all keyboard buttons and re-enables them from previous round
    for (i = 0; i < keyboardTotal; i++){
        document.getElementsByClassName("keyboardBtn")[i].disabled = false;
    }
        //Add up to Six Space Marines
        //Remove All Aliens
        //Reset 'Round Score'
        //Reset 'Win Score'
});

function buttonClick(){
    //Disables button for remainder of round to prevent guessing same letter twice
    this.disabled = true;
    let checkScore = 0;
    let currentBtn = this.innerHTML;
    console.log("You clicked " + currentBtn)
    //Gets total number of empty boxes available
    let titleLength = document.querySelectorAll(".emptyBox").length;
    console.log("Length Of Your Title= " + titleLength)
    //Checks button clicked aagainst each letter in empty boxes
    for (i =0; i <= (titleLength - 1); i++){
        let currentBox = document.getElementsByClassName("emptyBox")[i];
        let boxCheck = (currentBox.innerHTML).toUpperCase();
        console.log("You clicked " + currentBtn)
        console.log("The Data in This Box is " + boxCheck)
        if(currentBtn == boxCheck){
            console.log("If Tripped!")
            //currentBox.classList.remove("emptyBox")
            currentBox.classList.add("fullBox")
            roundScore = ++roundScore;
            console.log(roundScore);
            checkScore = ++checkScore;
            console.log(checkScore)
        }
    }
    if (checkScore < 1){
        console.log(checkScore)
        roundWrong = ++roundWrong;
    }
    //Checks to see if boxes have been filled for winning game, then adds to Marine Score counter
    if (roundScore >= titleLength){
        alert("You Win!");
        /* ****** FIND A SMARTER WAY TO DO THIS ********* */
        document.getElementsByClassName("marineScore")[0].innerHTML = parseFloat(document.getElementsByClassName("marineScore")[0].innerHTML) + 1;
    } else if (roundWrong == 6){
        alert("You Lose!")
        document.getElementsByClassName("alienScore")[0].innerHTML = parseFloat(document.getElementsByClassName("alienScore")[0].innerHTML) + 1;
    }
}
//Black Box Function "Button Click"

        //If Success Tracker < 1
            //Remove Marine
            //Add Alien
            //Add 1 to round score
            //Check round score
                //If Score > Title Character Length
                    //You Lose!
                    //Add 1 to Alien Score
                    //Place all text in Boxes
                    //Exit all loops
                //If Score < Title Character Lenght
                    //Continue
    //Check In Tracker
        //If Tracker > Length
            //You Win!
            //Add 1 to Marine Score
        //If Not
            //Continue
        


//Logic for Reset Button
    //Call "New Game"
    //Reset Alien Score
    //Reset Marine Score