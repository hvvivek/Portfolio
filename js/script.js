$(document).ready(function () {

    var timeoutId;
    var currentImage;
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    
    $('.vid-card').on('mouseout', function () {
        $(this).css("display", "none");
        $(this)[0].pause();
        $(this)[0].currentTime = 0;
        $('.img-card').css("display", "block");    
    });


    $(".img-card").hover(function(e) {
        if (!timeoutId) {
            currentImage = this;
            $( ".vid-card[toggle='" + $(currentImage).attr('target') + "']" )[0].play()  

            timeoutId = window.setTimeout(function() {
                timeoutId = null; // EDIT: added this line
                $(currentImage).css("display", "none");
                $( ".vid-card[toggle='" + $(currentImage).attr('target') + "']" ).css("display", "block");  
                // console.log($(currentImage).attr('toggle'));
                // $('.vid-card').css("display", "block");  
        }, 700);
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

        $(".content").on('mousewheel', function(event, delta) {
            // console.log(event.originalEvent.deltaY)
        this.scrollLeft += (event.originalEvent.deltaY);
        event.preventDefault();
        });

});

