$(document).ready(function () {
    $("#spinme").click(function () {
        spin("one");
        spin("two");
        spin("three");
        matchingBoxes();
    })

    function spin(tbId) {

        var counter;       

        for (counter = 0; counter < 10; counter++) {

            var rndNum = Math.floor(Math.random() * 10);

            if (rndNum == 0 || rndNum > 3)

                continue;

            var el = document.getElementById(tbId);

            if (rndNum == 1) {

                el.className = "one";

            } if (rndNum == 2) {

                el.className = "two";

            } if (rndNum == 3) {

                el.className = "three";

            }
        }

    }

    function matchingBoxes() {
        var sbx1 = document.getElementById("one").getAttribute("class");
        var sbx2 = document.getElementById("two").getAttribute("class");
        var sbx3 = document.getElementById("three").getAttribute("class");

        if (sbx1 === sbx2 && sbx1 === sbx3) {
            document.getElementById("msg").innerHTML = "Congratulations, you won!";
        }
        else {
            document.getElementById("msg").innerHTML = "Sorry, try again";
        }
    }
    $("#msg1").
        document.getElementById('clickme').onclick = function () {
            ('hello world')
        }

})

$("#spinme").mouseover(function () {
    $("#spinme").text("SPIN NOW");
})
$("#spinme").mouseout(function () {
    $("#spinme").text("SPIN AGAIN");
})

$("#clickme").click(function () {
    $("div").fadeOut(2000);
    $("#msg1").fadeIn(2000);
})