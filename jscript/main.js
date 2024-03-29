console.log("Hello World!");
let roundScore = 0;
let roundWrong = 0;

let movieTitles = ["Star Wars", "Star Trek", "Starship Troopers", "Space Balls", "Event Horizon", "Blade Runner", "Godzilla", "Edge of Tomorrow", "Minority Report", "Alien", "The Terminator", "RoboCop", "Tron", "Robot Jox", "Buckaroo Banzai", "Back To The Future", "The Iron Giant", "Metropolis", "The Matrix", "Frankenstein", "Planet of The Apes", "Space Odyssey", "Wizards", "Hitchikers Guide To The Galaxy"];

//Creates On-screen keyboard and assigns individual classes to each character as well as styling class.
for (let i = 65; i <=90; i++){
    let keyBtn = document.createElement("BUTTON"); 
    keyBtn.innerHTML = String.fromCharCode(i);
    keyBtn.classList.add(String.fromCharCode(i), "keyboardBtn");
    keyBtn.setAttribute("disabled", "true");
    keyBtn.addEventListener("click", buttonClick);
    document.getElementsByClassName("keyboard")[0].appendChild(keyBtn); 
}
//add listeners and functionality to New and Reset buttons
document.getElementsByClassName("newGame")[0].addEventListener("click", newGame);
document.getElementsByClassName("resetGame")[0].addEventListener("click", function(){
    newGame();
    document.getElementsByClassName("alienScore")[0].innerHTML = 000;
    document.getElementsByClassName("marineScore")[0].innerHTML = 000;
});

//Clears current 'blank boxes', resets 'round counter', and selects new word
function newGame(){
    //removes old box container and resets round score
    roundScore = 0;
    roundWrong = 0;
    let boxHolder = document.getElementsByClassName("boxes")[0];
    boxHolder.remove(0);
    //Adds up to 6 fresh Marines, Removes up to 6 active Aliens
    for (i =0; i < 6; ++i){
        showImage("marineImage", i);
        hideImage("alienImage", i);
    }
    //creates and appends new box container
    boxHolder = document.createElement("DIV");
    boxHolder.classList.add("boxes");
    document.getElementsByClassName("motherBox")[0].appendChild(boxHolder);
    let textDivCount = 0;
    let splitBox = document.createElement("DIV");
    splitBox.classList.add("splitBox");
    document.getElementsByClassName("boxes")[0].appendChild(splitBox);
    //assigns random title from array to 'movie' and breaks individual letters into each array
    let movieArray = (movieTitles[Math.floor(Math.random()*movieTitles.length)]).split('');
    for (let i = 0; i < movieArray.length; i++){
        let blankBox = document.createElement("DIV"); 
        blankBox.innerHTML = movieArray[i];
        if(blankBox.innerHTML == ' '){
            ++textDivCount;
            //Appends new 'split box' at each space in word to ensure that long names are broken to new lines in whole groups rather than halfway through a word
            splitBox = document.createElement("DIV");
            splitBox.classList.add("splitBox");
            document.getElementsByClassName("boxes")[0].appendChild(splitBox);
            blankBox.classList.add("spaceBox");
            document.getElementsByClassName("splitBox")[textDivCount].appendChild(blankBox); 
        }else{
            blankBox.classList.add("emptyBox");
            console.log(textDivCount);
            document.getElementsByClassName("splitBox")[textDivCount].appendChild(blankBox); 
        }
    }
    let keyboardTotal = document.getElementsByClassName("keyboardBtn").length;
    //gets count of all keyboard buttons and re-enables them from previous round while setting colors back to original
    for (i = 0; i < keyboardTotal; i++){
        let clearBtn = document.getElementsByClassName("keyboardBtn")[i];
        clearBtn.disabled = false;
        clearBtn.style.backgroundColor = "black";
        clearBtn.style.color = "limegreen";
    }
};

function buttonClick(){
    //Disables button for remainder of round to prevent guessing same letter twice
    this.disabled = true;
    this.style.backgroundColor = "gray";
    this.style.color = "red";
    let checkScore = 0;
    let currentBtn = this.innerHTML;
    console.log("You clicked " + currentBtn);
    //Gets total number of empty boxes available
    let titleLength = document.querySelectorAll(".emptyBox").length;
    console.log("Length Of Your Title= " + titleLength)
    //Checks button clicked aagainst each letter in empty boxes
    for (i =0; i <= (titleLength - 1); i++){
        let currentBox = document.getElementsByClassName("emptyBox")[i];
        let boxCheck = (currentBox.innerHTML).toUpperCase();
        console.log("You clicked " + currentBtn);
        console.log("The Data in This Box is " + boxCheck);
        //Displays letters on correct guess an iterates round score
        if(currentBtn == boxCheck){
            console.log("If Tripped!")
            //currentBox.classList.remove("emptyBox")
            currentBox.classList.add("fullBox");
            roundScore = ++roundScore;
            console.log(roundScore);
            checkScore = ++checkScore;
            console.log(checkScore);
        }
    }
    //If no letters match guessed letter it iterates the incorrect guesscounter
    if (checkScore < 1){
        console.log(checkScore);
        roundWrong = ++roundWrong;
        //Remove Marine
        hideImage("marineImage", (roundWrong - 1));
        //Add Alien
        showImage("alienImage", (roundWrong - 1));
    }
    //Checks to see if boxes have been filled for winning game, then adds to Marine Score counter
    if (roundScore >= titleLength){
        alert("You Win!");
        roundEnd();
        /* ****** FIND A SMARTER WAY TO DO THIS ********* */
        document.getElementsByClassName("marineScore")[0].innerHTML = parseFloat(document.getElementsByClassName("marineScore")[0].innerHTML) + 1;
    //Checks if maximum number of incorrect guesses has been reached
    } else if (roundWrong == 6){
        alert("You Lose!");
        roundEnd();
        //Displays all characters on round loss
        for(i = 0; i < titleLength; ++i){
            document.getElementsByClassName("emptyBox")[i].classList.add("fullBox");
        }
        //Adds to Alien Score on round loss
        document.getElementsByClassName("alienScore")[0].innerHTML = parseFloat(document.getElementsByClassName("alienScore")[0].innerHTML) + 1;
    }
}

//Function make images visible
function showImage(x,y){
    document.getElementsByClassName(x)[y].classList.remove("invisible");
};
//Function make images invisible
function hideImage(x,y){
    document.getElementsByClassName(x)[y].classList.add("invisible");
    console.log(x + y);
};

//Function to display all remaining letters on round loss
function roundEnd(){
    for (i =0; i <26; ++i){
        document.getElementsByClassName("keyboardBtn")[i].setAttribute("disabled", "true");
    }
};
