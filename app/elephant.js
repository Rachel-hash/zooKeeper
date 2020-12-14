export
    class Elephant {
    constructor(
        name = 'Muffin',
        color = 'gray',
        gender = 'female',
        hobbies = 'dust baths',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.hobbies = hobbies;
    }
    do(hobby) {
        console.log(`I love taking ${hobby}`)
    }
}