/* SPLASH SCREEN (lucy) */

/* SELECTION SCREEN (Amir) */

/* DETAILS/DESCRIPTION SCREEN (Kevin) */

/* DETAILS/FORM SCREEN (Josh) */
$(document).ready(function () {
    $("#booking-success").hide();

    $(".BookNow").on("click", function
(e) {
        e.preventDefault();

        $("#BookingPage").hide();
        $("nav").hide();
        $("#booking-success").css("display" , "flex");
    });
});


/* CONFIRMATION SCREEN (James) */