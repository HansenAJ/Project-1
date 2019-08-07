console.log("Hello World!");

let movieTitles = ["StarWars", "StarTrek", "StarShipTroopers"];

//Creates On-screen keyboard and assigns individual classes to each character as well as styling class.
for (let i = 65; i <=90; i++){
    let keyBtn = document.createElement("BUTTON"); 
    keyBtn.innerHTML = String.fromCharCode(i);
    keyBtn.classList.add(String.fromCharCode(i), "keyboardBtn");
    //**********Test functionality only. Replace with "Button Click" Function once it is created**********
    keyBtn.addEventListener("click", function(){
        console.log(this.innerHTML);
    })
    document.getElementsByClassName("keyboard")[0].appendChild(keyBtn); 
}

//Black Box "Add Boxes"
    //Logic to randomly select Item from Array.
    //Logic to seperate characters in selected item into their own Array.
    //Logic to create Divs of Blank Boxes for each character in this new Array.
                        //Font Size 0 for invisible text
        //For Loop Length = Characters
            //Create Box 1-X
            //Append to DOM Element

//Clears current 'blank boxes', resets 'round counter', and selects new word
document.getElementsByClassName("newGame")[0].addEventListener("click", function(){
    //removes old box container
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
        blankBox.classList.add("emptyBox")
        document.getElementsByClassName("boxes")[0].appendChild(blankBox); 
    }
});


//Black Box "New Game"
    //Logic for New Game Button
        //Call "Add Boxes"
        //Add Six Space Marines
        //Remove All Aliens
        //Reset 'Round Score'
        //Reset 'Win Score'

//Logic for Reset Button
    //Call "New Game"
    //Reset Alien Score
    //Reset Marine Score

//Black Box Function "Button Click"
    //For Loop to check through title array
    //Disable Button
    //Change Background Color
        //If letter is found
            //Place letter in box (Index based?)
            //Add 1 to win tracker
            //Add 1 to loop success tracker
            //Continue loop to check for letters
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
        