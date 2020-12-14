export
    class Xiao {
    constructor(
        name = 'Fawkes',
        color = 'red',
        gender = 'female',
        feature = 'four wings',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.feature = feature;
    }
    look(feature) {
        console.log(`The xiao has ${feature}.`)
    }
}