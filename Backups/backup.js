// const eggImage = document.getElementById("eggImage")

const petImage = document.getElementById("petImage")

const petName = document.getElementById("petName")

const feedButton = document.getElementById("feedButton")

const hungerLevelDisplayText = document.getElementById("hungerLevelDisplayText")


//
const monkeyButton = document.getElementById("monkeyButton")
const rabbitButton = document.getElementById("rabbitButton")


//
const dynamicImage = document.getElementById("dynamicImage")


//------------------------------------------------------------

class CorePet {
    constructor(name) {
        this.name = name;
        this.hunger = 0;
        this.thirst = 0;
        this.cleanliness = 100;
        this.happiness = 100;
    }

    feed() {
        this.hunger -= 10;
        console.log(myMonkey)
        console.log(myRabbit)
    }

    drink() {
        this.thirst -= 10;
    }

    clean() {
        this.clean += 10;
    }

    play() {
        this.happiness += 10;
    }

    tick() {
        this.hunger += 5;
        this.thirst += 5;
        this.happiness -= 5;
        this.cleanliness -= 5;
    }
}


// MONKEY STUFF

let monkeyChosen = false

monkeyButton.addEventListener("click", () =>{
    monkeyPetCreation()
    console.log(`monkeyButton pressed, monkeyPetCreation() called`)
})

class MonkeyClass extends CorePet {
    constructor(name, type) {
        super(name);
        this.type = `MONKEY SELECTED`
        dynamicImage.src = "./Images/monkeyimage.jpg"
    }
}


// function feedMonkey() {
//     myMonkey.hunger -= 10;
//     console.log(myMonkey)
// }

feedButton.addEventListener("click", () =>{
    if (this.type == `MONKEY SELECTED`) {
        myMonkey.feed()
    }
    else if (this.type == `RABBIT SELECTED`) {
        myRabbit.feed()
    }
})

function monkeyPetCreation() {
        myMonkey = new MonkeyClass(`Monkeyboi`);
        console.log(myMonkey)
        monkeyChosen = true
        console.log(monkeyChosen)
        return
    }









// RABBIT STUFF
let rabbitChosen = false

rabbitButton.addEventListener("click", () =>{
    rabbitPetCreation()
    console.log(`rabbitButton pressed, rabbitPetCreation() called`)
})

class RabbitClass extends CorePet {
    constructor(name, type) {
        super(name);
        this.type = `RABBIT SELECTED`
        dynamicImage.src = "./Images/rabbitimage.png"
    }
}

function rabbitPetCreation() {
    const myRabbit = new RabbitClass(`Monty the rabbit`);
    console.log(myRabbit)
    rabbitChosen = true
    console.log(rabbitChosen)
    return
}


// const myRabbit = new TypeOfPetClass(`Ravingrabbit`);
// console.log(myRabbit)

// function feedAll() {
//     if (monkeyChosen == true) {
//         console.log(`test monkey feed`)
//         // works with =, but sets img to monkey
//         myMonkey.hunger -= 10;
//         console.log(myMonkey)
//     }
//     else if (rabbitChosen == true) {
//         console.log(`test rabbit feed`)
//         RabbitClass.hunger -= 10;
//         console.log(myRabbit)
//     }
// }

// function feedAll() {
//     if (typeof myMonkey) {
//         console.log(`test feed pet`)
//         myMonkey.hunger -= 10;
//         console.log(myMonkey)
//     }
// }





// -------------------------------------------------------

// setInterval(() => {
//     myPet.tick();
// console.log(myPet)
//   }, 3000);

// -------------------------------------------------------

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










// RANDOM IDEA TEST

// function monkeyPetCreation() {
//     const myMonkey = new MonkeyClass(`Monkeyboi`);
//     console.log(myMonkey)
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