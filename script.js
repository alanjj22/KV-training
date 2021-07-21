/* console.log(Math.floor(Math.random()*101)); */

const array = [1,1,1,2,2,3,4,5,5,5,6,7,8,9,9,9,9,9];

let arr={}
for(let i=0; i<array.length; i++){
    arr[i]=0;
}

for(var i=0; i<array.length; i++){
    arr[array[i]]+=1;
}

for (let i = 0; i< array.length; i++) {
    if(arr[i]>0){
        console.log(i);
    }
}