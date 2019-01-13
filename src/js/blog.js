
$(document).ready(function(){
  $("#features").animate({transform: "scale(1.2)"},500);
//var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
// modal.style.display = "block";
// modalImg.src = this.src;
// captionText.innerHTML = this.alt;
// }
if($("#myImg").length>0)
{
$("#myImg").click(function()
{
$("#myModal").show();
//$("#img01").attr("src") = this.src;
//$("#caption").html(this.alt);
})
// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
$(".close").click(function(){
  $("#myModal").hide();
/*(".close").click(function()
{modal.style.display = "none";

})
*/

})
}
})
new WOW().init();
import css from '../css/blog.css';
