//------------store user inputs to an array----------//
var x=0;
var number=[];
var y=document.getElementsByClassName("displayOutput");
function addElement(){
    number[x]=document.getElementById("arn").value;
    if(number[x]!=""){
         x++;
         document.getElementById("numberArray").innerText=number;
         y[0].style.border="1px solid red"

    } 
    else{
        alert(" Invalid Input");
        //console.log("enter a number");
    }
          
}
//---------to check whether the 1st element of the array is prime or not---------//
function checkPrime(){
    var z=document.getElementsByClassName("displayOutput2");
    var flag=true;
    var checknumber=number[0];
    //console.log(number[0]);
    document.getElementById("felem").innerHTML="First element of array is: " +checknumber;

   if(checknumber!=1){
    for (var i=2; i<=(checknumber/2); i++) {
        if(checknumber%i==0){
             flag=false;
             break;
        }          
    }
    if(flag==true){
        //console.log(" prime");
        document.getElementById("eprime").innerHTML=checknumber + " is A PRIME NUMBER"; 
    }
    else{
        //console.log("not prime");
        document.getElementById("eprime").innerHTML=checknumber + " is NOT A PRIME NUMBER"; 
    }
   }
   else{
    //console.log("Undefined");
    document.getElementById("eprime").innerHTML="Cannot determind"; 
   }
   z[0].style.background="cyan";

}
