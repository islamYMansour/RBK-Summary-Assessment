// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3 school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

//=============================================================================
/*                              Q1                                           */
//=============================================================================
//write a function that takes a string as an input and returns an array
//containing the length of each word in that string.
//solve it using the most appropriate helper functions(reduce,each,map,filter).
//wordLengths("hello its me") // [5,3,2]

function wordLengths(str) {
    // TODO: your code here 
    return map (str.split(' '), function (word, index) {
      return word.length
    })
}

//=============================================================================
/*                                  Q2                                    */
//=============================================================================
//Write a function countOccurrences that accepts two parameters: a string, 
// and a character (e.g. "a"), and returns number of times that character occured.
//solve it using the most appropriate helper functions(reduce,each,map,filter).
// countOccurrences("hello", "l"); // 2
// countOccurrences("hello, world!", "l"); // 3

function countOccurrences(string, character) {
    // your code is here
    return reduce(string.split(''), function(count, letter) {
      
      if(character === letter){
        count = count +1
      }
      return count
    },0)
}

//=============================================================================
/*                                  Q3                                    */
//=============================================================================
//write a function that takes a string as an input and returns an array
//with only the words of length that are longer than 3.
//solve it using the most appropriate helper functions(reduce,each,map,filter).
// wordsLongerThanThree("Hello Mad World") //["Hello", "World"]

function wordsLongerThanThree(str) {
    // TODO: your code here 
    return filter(str.split(' '), function (word, index) {
      return word.length > 3
    })
}


//=============================================================================
/*                                  Q4                                        */
//=============================================================================
//Using recursion, write a function called repeatString that takes two parameters: a string str, 
//which is the string to be repeated, and count, a number 
//representing how many times the string str should be repeated.
//repeatString('dog', 0); // => '' 
//repeatString('dog', 1); // => 'dog' 
//repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
//repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'

function repeatString(str, count) { 
 // TODO: your code here 
 if(count === 0)
  return '';
return str + repeatString(str , count -1)
} 
 

//=============================================================================
/*                                  Q5                                       */
//=============================================================================
/*
 using closures create a function called makePizza that has the following properties and methods
 crust a property represented by a string. ex "thin","thick". 
 size a property represented by a string. ex "M","L".
 numberOfSlice a property that hold the number of slice, ex: 8
 ** the values of all properties will be provided as arguments in the function invocation. 
 addIngredients a function that add a new ingredient to the ingredients property.
 displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
 bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done" 
 eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
 */
//Example:
// var pizza = makePizza("thin", "M", 2);
// pizza.addIngredients("tomato");
// pizza.addIngredients("meshroom");
// pizza.addIngredients("meat");
// console.log(pizza.displayIngredaints());
// pizza.bakePizza();
// pizza.eatSlice();
// pizza.eatSlice();
// pizza.eatSlice();

// Write your code here ....
function makePizza (crust, size , noSlice){
  var result = {}
  var ingredients = ''
  result.crust = crust
  result.size = size
  result.noSlice = noSlice
  result.addIngredients = function(addition){
    ingredients += addition+" ,"
    return ingredients
  }

  result.displayIngredaints = function(){
    return "The ingredients are: "+ingredients
  }
  result.bakePizza = function(){
    window.setTimeout(window.alert, 2*1000, 'Your '+result.crust+' '+result.size +' '+result.noSlice+' slice pizza is done');
  }

  result.eatSlice= function() {
    if(result.noSlice > 1) {
      result.noSlice = result.noSlice-1
      return result.noSlice
    }
  
  }

  return result 


}

//=============================================================================
/*                                  Q6                                      */
//=============================================================================
/*
Create a ReadingList class by using OOP concept, where:
Your class should has:
"read" for the number of books that finish reading
"unRead" for the number of books that still not read
"toRead" array for the books names that want to read in the future
"currentRead" for the name of the book that is reading currently
"readBooks" Array of the names of books that finish read
"AddBook" function that:
a- Accept the book name as parameter
b- Add the new book to "toRead" array
c- Increment the number of the unread books.
"finishCurrentBook" function that:
a- Add the "currentRead" to the "readBooks" array
b- Increment the "read" books
c- Change the "currentRead" to be the first book from "toRead" array
d- Decrement the number of "unread" books
*/

// Now, to make sure that you are actually reading, make a comment below this and type: Yes I am

// Write your code here .....

function library (){
  var result = {}
  result.read = 0
  result.unRead= 0
  result.toRead = []
  result.currentRead =[]
  result.readBooks= []
  result.addBook = addBook
  result.finishCurrent = finishCurrent



  return result 
}


function addBook(bookName){
  this.toRead.push(bookName)
  this.unRead = this.unRead + 1
}
function finishCurrent() {
  if(this.currentRead.length > 0) {
      this.readBooks.push(this.currentRead[0])
      this.read = this.read +1 
  }
  if(this.toRead.length > 0) {
      this.currentRead.unshift(this.toRead[0])
  }
  if(this.unRead - 1 >0){
     this.unRead = this.unRead -1 
 }

}
 // yes Iam 

//=============================================================================
/*                                  Q7                                       */
//=============================================================================
//Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
//makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
//itemSize should be either "big", "medium" and "small"
//big sized items will hold 3 slots in the storage
//medium sized items will hold 2 slots in the storage
//small sized items  will hold 1 slot in the storage
//return "Can't fit" if you try to add an item that exceeds the storage size limit
//when the safe is full return a string representing all the items that are in the safe
//Example:
//  var safe = makeSafe(5)
//  safe('watch','small')
//  safe('gold-bar','big')
//  safe('silver-bar','big') => "Can't fit"
//  safe('money','small') => "watch gold-bar money"

// Write your code here .....


function makeSafe(initalStorge) {
    var storage = 0
    var str= ''

    function safe(data , size) {
      if(storage < initalStorge) {
        if(size === 'small' && initalStorge - storage >= 1){
          storage = storage + 1
          str += data+ " "

        } else if( size === 'big' && initalStorge - storage >= 3){
          storage = storage + 3
          str += data+ " "

        } else if(size === 'medium' && initalStorge - storage >= 2) {
          storage =storage + 3
          str += data+ " "

        } else {
          return "Can't fit"
        }
        if(storage === initalStorge ) {
          return str;
        }
      } else {
        return "Can't fit"
      }

    }
    return safe

}
//=============================================================================
/*                                  Q8                                       */
//=============================================================================

//Create HTML, CSS & JS files and connect them together
//Add Two text input fields, one with a placeholder input, and another with color
//Add a button below them and an empty unordered list below the button
//Create 3 CSS classes (red, yellow, blue)
//Create a javascript function that adds an item list to the unordered list
//If the color value is red, yellow or blue
//Add the CSS class to the item accordingly
//Do not add a list item if the color value is non of the colors

//DO NOT USE JQUERY

//================================================================================
/*                              Q9                                            */
//================================================================================

//Create HTML, CSS & JS files
//Link jQuery
//Create an empty unordered list
//Create three input elements of type checkbox
//Create two buttons "create" & "remove"
//Create 7 classes in CSS each with the appropriete color (black, purple, green, orange, red, yellow, blue)
//Using jQuery run a function that gets called using the button's id (#create)
//The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
//If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
//If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + orange)
//If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it

//Using jQuery call a function from the button's id (#delete)
//The function removes all the elements from the unordered list based on the checkboxes as the previous function
//Use jQuery as much as you can in selecting elements and other tasks

//================================================================================
/*                              Q10                                           */
//================================================================================
// Theoretical questions.
// 1- In your own words,Why do we use Closures ?
 // closures is close over the variable of the parent function and avoid to use global variable to make more secure and 
 // and can not be affected from the global scope , we put the varible on the scope of the function
 //-More secure.
 // can not affect global variable
 // create more than one instance without conflicting 

// 2- In OOP, what does "this" refer to ?
//this is the parent dunction that we called the function there , if we put this inside another scope it takes the 
// return value of its called scope function or we call the parent 

// 3- What is jQuery?
// its libray improved on js make the code lesser than js and easy to use 
// it abbreviate the functions and 

// 4- what is the diffrence between Closure's methods and The OOP's methods?
// cloure methods its inside the scope of the parent function and we didnt have to use key word of this because we are
// in the scope of the function, and we cant reuse these functions outside the parent scope.
// oop methods can we write anywhere outside the scope of the function and invoke it 
// inside the scope if we need any value we can get from this keyword but we should return first.




