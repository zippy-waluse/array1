// /st element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,34,90,12]
console.log('last item',arr1.slice(-1));


let arr2 = [true, "green", "where",12,56]
console.log('last item',arr2.slice(-1))

// Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"]
let Pets = ["Cow", "Bird", "Snake", "Dog"];
let word = Pets.join('');
console.log((word));


// Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let sortedarray = arr3.sort();
console.log (sortedarray);



c



// Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
// let arr = ["boy", "man", "girl",            "school", "girl", "woman"];

let arr = ["boy", "man", "girl",            "school", "girl", "woman"];
let withoutduplicate = [...arr ,set(arr)];
let withduplicate = arr.filter((item,index) => arr.indexOf(item) !==index);

console.log("Fist array duplicate", withoutduplicate);
console.log("second array",withduplicate);



// Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];

let arr5 = ["the", "way", "x", 4];

if((arr5.includes("food"))) {
    console.log({arr5});
}

else{
    console.log("the search word was not found");
}

// Write a JS script to sort the following string:let word = "renniw"
let words = "renniw";
let secondword = words.split('').sort('').join();

console.log(secondword)


// Using an array of fruits with length 10 , insert 'Tomato' at the 5th index
let fruits = ["Mango","Orange","Passion","Apple","Pineapple","Banana","Kiwi","Watermelon","Tomatoe","Berry"]
insert [5] = "Strawberry"
console.log(fruits)