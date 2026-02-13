// let fruits=["apple","orange","grapes"];

// let result=fruits.filter((e)=>{
//   return e==="grapes"
// })
// console.log(result);

/*⃣ Student Registration Form Validation 

You are building a student registration system. 
A student enters their full name with extra spaces. 
Convert the name to uppercase and remove extra spaces. 
Find the total length of the cleaned name. 
Display the first character of the name. */


let studentName="aadhi ";

let result=studentName.toUpperCase().trim();
let totalLength=result.length;
let character=result.charAt(0)
console.log(totalLength);
console.log(character);

/*2⃣ Email Username Extractor 
A user enters their email: "ramprasad@gmail.com". 
Extract only the username (before @). 
Convert the username to lowercase. 
Display the length of the username. */




