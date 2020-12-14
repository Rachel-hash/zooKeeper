export
    class Monkey {
    constructor(
        name = 'Hairball',
        color = 'brown',
        hobbies = 'swinging',
        food = 'BUGS',
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