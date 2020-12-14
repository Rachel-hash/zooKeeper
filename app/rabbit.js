export
    class Rabbit {
    constructor(
        name = 'Millie',
        color = 'grey',
        gender = 'female',
        food = 'carrots',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.food = food;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}.`)
    }
}