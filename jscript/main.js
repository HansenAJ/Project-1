console.log("Hello World!");

let movieTitles = ["StarWars", "StarTrek"];

//Creates On-screen keyboard and assigns individual classes to each character as well as styling class.
for (i = 65; i <=90; i++){
    var keyBtn = document.createElement("BUTTON"); 
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
                        //Invisible text in each box for tracking? Or secondary non-displayed box for tracking.
        //For Loop Length = Characters
            //Create Box 1-X
            //Append to DOM Element

    //assigns random title from array to 'movie'
    let movie = movieTitles[Math.floor(Math.random()*movieTitles.length)];
    console.log(movie);
    let movieArray = movie.split('');
    console.log(movieArray[4]);

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
        