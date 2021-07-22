window.onload = function assignment() {
   var p = document.getElementById("p");
   var box = document.getElementById("box");
   var a=0;
   var counter;

   box.addEventListener('mouseover',function () {
    counter = setInterval(() => {
      a++;
      p.innerHTML = a;
     }, 100);
   })
   box.addEventListener('mouseout',function () {
     clearInterval(counter);
   })
};
