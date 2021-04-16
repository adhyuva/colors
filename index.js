// JS code here
function makeInput() {
    let trans = document.getElementById("make").value;
    let output = document.getElementById("output");
    let i = 1;
    output.innerHTML = "";
    while (i <= trans) {
      output.innerHTML += "Fav Color" + i + ":  <input type='text' id ='color" + i +"'/> <br > <br/>" ;
      i++;
    }
  }
function makeOutput () {
    let trans = document.getElementById("make").value;
    let output = document.getElementById("final");
    output.innerHTML = "Your favorite colors are: ";
    for (let i = 1; i <= trans; i++){
        //get all the input values from color1, 2 etc.
        output.innerHTML +=  document.getElementById("color" + i).value ;
        if(i < trans){
            output.innerHTML += ", ";
        } else if(i == trans) {
            output.innerHTML += "!";
        }
    }
}