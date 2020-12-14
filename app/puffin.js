export
    class Puffin {
    constructor(
        name = 'Oona',
        color = 'black',
        gender = 'female',
        feature = "colorful beak",
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.feature = feature;
    }
    look(feature) {
        console.log(`Puffins are widely known for their ${feature}`)
    }
}