function let(){
    let i=5;
    console.log(i);//5
    i=3;
    console.log(i);//3 it is possible to cahnge the value of let
    let i=7;// error:let cannot be re declared 
}
let();
var a=i+1;// error:we cannot access let outside it have only block scope
console.log(a);
