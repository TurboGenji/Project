let choosenMyata = 0;
let choosenBeer = 0;


window.onload = function() {
    let x = window.matchMedia("(max-width: 672px");
    function minimum() {
        if (x.matches) return "30vw";
        else return "15vw";
    }

    var images = document.getElementsByClassName("Myata");
    var imagesBeer = document.getElementsByClassName("Beer");
    var sections = document.querySelectorAll("section");
    for (let i = 0; i < images.length; i++) {

        images[i].addEventListener("mouseover", function() {
            if (x.matches) return;
            images[i].style.width = "30vw";
            choosenMyata = i;
            for (let x = 0; x < images.length; x++) {
                if (x == i) continue;
                images[x].parentElement.style.display = "none";
            }
        })
    }
    for (let i = 0; i < imagesBeer.length; i++) {
        imagesBeer[i].addEventListener("mouseover", function() {
            if (x.matches) return;
            imagesBeer[i].style.width = "30vw";
            choosenBeer = i;
            console.log(choosenBeer);
            for (let x = 0; x < imagesBeer.length; x++) {
                if (x == i) continue;
                imagesBeer[x].parentElement.style.display = "none";
            }
        })
    }
    for (let i = 0; i < sections.length; i++) {
        sections[i].addEventListener("mouseout", function() {
            let image = sections[i].children;
            for (let x = 0; x < image.length; x++) {
                image[x].style.display = "inherit";
            }
            images[choosenMyata].style.width = minimum();
            imagesBeer[choosenBeer].style.width = minimum();
        })
    }
}