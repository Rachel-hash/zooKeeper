export
    class Lion {
    constructor(
        name = 'Lauren',
        color = 'tan',
        gender = 'female',
        food = 'antelope',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.food = food;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}s.`)
    }
}