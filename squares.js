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
function SumofSquares(){
    var z=document.getElementsByClassName("displayOutput2");
     var square=1;
     var total=0;
    
    for (var i=0; i<number.length; i++) {
        square=number[i]*number[i];
        total=total+square;
        }          
   z[0].style.background="cyan";
   //console.log(square);
   console.log(total);
   document.getElementById("demo").innerHTML="Sum of Squares of elements in the array is "+total;

}
