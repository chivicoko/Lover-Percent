document.getElementById('btn').onclick = () => {
    var firstInput = document.getElementById('firstLover').value;
    var secondInput = document.getElementById('secondLover').value;

    var percent = Math.random() * 100;
    var finalLovePercent = Math.floor(percent) + 1

    document.getElementById('lovePercentOutput').innerHTML =
    "The love between " + firstInput + " and " + secondInput + " is: " + finalLovePercent + "%";
}
