/* SPLASH SCREEN (lucy) */

/* SELECTION SCREEN (Amir) */

/* DETAILS/DESCRIPTION SCREEN (Kevin) */

/* DETAILS/FORM SCREEN (Josh) */
$(document).ready(function () {
    $("#booking-success").hide()

    $(".BookNow").on("lick" , function(e) {
        e.preventDefault();
        $("#BookingPage").hide()
        $("#booking-success").show()
    })
})


/* CONFIRMATION SCREEN (James) */