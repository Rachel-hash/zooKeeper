export
    class Seahorse {
    constructor(
        name = 'Kylie',
        color = 'pink',
        gender = 'female',
        feature = 'nose',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.feature = feature;
    }
    look(feature) {
        console.log(`Seahorses have a truly unique ${feature}.`)
    }
}