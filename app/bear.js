export
    class Bear {
    constructor(
        name = 'Ellie',
        color = 'dark brown',
        hobbies = ['climbing, napping, walking'],
        food = ['berries, fish'],
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