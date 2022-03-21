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

console.log(members);
