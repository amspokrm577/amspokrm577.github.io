function myFunction(x) {
  //x.classList.toggle("change");
  let nava = document.querySelector(".flex-container")
  nava = nava.cloneNode(true);
  // console.log(nava);
  let divi = document.querySelector(".nav-bar");
  console.log(divi);
  if (divi.hasChildNodes())
  {
    divi.removeChild(divi.firstChild);
  } else 
  {
    divi.appendChild(nava);
  }
}
  // Stop page from scrolling.
  // event.preventDefault();
