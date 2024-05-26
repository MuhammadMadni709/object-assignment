"use strict";
// ASSIGNMENT PART 1 EMPLOYEE DATA  //
Object.defineProperty(exports, "__esModule", { value: true });
let employeeData = {
    name: "Madni",
    department: "HR",
    role: "Student",
    contact: {
        phoneNumber: +923009257283,
        emailaddress: "mmadni8687@gmail.com",
    },
    skills: ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "PYTHON"]
};
console.log(employeeData.name);
console.log(employeeData.contact?.phoneNumber);
let carData = {
    name: "BMW",
    model: "X5",
    engine: {
        horsepower: 2000,
    },
    getHorsepower: () => {
        console.log("BMW has 2000 HP engine");
    }
};
carData.getHorsepower();
const tshirt = {
    name: "T-Shirt",
    price: 1000,
    colour: "Red",
    productInventory: {
        quantity: 10,
        colouroption: ["Red", "White", "Blue", "Yellow"],
        changecolor(newcolor) {
            tshirt.colour = newcolor;
            if (newcolor == "red") {
                console.log(tshirt.price + 100); //(increase 10% from actual price)
            }
            else if (newcolor == "blue") {
                console.log(tshirt.price - 50); // (derease 5% from actual price)
            }
            else {
                console.log(tshirt.price);
            }
        }
    }
};
tshirt.productInventory.changecolor("blue");
