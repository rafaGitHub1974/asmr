function addNumbers(a: number, b: number) { 
    return a + b; 
} 

var sum = addNumbers(10, 15) 
// errors
console.log('Sum of the two numbers is: ' + sum); 
console.log('Sum of the two numbers is: ', sum); 
console.log('Sum of the two numbers is: ' sum); 