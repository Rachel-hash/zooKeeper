export
    class Ostrich {
    constructor(
        name = 'Myrtle',
        color = 'white',
        gender = 'female',
        food = 'BUGS',
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