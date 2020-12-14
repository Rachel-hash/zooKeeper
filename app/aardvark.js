export
    class Aardvark {
    constructor(
        name = 'Rosie',
        color = 'beige',
        gender = 'female',
        food = 'ants',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.food = food;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
};