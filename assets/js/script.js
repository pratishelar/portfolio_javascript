//Emai validation
function checkEmail() {
    var email = document.getElementById('email');
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }
}
//phone number validation
function checkphone() {
    var x, text;


    x = document.getElementById("phone").value;
    console.log(x);

    if (isNaN(x) || x.length != 10) {
        text = "Input not valid";
        alert(text);
    }

}

//form validation
$(document).ready(function () {


    $('#submit').on('click', function () {
        var valid = true,
            errorMessage = "";

        if ($('#first-name').val() == '') {
            errorMessage += "please enter your first name \n";
            valid = false;
        }
        if ($('#last-name').val() == '') {
            errorMessage += "please enter your last name \n";
            valid = false;
        }

        if ($('#email').val() == '') {
            errorMessage += "please enter your email\n";
            valid = false;
        }

        if ($('#phone').val() == '') {
            errorMessage += "please enter your phone\n";
            valid = false;
        }

        if ($('#message').val() == '') {
            errorMessage += "please enter your message\n";
            valid = false;
        }

        if (!valid && errorMessage.length > 0) {
            alert(errorMessage);
        } else {
            alert("success");
        }


    });
    var availableTags = [
      "Pratish",
      "Abhishek",
      "Rupesh",
      "sarpreet",
      "Jagpinder"
    ];

    $("#first-name").autocomplete({
        source: availableTags
    });

});
//footer date
function getDate() {
    var today = new Date();
    var year = today.getFullYear();
    document.getElementById("currentDate").innerHTML = year;
}

getDate();


//function switchfunction() {
//
//    var seltheme = document.getElementById("selecttheme").value;
//    switch (seltheme) {
//        case "demotbl":
//            document.getElementById("switchtable").className = "demotbl";
//            break;
//
//        case "demotbl2":
//            document.getElementById("switchtable").className = "demotbl2";
//            break;
//
//        case "demotbl3":
//            document.getElementById("switchtable").className = "demotbl3";
//            break;
//
//        default:
//            document.getElementById("switchtable").className = "demotbl";
//            break;
//    }
//
//}

//tab color change
$(".tab-switch").click(function () {
    var myElements = $(".tab-switch");
    for (var i = 0; i < myElements.length; i++) {
        var val = myElements[i].value;
        console.log(val);
        switch (val) {
            case "a":
                document.getElementById("tabtext1").style.backgroundColor = "antiquewhite";
                break;

            case "b":
                document.getElementById("tabtext2").style.backgroundColor = "coral";
                break;

            case "c":
                document.getElementById("tabtext3").style.backgroundColor = "burlywood";
                break;

            default:
                //    document.getElementsByClassName("tab-content").style.backgroundColor = "white";
                break;
        }
    }
});
