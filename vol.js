var entire=document.getElementById("entire");
var sph=document.getElementById("sph"), cu=document.getElementById("cu");
var input=document.getElementsByTagName("INPUT"),s=0,c=0;
var container=document.getElementById("container");
var circle=document.getElementById("circle");
var sphere=document.getElementById("sphere");
var cube=document.getElementById("cube"),sv,cv,maxv;
var tex=document.getElementById("tex"),result=document.getElementById("result");
var sphv=document.getElementById("sphv"), cuv=document.getElementById("cuv"), win=document.getElementById("win"),p=0; 

setInterval(function(){
	var num;
	if(window.innerWidth>window.innerHeight){
		num=((window.innerWidth-0.8*window.innerHeight)/(2*window.innerWidth))*100;
		entire.style.left=num.toString()+"vw";
		entire.style.top="10vh";
	}

	else{

		num=((window.innerHeight-0.8*window.innerWidth)/(2*window.innerWidth))*100;
		entire.style.left="10vw";
		entire.style.top=num.toString()+"vw";
	}
},1);

sph.onclick=function(){
	if(sph.value.substring(0,1)=="R") {sph.value=""; s=1;}
	if(cu.value.substring(0,1)=="") cu.value="Side length of Cube?";
}

cu.onclick=function(){
	if(sph.value.substring(0,1)=="") sph.value="Radius of Sphere?";
	if(cu.value.substring(0,1)=="S") cu.value="";
}
/*
document.onclick=function(){
	if(sph.value=="" && !s) sph.value="For Sphere";
}
*/
container.onclick=function(){
	if(sph.value.substring(0,1)=="") sph.value="Radius of Sphere?";
	if(cu.value.substring(0,1)=="") cu.value="Side length of Cube?";
}

function palin(str) {
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function check(){
	if(!isNaN(sph.value) && !isNaN(cu.value)) return 1;
	else return 0;
}

function fillDiv(){
	sphv.innerHTML="Sphere: "+sv;
	cuv.innerHTML="Cube: "+cv;
	if(sv>cv){
		win.innerHTML="Winner: Sphere";
	}
	if(cv>sv){
		win.innerHTML="Winner: Cube";
	}
		
	if(cv==sv){
		win.innerHTML="Winner: Both";
	}
}
function err(){
	sphv.innerHTML="Sphere: (:P";
	cuv.innerHTML="Cube: (:P ";
	win.innerHTML="Winner: (:P";
}

function compute(){
	if(check()) {
		sv=4*Math.PI*Math.pow(parseFloat(sph.value),3)/3;
		console.log(sv);
		cv=Math.pow(parseFloat(cu.value),3);
		console.log(cv);
		fillDiv();
		if(palin(cv.toString())){
			p=1;
			container.className="cont";
			setTimeout(function(){
				container.style.background="#E91E63";
				alert("Volume of the cube is a Palindrome");
			},510);	

		}
	}
	else err();
}

circle.onclick=function(){
	compute();
	result.style.zIndex="1";
	setTimeout(function(){
		circle.style.zIndex="-1";
	},200);
	
	tex.className="texo"
	cube.className="cubeo";
	sphere.className="sphereo";
	setTimeout(function(){
		cube.style.top="56.5685424949238vmin";
		sphere.style.top="-56.5685424949238vmin";
	},800);
	setTimeout(function(){
		tex.innerHTML="Retry";
	},400)
	setTimeout(function(){
		tex.style.top="60vmin";
		tex.style.fontSize="4vmin";
	},800)
}

function clear(){
	sph.value="Radius of Sphere?";
	cu.value="Side length of Cube?";
}

tex.onclick=function(){
	if(p){
		container.className="con";
		p=0;
		setTimeout(function(){
			container.style.background="white";
		},500);
	}
	else{
		container.style.background="white";
	}
	setTimeout(function(){
		result.style.zIndex="-1";
	},300);
	setTimeout(function(){
		circle.style.zIndex="4";
	},600);
	clear();
	tex.className="texc"
	cube.className="cubec";
	sphere.className="spherec";
	setTimeout(function(){
		cube.style.top="0";
		sphere.style.top="0";
	},800);
	setTimeout(function(){
		tex.innerHTML="Compute";
	},400);
	setTimeout(function(){
		tex.style.top="30vmin";
		tex.style.fontSize="7vmin";
	},800);
}