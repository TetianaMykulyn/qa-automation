const pet = {
    name: 'Buddy',
    species: 'cat',
    details: {
        age: 4,
        favoriteFood: ['eggs', 'milk', 'vegetables'],
        owner: {
            name: 'Abby',
            city: 'New York'
        }
    },
    summary () {
        return `Hi, I am ${this.name}, a ${this.species}. I am ${this.details.age} years old. My favorite foods are ${this.details.favoriteFood.join(', ')}. My owner is ${this.details.owner.name}. She lives in ${this.details.owner.city}.`;
    },

    countCatAgeInHumanYears () {
        return this.details.age * 7;
    }

};

console.log(pet.summary());
console.log(`My age in human years is: ${pet.countCatAgeInHumanYears()}`);

