lightbox.option({
  resizeDuration: 200,
  fitImagesInViewport: true,
  wrapAround: true,
  maxWidth: 700
});

document.querySelector(".search-bar").addEventListener("keyup", searchFunction);

function searchFunction() {
  let anchorTag = $(".main-content a");
  let search = document.querySelector(".search-bar").value.toLowerCase();

  for (var i = 0; i < anchorTag.length; i++) {
    let caption = anchorTag[i].getAttribute("data-title").toLowerCase();
    let searchMatch = caption.includes(search);
    if (searchMatch) {
      anchorTag[i].style.display = "";
    } else {
      anchorTag[i].style.display = "none";
    }
  }
}
