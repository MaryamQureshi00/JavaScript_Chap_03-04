console.log('Chapter 03 Assignment');
//Exercise 3.1
//1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and "Apples."
//2. Check your list length in the console.
//3. Update "Bread" to "Bananas."
//4. Output your entire list to the console.

let arr1 = ["Milk", "Bread", "Apples"];
console.log(arr1.length);
arr1.splice(1,1,"Bananas");
console.log(arr1);

/* Exercise 3.2
1. Create an empty array to use as a shopping list.
2. Add Milk, Bread, and Apples to your list.
3. Update "Bread" with Bananas and Eggs.
4. Remove the last item from the array and output it into the console.
5. Sort the list alphabetically.
6. Find and output the index value of Milk.
7. After Bananas, add Carrots and Lettuce.
8. Create a new list containing Juice and Pop.
9. Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console.
11. Your final list should look like this:
["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice",
"Pop", "Juice", "Pop"]
*/
let shoppingList = ["Milk", "Bread", "Apples"];
shoppingList.splice(1,1,"Bananas","Eggs");
console.log(`Updated shopping list are "${shoppingList}"`);

shoppingList.pop();
console.log(`Remaining shopping List are "${shoppingList}"`);

shoppingList.sort();
console.log(`Our sorted shopping List are "${shoppingList}"`);

const milkIndex = shoppingList.indexOf("Milk");
console.log("Index of Milk:", milkIndex);

shoppingList.splice(1,0,"Carrots","Lettuce");
console.log(`New shopping list are "${shoppingList}`);

let newList = ["Juice", "Pop"];
const combinedList = shoppingList.concat(newList, newList);
console.log("Updated Shopping List:", combinedList);

const popIndex = shoppingList.indexOf("Pop");
console.log("Index of Pop:", popIndex);

/*
 exercise 3.3
1. Create an array containing three values: 1, 2, and 3.
2. Nest the original array into a new array three times.
3. Output the value 2 from one of the arrays into the console.
*/
const originalArray = [1, 2, 3];

const nestedArrays = [originalArray, originalArray, originalArray];

console.log(nestedArrays[1][1]);

/* exercise 3.4
1. Create a new myCar object for a car. Add some properties, including, but not
limited to, make and model, and values for a typical car or your car. Feel free
to use booleans, strings, or numbers.    
2. Create a variable that can hold the string value color. This variable
containing a string value color can now be used to reference the property
name within myCar. Then, use the variable within the square bracket notation
to assign a new value to the color property in myCar.
3. Use that same variable and assign a new property string value to it, such as
forSale. Use the bracket notation once again to assign a new value to the
forSale property to indicate whether the car is available for purchase.
4. Output make and model into the console.
5. Output the value of forSale into the console 
*/ 
let myCar = {
    make : "Hyundai",
    model : "Hyundai IONIQ 5",
    price : "45.95 Lakh",
    year : 2023,
    automatic : true,
}
myCar["color"] = "Black";
console.log(myCar);  
  
myCar["forSale"] = true;
console.log(myCar);

console.log(`Model: ` + myCar.model);
console.log(`Make: ` + myCar.make );

console.log(`Forsale: Available for purchase ` + myCar.forSale);

/*exercise 3.5
1. Create an object named people that contains an empty array that is called
friends.
2. Create three variables, each containing an object, that contain one of your
friend's first names, last names, and an ID value.
3. Add the three friends to the friend array.
4. Output it to the console. 
*/
let people = {
    friends:[]
}
 
let firstName = "Maryam";
let lastName = "Qureshi";
let idValue = true;

people.friends.push("Shahnaz", "Maha", "Mahek");
console.log(people);

/* Chapter project*/

//Manipulating an array 

let theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];

theList.pop();
theList.shift();
console.log(theList);

theList.unshift("First");

theList[3] = "hello world";
theList[2] = "MIDDLE";

theList.push("LAST");
console.log("theList");

// Company product catalog

let inventory = [];

let item1 = {
    name: "Bread",
    model: "MOdel_1",
    cost: 100,
    quantity: 50,
};

let item2 = {
    name: "Rusk",
    model: "MOdel_2",
    cost: 150,
    quantity: 50,
};

let item3 ={
    name: "Burgerbun",
    model: "Model_3",
    cost: 290.99,
    quantity: 250,
};


inventory.push(item1, item2, item3);
console.log("Inventory array:", inventory);

console.log("Quantity of the third item:", inventory[2].quantity);

const item4 = {
    name: "pizza",
    model: "Model_4",
    cost: 400,
    quantity: 100,
};

inventory.push(item4);

console.log("COst of the forth item:", inventory[3].cost);
