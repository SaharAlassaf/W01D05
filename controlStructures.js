let num1 = 5;
let num2 = 6;
let num3 = 7;
let num4 = 8;
let amount = -1;
let username = "Sahar";
let password = "3658756";

if (num1 > num2){
    console.log(num1);
} else console.log(num2);


if (num1%2 == 0){
    console.log("even");
} else console.log("odd");

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
}else{
    if(num1>num2){
        console.log(num3,num1,num2);
    }
    if(num2>num1){
        console.log(num3,num2,num1);
    }
}

if (amount <=0){
    console.log("Please enter a positive number");
}else if (amount === 'number'){
    console.log("Please enter a number");
}else console.log(amount);



if(username.length > 6 && password.length >= 8){
    console.log("login successful");
}else console.log("login failed");


for(let i = 0; i <= 20; i++){
    console.log(i);
}


let j=0;
while (j <= 20) {
    console.log(j);
    j++;
}

for(let i = 0; i <= 20; i++){
    if (i%2 == 0) {
        console.log(i);
    }
}

for(let i = num1; i <= num4; i++){
    console.log(i);
}

for(let i =0; i < 5; i++){
    console.log("\n");
    for(let j = 0; j <= i; j++){
        console.log("*");
    }
}
