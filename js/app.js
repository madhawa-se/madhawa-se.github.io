function animatePro() {
    var elem = $(".skill-graph");
    var pskill = [50, 40, 45, 40, 50, 20, 30];
    for (var i = 0; i < elem.length; i++) {
        //e.eq(i).css("background-color",col[i]);
        elem.eq(i).animate({width: pskill[i] + "%"}, 2000, 'swing');
    }
}
$(document).ready(function () {

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

});