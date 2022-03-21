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

const fname = [];
members.map((member) => fname.push(member.name.split(" ")[0]));
// console.log(fname);

members.map(
  (member) =>
    (member.name =
      member.name.split(" ")[0] + " " + member.name.split(" ")[1].toUpperCase())
);

// console.log(members);

const newA = members.filter((member) => 41 <= member.age && member.age <= 60);
// console.log(newA);

// 4. Get average age

const membersWithAge = members.filter((member) => member.age != undefined);

const avg =
  membersWithAge.reduce((total, member) => {
    return total + member.age;
  }, 0) / membersWithAge.length;

// console.log(avg.toFixed(2));

// 5. Get Person with maximum age
let age = 0;
members.map((member) => {
  if (age < member.age) {
    age = member.age;
  }
});
// console.log(age);

// 6. Divide persons in three groups
const groups = {
  young: [],
  old: [],
  noage: [],
};

members.map((member) => {
  if (member.age <= 35) groups.young.push(member);
  else if (member.age >= 35) groups.old.push(member);
  else groups.noage.push(member);
});
// console.log(groups);

// 7. add a new member to same members array instance at index 2

// const updatedMembers = members.splice(2, 0, { name: "Ashu", age: 20 });
const updatedMembers = [...members];
updatedMembers.splice(2, 0, { name: "Ashu", age: 20 });

console.log(updatedMembers);
