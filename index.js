"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var _ = require("lodash");
console.log("Hello World");
var members = [
    { name: "Laveesh Gupta", age: 20 },
    { name: "Yash Jangid", age: 40 },
    { name: "Firoz Khan", age: 41 },
    { name: "Amrit Srivastava", age: 17 },
    { name: "Chandraprakash Sharma" },
    { name: "Swpril Ahuja", age: 45 },
    { name: "Yogesh Khatri", age: 51 },
];
// 1. Get array of first names of everyone
var fname = [];
_.map(members, function (member) { return fname.push(_.split(member.name, " ")[0]); });
// members.map((member) => fname.push(_.split(member.name, " ")[0]));
// console.log(fname);
// 2. Make everyone's last names in UPPERCASE in given array of objects
_.map(members, function (member) {
    return (member.name =
        _.split(member.name, " ")[0] +
            " " +
            _.split(member.name, " ")[1].toUpperCase());
});
// console.log(members);
// 3. Get entries where age is between 41-60
var newA = _.filter(members, function (member) { return 41 <= member.age && member.age <= 60; });
// console.log(newA);
// 4. Get average age
var membersWithAge = _.filter(members, function (member) { return member.age; });
var avg = _.reduce(membersWithAge, function (total, member) {
    return total + member.age;
}, 0) / membersWithAge.length;
// console.log(avg.toFixed(2));
// 5. Get Person with maximum age
var maxAge = 0;
_.map(members, function (member) {
    if (maxAge < member.age) {
        maxAge = member.age;
    }
});
// console.log(maxAge);
// 6. Divide persons in three groups
var groups = {
    young: new Array(),
    old: new Array(),
    noage: new Array()
};
_.map(members, function (member) {
    if (member.age <= 35)
        groups.young.push(member);
    else if (member.age >= 35)
        groups.old.push(member);
    else
        groups.noage.push(member);
});
// console.log(groups);
// 7. add a new member to same members array instance at index 2
var updatedMembers = __spreadArray([], members, true);
updatedMembers.splice(2, 0, { name: "Ashu", age: 20 });
// console.log(updatedMembers);
// 8. extract first and second element using destructing
var first = members[0], second = members[1];
// console.log(first, second);
// 9. Create a new array instance adding a new member at index 0,
//    and keeping existing afterwards
var elementAdded = __spreadArray([{ name: "Ashu", age: 20 }], members, true);
// console.log(elementAdded);
// 10. Extract properties of object using destructuring
var _a = members[0], name = _a.name, age = _a.age;
// console.log(name, age);
// 11. Rename extracted property of object while destructing
// const { name: fullname, age: mAge } = members[0];
// console.log(fullname, mAge);
// 12. Destructure any property of an object and use spread operator
//     to get remaining properties in an object
var _b = members[0], fullname = _b.name, rest = __rest(_b, ["name"]);
// console.log(fullname, rest);
// 13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step
var copiedMember = __assign(__assign({}, members[0]), { name: "Virus" });
// console.log(copiedMember);
// 14. Use reduce function on array and object
var arr = [1, 2, 3, 4, 5];
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};
var add = _.reduce(arr, function (total, element) {
    return total + element;
}, 0);
var oadd = _.reduce(obj, function (total, element) {
    return total + element;
}, 0);
console.log(add);
console.log(oadd);
