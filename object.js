/*Task 1 – Create and Access
Create an object book with keys: title, author, and pages.
 Print the author name using both dot and bracket notation
*/

let book={
    title:"self-motivate",
    author:"ganga",
    pages:52
}
console.log(book.author);
console.log(book["author"]);


/*Task 2 – Add and Update
Create an object user with properties name and age.
 Add a new property email and update the age.
*/



let user={
    name:"ganga",
    age:21
}
user.email="gangagaythri04@gmail.com"
user.age=22
console.log(user);


/*Task 3 – Loop Through
Create an object student with 3 subjects and marks.
 Loop through and print each subject with its mark.
*/

let student={
    tamil:89,
    english:87,
    maths:66
}

for(let key in student){
    console.log(key,student[key]);
    
}

/*Task 4 – Method Example
Create an object calculator with methods:
●	add(a,b) → returns sum

●	sub(a,b) → returns difference
 Call both methods and print results.
*/

let calculator={
    add:function(a,b) {
        return a+b
        
        
    },
    sub:function(a,b) {
        return a-b
        
    }
}
console.log(calculator.add(5,5));
console.log(calculator.sub(10,5));

/* Task 5 – Using this
Create an object employee with properties name and salary.
 Add a method details() that prints "Name: ___, Salary: ___" using this.
*/

let employee={
    name:"ganga",
    salary:30000,
    details(){
         return `Name: ${this.name}, Salary: ${this.salary}`;
        
    }
}
console.log(employee.details());

/*
Task 6 – Object.keys() / values()
Create an object mobile and print all its keys and values using built-in methods.

*/

let mobile={
    name:"samsung",
    version:2.6,
    price:80000
}

console.log(Object.keys(mobile));
console.log(Object.values(mobile));


/* Task 7 – Nested Object
Create an object student with nested details:
{
  name: "Kavi",
  marks: { maths: 80, science: 90 }
}

Access and print the science mark.
*/
let studentDetails={
    name:"kavi",
    marks:{maths:80, science:90}
}
console.log(studentDetails.marks.science);


/*
 Task 8 – Combine Objects
Use the spread operator (...) to merge:
const a = {name: "Ram"};
const b = {age: 20};

Result → {name: "Ram", age: 20}
*/

const a = {name: "Ram"};
const b = {age: 20};

const result={...a,...b};
console.log(result);


/* Task 9 – Delete Property
Create an object car with properties brand, price, year.
 Delete the year property and print the updated object.
*/


let car={
    brand:"bmw",
    price:5000000,
    year:2035
}
console.log(car);

delete car.year;
console.log(car);


//1. Create an object student with name, age, and grade. Print all values. 


const studentInfo={
    name:"ganga",
    age:21,
    grade:"A"
}
console.log(studentInfo);

//2. Create an object car with brand, model, year. Print only the brand. 

const carInfo={
    brand:"BMW",
    model:"new version",
    year:2035
}
console.log(carInfo.brand);
//3. Create an object mobile with 3 properties and add one new property 

const mobileInfo={
    name:"samSung",
    ram:226,
    version:2.26
}
mobileInfo.price=80000;
console.log(mobileInfo);

//4. Create a book object and change its price property to a new value

const bookInfo={
    name:"power of money",
    price:500
}
console.log(bookInfo);
bookInfo.price=1000;
console.log(bookInfo);

//5. Create an object employee and check if the key "salary" exists using in operator. 
  
const employeeInfo={
    name:"ganga",
    salary:30000
}

if('salary' in employeeInfo){
    console.log("salary exists");
    
}
else{
    console.log("salary not exists");
    
}

//6. Create an object product and delete the discount property using delete. 


const product={
    name:"perfume",
    price:2500,
    dicount:"15%"
}
console.log(product);

delete product.dicount
console.log(product);

//. Create an object user with name and email. Print all keys using for…in loop. 


const userInfo={
    name:"ganga",
    email:"gayathriganga04@gmail.com"
}

for(let key in userInfo){
    console.log(key);
    
}

//8. Create an object dog with breed and age. Print "Puppy" if age < 2. 

const dog={
    breed:"corien",
    age:1
}

if(dog.age<2){

 console.log("puppy");
   
}
// //9. Create an object calculator with two numbers and print their sum.
const calculatorInfo={
    a:10,
    b:10

}
console.log(calculatorInfo.a+calculatorInfo.b);



//10. Create an object person with firstName and lastName. Print full name. 

const person={
    firstName:"ganga",
    lastName:"k"

}
console.log(person.firstName+' '+ person.lastName);

//11. Create an object marks with 5 subject marks. Find the total using loop. 

const subjectInfo={
    tamil:98,
    english:78,
    maths:67,
    science:98,
    socialScienc:100
}

let total=0;
for(let key in subjectInfo){
    total+=subjectInfo[key]

}
console.log(total);


//12. Create an object bike and check if it has color property. 

const bike={
    name:"Royal Enfield",
    color:"black"
}
if('color' in bike){
    console.log("bike inside the color property");
}
else{
    console.log("bike color not property");
    
}

//. Create an object movie with title and rating. Print "Hit" if rating > 8.

const movie={
    title:"sarvam",
    rating:10
}
if(movie.rating>8){
    console.log("hit");
}
else{
    console.log("not poor");
    
}
//14. Create an object account with balance. Add ₹500 and print updated balance. 

const account={
    bank:"SBI",
    balance:25000
}
console.log(account);
account.balance=account.balance+500;
console.log(account);

//15. Create an object player with 3 stats. Print the highest stat value

const player={
   ciricket:99,
   bat:75,
   coco:98,
   run:45
}
const stats=Object.values(player)
// console.log(stats);

const highest=Math.max(...stats)
console.log(highest);

//16. Create an object game and print how many keys it has. 

const game={
    g1:"co-co",
    g2:"cricket",
    g3:"kabbadi",
    g4:"chees"
}
let count=0

for(let key in game){
    if(key){
        count++
    }
}
console.log(count);

//17. Create an object course and update the duration property. 
const course={
    courseName:"mern",
    duration:6
}
course.duration+=4
console.log(course.duration);



// //18. Create an object teacher with name and subject. Print: "Teacher teaches subject".

const teacher={
    name:"ganga",
    subject:"english"
}
console.log(`${teacher.name} teaches ${teacher.subject}`);


 
// //19. Create an object settings with theme and fontSize. Change theme to "dark". 

const settings={
    theme:"light",
    fontSize:45
}
settings.theme="dark";
console.log(settings);




//20. Create an object shopItem and check if price > 100. Print "Expensive" or "Cheap". 


const shopItem={
         name:"cetaphil",
         price:2000
}
if(shopItem.price>100){
    console.log("expesive");
    
}
else{
    console.log("cheap");
    
}



//looping over object by converting to an array;

const details={
    name:"ganga",
    age:21,
    city:"ramnad"
}
let arr_key=Object.keys(details);
console.log(arr_key);

let arr_values=Object.values(details);

/*20 Object Problem Tasks (Beginner 
Friendly) */
//1. Create an object student with name, age, and grade. Print all values. 

const studentO={
    name:"ganga",
    age:22,
    grade:"A"
}
console.log(studentO);

//2. Create an object car with brand, model, year. Print only the brand. 

const carO={
    brand:"BMW",
    model:"uniquie",
    year:2026
}
console.log(carO.brand);

//3. Create an object mobile with 3 properties and add one new property  
const mobileO={
    name:"vivo",
    memory:"256 ram"
}
console.log(mobileO);
mobileO.price=50000
console.log(mobileO);

//4. Create a book object and change its price property to a new value. 

const bookO={
    name:'power of money',
    price:500

}
console.log(bookO);
bookO.price=1000
//5. Create an object employee and check if the key "salary" exists 
// using in operator. 

const employeeO={
    name:"ganga",
    salary:30000
}
if('salary' in employeeO){
    console.log("salary exists");
}
else{
    console.log("salary not exists");
}



// 6. Create an object product and delete the discount property using 
// delete. 
const deleteO={
    name:"ganga",
    motivate:"self",
    lazy:"off mode" 
}
delete deleteO.lazy
console.log(deleteO);



//7. Create an object user with name and email. Print all keys using 
//for…in loop. 
 const userO={
    name:"ganga",
    email:"gayathriganga042gmail.com"
 }
  for(u in userO){
    console.log(u, userO[u]);
    
  }
 


//8. Create an object dog with breed and age. Print "Puppy" if age < 2. 


const dogO={
    bread:"no",
    age:1
}
if(dogO.age<2){
    console.log("puppy");
    
}
else{
    console.log(" not they dog");
    
}
//9. Create an object calculator with two numbers and print their sum. 

const calculatorO={
    a:10,
    b:20
}
console.log(calculatorO.a+calculatorO.b);

//10. Create an object person with firstName and lastName. Print full 
// name. 

const perosnO={
    fName:"ganga",
    lName:"k"
}
console.log(perosnO.fName+' '+perosnO.lName);

//11. Create an object marks with 5 subject marks. Find the total using 
//loop. 
const marksO={
    tamil:98,
    english:85,
    maths:89,
    science:78,
    social:89
}
let totalO=0;
for(mark in marksO){
    totalO+=marksO[mark]

}
console.log(totalO);

//12. Create an object bike and check if it has color property. 

const bikeO={
    name:"royal",
    color:"black"
}
if('color' in bikeO){
    console.log("color is include");
}
else{
    console.log("not colour");
    
}
//13. Create an object movie with title and rating. Print "Hit" if rating > 8. 

const movieO={
    title:"stranger thinhs",
    ratingO:10
}
if(movieO.ratingO>8){
    console.log("hit very intersteng");
    
}


//14. Create an object account with balance. Add ₹500 and print updated 
//balance. 

const acc={
    amt:500
}
acc.amt+=1000;
console.log(acc);

//15. Create an object player with 3 stats. Print the highest stat value. 

const playO={
    g:56,
    g1:58
}
const val=Object.values(playO);
const re=Math.max(...playO)
console.log(re);





/*16. Create an object game and print how many keys it has. 
17. Create an object course and update the duration property. 
18. Create an object teacher with name and subject. Print: "Teacher 
teaches subject". 
19. Create an object settings with theme and fontSize. Change theme 
to "dark". 
20. Create an object shopItem and check if price > 100. Print 
"Expensive" or "Cheap". */