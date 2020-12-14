export
    class Dragon {
    constructor(
        name = 'Norbert',
        color = 'black',
        gender = 'male',
        food = ['chicken blood, whiskey'],
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.food = food;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}