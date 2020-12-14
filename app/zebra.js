export
    class Zebra {
    constructor(
        name = 'Berlioz',
        color = 'black and white',
        gender = 'male',
        feature = "stripes",
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.feature = feature;
    }
    look(feature) {
        console.log(`Zebras are widely known for having ${feature}.`)
    }
}