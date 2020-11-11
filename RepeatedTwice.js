var array = new Array();
for(var i = 1 ; i <= 100 ; i++){
    if(i % 11 == 0){
        array.push(i);
    }
}
console.log("Repeated digit numbers are : " + array);