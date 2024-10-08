let myName = "fridah";
let number = 10;
let isStudent = false;
const person1 = {
    name: "watetu",
    age: 29,
    isStudent: false,
    address: {
        street: "buruburu",
        city: "Nairobi",
        country: "Kenya",
    },
};
const person2 = {
    name: "frimogen",
    age: 25,
    isStudent: true,
};
function displayInfo(person) {
    var _a;
    console.log(`${person.name} lives at ${(_a = person.address) === null || _a === void 0 ? void 0 : _a.street}`);
}
console.log(person1);
console.log(person2);
displayInfo(person2);
const ages = [100, 25, 78, 98, 85, 68];
console.log(ages);
let name1 = "Anna";
const name2 = "Jane";
let userRole = "admin";
const users = [
    { id: 1, username: "anna", role: "admin" },
    { id: 2, username: "jane", role: "member" },
    { id: 3, username: "anna", role: "guest" },
];
/* function return type*/
const fetchUserDetails = (username) => {
    const user = users.find((user) => user.username == username);
    if (!user) {
        throw new Error("User with that username does not exists");
    }
    return user;
};
function fetchUserInfo(username) {
    const user = users.find((user) => user.username == username);
    if (!user) {
        throw new Error("User with that username does not exists");
    }
    return user;
}
function updateUser(id, updates) {
    let user = users.find((user) => user.id === id);
    if (!user) {
        throw new Error("user not found");
    }
    Object.assign(user, updates);
}
updateUser(1, { username: "new_john_doe" });
updateUser(3, { role: "contributor" });
console.log(users);
