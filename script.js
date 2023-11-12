let cursor = document.querySelector('.cursor');
let cursor_blur=document.querySelector('.cursor-blur');

document.addEventListener('mousemove',function(dets){
    cursor.style.left= dets.x+-9+12+"px"
    cursor.style.top= dets.y+-9+"px"

    cursor_blur.style.left= dets.x-200+"px"
    cursor_blur.style.top= dets.y-200+"px"
    // cursor_blur.style.transition="0.3s"

})

var h4ll=document.querySelectorAll('.nav h4')

h4ll.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
        cursor.style.scale=4
        cursor.style.border="1px solid #fff"
        cursor.style.backgroundColor="transparent"
    })
    elem.addEventListener('mouseleave',function(){
        cursor.style.scale=1
        cursor.style.border="0px solid #64cf1d"
        cursor.style.backgroundColor="#64cf1d"
    })
})





gsap.to(".nav",{
    backgroundColor:"black",
    height:"100px",
    // duration:0.6,

    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        // end:"top -11%",
        scrub:1 
    }

})


gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -50%",
        end:"top -80%",
        scrub:1
    }
})



gsap.from(".about-us img,.about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
})


gsap.from(".colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:".colon1",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 39%",
        scrub:5

    }
})
gsap.from(".page3 img",{
    y:80,
    x:80,
    scrollTrigger:{
        trigger:".page3 img",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:5

    }
})



gsap.from(".page4 h1",{
    y:40,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3

    }

})