const petImage = document.getElementById("petImage")
const petName = document.getElementById("petName")
const hungerLevelDisplayText = document.getElementById("hungerLevelDisplayText")


//------------------------------------------------------------

const monkeyButton = document.getElementById("monkeyButton")
const rabbitButton = document.getElementById("rabbitButton")

//------------------------------------------------------------

const dynamicImage = document.getElementById("dynamicImage")

//------------------------------------------------------------

const monkeyFeedButton = document.getElementById("monkeyFeedButton")
const rabbitFeedButton = document.getElementById("rabbitFeedButton")

//------------------------------------------------------------

const playerActionDisplayText = document.getElementById("playerActionDisplayText")

//------------------------------------------------------------

const playPauseTimerButton = document.getElementById("playPauseTimerButton")

//------------------------------------------------------------




class CorePet {
    constructor(name) {
        this.name = name
        this.hunger = 0
        this.thirst = 0
        this.cleanliness = 100
        this.happiness = 100
    }

    feed() {
        this.hunger -= 10
    }

    drink() {
        this.thirst -= 10
    }

    clean() {
        this.clean += 10
    }

    play() {
        this.happiness += 10
    }

    statsTick() {
        this.hunger += 5
        this.thirst += 5
        this.happiness -= 5
        this.cleanliness -= 5
    }
}

//------------------------------------------------------------
// MONKEY STUFF
monkeyButton.addEventListener(`click`, () =>{
    myMonkey = new MonkeyClass(`Monkeyboi`, `Monkey`)

    //console.log for testing
    console.log(myMonkey)

    //removes no longer needed buttons
    rabbitButton.remove()
    monkeyButton.remove()
    rabbitFeedButton.remove()
})

class MonkeyClass extends CorePet {
    constructor(name, type) {
        super(name)

        //sets type to `Monkey` as defined in MonkeyClass
        this.type = type

        //changes the image from egg to monkey
        dynamicImage.src = `./Images/monkeyimage.jpg`

        setInterval(() => {
            myMonkey.statsTick()

            //console.log for testing
            console.log(myMonkey)

            // displays the monkey's name and hunger level every 3 seconds
            hungerLevelDisplayText.textContent = `${myMonkey.name}'s hunger level: ${myMonkey.hunger}`
        }, 3000)
    }
}

monkeyFeedButton.addEventListener(`click`, () =>{
    myMonkey.feed()

    //console.log for testing
    console.log(myMonkey)

    hungerLevelDisplayText.textContent = `${myMonkey.name}'s hunger level: ${myMonkey.hunger}`
    playerActionDisplayText.textContent = `You fed ${myMonkey.name}! (Hunger is reduced by 10)`

    //This clears the text after 6 seconds
    setTimeoutClearPlayerActionDisplayText()
    // setTimeout(() => {
    //     playerActionDisplayText.textContent = ``
    //   }, 6000)
})


function setIntervalDisplayPlayerActionDisplayText() {
    setInterval(() => {
            playerActionDisplayText.textContent = ``
          }, 6000)
}

function clearTimeoutMyMonkeyStatsTick() {
    clearTimeout(myMonkey.statsTick)
}



// function setTimeoutClearPlayerActionDisplayText() {
//     setTimeout(() => {
//             playerActionDisplayText.textContent = ``
//           }, 6000)
// }


playPauseTimerButton.addEventListener("click", () =>{
    if (playPauseTimerButton.textContent == "PAUSE") {
        //console.log for testing
        console.log(`ACTIAVTING PLAY STATE`)
        
        // thing I want to do here
        dynamicImage.src = `./Images/monkeyimagepaused.jpg`
        playPauseTimerButton.textContent = "PLAY"
        clearTimeoutMyMonkeyStatsTick()



        // playerActionDisplayText.textContent = `ACTIAVTING PAUSED STATE`
        // setTimeoutClearPlayerActionDisplayText()
    }
    else if (playPauseTimerButton.textContent == "PLAY") {
        //console.log for testing
        console.log(`ACTIAVTING PLAY STATE`)
        
        // thing I want to do here



        dynamicImage.src = `./Images/monkeyimage.jpg`
        playPauseTimerButton.textContent = "PAUSE";

        // playerActionDisplayText.textContent = `ACTIAVTING PLAY STATE`
        // setTimeoutClearPlayerActionDisplayText()
    }
})









//------------------------------------------------------------
// RABBIT STUFF


// -------------------------------------------------------






//------------------------------------------------------------
// COMMANDS

// const myPet = new CorePet(`Adam`);
// const myMonkey = new MonkeyClass(`Monkeyboi`);
// const myRabbit = new TypeOfPetClass(`Ravingrabbit`)

// -------------------------------------------------------

































// to do list ---------------------
// age var and timer
// tickle function
// feed, play, clean functions and msgs
// name input box, text box, function, dynamicly display in msgs
// timer function, play/pause (use the hide/show code?)
// backgrounds
// elements replace/hide
// sprites
// sprites react to happiness lvl
// animated sprites
// frame/border
// sounds
// more pets

// -------------------------------------------------------







































// TIMER CODE BACKUP

// setInterval(() => {
//     myMonkey.tick();
// console.log(myMonkey)
//   }, 3000);

// ------------------------------















// BACKUP MONKEYCLASS WORKING CODE

// class MonkeyClass extends CorePet {
//     constructor(name, type) {
//         super(name);
//         // this.type = type;
//         if (monkeyType == true) {
//             this.type = `Monkey type true`
//         }
//     }

//     tickle() {
//         console.log(`${this.name} has been tickled.`);
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