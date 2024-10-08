interface Pizza {
  id: number;
  name: string;
  price: number;
}

interface Order {
  pizza: Pizza;
  status: "ordered" | "completed";
  id: number;
}

let nextId: number = 1;

let menu: Pizza[] = [
  { id: nextId++, name: "Margherita", price: 8 },
  { id: nextId++, name: "Pepperoni", price: 10 },
  { id: nextId++, name: "Hawaiian", price: 10 },
  { id: nextId++, name: "veggie", price: 9 },
];

let cashInRegister: number = 100;
let orderQueue: Order[] = [];

const addNewPizza = (pizzaObj: Omit<Pizza, "id">): void => {
  let pizza = { id: nextId++, ...pizzaObj };
  menu.push(pizza);
};

const placeOrder = (pizza: string): Order | undefined => {
  let pizzaObj = menu.find((item) => item.name == pizza);
  if (pizzaObj === undefined) {
    throw new Error("Enter a valid pizza name that is on the menu");
  }
  let newOrder: Order = { pizza: pizzaObj, status: "ordered", id: nextId };
  orderQueue.push(newOrder);
  return newOrder;
};

const completeOrder = (id: number): Order | undefined => {
  let order = orderQueue.find((item) => item.id == id);
  if (order === undefined) {
    throw new Error("No order with that id was found");
  }
  order.status = "completed";
  return order;
};

const getPizzaDetail = (identifer: string | number): Pizza | undefined => {
  if (typeof identifer === "string") {
    let pizza = menu.find(
      (item) => item.name.toLowerCase() === identifer.toLowerCase()
    );
    return pizza;
  } else if (typeof identifer === "number") {
    let pizza = menu.find((item) => item.id === identifer);
    return pizza;
  } else {
    throw new TypeError(
      "parameter 'identifier' can either be string or a number"
    );
  }
};

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

console.log(menu);

placeOrder("Margherita");
placeOrder("Pepperoni");
placeOrder("veggie");
placeOrder("Chicken Bacon Ranch");

console.log(orderQueue);

getPizzaDetail("BBQ Chicken");
