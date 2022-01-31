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