/**
 * #1
 * Loop through the following array and count how many "`computer`s" there are. Log the final count:
 */
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let computers = 0;
for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        computers++;
    }
}
console.log("# Computers: " + computers);

/**
 * #2
 * Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.
 */
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
  ]
  for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
      const name = peopleWhoWantToSeeMadMaxFuryRoad[i].name;
      const age = peopleWhoWantToSeeMadMaxFuryRoad[i].age;
      const gender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender;
      if (age >= 18) {
          console.log(name + " is old enough. " + ((gender === "male") ? "He's" : "She's") + " good to see Mad Max Fury Road.");
      } else {
          console.log(name + " is not old enough to see Mad Max. Don't let " + ((gender === "male") ? "him" : "her") + " in.");
      }
  }