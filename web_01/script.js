
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var timeout;
//so basically what we want here is tht the circle should skew the way it moves ,skew means chepta but the problem here is that when we move rapidly it might be very chepta we dont want tht so we fix it by setting minimum and maximum value and second thing which we want is ki while the mouse isnt moving it should comeback to its orignal value(scale)
function circleSkew(){
    clearTimeout(timeout);
    //define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;
        //ok so now we got the differnce value according to which we will vary how much skew will the circle will but but butt we have to set min nd max taki agr ko value uske near by ho toh vo round off hoke wahi tk jaaye taking min value as 0.8 and max value as 1.2 
        // we call this as "clamp", this is available in gsap
        //search for gsap utils and seee for clamp()


        xscale = gsap.utils.clamp(0.8,1.2,xdiff);
        yscale = gsap.utils.clamp(0.8,1.2,ydiff);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMousefollower(xscale,yscale);
        // so now we want after skewing it should come back to its orignal scale so we set timeout , so tht once the mouse stop moving then it will get back to its origanl scale tht is one.
        timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        },100)

    });
}
circleSkew();
function circleMousefollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}
function firstpageAnimation(){
    var t1 = gsap.timeline();
    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
        .to(".boundinglem",{
        y: 0,
        ease: Expo.easeInOut,
        duration:1.5,
        delay:-1,
        stagger: 0.2
        })
        .from("#homefooter",{
        y:'-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut
        })
}
firstpageAnimation();
circleMousefollower();

//next thing we wanna do is show images while mousemove.
//select elem , apply eventlistener mousemove , know the positon of mouse, now place the img in the positon of mouse, rotate while moving

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrotate = 0;
    elem.addEventListener("mousemove", function(dets){
        // now hum nai chahte ki humri image screen kahi bhi ghume , hum chahte h ki vo us particular div ke within ya as pas hi rhe toh phele toh hum humra mouse kha par h us position se humre div ke top ka diff nikalege uske liye hum ek function use krte h getboundingclientReact(), iski details ke liye google it
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrotate = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease: "power1",
            top:diff,
            left:dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrotate)
        });
    });

    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease: "power3"
        });
    });
});