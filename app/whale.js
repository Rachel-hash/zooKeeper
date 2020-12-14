export
    class Whale {
    constructor(
        name = 'Destiny',
        color = 'white',
        gender = 'female',
        hobbies = 'helping Dory escape the pipes',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.hobbies = hobbies;
    }
    watch(hobbies) {
        console.log(`Destiny is best known for ${hobbies}.`)
    }
}