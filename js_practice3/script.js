
 const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        //console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
    };
    document.querySelector("#center").addEventListener("mousemove",
        throttleFunction((dets) => {
            var div = document.createElement("div");
            div.classList.add('imagediv');
            div.style.left = dets.clientX + 'px';
            div.style.top = dets.clientY + 'px';
            var img = document.createElement("img");
            img.setAttribute("src", "https://images.unsplash.com/photo-1730545160269-5f54484782da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8");
            div.appendChild(img);
            document.body.appendChild(div);
            
            gsap.to(img,{
                y:"0",
                duration:0.6,
                ease:"power1"
            })
            gsap.to(img,{
                y : "100",
                ease:'power2',
                duration:0.6,
            })
            setTimeout(function(){
                div.remove();
            },2000)
        }, 400));