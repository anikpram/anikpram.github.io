/* Place your JavaScript in this file */


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(id) {
  document.getElementById(id).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
/*window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/




function myDark(x) {
   var element = document.body;
   if(element.className == ""){
     element.className = "dark-mode";
     x.className = "fa fa-sun-o";
     localStorage.setItem("mode", "dark");
     localStorage.setItem("icon", JSON.stringify(x));
   }
   else{
     element.className = "";
     x.className = "fa fa-moon-o";
     localStorage.setItem("mode", "light");
     localStorage.setItem("icon", JSON.stringify(x));
   }
}
