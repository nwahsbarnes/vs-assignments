var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const over18 = peopleArray
.filter(person => person.age > 18)
.sort((a, b) => a.lastName < b.lastName ? -1 : 1)
.map(person => `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`)

console.log(over18);

const peopleArray2 = [{
    firstName: "Shawn",
    lastName: "Alank",
    age: 55
}];

peopleArray = peopleArray.concat(peopleArray2);

const lastNameStartsAorY = peopleArray.filter(person => person.lastName[0].toUpperCase() === 'A' || person.lastName[0].toUpperCase() === 'Y');
console.log(lastNameStartsAorY);
console.log(lastNameStartsAorY.reverse());