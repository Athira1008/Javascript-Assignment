
function swapCase(S) {
    var S = document.getElementById("str").value;
    document.getElementById("inpString").innerHTML = "The input string is "+S;
     var output=[];
     for (var i = 0; i <S.length; i++) {
        if(S!=""){
             console.log(S[i]);
            if(S[i]==S[i].toUpperCase()){
                output.push(S[i].toLowerCase());    
            }
            else{
                
                output.push(S[i].toUpperCase());
            }
        }
     }   
     //console.log(output.join(''));
     document.getElementById("swapString").innerText="String after swapping the case of each character is " +output.join('');
  }
// function switchCase(string) {
//   // check if original char is equal to the upper case version
//   // if so, make lower case, otherwise, make uppercase
//   var swapped = [];
//   for (var i = 0; i < string.length; i++) {
//     if (string != " ") {
//       //console.log(string[i]);
//       //console.log(string[i].toUpperCase());
//       if (string[i] == string[i].toUpperCase()) {
//         //console.log(string[i].toLowerCase());
//         swapped.push(string[i].toLowerCase());
//         //console.log(string[i]);
//       } else {
//         swapped.push(string[i].toUpperCase());
//         //console.log(string[i]);
//       }
//     }
//   }
//   return swapped.join("");
// }

// console.log(switchCase("i LOVE PiZzA"));
