function allFilter() {

  for(let i = 0;i < allSections.length; i++){
    allSections[i].style.display = "";

  }

}

let allSections = document.getElementsByClassName("showHide")

console.log(allSections)

function topsFilter() {

  for(let i = 0;i < allSections.length; i++){
    allSections[i].style.display = "none";
}
  setTimeout(function() {
    
  })

}