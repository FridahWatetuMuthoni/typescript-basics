let myName: string = "fridah";
let number: number = 10;
let isStudent: boolean = false;

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

const person1: Person = {
  name: "watetu",
  age: 29,
  isStudent: false,
  address: {
    street: "buruburu",
    city: "Nairobi",
    country: "Kenya",
  },
};
const person2: Person = {
  name: "frimogen",
  age: 25,
  isStudent: true,
};

function displayInfo(person: Person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

console.log(person1);
console.log(person2);
displayInfo(person2);

const ages: number[] = [100, 25, 78, 98, 85, 68];
console.log(ages);

let name1 = "Anna";
const name2 = "Jane";

/*UNIONS*/

type userRole = "guest" | "member" | "admin";
let userRole: userRole = "admin";

type User = {
  id: number;
  username: string;
  role: userRole;
};

type updatedUser = Partial<User>;

const users: User[] = [
  { id: 1, username: "anna", role: "admin" },
  { id: 2, username: "jane", role: "member" },
  { id: 3, username: "anna", role: "guest" },
];

/* function return type*/

const fetchUserDetails = (username: string): User => {
  const user = users.find((user) => user.username == username);

  if (!user) {
    throw new Error("User with that username does not exists");
  }
  return user;
};

function fetchUserInfo(username: string): User {
  const user = users.find((user) => user.username == username);

  if (!user) {
    throw new Error("User with that username does not exists");
  }
  return user;
}

function updateUser(id: number, updates: updatedUser) {
  let user = users.find((user) => user.id === id);

  if (!user) {
    throw new Error("user not found");
  }
  Object.assign(user, updates);
}

function addNewUser(newUser: Omit<User, "id">): User {
  let user = { id: new Date().getTime(), ...newUser };
  users.push(user);
  return user;
}

updateUser(1, { username: "new_john_doe" });
updateUser(3, { role: "member" });

console.log(users);

let scores = [14, 52, 56, 87];
let strs = ["name", "jane", "anna"];
let people = [
  { id: 2, username: "jane", role: "member" },
  { id: 3, username: "anna", role: "guest" },
];

function getLastItem<Type>(array: Type[]): Type | undefined {
  return array[array.length - 1];
}

getLastItem(scores);
getLastItem(strs);
getLastItem(people);
