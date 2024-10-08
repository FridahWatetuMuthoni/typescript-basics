let nextId = 1;
let menu = [
    { id: nextId++, name: "Margherita", price: 8 },
    { id: nextId++, name: "Pepperoni", price: 10 },
    { id: nextId++, name: "Hawaiian", price: 10 },
    { id: nextId++, name: "veggie", price: 9 },
];
let cashInRegister = 100;
let orderQueue = [];
const addNewPizza = (pizzaObj) => {
    pizzaObj.id = nextId++;
    menu.push(pizzaObj);
};
const placeOrder = (pizza) => {
    let pizzaObj = menu.find((item) => item.name == pizza);
    if (pizzaObj === undefined) {
        throw new Error("Enter a valid pizza name that is on the menu");
    }
    let newOrder = { pizza: pizzaObj, status: "ordered", id: nextId };
    orderQueue.push(newOrder);
    return newOrder;
};
const completeOrder = (id) => {
    let order = orderQueue.find((item) => item.id == id);
    if (order === undefined) {
        throw new Error("No order with that id was found");
    }
    order.status = "completed";
    return order;
};
const getPizzaDetail = (identifer) => {
    if (typeof identifer === "string") {
        let pizza = menu.find((item) => item.name.toLowerCase() === identifer.toLowerCase());
        return pizza;
    }
    else if (typeof identifer === "number") {
        let pizza = menu.find((item) => item.id === identifer);
        return pizza;
    }
    else {
        throw new TypeError("parameter 'identifier' can either be string or a number");
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
