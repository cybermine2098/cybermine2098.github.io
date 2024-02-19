function findbuttons() {
    let SecretButtons = document.getElementsByClassName("btn").length;
    let realbuttons = 150 - SecretButtons;
    checkwin(SecretButtons,realbuttons);
}
function checkwin(btn,realbuttons) {
    if (btn == 150) {
        document.getElementById("space").innerHTML += "<button onclick=\"next()\" class=\"btn btn-success\">Congrats, you win.</button>";
    }else{
        document.getElementById("space").innerHTML += "<button class=\"btn btn-danger col-md-"+Math.floor(Math.random()*5)+"\">This Button has been spawned. you need " + realbuttons + " more buttons</button>";
    }
}
function next(){
    window.location.replace("buttonaim.html");
}