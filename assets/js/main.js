
// $(document).ready(function(){
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

// });

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 100 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.3vw solid #000}";
    document.body.appendChild(css);
};

