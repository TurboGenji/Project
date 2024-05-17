window.onload = function() {
    for (let i = 0; i < document.getElementsByClassName("adv1").length; i++) {
        document.getElementsByClassName("adv1")[i].style.display = "flex";
    }
}

function animation1() {
    let button1 = document.getElementById ('button1'),
    ad1 = document.getElementById ('ad1'),
    button10 = document.getElementById ('button10'),
    learn = document.getElementById ('learn1');

    button1.style.visibility = "visible";
    button1.style.opacity = "1";
    button1.style.backgroundColor = "#6D8EB5"
    ad1.style.backgroundColor = "#6D8EB5";
    button10.style.visibility = "hidden";
    learn.style.opacity = "1";
}
function animation10() {
    let button1 = document.getElementById ('button1'),
    ad1 = document.getElementById ('ad1'),
    button10 = document.getElementById ('button10'),
    learn = document.getElementById ('learn1');

    button1.style.visibility = "hidden";
    button1.style.backgroundColor = "#dfe3ed";
    ad1.style.backgroundColor = "#dfe3ed";
    button10.style.visibility = "visible";
    learn.style.opacity = "0";
}
function animation2() {
    let button2 = document.getElementById ('button2'),
    ad2 = document.getElementById ('ad2'),
    button20 = document.getElementById ('button20'),
    learn = document.getElementById ('learn2');

    button2.style.visibility = "visible";
    button2.style.opacity = "1";
    button2.style.backgroundColor = "#6D8EB5"
    ad2.style.backgroundColor = "#6D8EB5";
    button20.style.visibility = "hidden";
    learn.style.opacity = "1";
}
function animation20() {
    let button2 = document.getElementById ('button2'),
    ad2 = document.getElementById ('ad2'),
    button20 = document.getElementById ('button20'),
    learn= document.getElementById ('learn2');

    button2.style.visibility = "hidden";
    button2.style.backgroundColor = "#dfe3ed";
    ad2.style.backgroundColor = "#dfe3ed";
    button20.style.visibility = "visible";
    learn.style.opacity = "0";
}
function animation3() {
    let button3 = document.getElementById ('button3'),
    ad3 = document.getElementById ('ad3'),
    button30 = document.getElementById ('button30');
    learn= document.getElementById ('learn3');

    button3.style.visibility = "visible";
    button3.style.opacity = "1";
    button3.style.backgroundColor = "#6D8EB5"
    ad3.style.backgroundColor = "#6D8EB5";
    button30.style.visibility = "hidden";
    learn.style.opacity = "1";
}
function animation30() {
    let button3 = document.getElementById ('button3'),
    ad3 = document.getElementById ('ad3'),
    button30 = document.getElementById ('button30');
    learn= document.getElementById ('learn3');

    button3.style.visibility = "hidden";
    button3.style.backgroundColor = "#dfe3ed";
    ad3.style.backgroundColor = "#dfe3ed";
    button30.style.visibility = "visible";
    learn.style.opacity = "0";
}