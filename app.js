

let names = ['ali','alis', 'maz']//array

let displayName= (...name)=>

{
    for (name1 of name){
        console.log(name1);//rest
    }

 }
 displayName("Qasim", "ALi");

 let displayName2= (namePerameter)=> //console.log(namePerameter);
 displayName2("max");

 let sum= ()=>{

    return 1+2;
 }
 //console.log("sum is ="+sum());

 let duplicatNames = [...names];//spread
 console.log(duplicatNames);
 
 let checkValue =(v)=>{

    if(v){
        console.log("execute true");
    }
    else{
        console.log("execute false");
    }

 }
 checkValue(1);


 let showValues = (v1,v2,v3)=>{
console.log(v1);

setTimeout(()=>{

    console.log(v2);
},5000);

console.log(v3);
let displayName7 = (...name)


 }
showValues("first", "sec", "3rd");
 

 