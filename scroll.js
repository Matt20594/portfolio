//Default active class on furst button
$('#s1').addClass("active");

/*-----Smooth scrolling when clicking a navigation button-----*/
$("#s1").click(function() {
    $('html, body').animate({
        scrollTop:$("#panel1").offset().top-0
    }, 1000);
    return false;
});

$("#s2").click(function() {
    $('html, body').animate({
        scrollTop:$("#panel2").offset().top-0
    }, 1000);
    return false;
});

$("#s3").click(function() {
    $('html, body').animate({
        scrollTop:$("#panel3").offset().top-0
    }, 1000);
    return false;
});

// When a user clicks on the <a> with id="settings" activate the function cmsbuttons
document.getElementById("settings").onclick = function() {cmsbuttons()};

/*toggle between hiding and showing the dropdown content */
function cmsbuttons() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

/*-----Using jquery waypoints to change active on scroll-----*/
$('#panel2').waypoint(function() {
    $("#s1").removeClass("active");
    $("#s3").removeClass("active");
    $("#s2").addClass("active");
}, { offset: 101 });

$('#panel3').waypoint(function() {
    $("#s1").removeClass("active");
    $("#s2").removeClass("active");
    $("#s3").addClass("active");
}, { offset: 101 });

$('#panel1').waypoint(function() {
    $("#s2").removeClass("active");
    $("#s3").removeClass("active");
    $("#s1").addClass("active");
}, { offset: -50 });