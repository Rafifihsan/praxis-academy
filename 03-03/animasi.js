let cat = document.querySelector("img");
let angel = Math.PI / 2;
function animate(time,lastime){
    if(lastime !=null){
        angel += (time - lastime) * 0.001;
    }
    cat.style.top = (Math.sin(angel)*20) + "px";
    cat.style.left = (Math.cos(angel)*20) + "px";
    requestAnimationFrame(newTime => animate(newTime,time));
}
requestAnimationFrame(animate);