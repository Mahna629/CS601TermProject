/*
handles the expansion of the images on tpInterests.html and tpGallery.html
PARAM: imgs, the image to be expanded
*/
function galleryFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");

  var imgText = document.getElementById("imgtext");

  expandImg.src = imgs.src;

  imgText.innerHTML = imgs.alt;

  expandImg.parentElement.style.display = "block";
}
