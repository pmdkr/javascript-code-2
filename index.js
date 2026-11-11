console.log("async await example");



const p1 = new Promise((resolve, reject) => {


    setTimeout(() => {
        resolve("Promise p1 is resolved")
    }, 5000)
});


const promise2 = new Promise((resolve, reject) => {


    setTimeout(() => {
        resolve("Promise p2 is resolved..")
    }, 10000);



})


const handlePromises = async () => {

    const p = await p1;
    console.log("Namaste JavaScript 1");
    console.log(p);


    const p2 = await promise2;
    console.log("Namaste JavaScipt 2");
    console.log("p2");


}


//when a await is incounter in progream, function execution suspended its execution, 
// and other part of program is executed


console.log("Program executed outside the async function")


handlePromises();