let num1 = 5;
let num2 = 6;
let num3 = 7;
let num4 = 8;


/* Now write a conditional statement that compares
“num1” and “num2” and displays the larger value. */
if (num1 > num2){
    console.log(num1);
} else console.log(num2);


/*  Write a conditional statement that determines
whether “num1” is odd or even and displays the result. */
if (num1%2 == 0){
    console.log("even");
} else console.log("odd");


/* write a JavaScript conditional statement to sort
the three numbers from largest to smallest.*/
if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(num1,num2,num3);
    }
    if(num3>num2){
        console.log(num1,num3,num2);
    }
}
else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(num2,num1,num3);
    }
    if(num3>num1){
        console.log(num2,num3,num1);
    }
}
else{
    if(num1>num2){
        console.log(num3,num1,num2);
    }
    if(num2>num1){
        console.log(num3,num2,num1);
    }
}


/* Write a variables called amount. 
print "Please enter a positive number" if it is not positive.
and print "Please enter a number" if the type of the argument is not a number.
otherwise print the number. */
let amount = prompt("Please enter a positive number");
if (amount < 0){
    alert("Please enter a positive number");
}
else if (isNaN(amount)){
    alert("Please enter a number");
}
else alert(amount);


/* Write two string variables , username and password,
and print a string "login successful" if the username
length is more than 6 and password length is more than
or equal to 8 otherwise print "login failed." */
let username = "Sahar";
let password = "3658756";
if(username.length > 6 && password.length >= 8){
    console.log("login successful");
}
else console.log("login failed");


/*Write a JavaScript while loop that will display the numbers 0 - 20. */
for(let i = 0; i <= 20; i++){
    console.log(i);
}


/* Write a JavaScript for loop that will display the numbers 20 - 0. */
let j=0;
while (j <= 20) {
    console.log(j);
    j++;
}


/* Create a for loop that will display all even numbers between 1 and 20. */
for(let i = 0; i <= 20; i++){
    if (i%2 == 0) {
        console.log(i);
    }
}

/* Write two variable startRange and endRange Assign each variable
a number value like (5,8) or (6,18) . print a string of all the numbers
in between the two values in an acceding order, start and end are included
example if we assign (5,8) the output will be*/
let startRange = prompt("Enter start number") ;
let endRange  = prompt("Enter end number") ;
let numbers = [];
for(let i = startRange; i <= endRange; i++){
    numbers.push(i);
}
console.log(numbers);


/* Create a for loop that will produce the following output:
*
**
***
****
*****
*/
for(let i =0; i < 5; i++){
    console.log("\n");
    for(let j = 0; j <= i; j++){
        console.log("*");
    }
}


/* Write a for loop to compute the greatest common divisor (GCD)
of two positive integers of your choice. */
let GCD;
for(let i = 1; i <= num2 && i <= num4; i++){
    if (num2 % i == 0 && num4 % i == 0){
        GCD = i;
    }
}
console.log(GCD);