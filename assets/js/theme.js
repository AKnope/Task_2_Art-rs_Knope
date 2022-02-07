function toggle() {
    //get element id of the block that is going to be toggled
    var toggledisplay = document.getElementById('toggle-display');


    //define style
    var display = toggledisplay.style.display;


    // if display:block change to display:none, vice versa
    if (display == 'block') {
      toggledisplay.style.display = 'none';
    }
    else {
      toggledisplay.style.display = 'block';
    }
}

function submit() {
  document.getElementById("submit-display").addEventListener("click", submit);
  document.getElementById("submit-display").innerHTML = "<div><div class='submit titles'>Paldies, ka sapņo!</div><div class='submit'>Ja Tavs sapnis tiks izvēlēts, mēs ar Tevi sazināsimies.</div></div>";
}



function option1(){
  var cities = document.getElementById('cities');
  var riga =document.getElementById('riga');
  var jelgava =document.getElementById('jelgava');
  var ogre =document.getElementById('ogre');
  var purch =document.getElementById('purch');
  var kurts =document.getElementById('kurts');
  if(cities.value == "riga") {
      riga.style.display = 'none';
  }
  else{
    riga.style.display = 'block';
  }
  if(cities.value == "jelgava") {
    jelgava.style.display = 'none';
  }
  else{
    jelgava.style.display = 'block';
  }
  if(cities.value == "ogre") {
    ogre.style.display = 'none';
  }
  else{
    ogre.style.display = 'block';
  }
  var type = document.getElementById('type');
  var food =document.getElementById('food');
  if(type.value == "food"){
    food.style.display = 'none';
  }
  var pin1 = document.getElementById('pin1');
  var pin2 = document.getElementById('pin2');
  var pin3 = document.getElementById('pin3');


  var pin1dis = pin1.style.display;
  var pin2dis = pin2.style.top;
  var pin3dis = pin3.style.top;
if(cities.value == "riga" && type.value == "food"){
  pin1.style.display = "none";
  pin2.style.top = "109px";
  pin3.style.top = "153px";
  purch.style.display="block";
  kurts.style.display="block";
}
else if((cities.value == "riga" && type.value == "null")){
  pin2.style.top = "76px";
  pin3.style.top = "120px";
  purch.style.display="none";
  kurts.style.display="none";
}

else{
  pin1.style.display = "block";
  pin2.style.top = "76px";
  pin3.style.top = "120px";
  purch.style.display="none";
  kurts.style.display="none";
}

}


$(function () {
  "use strict";
  
  $("#inner").draggable({
      axis: "x,y",
      restriction: true,
        endOnly: true
  });
});
