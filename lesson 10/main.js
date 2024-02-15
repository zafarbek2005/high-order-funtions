// const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
//   ];
  
//   function getNamesWithGrade(students, grade) {
//     let onlyWithGrades = students.filter((el, i, arr) => {
//       switch (grade) {
//         case 5:
//           return el.percent >= 85 && el.percent <= 100;
//         case 4:
//           return el.percent >= 70 && el.percent < 85;
//         case 3:
//           return el.percent >= 60 && el.percent < 70;
//         default:
//           return false;
//       }
//     });
//     let arr = onlyWithGrades.map((el, i, arr) => el.name);
//     return arr;
//   }
  
//   console.log(
//     getNamesWithGrade(
//       [
//         { name: "Quincy", percent: 96, grade: 5 },
//         { name: "Jason", percent: 84, grade: 4 },
//         { name: "Alexis", percent: 100, grade: 5 },
//         { name: "Sam", percent: 65, grade: 3 },
//         { name: "Katie", percent: 90, grade: 5 },
//         { name: "Anna", percent: 75, grade: 4 },
//       ],
//       3
//     )
//   );
  

// N 2

// let s = 0;
// const animals = ['dog', 'chicken', 'cat', 'dog',
// 'chicken', 'chicken', 'rabbit'];

// function countAnimals() {
// const animalCounts = {}; 
// for (const animal of animals) {
// if (animalCounts[animal]) {
// animalCounts[animal]++;
// } else {
// animalCounts[animal] = 1;
// }
// }
// return animalCounts;
// }

// const animalCounts = countAnimals();
// console.log(animalCounts);

// N 3

// const arr =[1, 2, 3, 4, 5]
// const map1 = arr.map((x) => x**2)
// console.log(map1);

// N 4

// const arr = [ 1, -4, 12, 0, -3, 29, -150]
// const result = arr.filter((arr) => arr>0 )
// const kk = 0
// const sum = result.reduce((acc,currentvalue,) => acc+currentvalue)

// console.log(result); // musbat sonlar 
// console.log(sum); // umumiy yigindi 

// N 7

// rr2 = []
// const arr = [1,3,4,5,6,7,8,9,555,7,800,25,44,4484,8,111,15,5478,23,25,4,5,5,2,1,151,1,87,82,2,1]
// const result = arr.filter((arr)=>arr%2==0)
// const result1 = arr.filter((arr)=>arr%2==1)
// rr2.push(result+result1)
// console.log(rr2);

// N 8

// function removeDuplicates(array) {
//     return array.reduce((accumulator, currentValue) => {
//         if (!accumulator.includes(currentValue)) {
//             accumulator.push(currentValue);
//         }
//         return accumulator;
//     }, []);
// }

// let array = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(array));

// N 9

// let products = [
//     { id: 1, name: 'Product A', price: 100, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Product B', price: 200, rating: 4.0, discount: 20 },
//     { id: 3, name: 'Product C', price: 150, rating: 4.7, discount: 15 },
// ];

// products.sort((a, b) => a.id - b.id);

// products.sort((a, b) => a.price - b.price);

// products.sort((a, b) => a.rating - b.rating);

// products.sort((a, b) => a.discount - b.discount);

// products.sort((a, b) => a.name.localeCompare(b.name));

// console.log(products);


// N 10

// let products = [
//     { id: 1, name: 'Product A', price: 100, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Product B', price: 200, rating: 4.0, discount: 20 },
//     { id: 3, name: 'Product C', price: 150, rating: 4.7, discount: 15 },
// ];
// const result =products.sort((a,b) => a.rating-b.rating)
// console.log(result);

// N 11

// let products = [
//     { id: 1, name: 'Product A', price: 100, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Product B', price: 200, rating: 4.0, discount: 20 },
//     { id: 3, name: 'Product C', price: 150, rating: 4.7, discount: 15 },
// ];

// const result =products.sort((a,b)=>b.price-a.price[0])
// console.log(result);

// N 12


// let products = [
//     { id: 1, name: 'Product A', price: 100, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Product B', price: 200, rating: 4.0, discount: 20 },
//     { id: 3, name: 'Product C', price: 150, rating: 4.7, discount: 15 },
// ];

// const result =products.sort((a,b)=>a.price-b.price)
// tt=result.reduce((
//     acc,products)=>acc+products.price,0
// )
// console.log(tt);

// N 13

// let products = [
//     { id: 1, name: 'Product A', price: 100, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Product B', price: 200, rating: 4.0, discount: 20 },
//     { id: 3, name: 'Product C', price: 150, rating: 4.7, discount: 15 },
// ];

// const pp = products.map((products)=>products.name)
// console.log(pp);

// N 14


// let products = [
//     { id: 1, name: 'Product A', price: 100, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Product B', price: 200, rating: 4.0, discount: 20 },
//     { id: 3, name: 'Product C', price: 150, rating: 4.7, discount: 15 },
// ];
// const found = products.find((products)=>products.id==5)
// console.log(found);


// N 15

// let products = [
//     { id: 1, name: 'Product A', price: 100, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Product B', price: 200, rating: 4.0, discount: 20 },
//     { id: 3, name: 'Product C', price: 150, rating: 4.7, discount: 15 },
// ];

// const found = products.find((products)=>products.id/4)
// console.log(found);




// N 5

// const arr = 'George Raymond Richard Martin'
// let result =arr.split("").map(arr=>arr[0].join(" "))
// console.log(result);

// N 19

// const str = "Men Sultonqul Programmerman"
// for (const i of str) {
//     if(str[i]==" "){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
    
// }

