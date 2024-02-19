let selectednumber = 0;
let x = 0;
let internal = "";
function move(x) {
    selectednumber = selectednumber + x
    document.getElementById("output").innerHTML = "Next number: " + selectednumber + "";
}
function addnumber() {
    if (x == 0) {
        document.getElementById("code").innerHTML = selectednumber;
        internal += selectednumber;
        x = x + 1;

    } else {
        document.getElementById("code").innerHTML += selectednumber;
        internal += selectednumber;
    }
}

function confirm() {
   let submission;
    submission = prompt("are you sure +1-" +internal+ " is correct? y/n");
    if (submission == "y"){
if (internal.length == 12){
            document.getElementById("secret").innerHTML = "Submitted!";
            document.getElementById("moveon").innerHTML = "<form action=\"susi.html\"><button class=\"smaller-button\">Phone number stolen smh. move on.</button></form>";
}else
{
    alert("Incorrect phone number. you fail :(")
    window.location.assign("file:///home/chronos/u-1572be158ab9025a1bd9e8c605dfffeff85d9cf5/MyFiles/Main/webfiles/lev1.html?");
}
}
}
