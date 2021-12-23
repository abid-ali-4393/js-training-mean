// function executeJsCode() {
//   document.getElementById("invoTitle").innerHTML =
//     "Welcome to Invozone Training Program from external files";
//   //document.write("javascript function got executed");
//   window.alert("you clicked button to execute Javascript");
//   console.log("clicked event has occured");
//   //window.print();
//   let firstNum = 15;
//   let secondNum = 30;
//   let result = firstNum + secondNum;
//   document.getElementById("result").innerHTML = result;
// }

// function printCurrentPage() {
//   window.print();
// }

// // function calculator(firstNum,secondNum,oper){
// //     if(typeof firstNum != "number" || typeof secondNum != "number"){
// //         return "Please select Valid number for operation"

// //     }

// //     if(oper =="+"){
// //         return firstNum +secondNum;

// //     } else if(oper == "-"){
// //         return firstNum - secondNum;
// //     } else if(oper == "*"){
// //         return firstNum * secondNum;
// //     }else if(oper == "/"){
// //         return firstNum / secondNum;
// //     }else{
// //         return 0;
// //     }

// // }

// // let result = calculator(30,5,"*");
// // console.log(`Result is: ${result}`);

// //Calculator with switch statement
// // function calculator(firstNum,secondNum,oper){
// //     let result ;
// //     switch(oper){
// //         case "+":
// //             result = firstNum +secondNum;
// //             break;
// //         case "-":
// //             result = firstNum - secondNum;
// //             break;
// //         case "*":
// //             result = firstNum * secondNum ;
// //             break;
// //         case "/":
// //             result = firstNum /secondNum;
// //             break;
// //         default:
// //             result = 0;
// //             break;

// //     }
// //     return result;

// // }

// // let result = calculator(24,3,"-");
// // console.log(`The Result is: ${result}`);

// // let obj = {
// //     name:"Abid",
// //     designation:"Software Engineer",
// //     org:"Invozone",
// //     hobby:"reading articles"
// // }

// // let modifiedArr  = [];
// // for(let key in obj){
// //     let objKey = key;
// //     let objVal = obj[key];
// //     modifiedArr.push(`${objKey} => ${objVal}`)

// // }

// // console.log(modifiedArr);

// function setUserCookie() {
//   let expDate = new Date("10-12-2022").toUTCString();

//   document.cookie = `name = Abid Ali; expires = ${expDate}; path=/;`;
// }

// function updateUserCookie() {
//   let expDate = new Date("05-10-2023").toUTCString();
//   document.cookie = `name = updated Cookie; expires = ${expDate}; path=/;`;
// }

// function deleteUserCookie() {
//   let expDate = new Date("10-05-2019").toUTCString();

//   document.cookie = `name=; expires=${expDate}; path=/;`;

//   console.log(window.location);
// }

// function redirectUser() {
//   window.location = "http://www.invozone.com";
// }

// function printUserInfo() {
//   document.getElementById("userInfo").innerHTML = JSON.stringify(
//     window.location
//   );
// }

// function reloadPage() {
//   //window.location.reload();
// }
// reloadPage();

// // function reloadWholePage() {
// //   setTimeout(() => {
// //     window.location.reload();
// //   }, 1000);
// // }

// function replaceDocument() {
//   window.location.replace("http://www.invozone.com");
// }

// function assignDocument() {
//   window.location.assign("http://www.invozone.com");
// }

// function alertUser() {
//   alert("Please  Drink some water");
// }
// function confirmUser() {
//   let result = confirm("Are you sure you want debug? ");
//   console.log(result);
// }
// function promtUser() {
//   prompt("Please enter you age", 0);
//   prompt("Please enter you phone");
// }

// function sayHello() {
//   console.log("Hello dear from IIFE");
// }

// let user = sayHello();
// console.log(user);

function display() {
  let obj = {
    firstName: "miss amna",
    lastName: "Hussain",
    age: 23,

    empInfo: function(){
      console.log(this);
      return `${this.firstName} ${this.lastName} ${this.age}`;
    },
  };
  return obj;
}

let disInfo = display();

let result = disInfo.empInfo();
console.log(result);
