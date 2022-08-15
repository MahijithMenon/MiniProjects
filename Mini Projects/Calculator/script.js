// let btn=document.getElementsByClassName('bt');
// console.log(btn);
// btn.forEach(function(){

// })
// let textArea=document.getElementById('textArea');
// let btn=document.querySelectorAll("input[type=button]");
// btn.forEach()
function display(value) {
    document.getElementById("textArea").value += value;
}
function calculate() {
    var p = document.getElementById("textArea").value;
    var q = eval(p);
    document.getElementById("textArea").value = q;
}