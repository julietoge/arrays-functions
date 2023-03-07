//Number One
//========================================================================>
/* Mutating array methods are ones that change the object after the method has used.For Examples:
Array.push();, Array.unshift();, Array.pop();, Array.shift();, Array.splice();
using the Demo below for illustration:
*/
let studentsName = ['Juliet','chisom','Daniel','Mega'];
//Array.push();
studentsName.push('chioma');
console.log(studentsName);//[ 'Juliet', 'chisom', 'Daniel', 'Mega', 'chioma' ]
//Array.unshift();
studentsName.unshift('chima');
console.log(studentsName);//[ 'chima', 'Juliet', 'chisom', 'Daniel', 'Mega', 'chioma' ]
//Array.pop();
studentsName.pop();
console.log(studentsName);//[ 'chima', 'Juliet', 'chisom', 'Daniel', 'Mega' ]
//Array.shift();
studentsName.shift();
console.log(studentsName);//[ 'Juliet', 'chisom', 'Daniel', 'Mega' ]
//Array.splice();
studentsName.splice(2, 1, 10, 12);
console.log(studentsName);//[ 'Juliet', 'chisom', 10, 12, 'Mega' ]
//========Each exercise above changes the original list.

/* Non-Mutation array methods do not change the object after the method has used. However, it returns the number or leftmost occurences of Argument given but does not change the original list or String.
For Examples:
Array.concat();, Array.filter();, Array.slice();, Array.map();, Array.find();
using the Demo below for illustration:
*/
let arrOfconcat = [1, 2, 4];
let array1 = [1, 4, 9, 16];
//Array.concat();
let concatMutation = arrOfconcat.concat(array1);
console.log(concatMutation);//[1, 2,  4, 1, 4, 9, 16]
//Array.filter();
let result = array1.filter(x => x > 9);
console.log(result);//[ 16 ]
//Array.slice();
let arr2 = array1.slice(0, 2);
console.log(arr2);//[ 1, 4 ]
//Array.shift();
let map1 = array1.map(a => a > 5);
console.log(map1);//[ false, false, true, true ]
//Array.splice();
let found = array1.find(element => element > 10);
console.log(found);//16
console.log(arrOfconcat);//[ 1, 2, 4 ]
console.log(array1);//[ 1, 4, 9, 16 ]
//<========================================================================


//Number Two
//========================================================================>
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
//i)
languages.push('Kotlin');
console.log(languages);//[ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin' ]
//ii)
languages.splice(3, 0, 'Java');
console.log(languages);//[ 'C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]
//iii)
languages.shift();
console.log(languages);//[ 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]
// //iv)
languages.unshift('Scala', 'Swift');
console.log(languages);//['Scala', 'Swift', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin']
// //v)
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);//['Scala', 'Swift', 'JavaScript', 'Ruby', 'Java', 'Go', 'Rust', 'Python', 'Kotlin']
//<========================================================================


//Number Three
//========================================================================>
//output: [ 'apple', 'mango', 'banana' ]
//Because the value Fruit was returned
//<========================================================================


//Number Four
//========================================================================>
function max(numberOfArray){
    return Math.max.apply(null, numberOfArray)
}
let maxValue = max([4, 5, 10, -2]);
console.log("Maximum Value is " + maxValue);//Maximum Value is 10
//<========================================================================


//Number Five
//========================================================================>
let newArray = [];
function valTimesIndex(arrayOfNumber) {
    for(let index = 0; index < arrayOfNumber.length; index++){
        newArray.push(arrayOfNumber[index] * index);
     }
     console.log(newArray);
}
valTimesIndex([5, 10, 6, 9]);//[ 0, 10, 12, 27 ]
//<========================================================================