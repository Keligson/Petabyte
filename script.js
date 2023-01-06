//---------------------------------------------------------
//----------------\/-------CONSTS-------\/-----------------
//---------------------------------------------------------

//PET NAME TEXT BOX, SUMBIT BUTTON, NAME DISPLAY
const inputPetNameBox = document.getElementById("inputPetNameBox")
const submitPetNameButton = document.getElementById("submitPetNameButton")
const petsName = document.getElementById("petsName")

//PET SELECTING BUTTONS
const monkeyButton = document.getElementById("monkeyButton")
const rabbitButton = document.getElementById("rabbitButton")

//PET IMAGE
const dynamicImage = document.getElementById("dynamicImage")

//TEXT TO DISPLAY TO USER AFTER THEIR ACTION
const playerActionDisplayText = document.getElementById("playerActionDisplayText")

//FEED, DRINK, SCRUB, PLAY, UNIQUE 1 BUTTONS
const feedButton = document.getElementById("feedButton")
const drinkButton = document.getElementById("drinkButton")
const scrubButton = document.getElementById("scrubButton")
const playButton = document.getElementById("playButton")

//PET LEVEL DISPLAY TEXTS
const hungerLevelDisplayText = document.getElementById("hungerLevelDisplayText")
const thirstLevelDisplayText = document.getElementById("thirstLevelDisplayText")
const cleanlinessLevelDisplayText = document.getElementById("cleanlinessLevelDisplayText")
const happinessLevelDisplayText = document.getElementById("happinessLevelDisplayText")
const healthLevelDisplayText = document.getElementById("healthLevelDisplayText")
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------



//---------------------------------------------------------
//----------------\/-------LETS-------\/-------------------
//---------------------------------------------------------

//CURRENT PET
let currentPet
//---------------------------------------------------------

//DANCE BUTTON
let danceButton = document.getElementsByName(`danceButton`)
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------



//---------------------------------------------------------
//--------------\/-------FUNCTIONS-------\/----------------
//---------------------------------------------------------

//TIMER
let timerId
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
//---------------------------------------------------------

//HEALTH DEGRADATION
function healthDegFunction() {
  //MONKEY
  if (currentPet == `Monkey`) {
    if (myMonkey.hunger > 49) {
      myMonkey.health -= 1
    } else if (myMonkey.health < 100 && myMonkey.hunger < 49) {
        myMonkey.health += 0.25
    }
    if (myMonkey.thirst > 49) {
      myMonkey.health -= 1
    } else if (myMonkey.health < 100 && myMonkey.thirst < 49) {
      myMonkey.health += 0.25
    }
    if (myMonkey.cleanliness < 49) {
      myMonkey.health -= 1
    } else if (myMonkey.health < 100 && myMonkey.cleanliness > 49) {
      myMonkey.health += 0.25
    }
    if (myMonkey.happiness < 49) {
      myMonkey.health -= 1
    } else if (myMonkey.health < 100 && myMonkey.happiness > 49) {
      myMonkey.health += 0.25
    }
    // console.log(`Monkey Deg log: HP = ${myMonkey.health}`)
  }
  //RABBIT
  if (currentPet == `Rabbit`) {
    if (myRabbit.hunger > 49) {
      myRabbit.health -= 1
    } else if (myRabbit.health < 100 && myRabbit.hunger < 49) {
      myRabbit.health += 0.25
    }
    if (myRabbit.thirst > 49) {
      myRabbit.health -= 1
    } else if (myRabbit.health < 100 && myRabbit.thirst < 49) {
      myRabbit.health += 0.25
    }
    if (myRabbit.cleanliness < 49) {
      myRabbit.health -= 1
    } else if (myRabbit.health < 100 && myRabbit.cleanliness > 49) {
      myRabbit.health += 0.25
    }
    if (myRabbit.happiness < 49) {
      myRabbit.health -= 1
    } else if (myRabbit.health < 100 && myRabbit.happiness > 49) {
      myRabbit.health += 0.25
    }
    // console.log(`Monkey Deg log: HP = ${myRabbit.health}`)
  }
}
//---------------------------------------------------------

//DEATH FUNCTION
function deathCheck() {
  //MONKEY
  if (currentPet == `Monkey` && myMonkey.health <= 0) {
      clearInterval(timerId)
      playerActionDisplayText.textContent = `${myMonkey.name} has died!`
      console.log(`Monkey Death log: HP = ${myMonkey.health}. ${myMonkey.name} DIED!`)
      dynamicImage.src = `./Images/gameovergif.gif`
      //ADD PLAY AGAIN BUTTON
    }
    //RABBIT
  else if (currentPet == `Rabbit` && myRabbit.health <= 0) {
      clearInterval(timerId)
      playerActionDisplayText.textContent = `${myRabbit.name} has died!`
      console.log(`Rabbit Death log: HP = ${myRabbit.health}. ${myRabbit.name} DIED!`)
      dynamicImage.src = `./Images/gameovergif.gif`
      //ADD PLAY AGAIN BUTTON
    }

    // else {
    //   callTick()
    // }
}
//---------------------------------------------------------

//DANCE BUTTON CREATION, ADVENT LISTENER, AND FUNCTION
function danceButtonCreation() {
  danceButton = document.createElement('button')
  danceButton.textContent = 'DANCE'
  referenceNode = document.querySelector('#playButton')
  referenceNode.insertAdjacentElement(`afterend`, danceButton)
  danceButton.addEventListener(`click`, () => {
    //MONKEY
  if (currentPet == `Monkey`) {
    myMonkey.play()
    happinessLevelDisplayText.textContent = `${myMonkey.name}'s happiness level: ${myMonkey.happiness}/100`
    playerActionDisplayText.textContent = `${myMonkey.name} starts dancing to a funky beat (+10 Hunger, +10 Thirst, -10 Cleanliness, +25 Happiness)`
    }
  })
}
//---------------------------------------------------------

// MIN/MAX VALUE FUNCTION
// function minMaxValue() {
//   if (myMonkey.hunger > 100) {
//     myMonkey.hunger = 100
//     console.log(`minMaxValue set hunger to 100`)
//   } else if (myMonkey.hunger < 0) {
//     myMonkey.hunger = 0
//     console.log(`minMaxValue set hunger to 0`)
//   }
// }
  
  // get property() {
  // return this._property;
  // }
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------



//---------------------------------------------------------
//----------\/-------CLASSES AND EXTENDS-------\/----------
//---------------------------------------------------------

//CORE PET CLASS
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
        this.hunger += 1
        this.thirst += 1
        this.happiness -= 1
        this.cleanliness -= 1
        deathCheck()
        // minMaxValue()
        healthDegFunction()
        hungerLevelDisplayText.textContent = `${this.name}'s hunger level: ${this.hunger}/100`
        thirstLevelDisplayText.textContent = `${this.name}'s thirst level: ${this.thirst}/100`
        cleanlinessLevelDisplayText.textContent = `${this.name}'s cleanliness level: ${this.cleanliness}/100`
        happinessLevelDisplayText.textContent = `${this.name}'s happiness level: ${this.happiness}/100`
        healthLevelDisplayText.textContent = `${this.name}'s health level: ${this.health}/100`
    }

      // property(value) {
      //   if (value > 100) {
      //   this._property = 100;
      //   } else {
      //   this._property = value;
      //   }
      // }
    
}
//---------------------------------------------------------

//MONKEY EXTEND
class MonkeyClass extends CorePet {
  constructor(name, hunger, thirst, cleanliness, happiness, health, type, dance) {
      super(name, hunger, thirst, cleanliness, happiness, health, type)
      dynamicImage.src = `./Images/monkeyimage.jpg`
      currentPet =`Monkey`
      this.dance = dance
      danceButtonCreation()
      timerId = setInterval(callTick, 1000)
    }
//DANCE STUFF
    dance() {
      //pros
      this.happiness += 25
      //cons
      this.cleanliness -= 10
      this.thirst += 10
      this.hunger += 10
    }
}
//---------------------------------------------------------

//RABBIT EXTEND
class RabbitClass extends CorePet {
  constructor(name, hunger, thirst, cleanliness, happiness, health, type) {
      super(name, hunger, thirst, cleanliness, happiness, health, type)
      dynamicImage.src = `./Images/rabbitimage.png`
      currentPet =`Rabbit`
      timerId = setInterval(callTick, 1000)
  }
}
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------



//---------------------------------------------------------
//---------\/-------PET CREATION BUTTONS-------\/----------
//---------------------------------------------------------

//MONKEY BUTTON AND CREATION
monkeyButton.addEventListener(`click`, () => {
  myMonkey = new MonkeyClass(`${petsName.textContent}`, 0, 0, 100, 100, 100, `Monkey`, `PEPEJAM`)
  console.log(myMonkey)
})
//---------------------------------------------------------

//RABBIT BUTTON AND CREATION
rabbitButton.addEventListener(`click`, () => {
  myRabbit = new RabbitClass(`${petsName.textContent}`, 0, 0, 100, 100, 100, `Rabbit`, `PEPEJAM`)
  console.log(myRabbit)
})
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------



//---------------------------------------------------------
//----------\/-------PET NAMING SYSTEM-------\/------------
//---------------------------------------------------------

//PET NAME SYSTEM
submitPetNameButton.addEventListener("click", () =>{
  petsName.textContent = inputPetNameBox.value
  //HIDE FUNCTION (TEMP DISABLED)
  // submitPetNameButton.remove()
  // inputPetNameBox.remove()
})
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------



//---------------------------------------------------------
//-------\/-------PET INTERACTION BUTTONS-------\/---------
//---------------------------------------------------------

//FEED BUTTON
feedButton.addEventListener(`click`, () => {
  //MONKEY
  if (currentPet == `Monkey`) {
    myMonkey.feed()
    hungerLevelDisplayText.textContent = `${myMonkey.name}'s hunger level: ${myMonkey.hunger}/100`
    playerActionDisplayText.textContent = `You fed ${myMonkey.name}! (-25 Hunger, +10 Thirst, -10 Cleanliness, +10 Happiness)`
  }
  //RABBIT
  else if (currentPet == `Rabbit`) {
    myRabbit.feed()
    hungerLevelDisplayText.textContent = `${myRabbit.name}'s hunger level: ${myRabbit.hunger}/100`
    playerActionDisplayText.textContent = `You fed ${myRabbit.name}! (-25 Hunger, +10 Thirst, -10 Cleanliness, +10 Happiness)`
  }
})
//---------------------------------------------------------

//DRINK BUTTON
drinkButton.addEventListener(`click`, () => {
  //MONKEY
  if (currentPet == `Monkey`) {
    myMonkey.drink()
    thirstLevelDisplayText.textContent = `${myMonkey.name}'s thirst level: ${myMonkey.thirst}/100`
    playerActionDisplayText.textContent = `You gave ${myMonkey.name} a drink! (-25 Thirst, -5 Cleanliness, +10 Happiness)`
  }
  //RABBIT
  else if (currentPet == `Rabbit`) {
    myRabbit.drink()
    thirstLevelDisplayText.textContent = `${myRabbit.name}'s thirst level: ${myRabbit.thirst}/100`
    playerActionDisplayText.textContent = `You gave ${myRabbit.name} a drink! (-25 Thirst, -5 Cleanliness, +10 Happiness)`
  }
})
//---------------------------------------------------------

//SCRUB BUTTON
scrubButton.addEventListener(`click`, () => {
    //MONKEY
  if (currentPet == `Monkey`) {
    myMonkey.scrub()
    cleanlinessLevelDisplayText.textContent = `${myMonkey.name}'s cleanliness level: ${myMonkey.cleanliness}/100`
    playerActionDisplayText.textContent = `You scrubbed ${myMonkey.name} all clean! (+100 Cleanliness, +10 Happiness)`
  }
  //RABBIT
  else if (currentPet == `Rabbit`) {
    myRabbit.scrub()
    cleanlinessLevelDisplayText.textContent = `${myRabbit.name}'s cleanliness level: ${myRabbit.cleanliness}/100`
    playerActionDisplayText.textContent = `You scrubbed ${myRabbit.name} all clean! (+100 Cleanliness, +10 Happiness)`
  }
})
//---------------------------------------------------------

//PLAY BUTTON
playButton.addEventListener(`click`, () => {
    //MONKEY
  if (currentPet == `Monkey`) {
    myMonkey.play()
    happinessLevelDisplayText.textContent = `${myMonkey.name}'s happiness level: ${myMonkey.happiness}/100`
    playerActionDisplayText.textContent = `You played with ${myMonkey.name}! (+10 Hunger, +10 Thirst, -10 Cleanliness, +25 Happiness)`
  }
  //RABBIT
  else if (currentPet == `Rabbit`) {
    myRabbit.play()
    happinessLevelDisplayText.textContent = `${myRabbit.name}'s happiness level: ${myRabbit.happiness}/100`
    playerActionDisplayText.textContent = `You played with ${myRabbit.name}! (+10 Hunger, +10 Thirst, -10 Cleanliness, +25 Happiness)`
  }
})
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------



//TESTING LOG
// if (currentPet == `Monkey`) {
//   console.log(`statsTick log:`, myMonkey)
// }
// else if (currentPet == `Rabbit`) {
//   console.log(`statsTick log:`, myRabbit)
// }



//---------------------------------------------------------
//--------------\/-------BACKUP CODE-------\/--------------
//---------------------------------------------------------

// //DEATH FUNCTION
// function deathCheck() {
//   //MONKEY
//   if (currentPet == `Monkey`) {
//     if (myMonkey.health <= 0) {
//       clearInterval(timerId)
//       playerActionDisplayText.textContent = `${myMonkey.name} has died!`
//       console.log(`Monkey Death log: HP = ${myMonkey.health}. ${myMonkey.name} DIED!`)
//       dynamicImage.src = `./Images/gameovergif.gif`
//       //ADD PLAY AGAIN BUTTON
//     }
//     //RABBIT
//   else if (currentPet == `Rabbit`) {
//     if (myRabbit.health <= 0) {
//       clearInterval(timerId)
//       playerActionDisplayText.textContent = `${myRabbit.name} has died!`
//       console.log(`Rabbit Death log: HP = ${myRabbit.health}. ${myRabbit.name} DIED!`)
//       dynamicImage.src = `./Images/gameovergif.gif`
//       //ADD PLAY AGAIN BUTTON
//     }
//     } else {
//       callTick()
//     }
//   }
// }
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------