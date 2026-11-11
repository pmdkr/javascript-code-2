// const obj = {
//     name: "pramod",
//     age: 30,
//     dept: "dev"
// }



// const obj2 = { ...obj };



// obj2.dept = "qa";

// console.log(obj);
// console.log(obj2);


// const user = {
//     name: "pramod",
//     age: 30
// }


// const address = {
//     city: "Ranchi",
//     pinCode: 834006
// }

// const employee = { ...user, ...address };
// console.log(employee);



// user1 = {
//     name: "Pramod",
//     age: 31,
//     city: "Bangalore"
// };

// const updateUser = {
//     ...user1,
//     age: 30
// };

// console.log(updateUser);



const obj3 = {
    name: "Pramod",
    age: 30
};
const obj4 = {
    age: 35,
    city: "Bangalore"
};


const result = {
    ...obj3, ...obj4
};

console.log(result)


function add(a, b, c) {
    return a + b + c;
}


const numbers = [10, 20, 30];
console.log(add(...numbers));

