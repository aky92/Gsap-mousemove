let cursor=document.querySelector('.cursor');

document.addEventListener('mousemove',(e)=>{
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:0.5
    })
})