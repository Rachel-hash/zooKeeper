export
    class Turtle {
    constructor(
        name = 'Olive',
        color = 'dull green',
        gender = 'female',
        feature = "patterned shell",
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.feature = feature;
    }
    look(feature) {
        console.log(`Turtles have a beautiful ${feature}.`)
    }
}