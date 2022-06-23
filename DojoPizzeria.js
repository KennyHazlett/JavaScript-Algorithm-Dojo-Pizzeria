function pizzaOven(crustType, sauceType, cheeses, meats, vegetables) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.meats = meats;
    pizza.vegetables = vegetables;
    return pizza;
}
var bombpizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"], ["none"]);
console.log(bombpizza);
var averagepizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["none"], ["mushrooms", "olives", "onions"]);
console.log(averagepizza);
var carnivorepizza = pizzaOven("bison stuffed", "honeyhot", ["smoked 3 cheese"], ["complete meat"], ["none"]);
console.log(carnivorepizza);
var godfatherpizza = pizzaOven("cheese stuffed", "traditional", ["smoked gouda"], ["steak", "grilled chicken", "bison"], ["rosemary", "basil", "tomato", "parsley", "dill",]);
console.log(godfatherpizza);

var crustTypes = [
    "deep dish",
    "hand tossed",
    "cheese stuffed",
    "beef stuffed",
    "bison stuffed",
    "crab stuffed",
];
var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "ranch",
    "hot",
    "honeyhot",
];
var cheeses = [
    "none",
    "mozzarella",
    "feta",
    "cheedar",
    "pepperjack",
    "smoked gouda",
    "smoked cheddar",
    "smoked pepperjack",
    "smoked 3 cheese",
    "the whole shibang",
];
var meats = [
    "none",
    "pepperoni",
    "sausage",
    "beef",
    "bison",
    "crab",
    "grilled chicken",
    "steak",
    "complete meat",
];
var vegetables = [
    "none",
    "mushrooms",
    "olives",
    "onions",
    "rosemary",
    "basil",
    "tomato",
    "parsley",
    "dill",
];

function mixedArrangment(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}
function customDesign(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}
function randomPizza() {
    var pizza = {};
    pizza.crustType = customDesign(crustTypes);
    pizza.sauceType = customDesign(sauceTypes);
    pizza.cheeses = [];
    pizza.meats = [];
    pizza.vegetables = [];
    for (var i = 0; i < mixedArrangment(6, 1); i++) {
        pizza.cheeses.push(customDesign(cheeses));
    }
    for (var i = 0; i < mixedArrangment(8, 9); i++) {
        pizza.meats.push(customDesign(meats));
    }
    for (var i = 0; i < mixedArrangment(4, 7); i++) {
        pizza.vegetables.push(customDesign(vegetables));
    }
    return pizza;
}
console.log(randomPizza());