$(document).ready(function(){
  
    $("#features").animate({transform: "scale(1.2)"},500)

})

var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}






$('.navbar-vertical .navbar-toggler').on('click', function(){
  var $this = $(this)
  var $isShow = $this.parent('.navbar-vertical').hasClass('show')
  var $isHide = $this.parent('.navbar-vertical').hasClass('hidden')
  if($isShow){
     
    $(".navbar-vertical").css("width","320px");
    $('.navbar-vertical.show').removeClass('show');
    $this.parent('.navbar-vertical').addClass('hidden');
    $(".navbar-toggler").html("<span class=\"navbar-toggler-icon\"></span>");
   $(".navbar-vertical .navbar-toggler").css("right","0.5rem").css("top","0.75rem");
  }
  else{
    if($isHide){
         $(".navbar-vertical").css("width","100%");
      $('.navbar-vertical.hidden').removeClass('hidden');
    $this.parent('.navbar-vertical').addClass('show');
         $(".navbar-toggler").html("<i class=\"fas fa-times\"></i>");
        $(".navbar-vertical .navbar-toggler").css("right","50%").css("top","2.75rem");
    }
  }
})





new WOW().init();