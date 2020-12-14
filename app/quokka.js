export
    class Quokka {
    constructor(
        name = 'Mr Cuddles',
        color = 'brown',
        gender = 'male',
        feature = 'smile. these cuties smile!',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.feature = feature;
    }
    look(feature) {
        console.log(`Quokkas have such a sweet ${feature}`)
    }
}