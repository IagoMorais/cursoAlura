let input = null;

if (input === null) {
    console.log('não há informação');
    console.log(typeof input);
} else {
    console.log(input);
}

{
    let input2 = null;
    let input3;

    console.log(input2); // null
    console.log(input3); // undefined
}

{
    console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(typeof null); 
console.log(typeof undefined); 
}