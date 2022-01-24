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