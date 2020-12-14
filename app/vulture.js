export
    class Vulture {
    constructor(
        name = 'Mickey',
        color = 'black',
        feature = 'They puke when startled',
        food = 'carcus',
    ) {
        this.name = name;
        this.color = color;
        this.feature = feature;
        this.food = food;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
    look(feature) {
        (`Be very cautious around vultures. ${feature}!`)
    }
}