// ASSIGNMENT PART 1 EMPLOYEE DATA  //

type employee ={
    name: string,
    department: string,
    role: "Manager" | "Engineer" | "Intern" | "Student"
    contact?: {
        phoneNumber: number,
        emailaddress: string,
    }
    skills?: string [],
}

let employeeData: employee ={
    name : "Madni",
    department : "HR",
    role : "Student",
    contact : {
        phoneNumber: +923009257283,
        emailaddress: "mmadni8687@gmail.com",
    },
    skills : ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "PYTHON"]
}
console.log(employeeData.name);
console.log(employeeData.contact?.phoneNumber);


// ASSIGNMENT PART 2 CAR DETAILS  //

type car = {
    name : string,
    model : string,
    engine : {
        horsepower : number,
    }
    getHorsepower : () => any
}
let carData : car = {
    name : "BMW",
    model : "X5",
    engine: {
        horsepower : 2000,
    },
    getHorsepower : () => {
        console.log("BMW has 2000 HP engine");
    }
}
carData.getHorsepower()


// ASSIGNMENT PART 3 COLORFUL T-SHIRTS  //


type product = {
    name: string,
    price: number,
    colour: string,
    productInventory: {
        quantity: number,
        colouroption?: string []
        changecolor (newcolor:string):void 
    }
}
const tshirt : product = {
    name: "T-Shirt",
    price: 1000,
    colour: "Red",
    productInventory: {
        quantity: 10,
        colouroption: ["Red", "White", "Blue", "Yellow"],
        changecolor (newcolor:string){
            tshirt.colour = newcolor

            if (newcolor == "red"){
                console.log(tshirt.price + 100); //(increase 10% from actual price)
            }else if(newcolor == "blue"){
                console.log(tshirt.price - 50); // (derease 5% from actual price)
            } else{console.log(tshirt.price);
            }
        }
    }
} 
tshirt.productInventory.changecolor("blue");