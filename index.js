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

const avg = members.reduce(getAvg, 0) / members.length;
function getAvg(total, member) {
  if (member.age) {
    return total + member.age;
  } else {
    return total;
  }
}

console.log(avg.toFixed(2));
