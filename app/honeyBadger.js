export
    class HoneyBadger {
    constructor(
        name = 'Bailey',
        color = 'black and white',
        gender = 'female',
        Prey = "anyone who crosses her path",
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.Prey = Prey;
    }
    warning(Prey) {
        console.log(`Abandon all hope, ${Prey}`)
    }
}