function animatePro() {
    var elem = $(".skill-graph");
    var pskill = [50, 40, 45, 40, 50, 20, 30];
    for (var i = 0; i < elem.length; i++) {
        //e.eq(i).css("background-color",col[i]);
        elem.eq(i).animate({width: pskill[i] + "%"}, 2000, 'swing');
    }
}

function getElemHightDif(outerBox) {

}
$(document).ready(function () {
    var message = {};
    message.email = "madhawa.aaa@gmail.com";
    message.subject = "message from portfolio";
    message.body="from:";
    
    message.construct=function(){
        var body=$("#message").val();
        var name=$("#name").val();
        var content="mailto:"+message.email+"?subject="+message.subject+"&body="+message.body+name+"%0D"+body;
        $("#send").attr("href",content);
    }
    var waypoint = new Waypoint({
        element: document.getElementsByClassName('section4')[0],
        handler: function () {
            animatePro();
        },
        offset: 80
    });

    $('body').animate({
        // scrollTop: $(".middle").offset().top
    }, 2000);


    $('.work-img').mouseenter(
            function () {
                var outerHeight = $(this).height();
                var innerHeight = $(this).find('img').height();
                if (outerHeight && innerHeight) {
                    var dif = outerHeight - innerHeight;

                    $(this).find("img").animate({
                        top: dif,
                    }, 3000, function () {
                        // Animation complete.
                    })
                }


            }
    );
    $('.work-img').mouseleave(
            function () {
                $(this).find("img").stop();
                $(this).find("img").animate({
                    top: 0,
                }, 3000, function () {
                    // Animation complete.
                })
            }
    );
    $('.underline-anim').click(function (e) {
        scrollSmooth(e);
        return false;
    });

    $('#message').keydown(function(){message.construct()});
    $('#name').keydown(function(){message.construct()});
});

function scrollSmooth(e) {
    //alert("called");
    var scrollLocs = ["aboutme", "skills", "work", "contact"];
    var target = $(e.target);
    var index = $('.underline-anim').index(target);
    //alert(index);
    $('html, body').animate({
        scrollTop: $("#" + scrollLocs[index]).offset().top
    }, 1000);
}