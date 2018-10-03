
$(document).ready(function()//preload images
{ 
  $(".img-swap").each(function () {$.ajax({url: this.src})})})
jQuery(function(){
 $(".img-swap").live('click', function() {
 	if ($(this).attr("class") == "img-swap") { this.src = this.src.replace(".png",".gif"); } 
	else {this.src = this.src.replace(".gif",".png");	}
	$(this).toggleClass("on");});});


 document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.scrollspy');
    let instances = M.ScrollSpy.init(elems, {
      scrollOffset: 120,
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  let lang = {
    "html": "100%",
    "css": "90%",
    "javascript": "70%",
    "php": "85%",
    "angular": "70%"
  };
  
  let multiply = 4;
  
  $.each( lang, function( language, pourcent) {
  
    var delay = 700;
    
    setTimeout(function() {
      $('#'+language+'-pourcent').html(pourcent);
    },delay*multiply);
    
    multiply++;
  
  });