var crsr = document.querySelector("#curser");
// var cursorBlur = document.querySelector("#curser-blur");

document.addEventListener("mousemove", function(dets){
 crsr.style.left = dets.x + "px";
 crsr.style.top = dets.y + "px";
//  cursorBlur.style.left = dets.x - 150 + "25px";
//  cursorBlur.style.top = dets.y - 150 + "25px";
})



   gsap.to("#nav", {  
   backgroundColor: "#000",
   duration:0.5,
   height: "110px",  
   scrollTrigger: {

      trigger: "#nav",
       scroller: "body",
      //  markers: true,
       start:"top -10%",
       end :"top -11%",
       scrub: 1
   }  

  
})
gsap.to("#main",{
   backgroundColor: "#000",
   scrollTrigger:{
      trigger: "#main", 
      scroller:"body",
      // markers: true,
      start:"top -25%",
      end :"top  -70%",
      scrub: 2
      
   }

})