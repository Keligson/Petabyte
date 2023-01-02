//------------------PETS HAPPINESS IMAGE----------------------
const petHappinessImage = document.getElementById("petHappinessImage")


//-------PET NAME TEXT BOX, SUMBIT BUTTON, NAME DISPLAY-------
const inputPetNameBox = document.getElementById("inputPetNameBox")
const submitPetNameButton = document.getElementById("submitPetNameButton")
const petsName = document.getElementById("petsName")

//----------------PET HUNGER LEVEL DISPLAY TEXT----------------

const hungerLevelDisplayText = document.getElementById("hungerLevelDisplayText")


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


//------------------------FEED BUTTON--------------------------
const feedButton = document.getElementById("feedButton")


//----------------PET HEALTH LEVEL DISPLAY TEXT----------------

const healthLevelDisplayText = document.getElementById("healthLevelDisplayText")



//------------------------CLASS REMOVAL--------------------------
let gameOverRemovableElements = document.querySelectorAll(".gameOverRemovable")

let petChosenRemovableElements = document.querySelectorAll(".petChosenRemovableElements")



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

 

//----------------------createElementTestButton------------------------
const createElementTestButton = document.getElementById(`createElementTestButton`)

function createUI() {
  const div = document.createElement('div')
  div.setAttribute('id', 'my-div')
  div.textContent = 'Hello, World!'
  document.body.append(div)
}

createElementTestButton.addEventListener("click", () =>{
  createUI()
})






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
        this.hunger -= 25
    }

    drink() {
        this.thirst -= 25
    }

    scrub() {
        this.cleanliness += 100
    }

    play() {
        this.happiness += 25
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

    playerActionDisplayText.textContent = `You fed ${myMonkey.name}! (Hunger is increased by 5)`

    updateHunger(myMonkey.hunger)
  }
  //RABBIT
  else if (currentPet == `Rabbit`) {
    myRabbit.feed()

    hungerLevelDisplayText.textContent = `${myRabbit.name}'s hunger level: ${myRabbit.hunger}/100%`

    playerActionDisplayText.textContent = `You fed ${myRabbit.name}! (Hunger is increased by 5)`

    updateHunger(myRabbit.hunger)
  }
})









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































