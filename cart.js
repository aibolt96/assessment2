///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((a, c) => a + c.price, 0)
// console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax){
    cartTotal = cartTotal * (1 + tax)
    cartTotal = cartTotal - couponValue
    return cartTotal
}
// console.log(calcFinalPrice(100, 20, .06))
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    The properies that my customer object will have a name as a string because I am just storing the name of the person but I can also pretty easily edit and change a string if needed,
     the order of the person as an array so that way I can store multiple strings into the order, 
     the total (before tax) of the order as a math value so if needed I can use that value for any kind of mathematical operation,
     and satisfaction score saved as a math value again so I can do easy mathematical operations or other operations for ex. comparing their score to see whether they were really satisfied or not
    

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {customerName:'John Smith', customerOrder:['Diet Coke', 'Steak', 'Fries', 'Ice cream'], customerTotal:16, customerSatisfaction: 8}
console.log(customer)