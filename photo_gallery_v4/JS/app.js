lightbox.option({
  resizeDuration: 200,
  fitImagesInViewport: true,
  wrapAround: true,
  maxWidth: 800
});

// This is jquery I can log what I write in the search and also loops through the captions and console log them
// However I don't really understand whats going on I just sort of stumbled my way into this
// at the if statement things go wierd, I know I need to swithc caption and search around in let "searchMatch"
// but then I get an error.

// let search = $(".search-bar")
//   .on()
//   .keyup(function() {
//     search = $(".search-bar")
//       .val()
//       .toLowerCase();
//     console.log(search);
//   });

// let anchorTag = $(".main-content a");

// for (var i = 0; i < anchorTag.length; i++) {
//   let caption = anchorTag[i].getAttribute("data-title").toLowerCase();
//   console.log(caption);
// }

//   let searchMatch = search.includes(caption);
//   console.log(searchMatch);
// }
//   if (searchMatch) {
//     anchorTag.css("display", "");
//   } else {
//     // anchorTag.css("display", "none");
//   }
// }

// WHY DOES THIS NOT WORK ? always get undefined error  ---------------------------------

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
