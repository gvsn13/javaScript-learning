const mySym = Symbol("key1") // creating a symbol.

const Jsuser ={
    name: "Gaurav",
    full_name: "Gaurav Suman",
    age: 18,
    location: "jamui",
    [mySym]: "mykey1", // VVI
    "sum of num": function sum(a, b)
    {
        return a+b;
    }
}

// ways to access object

console.log(Jsuser["sum of num"](3,5)); // syntex to call function of object.
console.log(Jsuser.age);
console.log(Jsuser["age"]);
console.log(Jsuser.location);
console.log(Jsuser[mySym]);

Jsuser.name = "Gaurav Suman"
Object.freeze(Jsuser)          // it will freeze the value of object we can not change further.
Jsuser.name = "Suman Gaurav"
console.log(Jsuser.name);