document.getElementById('btn').onclick = () => {
    var firstInput = document.getElementById('firstLover').value;
    var secondInput = document.getElementById('secondLover').value;

    var percent = Math.random() * 100;
    var finalLovePercent = Math.floor(percent) + 1

    if (finalLovePercent >= 80) {
        document.getElementById('lovePercentOutput').innerHTML =
        "The love between you and " + secondInput + " is: " + finalLovePercent + "%. Your love for each other is deeper than the oceans! 💓 💪";
    }else if(finalLovePercent >= 40 && finalLovePercent < 80){
        document.getElementById('lovePercentOutput').innerHTML =
        "The love between you and " + secondInput + " is: " + finalLovePercent + "%. It's growing fast! 💓";
    } else{
        document.getElementById('lovePercentOutput').innerHTML =
        "The love between you and " + secondInput + " is: " + finalLovePercent + "%. Needs more nourishment...";
    }

}
