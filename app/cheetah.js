export
    class Cheetah {
    constructor(
        name = 'Mr Tilney',
        color = 'orange',
        gender = 'male',
        food = 'antelope',
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