const throttleFunction = (func, delay) => {


    let prev = 0;
    return (...args) => {

        let now = new Date().getTime();


        console.log(now - prev, delay);


        if (now - prev > delay) {
            prev = now;


            return func(...args);
        }
    }
};
document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.toggle("divimage");
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px'


    var img = document.createElement("img");
    img.setAttribute("src" ,"https://cdn.pixabay.com/photo/2023/09/09/08/57/mountain-8242717_1280.jpg");
    div.appendChild(img);

      
    document.body.appendChild(div);

 gsap.to(img,{
    y :"0",
    ease : Power1,
    duration:.2,

 })
  gsap.to(img,{
    y: "100%",
    ease : Power2,
    delay:.3
  })



    setTimeout(function () {
        div.remove()
    }, 2000);
}, 200)
);



