function multiplicationTable(size){
    return Array.from({length: size},(v,i)=>Array.from({length:size},(v,j)=>(i+1)*(j+1))) ;
}
console.log(multiplicationTable(3));

// const string = Array.from(`hallo World`); contoh lain Array.from();
// console.log(string);                         