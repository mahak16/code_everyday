// gsap.to("#box1",{
//     x:800,
//     duration:2,
//     delay:1
// })
// gsap.to("#box2",{
//     x:500,
//     y:800,
//     duration:2,
//     delay:1
// }) 


// gsap.to is used to move element from inital positon to final position whereas gsap.from is used to move element from final to initial positon. if the element is already in inital state how will it come back to initial sate???
// so the ans is tht it will first move to the final state then move back to initl state
// this gsap.from is very essential in animations as we want after moving, all elements should come back to its inital state


//difference between gasp.to and  gsap.form
/*gsap.to("#box1",{
    x:1000,
    duration:2,
    delay:1
})
gsap.from("#box2",{
    x:1000,
    duration:2,
    delay:1
})*/

//appplying css properties within gsap

/*gsap.to("#box1",{
    x:1000,
    duration:5,
    delay:1.5,
    rotate:180,
    borderRadius:50
})*/

//some fun activities

/*gsap.from("h1",{
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:1
})*/

//repeat , yoyo properties

gsap.to("#box1",{
    x:1000,
    duration:1,
    delay:1,
    rotate:360,
    repeat:-1,//infinite
    yoyo:true
})

//timeline property

