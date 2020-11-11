let array = new Array();
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 900) + 100;
}
array.forEach(i => console.log(i));
let max = Math.max(array);
let min = Math.min(array);
array.splice(array.indexOf(max), 1);
array.splice(array.indexOf(min), 1);
max = Math.max(...array);
min = Math.min(...array);
console.log("Second largest element is : " + max);
console.log("Second smallest element is : " + min);