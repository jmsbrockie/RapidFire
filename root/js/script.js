/* SPLASH SCREEN (lucy) */




/* SELECTION SCREEN (Amir) */


$(document).ready(function () {

    
    $(".DetailPage").hide();

    // URBAN
    $("#selectUrban").click(function () {
        $("#ArenaSelection").hide();
        $(".DetailPage").hide();
        $("#UrbanArena").fadeIn(300);
    });

    // FOREST
    $("#selectForest").click(function () {
        $("#ArenaSelection").hide();
        $(".DetailPage").hide();
        $("#ForestArena").fadeIn(300);
    });

    // INDOOR
    $("#selectIndoor").click(function () {
        $("#ArenaSelection").hide();
        $(".DetailPage").hide();
        $("#IndoorArena").fadeIn(300);
    });

});


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
            colorDark: "#000",
            colorLight: "#fff",
            correctLevel: QRCode.CorrectLevel.H
        });

        /* DETAILS/FORM SCREEN (Josh) */

        $("#BookingPage").hide();
        $("nav").hide();
        $("#booking-success").css("display" , "flex");
    });



/* CONFIRMATION SCREEN (James) */

$('#final-home-btn').click(function () {
    $('#booking-success').hide();
    $('nav').show();
    $('#splash-screen').css('display', 'block');
    window.scrollTo(0, 0);
});

}); 
