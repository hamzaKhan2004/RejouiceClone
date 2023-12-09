let loco = () =>{
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

//cursor for video 
let cursorVideo = () =>{
    let play = document.querySelector('.cursor');
    let page1 = document.querySelector("#page1");
    page1.addEventListener("mousemove",(dets) =>{
        gsap.to(play,{
            x:dets.x + "px",
            y:dets.y + "px",
            backgroundColor:"#FF5F38",
            scale:1,
        })
    })
    
    page1.addEventListener("mouseleave",(dets) =>{
        gsap.to(play,{
            scale:0,
        })
    })
    
    
}
cursorVideo();


// animation for menu
let menu = () =>{
    let menubtn = document.querySelector("#menu");
    let closebtn = document.querySelector("#close");
    var   count = 0;
    menubtn.addEventListener("click",()=>{
        if(count == 0){
            gsap.to("#halfnav",{
                top:0,
                duration:.4,
            });
            open_halfNav();
            count++;
        }   
    })
    closebtn.addEventListener("click",()=>{
    if(count == 1){
        gsap.to("#halfnav",{
            top:"-70%",
            delay:0.4,
            duration:.6,
        });
    } 
    count = 0;
    close_halfNav();
    })
}
menu();


//pre loader animation
let load = () =>{
    let loader = document.getElementById("loader");
    tl = gsap.timeline();
    tl.from("#loader>h3",{
        delay:0.6,
        opacity:0,
        x:"70px",
        duration:1,
        stagger:0.2,
    },'same');

    tl.from("#loader>h3",{
        delay:0.9,
        opacity:0,
        x:"70px",
        duration:1.3,
        stagger:0.2,
    });
    tl.to("#loader",{
        opacity:0,
        display:"none",
    })
    tl.from("#page1 #span-div span",{
        y:100,
        opacity:0,
        stagger:0.2,
        duration:0.8,
    })
}
load();


//open and close navigation animation
let open_halfNav = () =>{
    tl = gsap.timeline();
    tl.from("#lftnav > video",{
        scale:0,
        duration:1,
    },'same')

    tl.from("#rghtnav > .down",{
        y:"250",
        stagger:.08,
        duration:1.2,
    },'same')

    .from("#stag,#social-media>h1",{
        x:180,
        stagger:.12,
        duration:1,
        delay:.1,
    },'same')
}

let close_halfNav = () =>{
    tl = gsap.timeline();
    tl.to("#lftnav > video",{
        scale:0,
        duration:2,
    },'same')

    tl.to("#rghtnav",{
        y:"450",
        duration:.9,
    },'same');

    tl.to("#rghtnav",{
        y:"0", 
        delay:1,
    },'initial');

    tl.to("#lftnav > video",{
        scale:1, 
        delay:1,
    },'initial');

    
}
//animtion for left part 
let left = () =>{
    gsap.to(".leftdown > div,.rightdown > div",{
        marginTop:"0px",
        stagger:"0.2",
        opacity:1,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"0% 50%",
            end:"20% 40%",
            scrub:2,
        }
    })
}
left();


//page2 animtion 
let page2 = () =>{
    let disapper = document.querySelector("#disapper");
    let clutter = " ";

disapper.textContent.split("\n").forEach((dets) =>{
    
    clutter += `<div class="hide"><span>${dets}</span></div>`
    disapper.innerHTML = clutter;
})


gsap.to(".hide>span",{
    top:0,
    stagger:"0.2",
    opacity:1,
    duration:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"0% 50%",
        end:"20% 40%",
        scrub:2,
    }
})
}
page2();


// swiper js
let swiper = () =>{
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
      });
}
swiper();

//cursor for page 4
let cursor4 = () =>{
    let play = document.querySelector('.cursor');
    let page4 = document.querySelector("#page4");
    page4.addEventListener("mousemove",(dets) =>{
        gsap.to(play,{
            x:dets.x + "px",
            y:dets.y + "px",
            scale:1,
            backgroundColor:"#000",
        })
    })
    page4.addEventListener("mouseleave",(dets) =>{
        gsap.to(play,{
            scale:0,
            backgroundColor:"#000",

        })
    }) 
}
cursor4();