/* Typed js */
var typed = new Typed('.type', {
    strings: [
        "a Programmer",
        "a Web Designer",
        "a Web Developer",
        "a Graphic Designer",
        ],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true
});

/* Team section */

$("document").ready(function(){

    $(".team-btn").click(function(){

        $(".team-content").slideToggle(2000);

    });

});