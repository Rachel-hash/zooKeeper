export
    class Iguana {
    constructor(
        name = 'Ivy',
        color = 'green',
        hobbies = 'sun-bathing',
        enemies = ["hawks", "owls", "snakes", "humans"],
    ) {
        this.name = name;
        this.color = color;
        this.hobbies = hobbies;
        this.enemies = enemies;
    }
    scare(food) {
        console.log(`Poor Ivy has to avoid ${food}`)
    }
}