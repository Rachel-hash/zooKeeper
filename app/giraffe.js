export
    class Giraffe {
    constructor(
        name = 'Garrett',
        color = 'spotted',
        hobbies = 'eating, walking, being awesome',
        food = 'leaves',
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