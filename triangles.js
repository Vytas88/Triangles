//Triangle button
document.getElementById("triangle_button").addEventListener("click", function(){
  let output = ""; //sukuriamas tuscias kintamasis
  for(var i = 0; i < 8; i++){  //isorinis ciklas vyksta kelis kartus
    for(var j = 0; j <= i; j++) { //vidinis ciklas pvz 2 kartus prideda zvaigzdute
            output+="*";
        }
      output += "<br/>"
    }
    document.getElementById("result").innerHTML = output;

});

//Pyramid button

document.getElementById("pyramid_button").addEventListener("click", function(){
  let output = ""; //sukuriamas tuscias kintamasis
  for(var i = 0; i < 8; i++){  //isorinis ciklas vyksta kelis kartus
    for(var j = 0; j < (8-i); j++) {
            output+="&nbsp;";
        }
    for(var n = 0; n < (i*2+1); n++) {
            output+="*";
        }
      output += "<br/>"
    }
    document.getElementById("result").innerHTML = output;

});

//Reverse pyramid

document.getElementById("reverse_pyramid_button").addEventListener("click", function(){
  let output = ""; //sukuriamas tuscias kintamasis
  for(var i = 0; i < 8; i++){  //isorinis ciklas vyksta kelis kartus
    for(var j = 8; j > 8-i ; j--) {
            output+="&nbsp;"; //kad grieztai negalima lauzti eilutes
        }
    for(var n = 0; n < 8-(i*2+1); n++) {
            output+="*";
        }
      output += "<br/>"
    }
    document.getElementById("result").innerHTML = output;

});

//Clear button
document.getElementById("clear_button").addEventListener("click", function(){
  document.getElementById("result").innerHTML = null;
});
