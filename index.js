import _ from "lodash";

console.log("Hello World");
const members = [
  { name: "Laveesh Gupta", age: 20 },
  { name: "Yash Jangid", age: 40 },
  { name: "Firoz Khan", age: 41 },
  { name: "Amrit Srivastava", age: 17 },
  { name: "Chandraprakash Sharma" },
  { name: "Swpril Ahuja", age: 45 },
  { name: "Yogesh Khatri", age: 51 },
];

// 1. Get array of first names of everyone
const fname = [];
members.map((member) => fname.push(_.split(member.name, " ")[0]));

// console.log(fname);

// 2. Make everyone's last names in UPPERCASE in given array of objects
_.map(
  members,
  (member) =>
    (member.name =
      _.split(member.name, " ")[0] +
      " " +
      _.split(member.name, " ")[1].toUpperCase())
);

// console.log(members);

// 3. Get entries where age is between 41-60
const newA = _.filter(
  members,
  (member) => 41 <= member.age && member.age <= 60
);
// console.log(newA);

// 4. Get average age

const membersWithAge = _.filter(members, (member) => member.age);
const avg =
  _.reduce(
    membersWithAge,
    (total, member) => {
      return total + member.age;
    },
    0
  ) / membersWithAge.length;

// console.log(avg.toFixed(2));

// 5. Get Person with maximum age
let maxAge = 0;
_.map(members, (member) => {
  if (maxAge < member.age) {
    maxAge = member.age;
  }
});
// console.log(maxAge);

// 6. Divide persons in three groups
const groups = {
  young: [],
  old: [],
  noage: [],
};

_.map(members, (member) => {
  if (member.age <= 35) groups.young.push(member);
  else if (member.age >= 35) groups.old.push(member);
  else groups.noage.push(member);
});

// console.log(groups);

// 7. add a new member to same members array instance at index 2
const updatedMembers = [...members];
updatedMembers.splice(2, 0, { name: "Ashu", age: 20 });

console.log(updatedMembers);
