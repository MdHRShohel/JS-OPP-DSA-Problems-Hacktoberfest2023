/* adding some confetti */
var myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);

var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true
});
/**********************/

let userInfos = JSON.parse(window.localStorage.getItem("userInfos")) ? JSON.parse(window.localStorage.getItem("userInfos")) : {mode : "light"};
const theGameChoises = {
  "1" : {
          "theUserRange" : "1 - 10",
          "theUserLifes" : 2,
          "theUserHints" : 1,
        },
  "2" : {
          "theUserRange" : "1 - 50",
          "theUserLifes" : 3,
          "theUserHints" : 2,
        },
  "3" : {
          "theUserRange" : "1 - 100",
          "theUserLifes" : 4,
          "theUserHints" : 3,
        },
};
let theUserRange,theUserLifes,randomNumber , theUserHints , confettiInterval;
chooseTheRangePopup();
choosingItems();
updateUserMode();
/* setting up the audios*/
const congratsAudio = new Audio("audio/mixkit-audience-light-applause-354.wav");
const errorAudio = new Audio("audio/483598__raclure__wrong.mp3");
const wrongGuessAudio = new Audio("audio/131657__bertrof__game-sound-wrong.wav");
const gameOverSound = new Audio("audio/76376__deleted-user-877451__game-over.wav");
/***********************/ 
const darkLightToggle = document.getElementById("dark-light-toggle");
// the functionality of darkmode toggle
darkLightToggle.addEventListener("click",() => {
  document.body.classList.toggle("dark-mode");
  document.querySelectorAll("button").forEach(e => {
    e.classList.toggle("dark-mode")
  });
  if(userInfos.mode === "light") userInfos.mode = "dark";
  else userInfos.mode = "light";
  updateModeIcon();
  updateLocalStorage();
});

// playing the game functionality 
let nbrOfGuesses = 1,userGuesses = [],hintNumber = 1;
const playButton = document.getElementById("play-game");
playButton.addEventListener("click",() => {
  const theNumber = Number(document.getElementById("number").value);
  if(isEmpty()){
    customAlert("enter a number to get started","error");
    errorAudio.play()
  }else{
    if(outOfRange()){
      customAlert("out of range","error");
      errorAudio.play();
      nbrOfGuesses++;
    }else{
      removeCustomAlert();
      if(theNumber === randomNumber){
        customAlert("congrats !!! , you did it","textual-hint");
        setVisualInstructions("congrats");
        removeHintsPopup();
        congratsAudio.play();
        confettiInterval = setInterval(() => {
          confetti({
            particleCount: 100,
            startVelocity: 30,
            spread: 360,
            origin: {
              x: Math.random(),
              // since they fall down, start a bit higher than random
              y: Math.random() - 0.2
            }
          });
        },500);
        playButton.setAttribute("disabled",true);
      }else{
        if(isExist(theNumber , userGuesses)){
          customAlert("the number is already exist","error");
          errorAudio.play();
        }else{
          theUserLifes--;
          updateLifes();
          if(theUserLifes <= 0){
            customAlert("game over :(","textual-hint");
            setVisualInstructions("game over");
            playButton.setAttribute("disabled",true);
            gameOverSound.play();
            removeHintsPopup();
          }else{
            wrongGuessAudio.play();
            hintsPopup(hintNumber , hint(hintNumber));
            const coefficient = getCoefficient();
            notes(theNumber , randomNumber , coefficient);
            setGuesses(theNumber , nbrOfGuesses);
            hintNumber++;
            nbrOfGuesses++;
            userGuesses.push(theNumber);
          }
          
        }
        
      }
    }
  }
  
  
})
// replaying the game functionality 
let replayButton = document.querySelector("#replay-game");
replayButton.addEventListener("click",() => {
  document.querySelector(".lifes span").textContent = "";
  document.querySelector("#game-header").remove();
  document.querySelector(".visual-hint").innerHTML = `<span class="material-icons-outlined">
                                                        question_mark
                                                      </span>`;
  document.getElementById("number").value = "";
  if(playButton.hasAttribute("disabled")) playButton.removeAttribute("disabled");
  document.querySelector(".guesses ul").innerHTML = "";
  removeCustomAlert();
  nbrOfGuesses = 1;userGuesses = [];hintNumber = 1;
  [theUserRange,theUserLifes,randomNumber , theUserHints] = [,,,,].fill(undefined,0,4);
  console.log(theUserHints,theUserLifes)
  chooseTheRangePopup();
  choosingItems();
  updateUserMode();
  removeHintsPopup();
  congratsAudio.pause();
  congratsAudio.currentTime = 0;
  gameOverSound.pause();
  gameOverSound.currentTime = 0;
  if(confettiInterval){
    clearInterval(confettiInterval);
  }
})

function chooseTheRangePopup(){
  let popupContainer = document.createElement("div");
  popupContainer.className = "popup-container";
  popupContainer.innerHTML = `<div class="popup range-popup">
  <h3>Choose a range of numbers</h3>
  <ul class="choises">${createChoiseItems()}</ul>
  <button class="confirm-button">confirm</button>
</div>`;
  document.body.append(popupContainer);

  // confirming the range functionality
const confirmButton = document.querySelector(".confirm-button");
confirmButton.addEventListener("click",() => {
  const rangeChoises = Array.from(document.getElementsByClassName("choise"));
  const confirmedChoise = rangeChoises.find(e => e.firstElementChild.classList.contains("active"));
  if(confirmedChoise){
    let choiseId = confirmedChoise.getAttribute("data-id");
    console.log(theGameChoises[choiseId]);
    ({theUserRange , theUserLifes , theUserHints} = theGameChoises[choiseId]);
    console.log(theUserRange);
    console.log(theUserLifes);
    updateLifes();
    randomNumber = generateRandomNumber(theUserRange);
    const range = confirmedChoise.lastElementChild.textContent;
    const theGameHeader = document.createElement("h1");
    theGameHeader.id = "game-header";
    theGameHeader.textContent = `Guess a Number Between ${range.split(" ").slice(0,3).join(" ")}`;
    document.querySelector(".game-container").prepend(theGameHeader);
    document.querySelector(".popup-container").remove();
    
  }else{
    alert("please choose a range");
  }
  
});
}
function createChoiseItems(){
  let choiseItems = "";
  for(const [key,value] of Object.entries(theGameChoises)){
    choiseItems+= `<li class="choise" data-id="${key}">
      <div class="radio-button"></div>
      <p>${value["theUserRange"]} with ${value["theUserHints"]} hint${value["theUserHints"] > 1 ? "s" : ""} ${value["theUserLifes"]} life${value["theUserLifes"] > 1 ? "s" : ""}</p>
      </li>`
  }
  return choiseItems;
}
function choosingItems(){
  const rangeChoises = Array.from(document.getElementsByClassName("choise"));
rangeChoises.forEach(e => {
  e.addEventListener("click",function(){
    rangeChoises.forEach(e =>{e.firstElementChild.classList.remove("active")} )
    this.firstElementChild.classList.add("active")
  });
});
}

function updateModeIcon (){
  const iconContainer = document.querySelector("#dark-light-toggle span");
  iconContainer.textContent = "";
  if(userInfos.mode === "light"){
    iconContainer.textContent = "light_mode"
  }else{
    iconContainer.textContent = "dark_mode"
  }
}
function updateUserMode (){
  if(userInfos.mode === "dark"){
    document.body.classList.add("dark-mode");
    document.querySelectorAll("button").forEach(e => {
      e.classList.add("dark-mode")
    });
  }
  updateModeIcon();
}

function updateLocalStorage (){
  window.localStorage.setItem("userInfos",JSON.stringify(userInfos));
}
function updateLifes(){
  document.querySelector(".lifes span").textContent = "❤️".repeat(theUserLifes);
}
function getTheRange(rangeID){
  return ranges[rangeID]
}
function generateRandomNumber(range){
  const theUserRange = range.split(" ");
  const max = Number(theUserRange[2]);
  const min = Number(theUserRange[0]);
  return  Math.round(Math.random()*(max-min))+min;
}
function outOfRange(){
  const userNumber = Number(document.querySelector("#number").value);
  const maxOfRange = Number(theUserRange.split(" ")[2]);
  const minOfRange = Number(theUserRange.split(" ")[0])
  console.log(maxOfRange)
  return userNumber > maxOfRange || userNumber < minOfRange;
}
function isEmpty(){
  return document.querySelector("#number").value === "";
}

function isExist(element , arr){
  return arr.find(e => e === element);
}

function customAlert(message,error){
  let theNumberInput = document.querySelector("#number");
  let alert = document.createElement("div");
  removeCustomAlert();
  alert.classList.add("alerts",error)
  alert.innerHTML = `<p>${message}</p>`;
  theNumberInput.after(alert);
  
}
function removeCustomAlert(){
  let alert = document.querySelector(".alerts")
  if(alert){
    alert.remove();
  }
}
function notes(theNumber , randomNumber , coefficient){
  if(theNumber < randomNumber){
    if(theNumber+coefficient >= randomNumber){
      setVisualInstructions("increase");
      customAlert("Your number is a little low","textual-hint");
    }else{
      setVisualInstructions("increase++");
      customAlert("Your number is low","textual-hint");
    }
  }else{
    if(theNumber-coefficient <= randomNumber){
      setVisualInstructions("decrease");
      customAlert("Your number is a little high","textual-hint");
    }else{
      setVisualInstructions("decrease++");
      customAlert("Your number is high","textual-hint");
    }
  }
}
function setVisualInstructions(note){
  const visualHints = document.querySelector(".visual-hint");
  visualHints.innerHTML = "";
  switch(note){
    case 'congrats' : visualHints.textContent = "🎉"; break;
    case 'decrease++' : visualHints.innerHTML = `<span class="material-icons-outlined decrease-plus">
                                                arrow_drop_down
                                                </span>
                                                <span class="material-icons-outlined decrease-plus">
                                                arrow_drop_down
                                                </span>`; break;
    case 'decrease' : visualHints.innerHTML = `<span class="material-icons-outlined decrease">
                                            arrow_drop_down
                                            </span>`; break;
    case 'increase' : visualHints.innerHTML = `<span class="material-icons-outlined increase">
                                                arrow_drop_up
                                                </span>`; break;
    case 'increase++' : visualHints.innerHTML = `<span class="material-icons-outlined increase-plus">
                                          arrow_drop_up
                                          </span>
                                          <span class="material-icons-outlined increase-plus">
                                                arrow_drop_up
                                                </span>`; break;
    case 'game over' : visualHints.textContent = "😟";break;
  }
}
function getCoefficient(){
  const max = Number(theUserRange.split(" ")[2]);
  switch (max){
    case 10 : return 2;
    case 50 : return 5;
    case 100 : return 10;
  }
}

function setGuesses(theNumber , nbrOfGuesses){
  const guessesList = document.querySelector(".guesses ul");
  const listItem = document.createElement("li");
  listItem.innerHTML = `<p>${nbrOfGuesses}. <span>${theNumber}</span></p>`;
  guessesList.append(listItem);
}
function hint(nbrOfHint){
  switch(nbrOfHint){
    case 1 : return `the number is between ${halfRange()}`;
    case 2 : return isEven(randomNumber) ? "the number is even" : "the number is odd";
    case 3 : return isPrime();
  }
}
function isEven(nbr){
  return nbr % 2 === 0;
}
function halfRange(){
  const range = theUserRange.split(" ");
  const max = Number(range[2]);
  const min = Number(range[0]);
  const half = max/2;
  for(let i=1; i <= half ; i++){
    if(randomNumber === i) return `${min} - ${half}`;
  }
  return `${half+1} - ${max}`;
}
function isPrime (){
  if(randomNumber === 1 || randomNumber === 2) return "the number is prime";
  for(let i=2 ; i < randomNumber ; i++){
    if(randomNumber % i === 0) return `the number is divisible by ${i}`;
  }
  return "the number is prime";
}
function hintsPopup(hintNumber , hintText){
  removeHintsPopup();
  let hintsPopup = document.createElement("div");
  hintsPopup.className = "hints-popup";
  hintsPopup.innerHTML = `<div class="content">
  <h3>hint ${hintNumber} : </h3>
  <p>${hintText}</p>
  <span class="material-icons-outlined close">
    close
    </span>
</div>`;
  hintsPopup.addEventListener("click",(element) => {
      if(element.target.classList.contains("close")){
        hintsPopup.style.transform = "translateY(80px)";
        setTimeout(() => {
        hintsPopup.remove();
        },800)
      }
  })
  document.body.append(hintsPopup);
  setTimeout(() => {
    hintsPopup.classList.add("appear");
  },500)
  
}
function removeHintsPopup(){
  const hintsPopup = document.querySelector(".hints-popup")
  if(hintsPopup){
    hintsPopup.style.transform = "translateY(80px)";
        setTimeout(() => {
        hintsPopup.remove();
        },800)
  }
}
