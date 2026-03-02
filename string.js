 let fruits=["apple","orange","grapes"];

 let result=fruits.filter((e)=>{
 return e==="grapes"
 })
 console.log(result);


// 1⃣ Student Registration Form Validation 
// You are building a student registration system. 
// A student enters their full name with extra spaces. 
// Convert the name to uppercase and remove extra spaces. 
// Find the total length of the cleaned name. 
// Display the first character of the name. 
// (Use: trim(), toUpperCase(), length, charAt())


const name="  ganga k"
const trimed=name.trim()
const cps=trimed.toUpperCase()
const length=cps.length;
const firstC=cps.charAt(0);
console.log(firstC);

 


// 2⃣ Email Username Extractor 
// A user enters their email: "ramprasad@gmail.com". 
// Extract only the username (before @). 
// Convert the username to lowercase. 
// Display the length of the username. 
// (Use: substring(), toLowerCase(), length) 


const user="ramprasad@gmail.com"

const position=user.indexOf('@')
const exact=user.substring(0,position);
const low=exact.toLowerCase();
console.log(low.length);



// 3⃣ Product Code Formatter 
// A product code is entered as " ab123cd ". 
// Remove extra spaces. 
// Convert it to uppercase. 
// Join it with "SKU-" in front of it. 
// Display the final formatted code. 
// (Use: trim(), toUpperCase(), concat()) 

const code=" ab123cd ";
const tri=code.trim();
const captital=tri.toUpperCase();
 
const final="SKU-".concat(captital);
console.log(final);



// 4⃣ Sentence Word Counter 
// A user enters a sentence: "React is very powerful library". 
// Split the sentence into words. 
// Find how many words are there. 
// Display the first word in uppercase. 
// (Use: split(), length, toUpperCase()) 

let sen="React is very powerful library";
let word=sen.split('');
let count=word.length
let f=word[0].toUpperCase()
console.log(f);



//5⃣ File Name Processor 
// A file name is given as "report_final_version.pdf". 
// Split the file name using "_". 
// Join the words using space " ". 
// Convert the result to lowercase. 
// Display the formatted file name. 
// (Use: split(), join(), toLowerCase()) 

const file_Name="report_final_version.pdf";
const spi=file_Name.split('_');
console.log(spi);

const re=spi.join(" ");
const lo=re.toLowerCase();
console.log(lo);



/*6⃣ Password Hint Generator 
User enters a password " Welcome123 ". 
Remove spaces. 
Extract the first 4 characters. 
Convert them to lowercase. 
Display the hint. 
(Use: trim(), substring(), toLowerCase()) 
*/

let pas=" Welcome123 ";

let reT=pas.trim();

let req=reT.substring(0,4);

console.log(req.toLowerCase());

