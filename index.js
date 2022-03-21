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

// console.log(updatedMembers);

// 8. extract first and second element using destructing
const [first, second] = members;
// console.log(first, second);

// 9. Create a new array instance adding a new member at index 0,
//    and keeping existing afterwards

const elementAdded = [{ name: "Ashu", age: 20 }, ...members];
// console.log(elementAdded);

// 10. Extract properties of object using destructuring
const { name, age } = members[0];
// console.log(name, age);

// 11. Rename extracted property of object while destructing
// const { name: fullname, age: mAge } = members[0];
// console.log(fullname, mAge);

// 12. Destructure any property of an object and use spread operator
//     to get remaining properties in an object
const { name: fullname, ...rest } = members[0];
// console.log(fullname, rest);

// 13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step
const copiedMember = { ...members[0], name: "Virus" };
// console.log(copiedMember);

// 14. Use reduce function on array and object
const arr = [1, 2, 3, 4, 5];
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

const add = _.reduce(
  arr,
  (total, element) => {
    return total + element;
  },
  0
);

const oadd = _.reduce(
  obj,
  (total, element) => {
    return total + element;
  },
  0
);

console.log(add);
console.log(oadd);
