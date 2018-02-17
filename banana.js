window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.createElement("img");
    img.src = "banana.gif";
    c.width = img.width*2;
    c.height = img.height;
    ctx.width = img.width*2;
    ctx.height = img.height;

    getGIFData(img);

    var counter = 0;
    var counter2 = 2;
    var clicked = false;
    c.onclick = function(){
      if(!clicked)
      {
        //window.setInterval(doFrame, 110);
        window.requestAnimationFrame(doFrame);

        clicked = true;
      }
    }
    
    var doFrame = function(){
      img.gif.drawFrame(ctx, counter);
      img.gif.drawFrame(ctx, counter2, img.width, 0);
    
      if(++counter >= img.gif.length)
      {
         counter = 0;
      }

      if(++counter2 >= img.gif.length)
      {
         counter2 = 0;
      }

      window.setTimeout(window.requestAnimationFrame(doFrame),img.gif.delay);
    }
}