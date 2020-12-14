export
    class Jaguar {
    constructor(
        name = 'Jessie',
        color = 'orange',
        enemies = 'anaconda',
        hobbies = "stalking prey",
    ) {
        this.name = name;
        this.color = color;
        this.enemies = enemies;
        this.hobbies = hobbies;
    }
    eat(food) {
        console.log(`Jessie is skilled at ${food}`)
    }
}