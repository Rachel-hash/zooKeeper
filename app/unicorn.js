export
    class Unicorn {
    constructor(
        name = 'Lily',
        color = 'white',
        hobbies = 'being gorgeous and magical',
        feature = 'horn',
    ) {
        this.name = name;
        this.color = color;
        this.hobbies = hobbies;
        this.feature = feature;
    }
    watch(hobbies) {
        console.log(`Watch Lily. She's just ${hobbies}.`)
    }
}