window.addEventListener("mousemove",function(dets){
    var rect = document.getElementById("rect");
    var xval = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100 + rect.getBoundingClientRect().width/2,
        window.innerWidth - (200 + rect.getBoundingClientRect().width/2),
        dets.clientX);
    gsap.to("#rect",{
        left: xval + "px",
        ease:"power3"
    });
});