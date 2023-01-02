//------------------PETS HAPPINESS IMAGE----------------------
const petHappinessImage = document.getElementById("petHappinessImage")


//-------PET NAME TEXT BOX, SUMBIT BUTTON, NAME DISPLAY-------
const inputPetNameBox = document.getElementById("inputPetNameBox")
const submitPetNameButton = document.getElementById("submitPetNameButton")
const petsName = document.getElementById("petsName")

//----------------PET LEVEL DISPLAY TEXTS----------------

const hungerLevelDisplayText = document.getElementById("hungerLevelDisplayText")
const thirstLevelDisplayText = document.getElementById("thirstLevelDisplayText")
const cleanlinessLevelDisplayText = document.getElementById("cleanlinessLevelDisplayText")
const happinessLevelDisplayText = document.getElementById("happinessLevelDisplayText")


//------------------PET SELECTING BUTTONS----------------------
const monkeyButton = document.getElementById("monkeyButton")
const rabbitButton = document.getElementById("rabbitButton")


//------------------------PET IMAGE----------------------------
const dynamicImage = document.getElementById("dynamicImage")


//----------TEXT TO DISPLAY TO USER AFTER THEIR ACTION---------
const playerActionDisplayText = document.getElementById("playerActionDisplayText")


//---------------------PLAY/PAUSE BUTTON-----------------------
const playPauseTimerButton = document.getElementById("playPauseTimerButton")


//---------------------PROGRESS BAR TEST-----------------------
const progressBar = document.getElementById("progressBar")


//---------------FEED, DRINK, SCRUB, PLAY BUTTONS--------------------------
const feedButton = document.getElementById("feedButton")
const drinkButton = document.getElementById("drinkButton")
const scrubButton = document.getElementById("scrubButton")
const playButton = document.getElementById("playButton")


//----------------PET HEALTH LEVEL DISPLAY TEXT----------------

const healthLevelDisplayText = document.getElementById("healthLevelDisplayText")



//------------------------CLASS REMOVAL--------------------------
let gameOverRemovableElements = document.querySelectorAll(".gameOverRemovable")

let petChosenRemovableElements = document.querySelectorAll(".petChosenRemovableElements")













//----------------------HIDE UI TEST------------------------

// const hideUIButton = document.getElementById("hideUIButton")

// hideUIButton.addEventListener(`click`, () => {
//   hideElements()
// })

// function hideElements() {
  // Gets elements

  // const elements = document.querySelectorAll(`.CLASSNAMEHERE`);

  // Sets display of those elements

//   elements.forEach(element => {
//     element.style.display = 'none';
//   });
// }


















//------------------------PROGRESS BAR-----------------------
const hungerBar = document.getElementById('hunger-bar')

function updateHunger(newHunger) {
  hungerBar.style.width = `${newHunger}%`

  if (newHunger <= 25) {
    hungerBar.style.backgroundColor = `yellow`
  }
  else if (newHunger <= 50) {
    hungerBar.style.backgroundColor = `orange`
  }
  else if (newHunger <= 75) {
    hungerBar.style.backgroundColor = `red`
  }
}



//----------------------CORE PET CLASS------------------------
class CorePet {
    constructor(name, hunger, thirst, cleanliness, happiness, health, type) {
        this.name = name
        this.hunger = hunger
        this.thirst = thirst
        this.cleanliness = cleanliness
        this.happiness = happiness
        this.health = health
        this.type = type
    }

    feed() {
      //pros  
        this.hunger -= 25
        this.happiness += 10
      //cons
        this.thirst += 10
        this.cleanliness -= 10
    }

    drink() {
      //pros
        this.thirst -= 25
        this.happiness += 10
      //cons
        this.cleanliness -= 5
    }

    scrub() {
        //pros
        this.cleanliness += 100
        this.happiness += 10
        //cons
          // no con?
    }

    play() {
        //pros
        this.happiness += 25
        //cons
        this.cleanliness -= 10
        this.thirst += 10
        this.hunger += 10
    }

    statsTick() {
        // APPLIES COST OF LIVING
        this.hunger += 0.5
        this.thirst += 0.5
        this.happiness -= 0.5
        this.cleanliness -= 0.5

        //CALLS HEALTH FUNCTION
        healthFucntion()
        
        //TESTING LOG
        if (currentPet == `Monkey`) {
          console.log(`statsTick log:`, myMonkey)
        }
        else if (currentPet == `Rabbit`) {
          console.log(`statsTick log:`, myRabbit)
        }

        // UPDATES THE HUNGER BAR
        updateHunger(this.hunger)
        // console.log(`Hunger bar % log:`, hungerBar.style.width)

        // DISPLAYS HUNGER LVL TO USER
        hungerLevelDisplayText.textContent = `${this.name}'s hunger level: ${this.hunger}/100%`

        // DISPLAYS THIRST LVL TO USER
        thirstLevelDisplayText.textContent = `${this.name}'s thirst level: ${this.thirst}/100%`

        // DISPLAYS CLEANLINESS LVL TO USER
        cleanlinessLevelDisplayText.textContent = `${this.name}'s cleanliness level: ${this.cleanliness}/100%`

        // DISPLAYS HAPPINESS LVL TO USER
        happinessLevelDisplayText.textContent = `${this.name}'s happiness level: ${this.happiness}/100%`

        // DISPLAYS HEALTH LVL TO USER
        healthLevelDisplayText.textContent = `${this.name}'s health level: ${this.health}/100%`
    }
}



//---------------------CURRENT PET-------------------------

let currentPet



//---------------------HEALTH STUFF------------------------
function healthFucntion() {
  if (currentPet == `Monkey`) {
    if (myMonkey.hunger > 49) {
      myMonkey.health -= 1
      console.log(`Monkey Deg log: HP = ${myMonkey.health}`)
    }
    else if (myMonkey.health < 100 && myMonkey.hunger < 49) {
      myMonkey.health += 1
      console.log(`Monkey Deg log: HP = ${myMonkey.health}`)
    }
  }
}


//--------------------DEATH FUNCTION------------------------

function deathCheck() {
  if (currentPet == `Monkey`) {
    if (myMonkey.health <= 0) {


      clearInterval(timerId)
      console.log(`Monkey Death log: HP = ${myMonkey.health}. ${myMonkey.name} DIED!`)
      dynamicImage.src = `./Images/gameovergif.gif`
      removeElementsIfPetDead()
      //ADD PLAY AGAIN BUTTON
    }
    else {
      callTick()
    }
  }
}



//------------------ELEMENT REMOVERS-----------------------

function removeElementsIfPetDead() {
  for (let i = 0; i < gameOverRemovableElements.length; i++) {
      gameOverRemovableElements[i].remove();
    }
}

function removeElementsIfPetChosen() {
  for (let i = 0; i < petChosenRemovableElements.length; i++) {
    petChosenRemovableElements[i].remove();
    }
}



//---------------------MONKEY EXTEND-----------------------

class MonkeyClass extends CorePet {
  constructor(name, hunger, thirst, cleanliness, happiness, health, type, dance) {
      super(name, hunger, thirst, cleanliness, happiness, health, type)
      dynamicImage.src = `./Images/monkeyimage.jpg`
      currentPet =`Monkey`
      this.dance = dance

      timerId = setInterval(deathCheck, 1000)
      
      updateHunger(this.hunger)
      console.log(`Hunger bar % log:`, hungerBar.style.width)
  }
}



//---------------------RABBIT EXTEND-----------------------

class RabbitClass extends CorePet {
  constructor(name, hunger, thirst, cleanliness, happiness, health, type, dance) {
      super(name, hunger, thirst, cleanliness, happiness, health, type)
      dynamicImage.src = `./Images/rabbitimage.png`
      currentPet =`Rabbit`
      this.dance = dance
      timerId = setInterval(callTick, 1000)
      updateHunger(this.hunger)
      console.log(hungerBar.style.width)
  }
}



//---------------RABBIT BUTTON (CREATES RABBIT)---------------

rabbitButton.addEventListener(`click`, () => {
  myRabbit = new RabbitClass(`${petsName.textContent}`, 0, 0, 100, 100, 100, `Rabbit`, `PEPEJAM`)
  console.log(myRabbit)
  removeElementsIfPetChosen()
})



//----------------------PET NAME SYSTEM------------------------

submitPetNameButton.addEventListener("click", () =>{
  petsName.textContent = inputPetNameBox.value;
  submitPetNameButton.remove()
  inputPetNameBox.remove()
})



//---------------MONKEY BUTTON (CREATES MONKEY)---------------

monkeyButton.addEventListener(`click`, () => {
    myMonkey = new MonkeyClass(`${petsName.textContent}`, 0, 0, 100, 100, 100, `Monkey`, `PEPEJAM`)
    console.log(myMonkey)
    removeElementsIfPetChosen()
})



//-------------------PAUSE/PLAY CODE------------------

let timerId
let isPaused = false

function callTick() {
  //MONKEY
  if (currentPet == `Monkey`) {
    myMonkey.statsTick()
  }
  //RABBIT
  else if (currentPet == `Rabbit`) {
    myRabbit.statsTick()
  }
}

// Pause / Resume the interval
function pauseResumeInterval() {
  if (isPaused) {
    timerId = setInterval(callTick, 1000)
    isPaused = false
  }
  else {
    clearInterval(timerId)
    isPaused = true
  }
}

playPauseTimerButton.addEventListener("click", () => {
    if (playPauseTimerButton.textContent == "PAUSE") {
        dynamicImage.src = `./Images/gamepausedgif.gif`

        // RESUMES interval
        playPauseTimerButton.textContent = "PLAY"
        pauseResumeInterval()

        // replaces action text
        playerActionDisplayText.textContent = `ACTIAVTING PAUSED STATE`
    }
    else if (playPauseTimerButton.textContent == "PLAY") {
        //MONKEY
        if (currentPet == `Monkey`) {
          dynamicImage.src = `./Images/monkeyimage.jpg`
        }
        //RABBIT
        else if (currentPet == `Rabbit`) {
          dynamicImage.src = `./Images/rabbitimage.png`
        }

        // PAUSES interval
        playPauseTimerButton.textContent = "PAUSE"
        pauseResumeInterval()

        // Replaces action text
        playerActionDisplayText.textContent = `ACTIVATING PLAY STATE`
    }
})



//-------------------FEED BUTTON------------------

feedButton.addEventListener(`click`, () => {
  //MONKEY
  if (currentPet == `Monkey`) {
    myMonkey.feed()

    hungerLevelDisplayText.textContent = `${myMonkey.name}'s hunger level: ${myMonkey.hunger}/100%`

    playerActionDisplayText.textContent = `You fed ${myMonkey.name}! (-25 Hunger, +10 Happiness, +10 Thirst, -10 Cleanliness)`

    updateHunger(myMonkey.hunger)
  }
  //RABBIT
  else if (currentPet == `Rabbit`) {
    myRabbit.feed()

    hungerLevelDisplayText.textContent = `${myRabbit.name}'s hunger level: ${myRabbit.hunger}/100%`

    playerActionDisplayText.textContent = `You fed ${myRabbit.name}! (-25 Hunger, +10 Happiness, +10 Thirst, -10 Cleanliness)`

    updateHunger(myRabbit.hunger)
  }
})



//-------------------DRINK BUTTON------------------
drinkButton.addEventListener(`click`, () => {
  //MONKEY
  if (currentPet == `Monkey`) {
    myMonkey.drink()

    thirstLevelDisplayText.textContent = `${myMonkey.name}'s thirst level: ${myMonkey.thirst}/100%`

    playerActionDisplayText.textContent = `You gave ${myMonkey.name} a drink! (-25 Thirst, +10 Happiness, -5 Cleanliness)`

    //ref to progress bar
    // updateThirst(myMonkey.thirst)
  }
  //RABBIT
  else if (currentPet == `Rabbit`) {
    myRabbit.drink()

    thirstLevelDisplayText.textContent = `${myRabbit.name}'s thirst level: ${myRabbit.thirst}/100%`

    playerActionDisplayText.textContent = `You gave ${myRabbit.name} a drink! (-25 Thirst, +10 Happiness, -5 Cleanliness)`

    //ref to progress bar
    // updateThirst(myRabbit.thirst)
  }
})




//-------------------SCRUB BUTTON------------------
scrubButton.addEventListener(`click`, () => {
  //MONKEY
  if (currentPet == `Monkey`) {
    myMonkey.scrub()

    cleanlinessLevelDisplayText.textContent = `${myMonkey.name}'s cleanliness level: ${myMonkey.cleanliness}/100%`

    playerActionDisplayText.textContent = `You scrubbed ${myMonkey.name} all clean! (+100 Cleanliness, +10 Happiness)`

    //ref to progress bar
    // updateThirst(myMonkey.thirst)
  }
  //RABBIT
  else if (currentPet == `Rabbit`) {
    myRabbit.scrub()

    cleanlinessLevelDisplayText.textContent = `${myRabbit.name}'s cleanliness level: ${myRabbit.cleanliness}/100%`

    playerActionDisplayText.textContent = `You scrubbed ${myRabbit.name} all clean! (+100 Cleanliness, +10 Happiness)`

    //ref to progress bar
    // updateThirst(myRabbit.thirst)
  }
})



//-------------------PLAY BUTTON------------------
playButton.addEventListener(`click`, () => {
  //MONKEY
  if (currentPet == `Monkey`) {
    myMonkey.play()

    happinessLevelDisplayText.textContent = `${myMonkey.name}'s happiness level: ${myMonkey.happiness}/100%`

    playerActionDisplayText.textContent = `You played with ${myMonkey.name}! (+25 Happiness, -10 Cleanliness, +10 Thirst, +10 Hunger)`

    //ref to progress bar
    // updateThirst(myMonkey.thirst)
  }
  //RABBIT
  else if (currentPet == `Rabbit`) {
    myRabbit.play()

    happinessLevelDisplayText.textContent = `${myRabbit.name}'s happiness level: ${myRabbit.happiness}/100%`

    playerActionDisplayText.textContent = `You played with ${myRabbit.name}! (+25 Happiness, -10 Cleanliness, +10 Thirst, +10 Hunger)`

    //ref to progress bar
    // updateThirst(myRabbit.thirst)
  }
})

























//----------------------HIDE UI TEST------------------------

// const hideUIButton = document.getElementById("hideUIButton")

// hideUIButton.addEventListener(`click`, () => {
//   hideElements()
// })

// function hideElements() {
//   // Gets elements
//   const elements = document.querySelectorAll(`.beginShow`);

//   // Sets display of those elements
//   elements.forEach(element => {
//     element.style.display = 'none';
//   });
// }




























// OLD SWITCH CASES FOR EXAMPLE USE
        // switch(myMonkey.hunger){
        //     case 0:
        //     petsName.textContent = `Oh No! ${petsName.textContent} has died from being overfed! GAME OVER`
        //     break
        //     case 15:
        //     petsName.textContent = `Warning! ${petsName.textContent} is dying from being overfed!`
        //     break
        //     case 25:
        //     petsName.textContent = `${petsName.textContent} is feeling stuffed!`
        //     break
        //     case 50:
        //     petsName.textContent = `${petsName.textContent} has a full tummy and is content!`
        //     break
        //     case 80:
        //     petsName.textContent = `${petsName.textContent} is feeling peckish!`
        //     break
        //     case 90:
        //     petsName.textContent = `Warning! ${petsName.textContent} is dying from hunger!`
        //     break
        //     case 100:
        //     petsName.textContent = `Oh No! ${petsName.textContent} has died from hunger! GAME OVER`
        // }
// }





























//class of "displayOnBeginUI", function that tells everything with that class to be set to block instead of none
//monkeyImage.style.display = "block"


// to do list ---------------------
// 1 - dance function
// add a new element to text display to user instead of replace, delete nth child first when timer executes
// age var and timer
// feed, play, clean functions and msgs
// backgrounds
// elements replace/hide
// sprites
// sprites react to happiness lvl

//optional -------------------------
// animated sprites
// frame/border
// sounds
// more pets
// pet can be trained, XP gained base +2, +1 for each stat above 50 or 75
// training pet will allow them to learn new interactions
// once age above certain time and pet is healthy, pet will be released and find a mate
// -------------------------------------------------------


// put pet consts into array and tell buttons to grab default stats from there?































