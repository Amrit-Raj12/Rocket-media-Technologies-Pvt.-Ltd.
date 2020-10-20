const prompt=require('prompt-sync')();
const N=prompt("Enter the size of array");
var ar=[];
for(let i=0;i<N;i++){
  ar[i]=prompt('Enter Element for Array1 ');
}
count=0;
var i=1;
while(i<((ar.length)-1)){
  if(ar[i-1]==ar[i]){
    count += 1;
    i=i+2;
  }
  else
    i=i+2;
}    
console.log(`count is ${count}`);