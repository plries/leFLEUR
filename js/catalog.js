let allSections = document.getElementsByClassName("showHide");
let Section = document.getElementsByClassName("catalogSection");

function allFilter() {

  for(let i = 0;i < allSections.length; i++){
    allSections[i].style.display = "";

  }

}

function topsFilter() {

  for(let i = 0;i < allSections.length; i++){
    allSections[i].style.display = "none";
}
    allSections[0].style.display = "block";
    Section[0].style.display = "flex";
};

function botsFilter() {

  for(let i = 0;i < allSections.length; i++){
    allSections[i].style.display = "none";
}
    allSections[1].style.display = "block";
    Section[1].style.display = "flex";
};

function fragFilter() {

  for(let i = 0;i < allSections.length; i++){
    allSections[i].style.display = "none";
}
    allSections[2].style.display = "block";
    Section[2].style.display = "flex";
};

function nailFilter() {

  for(let i = 0;i < allSections.length; i++){
    allSections[i].style.display = "none";
}
    allSections[3].style.display = "block";
    Section[3].style.display = "flex";
};

function acceFilter() {

  for(let i = 0;i < allSections.length; i++){
    allSections[i].style.display = "none";
}
    allSections[4].style.display = "block";
    Section[4].style.display = "flex";
};

function luggFilter() {

  for(let i = 0;i < allSections.length; i++){
    allSections[i].style.display = "none";
}
    allSections[5].style.display = "block";
    Section[5].style.display = "flex";
};

function footFilter() {

  for(let i = 0;i < allSections.length; i++){
    allSections[i].style.display = "none";
}
    allSections[6].style.display = "block";
    Section[6].style.display = "flex";
};