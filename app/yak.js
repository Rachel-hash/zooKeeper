export
    class Yak {
    constructor(
        name = 'Jazzy-lyn',
        color = 'dark brown',
        hobbies = 'staring, eating, rolling in the grass',
        food = "grass",
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