const buttonRight1 = document.getElementById("scrollRight1");
const buttonLeft1 = document.getElementById("scrollLeft1");

const buttonRight2 = document.getElementById("scrollRight2");
const buttonLeft2 = document.getElementById("scrollLeft2");

const buttonRight3 = document.getElementById("scrollRight3");
const buttonLeft3 = document.getElementById("scrollLeft3");

scrollRight1 = () => {

    document.getElementById("collection1").scrollLeft += 300;

};

scrollLeft1 = () => {

    document.getElementById("collection1").scrollLeft -= 300;

};

scrollRight2 = () => {

    document.getElementById("collection2").scrollLeft += 300;

};

scrollLeft2 = () => {

    document.getElementById("collection2").scrollLeft -= 300;

};

scrollRight3 = () => {

    document.getElementById("collection3").scrollLeft += 300;

};

scrollLeft3 = () => {

    document.getElementById("collection3").scrollLeft -= 300;

};

buttonLeft1.addEventListener("click", scrollLeft1);
buttonRight1.addEventListener("click", scrollRight1);

buttonLeft2.addEventListener("click", scrollLeft2);
buttonRight2.addEventListener("click", scrollRight2);

buttonLeft3.addEventListener("click", scrollLeft3);
buttonRight3.addEventListener("click", scrollRight3);


