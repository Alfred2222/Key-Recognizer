canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode
    console.log(keypressed);

    if((keypressed  >=97 && keypressed  <=122)|| (keypressed >=65 && keypressed<= 90)){
        alphabet_key();
        document.getElementById("d1").innerHTML="You pressed an Alphbet key";
        console.log("alphabet key");
    }
    else if(keypressed >=48 && keypressed <=57){
         Number_key();
        document.getElementById("d1").innerHTML="you pressed a Number Key";
        console.log("Number key");
    }
   else if (keypressed >=37 && keypressed <=40){
       arrow_key();
       document.getElementById("d1").innerHTML="you pressed an Arrow Key";
       console.log("Arrow key");
   }
   else{
       other_key();
       document.getElementById("d1").innerHTML="you pressed function Key";
       console.log("other key");
   }
    }

    function alphabet_key() {
        img_image="Alpkey.png";
        add();
    }

    function Number_key(){
        img_image="numkey.png";
        add();
    }

    function arrow_key(){
        img_image="otherkey.png"
        add();
    }

    function other_key(){
        img_image="otherkey.png"
        add
    }


   