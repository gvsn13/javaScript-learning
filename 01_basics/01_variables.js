const accountId = 1443; 
let accountEmail = "gvsn138@gmail.com";
var accountPassword = "1234";
accountCity = "Jamui";
let accountState;

//accountId=456; // we can not change const variable.

/*
prefer not to use var because of issue in block scope and function scope.
*/

console.log("accountId");
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);