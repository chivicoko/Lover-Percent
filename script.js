var firstInput = document.getElementById("firstLover").val();
var secondInput = document.getElementById("secondLover").val();
alert(firstInput);

var percent = Math.random() * 100;

function calculateLovePercentage() {
    var finalLovePercent = Math.floor(percent) + 1;
    var loverPercent = document.getElementById("lovePercentOutput").innerHTML
    loverPercent = "The love between " + firstInput + " and " + secondInput + " is: " + finalLovePercent + "%";
    return loverPercent;
}

calculateLovePercentage();