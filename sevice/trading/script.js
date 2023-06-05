$(document).ready(function () {
    $('.sliding-btn').on('click', function () {
        $('.slide-content').css('display', 'block', 0.9);
        $('.content').css('display', 'none');
        $('.circle1').animate({
            left: '3%',
        },"duration");
        $('.circle2').animate({
            left: '18%'
        })
        $('.circle3').animate({
            left: '32%'
        });
        $('.circle4').animate({
            left: '5%'
        });
        $('.circle5').animate({
            left: '45%'
        });
        $('.gif img').animate({
            left: '13%'
           
        })
    });
    $('.arrow').on('click', function () {
        $('.slide-content').css('display', 'none');
        $('.content').css('display', 'block');
    
    $('.circle1').animate({
            left: '38%',
        },"1000");
        $('.circle2').animate({
            left: '58%'
        })
        $('.circle3').animate({
            left: '68%'
        });
        $('.circle4').animate({
            left: '46%'
        });
        $('.circle5').animate({
            left: '78%'
        });
        $('.gif img').animate({
            left: '45%'
        })
    });
});