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


//-----------------------FEED BUTTONS--------------------------
const monkeyFeedButton = document.getElementById("monkeyFeedButton")
const rabbitFeedButton = document.getElementById("rabbitFeedButton")


//----------TEXT TO DISPLAY TO USER AFTER THEIR ACTION---------
const playerActionDisplayText = document.getElementById("playerActionDisplayText")


//---------------------PLAY/PAUSE BUTTON-----------------------
const playPauseTimerButton = document.getElementById("playPauseTimerButton")


//---------------------PROGRESS BAR TEST-----------------------
const progressBar = document.getElementById("progressBar")








//------------------------PROGRESS BAR-----------------------
const hungerBar = document.getElementById('hunger-bar');

function updateHunger(newHunger) {
  hungerBar.style.width = `${newHunger}%`;

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
        this.hunger -= 5
    }

    drink() {
        this.thirst -= 5
    }

    clean() {
        this.clean += 5
    }

    play() {
        this.happiness += 5
    }

    statsTick() {
        this.hunger += 2.5
        this.thirst += 2.5
        this.happiness -= 2.5
        this.cleanliness -= 2.5

        // test
        console.log(myMonkey)
        hungerLevelDisplayText.textContent = `${myMonkey.name}'s hunger level: ${myMonkey.hunger}/100`


        updateHunger(myMonkey.hunger)
        console.log(hungerBar.style.width)
    }
}



//---------------------MONKEY EXTEND-----------------------

class MonkeyClass extends CorePet {
  constructor(name, hunger, thirst, clean, happy, health, type, dance) {
      super(name, hunger, thirst, clean, happy, health, type)
      // `dance` unique ability
      this.dance = dance

      // start the interval
      timerId = setInterval(callTick, 1500)

      // changes image from egg to monkey
      // dynamicImage.src = `./Images/monkeyimage.jpg`



      updateHunger(this.hunger)
      console.log(hungerBar.style.width)


      imageChangeTest()
  }
}

function imageChangeTest() {
  if (this.type = `Monkey`) {
    console.log(`Monkey selected test`)
    dynamicImage.src = `./Images/monkeyimage.jpg`
  }
  else if (this.type = `Rabbit`) {
    console.log(`Rabbit selected test`)
  }
}

//----------------------PET NAME SYSTEM------------------------
submitPetNameButton.addEventListener("click", () =>{
  petsName.textContent = inputPetNameBox.value;
  submitPetNameButton.remove()
  inputPetNameBox.remove()


  // functionButtons.style.display = "block"
  // petStatsTable.style.display = "block"

})



//---------------------MONKEY STUFF-----------------------

monkeyButton.addEventListener(`click`, () => {
    myMonkey = new MonkeyClass(`${petsName.textContent}`, 0, 0, 100, 100, 100, `Monkey`, `PEPEJAM`)

    // test
    console.log(myMonkey)

    // removes no longer needed buttons
    rabbitButton.remove()
    monkeyButton.remove()
    rabbitFeedButton.remove()

    // starts stats ticking
})



//-------------------PAUSE/PLAY CODE------------------

let timerId
let isPaused = false

function callTick() {
  myMonkey.statsTick()
}

// pause or resume the interval
function pauseResumeInterval() {
  if (isPaused) {
    timerId = setInterval(callTick, 1500)
    isPaused = false
  } else {
    clearInterval(timerId)
    isPaused = true
  }
}

playPauseTimerButton.addEventListener("click", () => {
    if (playPauseTimerButton.textContent == "PAUSE") {
        // test
        console.log(`ACTIVATING PLAY STATE`)
        // thing I want to do
        dynamicImage.src = `./Images/monkeyimagepaused.jpg`
        playPauseTimerButton.textContent = "PLAY"
        // RESUMES interval
        pauseResumeInterval()
        // replaces action text
        playerActionDisplayText.textContent = `ACTIAVTING PAUSED STATE`
    }
    else if (playPauseTimerButton.textContent == "PLAY") {
        // test
        console.log(`ACTIVATING PAUSE STATE`)
        // thing I want to do
        dynamicImage.src = `./Images/monkeyimage.jpg`
        playPauseTimerButton.textContent = "PAUSE"
        // PAUSES interval
        pauseResumeInterval()
        // replaces action text
        playerActionDisplayText.textContent = `ACTIVATING PLAY STATE`
    }
})



//-------------------FEED BUTTON------------------

monkeyFeedButton.addEventListener(`click`, () => {
  myMonkey.feed()

  console.log(myMonkey)

  hungerLevelDisplayText.textContent = `${myMonkey.name}'s hunger level: ${myMonkey.hunger}/100`
  playerActionDisplayText.textContent = `You fed ${myMonkey.name}! (Hunger is increased by 5)`

  updateHunger(myMonkey.hunger)
})



//----------------------CHECK STATS-------------------------
// const checkStats = () =>{
//     if (myMonkey.hunger >= 50) {
//         console.log(`${petsName.textContent} is content`)
//     }






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






//----------------------RABBIT STUFF-------------------------









//-----------------------COMMANDS---------------------------

// const myPet = new CorePet(`Adam`);
// const myMonkey = new MonkeyClass(`Monkeyboi`);
// const myRabbit = new TypeOfPetClass(`Monty`)

































// to do list ---------------------
// 1 - death state
// 2 - dance function
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







































// TIMER CODE BACKUP

// setInterval(() => {
//     myMonkey.tick();
// console.log(myMonkey)
//   }, 3000);

// ------------------------------












//BACKUP MONKEYCLASS BEFORE PUTTING STATSTICK SETINTERVAL OUTSIDE OF EXTENDS
// class MonkeyClass extends CorePet {
//     constructor(name, hunger, thirst, clean, happy, type, dance) {
//         super(name, hunger, thirst, clean, happy, type)
//         //`dance` unique ability
//         this.tickcle = dance
        
        

//         //changes image from egg to monkey
//         dynamicImage.src = `./Images/monkeyimage.jpg`

//         setInterval(() => {
//             myMonkey.statsTick()

//             //console.log test
//             console.log(myMonkey)

//             // displays monkey's name and hunger every 3 sec
//             hungerLevelDisplayText.textContent = `${myMonkey.name}'s hunger level: ${myMonkey.hunger}/100`
//         }, 3000)
//     }
// }















// BACKUP MONKEYCLASS WORKING CODE

// class MonkeyClass extends CorePet {
//     constructor(name, type) {
//         super(name);
//         // this.type = type;
//         if (monkeyType == true) {
//             this.type = `Monkey type true`
//         }
//     }

//     dance() {
//         console.log(`${this.name} starts to dance!`);
//     }
// }

// ------------------------------













// BACKUP TRUE FALSE CODE

// let rabbitType = false
// let monkeyType = false

// monkeyButton.addEventListener("click", () =>{
//     monkeyType = true
//     rabbitType = false
//     const myMonkey = new TypeOfPetClass(`Monkeyboi`);
//     console.log(myMonkey)
//     console.log(`Monkey Type t/f:`, monkeyType)
//     console.log(`Rabbit Type t/f:`, rabbitType)
// })

// rabbitButton.addEventListener("click", () =>{
//     rabbitType = true
//     monkeyType = false
//     const myRabbit = new TypeOfPetClass(`Ravingrabbit`)
//     console.log(myRabbit)
//     console.log(`Monkey Type t/f:`, monkeyType)
//     console.log(`Rabbit Type t/f:`, rabbitType)
// })

// class TypeOfPetClass extends CorePet {
//     constructor(name, type) {
//         super(name);
//         if (monkeyType == true) {
//             this.type = `Monkey type true`
//         }
//         else if (rabbitType == true) {
//             this.type = `Rabbit type true`
//         }
//     }
// }


// ------------------------------







// BACKUP FEED CODE

// function feed() {
//     // myPet.hunger -= 10;
//     // console.log(myPet)
//     // myMonkey.hunger -= 10;
//     // console.log(myMonkey)
// }

// feedButton.addEventListener("click", () =>{
//     feed()
//     // console.log(myPet)
//     // console.log(myMonkey)
// })

// ------------------------------








// WORKING MONKEY FEED
// function feedMonkey() {
//     myMonkey.hunger -= 10;
//     console.log(myMonkey)
// }

// feedButton.addEventListener("click", () =>{
//     feedMonkey()
// })

// function monkeyPetCreation() {
//         myMonkey = new MonkeyClass(`Monkeyboi`);
//         console.log(myMonkey)
//         return
//     }

// ------------------------------





// RABBIT STUFF BACKUP 27/12/22  9:01pm
// let rabbitChosen = false


// rabbitButton.addEventListener("click", () =>{
//     const myRabbit = new RabbitClass(`Monty the rabbit`);
//     console.log(myRabbit)
// })


// class RabbitClass extends CorePet {
//     constructor(name, type) {
//         super(name);
//         this.type = `RABBIT SELECTED`
//         dynamicImage.src = "./Images/rabbitimage.png"
//     }

//     //age is asigned and starts counting up

//     //unique function
// }



// const myRabbit = new TypeOfPetClass(`Ravingrabbit`);
// console.log(myRabbit)