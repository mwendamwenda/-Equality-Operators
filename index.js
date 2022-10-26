
// age = 18;

// if(age === 18) console.log('you just become an adult : strict');
// if (age == 18) console.log('you just become and adult : loose');
// //if we change the value of the age to strin only loose statement will be printed


// const favourite =  prompt('whats your favourite number');
// console.log(favourite);

// if(favourite == 23){
//     console.log('cool 23 is a awesome number');
// }else{
//     console.log('ooh no 23 is a fucking number!');// when we use a strict equality operator 23  will not be a awesome number since it wont be converted fron strin to a number
// }
const favourite =  Number(prompt('whats your favourite number'));
console.log(favourite);

if(favourite === 23){
    console.log('cool 23 is a awesome number'); //we can just convert the string by wrapping the prompt in number();
} else if(favourite === 7){
    console.log('seven is also a cool number!')
}else if(favourite === 9){
    console.log('9 is also a cool number')
} else{
    console.log('not a cool number!');
}
if (favourite !== 23){
console.log('why not 23 surely?');
}