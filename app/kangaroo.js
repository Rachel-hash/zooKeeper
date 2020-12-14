export
    class Kangaroo {
    constructor(
        name = 'Addie',
        color = 'mahogany',
        gender = 'female',
        food = 'leaves',
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