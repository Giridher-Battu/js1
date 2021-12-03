function cons(){
    const i=5;
    console.log(i);//5
    i=3;//3 it is impossible to cahnge the value of const
   console.log(i);
    const i=7;// error:const cannot be re declared 
}
cons();
var a=i+1;// error:we cannot access const outside it have only block scope
console.log(a);
