/* SPLASH SCREEN (lucy) */

/* SELECTION SCREEN (Amir) */

/* DETAILS/DESCRIPTION SCREEN (Kevin) */

/* DETAILS/FORM SCREEN (Josh) */
$(document).ready(function () {
    $("#booking-success").hide();

    $(".BookNow").on("click", function
(e) {
        e.preventDefault();

    /* QR CODE GENERATION (James) */

        // Random ID 
        const randomID = "RF-" + Math.floor(Math.random() * 90000 + 10000);
        $('#booking-id').text(randomID);

        // Clear previous QR code
        $('#qrcode').empty();

        // Generate QR code
        new QRCode(document.getElementById("qrcode"), {
            text: randomID,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        /* DETAILS/FORM SCREEN (Josh) */

        $("#BookingPage").hide();
        $("nav").hide();
        $("#booking-success").css("display" , "flex");
    });
});


/* CONFIRMATION SCREEN (James) */

$('#final-home-btn').click(function () {
    $('#booking-success').hide();
    $('nav').show();
    $('section:first').css('display', 'block');
    window.scrollTo(0, 0);
});
