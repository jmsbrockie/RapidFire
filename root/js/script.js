// jQUERY (James)

$(document).ready(function () {

    // NAV FUNCTION TO HIDE ALL SECTIONS EXCEPT TARGET
    function navigateTo(targetId) {
        $('section').hide();
        $(targetId).fadeIn(300);
        window.scrollTo(0, 0);
    }

    // HIDE ALL SECTIONS EXCEPT SPLASH SCREEN
    $('section').hide();
    $('#splash-screen').show();


    // SPLASH SCREEN to ARENA SELECTION FLOW 
    
    $('#start-btn').click(function (e) {
        e.preventDefault();
        navigateTo('#ArenaSelection');
    });


    // SELECTION SCREEN to DETAIL FLOW 

    $('#selectUrban').click(function () {
        navigateTo('#urban-detail');
    });

    $('#selectForest').click(function () {
        navigateTo('#forest-detail');
    });

    $('#selectIndoor').click(function () {
        navigateTo('#indoor-detail');
    });


    // DETAIL to BOOKING FORM FLOW

    $('.bookNow').click(function () {
        navigateTo('#BookingPage');
    });


    // BACK NAV LOGIC FOR ALL SCREENS 

    $('.nav-item-button-1').click(function () {
        // Find the current visible section by checking which one is currently displayed
        const currentScreen = $(this).closest('section').attr('id');

        if (currentScreen === 'ArenaSelection') {
            navigateTo('#splash-screen');
        } else if (currentScreen === 'urban-detail' || currentScreen === 'forest-detail' || currentScreen === 'indoor-detail') {
            navigateTo('#ArenaSelection');
        } else if (currentScreen === 'BookingPage') {
            navigateTo('#ArenaSelection'); 
        }
    });


    // NAVBAR LINKS (HOME & SELECTION) 
    
    // Logo & Home navbar icon --> go to Splash-Screen
    $('.HeadImg, .nav-item-button-2').click(function () {
        $('nav').show(); 
        navigateTo('#splash-screen');
    });

    // Selection navbar icon --> go to Arena Selection
    $('.nav-item-button-3').click(function () {
        $('nav').show(); 
        navigateTo('#ArenaSelection');
    });


    // BOOKING FORM PROCESSING & QR CODE GENERATION 
    // Booking form --> Confirmation Screen with QR code
    $('.final-submit-btn').click(function (e) {
        e.preventDefault();

        // shows processing
        const $btn = $(this);
        $btn.text("Processing...").prop('disabled', true);

        setTimeout(() => {
            // Generates Random RapidFire ID 
            const randomID = "RF-" + Math.floor(Math.random() * 90000 + 10000);
            $('#booking-id').text(randomID);

            // Wipe out any old QR code 
            $('#qrcode').empty();

            

            // Direct view transition to confirmation layout wrapper before drawing QR
            navigateTo('#booking-success');
            $('#booking-success').css('display', 'flex'); 

            // Compiles the QR code with RapidFire ID
            new QRCode(document.getElementById("qrcode"), {
                text: randomID,
                width: 128,
                height: 128,
                colorDark: "#000000", 
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });

            // Restore button state and reset form for next booking
            $btn.text("BOOK NOW").prop('disabled', false);
            $('.booking-form')[0].reset();
        }, 1000); // one second delay designed to simulate processing time! 
    });


    // REFRESH APP FROM CONFIRMATION SCREEN to SPLASH SCREEN
    $('#final-home-btn').click(function () {
        navigateTo('#splash-screen');
    });

});
