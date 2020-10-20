const prompt=require('prompt-sync')();
const N=prompt("the number of socks represented ");
var ar=[];
for(let i=0;i<N;i++){
  ar[i]=prompt('separated integer describing the colors ');
}
count=0;
i=1;
while(i<=(ar.length-1)){
  if(ar[i-1]==ar[i]){
    count += 1;
  }
  i=i+2;
}
console.log(`total number of matching pairs of socks that Rohit can sell ${count}`);
