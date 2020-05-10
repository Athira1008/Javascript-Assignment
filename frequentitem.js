var x=0;
var arrayItems=[];
var y=document.getElementsByClassName("displayOutput");
function addElement(){
    arrayItems[x]=document.getElementById("aritems").value;
    if(arrayItems[x]!=""){
         x++;
         document.getElementById("itemArray").innerText=arrayItems;
        y[0].style.border="1px solid red"
    } 
    else{
        alert(" Invalid Input");
        //console.log("enter a number");
    }
       

}
 //---------to find most frequent element in an array---------//  
 function mostFrequent(){
    var z=document.getElementsByClassName("displayOutput2");
    var freq = 1;
    var count = 0;
    var freqitem;
    for (var i=0; i<arrayItems.length; i++)
    {
            for (var j=i; j<arrayItems.length; j++)
            {
                    if (arrayItems[i] == arrayItems[j])
                     count++;
                    if (freq<count)
                    {
                      freq=count; 
                      freqitem = arrayItems[i];
                    }
            }
            count=0;
    }
    //console.log(item+" ( " +mf +" times ) ") ;
    z[0].style.background="cyan";
    document.getElementById("ename").innerHTML="The Item "  +freqitem+ " in the array [ "+arrayItems+ " ] is repeated " +freq +" times  "  ;
 }