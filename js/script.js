$(document).ready(function () {

    var timeoutId;
    var currentImage;

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    
    $('.vid-card').on('mouseout', function () {
        $(this).css("display", "none");
        $('.img-card').css("display", "block");    
    });


    $(".img-card").hover(function(e) {
        $('.vid-card').get(0).currentTime = 2    
        if (!timeoutId) {
            currentImage = this;
            timeoutId = window.setTimeout(function() {
                timeoutId = null; // EDIT: added this line
                $(currentImage).css("display", "none");
                $('.vid-card').css("display", "block");  
        }, 500);
        }
    },
    function () {
        if (timeoutId) {
            window.clearTimeout(timeoutId);
            timeoutId = null;
        }
        else {
        // $("#SeeAllEvents").slideUp('slow');
        }
    });


});