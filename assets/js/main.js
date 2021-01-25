
$(document).ready(function(){
    $('#footer-go-back').on("click", function(){
        window.history.back();
    });
    // $('#main-page-highlight').on("mouseenter", function() {
    //     console.log("mouse entered");
    //     var toHighlight = $('#main-page-highlight');
    //     highlightAnimation(toHighlight, true, 100);
    // });

    // $('#main-page-highlight').on("mouseleave", function() {
    //     console.log("mouse leave");
    //     var toHighlight = $('#main-page-highlight');
    //     highlightAnimation(toHighlight, false, 100);
    // });

    // function highlightAnimation($elem, show, duration) {
    //     var startPos;
    //     var endPos;
    //     if(show) {
    //         startPos = '100%';
    //         endPos = '50%';
    //     } else {
    //         startPos = '50%';
    //         endPos = '100%';
    //         $elem.removeClass('highlighted');
    //     }
    //     var highlight = $('<div />').addClass('highlight_box').css('right', startPos);
    //     $elem.append(highlight);
    //     highlight.animate({right: endPos}, duration, function() {
    //         highlight.remove();
    //         if(show) {
    //             $elem.addClass('highlighted');
    //         }
    //     });
    // }

        // document.getElementById("main-page-highlight").offsetHeight = highlightElementHeight;
        // document.getElementById("main-page-highlight").offsetWidth = highlightElementWidth;
       
        // $('#test-highlight').css('height', $('.navText').css('height'));
        // $('#test-highlight').css('width', $('.navText').css('width'));
        // $('#test-highlight').css('margin-bottom', "-"+($('.navText').css('height')));
        // console.log($('#test-highlight').css('height'));
        // console.log("-"+$('#test-highlight').css('height'));
        // console.log($('#test-highlight').css('width'));
        // console.log($('#test-highlight').css('margin-top'));

});

