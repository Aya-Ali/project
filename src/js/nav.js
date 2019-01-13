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
  });
  
