let array = new Array();
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 900) + 100;
}
array.forEach(i => console.log(i));
array.sort((a,b) => a - b);
console.log("Second largest element is : " + array[array.length-2]);
console.log("Second smallest element is : " + array[1]);