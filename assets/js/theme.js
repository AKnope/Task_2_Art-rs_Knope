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
  document.getElementById("button-displ").style.display = 'none';
  document.getElementById("submit-display").addEventListener("click", submit);
  document.getElementById("submit-display").innerHTML = "<div style='margin-bottom:170px;'><div class='submit titles'>Paldies, ka sapņo!</div><div class='submit'>Ja Tavs sapnis tiks izvēlēts, mēs ar Tevi sazināsimies.</div></div>";
}



function option1(){
  var cities = document.getElementById('cities');
  var riga =document.getElementById('riga');
  var jelgava =document.getElementById('jelgava');
  var ogre =document.getElementById('ogre');
  var purch =document.getElementById('purch');
  var kurts =document.getElementById('kurts');
  var conn =document.getElementById('conn');
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
  conn.style.display="block";
  conn.style.margin="120px auto 60px auto";
}
else if((cities.value == "riga" && type.value == "null")){
  pin2.style.top = "76px";
  pin3.style.top = "120px";
  purch.style.display="none";
  kurts.style.display="none";
  conn.style.display="none";
  conn.style.margin="0";
}

else{
  pin1.style.display = "block";
  pin2.style.top = "76px";
  pin3.style.top = "120px";
  purch.style.display="none";
  kurts.style.display="none";
  conn.style.display="none";
  conn.style.margin="0";
}

}
function show(){
  var tag = document.getElementById('tag');
  var more = document.getElementById('more');
  var less = document.getElementById('less');


  if(tag.style.display !== "none"){
    tag.style.display = "block";
    more.style.display= "none";
    less.style.display= "block";
  }
  else if(tag.style.display == "none"){
    tag.style.display = "block";
    more.style.display= "none";
    less.style.display= "block";
  }
  else{
    tag.style.display = "none";
    more.style.display= "block";
    less.style.display= "none";
  }
}
function show2(){
  document.getElementById("tag").style.display= "none";
  document.getElementById("more").style.display= "block";
  document.getElementById("less").style.display= "none";

}
$(function () {
  "use strict";
  
  $("#inner").draggable({
      axis: "x,y",
      restriction: true,
        endOnly: true
  });
});


function popup(){
  var popup = document.getElementById('pop');
  if(pop.style.display !== "none"){
    popup.style.display="block";
  }
  else if(pop.style.display == "none"){
    popup.style.display="block";
  }
  else{
    popup.style.display="none";
  }
}
function popup2(){
  document.getElementById("pop").style.display= "none";
}