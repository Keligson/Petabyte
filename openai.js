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

    tick() {
        this.hunger += 5
        this.thirst += 5
        this.happiness -= 5
        this.cleanliness -= 5
    }
}

monkeyButton.addEventListener("click", () =>{
    myMonkey = new MonkeyClass(`Monkeyboi`)
    console.log(myMonkey)

})



class MonkeyClass extends CorePet {
    constructor(name, type) {
        super(name)
        this.type = `MONKEY TYPE`
        dynamicImage.src = "./Images/monkeyimage.jpg"
    }
}


feedButton.addEventListener("click", () =>{
    feed()
})