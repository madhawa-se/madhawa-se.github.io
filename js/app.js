function animatePro() {
    var elem = $(".skill-graph");
    var pskill = [50, 60, 20, 40, 60];
    for (var i = 0; i < elem.length; i++) {
        //e.eq(i).css("background-color",col[i]);
        elem.eq(i).animate({width: pskill[i] + "%"}, 3000, 'swing');
    }
}
$(document).ready(function () {

    var waypoint = new Waypoint({
        element: document.getElementsByClassName('skills')[0],
        handler: function () {
            animatePro();
        },
        offset: 80
    });
    var waypoint1 = new Waypoint({
        element: document.getElementsByClassName('section6')[0],
        handler: function () {
            $('.send').addClass('animated zoomIn');
        }
    });

});