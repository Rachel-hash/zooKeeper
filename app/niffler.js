export
    class Niffler {
    constructor(
        name = 'Goose',
        color = 'black',
        hobbies = 'collecting gold',
        food = "dragon eggs",
    ) {
        this.name = name;
        this.color = color;
        this.hobbies = hobbies;
        this.food = food;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}