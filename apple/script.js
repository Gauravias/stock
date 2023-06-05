
var h1 = document.querySelector("#first>h1");
var center = document.querySelector("#heading")

setTimeout(function(){
    h1.style.opacity = 0;
},3000)

setTimeout(function(){
   center.style.opacity = 1;
},5000)

var tml = gsap.timeline();

tml.to("#text>h1",{
   scrollTrigger:{
    trigger:"#second",
    start:"top top",
    end:"100% top",
    scrub: 1,
   },
   opacity:0,
   y:10,
   duration:1,
   stragger:1.8,
   ease: Power1
})
.to("#btm",{
   scrollTrigger:{
    trigger:"#second",
    start:"top top",
    end:"110% top",
    scrub: 1,
   },
   opacity:0,
   y:10,
   duration:1,
   stragger:1.8,
})



gsap.to("#one",{
   scrollTrigger:{
   trigger:"#third",
   start:"20% bottom",
   scrub:1,
   end:"100% 40%",
   },
    x:-92,
    duration:3,
    ease: Power1
})

gsap.to("#two",{
   scrollTrigger:{
   trigger:"#third",
   start:"20% bottom",
   scrub:1,
   end:"100% 40%",

   },
    x:93,
    duration:3,
    ease: Power1
})



gsap.from("#inrtext1",{
   scrollTrigger:{
   trigger:"#third",
   start:"50% 50%",
   scrub:1,
   end:"100% 70%",
   },
    x: 100,
    opacity:0,
    duration:3,
    ease: Power1
})
gsap.from("#inrtext2",{
   scrollTrigger:{
   trigger:"#third",
   start:"50% 50%",
   scrub:1,
   end:"100% 70%",
   },
    x: -100,
    opacity:0,
    duration:3,
    ease: Power1
})

gsap.from("#f1>img",{
   scrollTrigger:{
   trigger:"#f1",
   start:"50% 70%",
   end:"center 30%",
   scrub:4
   },
   opacity:0,
   x:-100,
   ease: Power1,
})
gsap.from("#f2>img",{
   scrollTrigger:{
   trigger:"#f1",
   start:"50% 70%",
   end:"center 30%",
   scrub:4
   },
   opacity:0,
   x:100,
   ease: Power1,
})
gsap.from("#name1>img",{
   scrollTrigger:{
   trigger:"#name1",
   start:"50% 70%",
   end:"center 30%",
   scrub:4
   },
   opacity:0,
   x:-100,
   ease: Power1,
})
gsap.from("#name2>img",{
   scrollTrigger:{
   trigger:"#name2",
   start:"50% 70%",
   end:"center 30%",
   scrub:4,
   },
   opacity:0,
   x:100,
   ease: Power1,
})
