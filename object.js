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
    version:2.0,
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





