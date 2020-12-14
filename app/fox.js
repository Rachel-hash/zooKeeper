export
    class Fox {
    constructor(
        name = 'Robin Hood',
        color = 'mahogany',
        gender = 'male',
        food = 'stew',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.food = food;
    }
    eat(food) {
        console.log(`BEST${food.toUpperCase} EVER!`)
    }
}