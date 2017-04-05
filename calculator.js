

/*$(document).ready(function() {
	$(".e").click(function() {
		$("#input").css("background-color","red");
});*/

var bar=document.getElementById("bar"),k=1,cover=document.getElementById("cover");
var calc=document.getElementById("calc"), lcm=document.getElementById("lcm"),hcf=document.getElementById("hcf");
var Ans,text=document.getElementById("header"),c=1;
var b=document.getElementById("b"),display=document.getElementById("display"),output=document.getElementById("output"),buttons=document.getElementById("buttons");
var alter=document.getElementById("alter");
var comp=document.getElementById("buton");
var one=document.getElementById("one"),two=document.getElementById("two"),l,h,tabc=document.getElementById("tabc"),nc=0,nl=0,nh=0,tablc=document.getElementById("tablc");
var tabll=document.getElementById("tabll"),tablh=document.getElementById("tablh");
var tabl=document.getElementById("tabl"),tabh=document.getElementById("tabh");
var hist=document.getElementById("hist"),h=1;
var history=document.getElementById("histy"),current;
var result=document.getElementById("result");
var p;

function power(){
	tablc.style.zIndex="2";
	tabll.style.zIndex="1";
	tablh.style.zIndex="1";
	p=document.getElementById("display").value;
	var q=0,i=0,j=0,key=0;
	
	while(j<p.length){ if(p[j]=='^') key=1;j++}
	
	if(key){
		while(p[i]!='^'){
			q+=p[i];
			i++;
		}
		if(p[0]=='A') q=Ans;
		var r=p.substring(i+1,p.length);
		Ans=Math.pow(q,r);
		newRow();
		document.cal.output.value=Ans;
		document.cal.display.value="Ans";
	}
	
	else if(p.substring(0,4)=='Ans+')
	{
		var s=p.substring(4,p.length);
		Ans=eval(Ans+'+'+s);
		newRow();
		document.cal.output.value=Ans;
		document.cal.display.value="Ans";
	}
	
	else{
		Ans=eval(p);
		newRow();
		document.cal.output.value=Ans;
		document.cal.display.value="Ans";
	}
	
}

function newRow(){
	nc++;
	var newRo=tabc.insertRow(-1);
	var cell1 = newRo.insertCell(0);
    var cell2 = newRo.insertCell(1);
    var cell3 = newRo.insertCell(2);
    var cell4 = newRo.insertCell(3);
    var input = document.createElement('input');
    newRo.id="tabcr"+nc;
    cell2.colSpan=3;
    cell1.innerHTML = nc;
    cell2.innerHTML = p;
    cell3.innerHTML= Ans;;
    input=document.createElement("input");
    cell4.appendChild(input);
    input.id="tabc"+nc;
    input.className="inp";
}
function back(){
	var p=document.getElementById("display").value;
	var q=0;
	q=p.substring(0,p.length-1);
	document.cal.display.value=q;
	document.cal.output.value='';
}

function inv(){
	var p=document.getElementById("display").value;
	
	if(p.substring(0,1)=='A') p=Ans;
	p=p*-1;
	Ans=p;
	newRow();
	document.cal.display.value="Ans";
	newRow();
	document.cal.output.value=p;
}

function per(){
	var p=document.getElementById("display").value;
	
	if(p.substring(0,1)=='A') p=Ans;
	p=p*0.01;
	Ans=p;

	document.cal.display.value="Ans";
	newRow();
	document.cal.output.value=p;
}

function check(){
	var p=document.getElementById("display").value;
	if(p=='Ans' && p.length==3){ document.cal.display.value="";document.cal.output.value="";}
}

bar.onclick=function(){
	if(k){
		console.log("Hey");
		bar.className="ba";
		setTimeout(function(){bar.style.top="20vh";},300);
		k=0;
		cover.style.zIndex="500";
		cover.className="co";
		setTimeout(function(){cover.style.opacity="0.3";},300);

	}
	else{
		console.log("Bye");
		bar.className="b";
		setTimeout(function(){bar.style.top="48vh"},300);
		k=1;
		cover.style.zIndex="-1";
		cover.className="c";
		setTimeout(function(){cover.style.opacity="0";},300);

	}
}

cover.onclick=function(){
	console.log("Bye");
	bar.className="b";
	setTimeout(function(){bar.style.top="48vh"},300);
	k=1;
	cover.style.zIndex="-1";
	cover.className="c";
	setTimeout(function(){cover.style.opacity="0";},300);
}

function disappear(){
	b.style.opacity="0";
	display.style.opacity="0";
	output.style.opacity="0";
}

function appear(){
	b.style.opacity="1";
	display.style.opacity="1";
	output.style.opacity="1";
}

lcm.onclick=function() {
	disappear();
	result.innerHTML="";
	tablc.style.zIndex="1";
	tabll.style.zIndex="2";
	tablh.style.zIndex="1";
	alter.style.opacity="1";
	alter.style.zIndex="400";
	text.innerHTML="LCM mode activated";
	c=1;
}

hcf.onclick=function() {
	disappear();
	result.innerHTML="";
	tablc.style.zIndex="1";
	tabll.style.zIndex="1";
	tablh.style.zIndex="2";
	alter.style.opacity="1";
	alter.style.zIndex="400";
	text.innerHTML="HCF mode activated";
	c=0;
}

calc.onclick=function() {
	tablc.style.zIndex="2";
	tabll.style.zIndex="1";
	tablh.style.zIndex="1";
	alter.style.opacity="0";
	alter.style.zIndex="-1";
	appear();
	text.innerHTML="Calculator mode activated";
}

function hc(a, b) {
        return !b ? a : hc(b, a % b);
    }

function lc(a, b) {
        return (a * b) / hc(a, b);   
}

function ch() {
	if(!isNaN(one.value) && !isNaN(two.value)) return one.value % 1 === 0 && two.value % 1===0;
	else return 0;
	
}

comp.onclick=function() {

	if(ch() && c){
		l=parseInt(lc(parseInt(one.value),parseInt(two.value)));
		newRowl();
		result.innerHTML="Ans: "+l;
		
	}

	else if(ch()){
		h=parseInt(hc(parseInt(one.value),parseInt(two.value)));
		newRowh();
		result.innerHTML="Ans: "+h;

	}
	else result.innerHTML=":P";
}

function newRowl(){
	nl++;
	var newRo=tabl.insertRow(-1);
	var cell1 = newRo.insertCell(0);
    var cell2 = newRo.insertCell(1);
    var cell3 = newRo.insertCell(2);
    var cell4 = newRo.insertCell(3);
    var cell5 = newRo.insertCell(4);
   	var input = document.createElement('input');
   	newRo.id="tablr"+nl;
    cell1.innerHTML = nl;
    cell2.innerHTML = parseInt(one.value);
    cell3.innerHTML= parseInt(two.value);
    cell4.innerHTML=l;
    input=document.createElement("input");
    cell5.appendChild(input);
    input.id="tabl"+nl;
    input.className="inp";
}

function newRowh(){
	nh++;
	var newRo=tabh.insertRow(-1);
	var cell1 = newRo.insertCell(0);
    var cell2 = newRo.insertCell(1);
    var cell3 = newRo.insertCell(2);
    var cell4 = newRo.insertCell(3);
    var cell5 = newRo.insertCell(4);
    var input = document.createElement('input');
    newRo.id="tabhr"+nh;
    cell1.innerHTML = nh;
    cell2.innerHTML = parseInt(one.value);
    cell3.innerHTML= parseInt(two.value);
    cell4.innerHTML=h;
    input=document.createElement("input");
    cell5.appendChild(input);
    input.id="tabh"+nh;
    input.className="inp";
}

hist.onclick=function() {
	if(h){
		histy.className="his";
		scroll(window.innerHeight);
		document.getElementsByTagName("BODY")[0].style.overflow="visible";
		setTimeout(function(){
			histy.style.opacity="1";
			histy.style.height="80vh";
			histy.style.width="60vw";
			
		},1000);
		h=0;
	}
	else{
		histy.className="hi";
		document.getElementsByTagName("BODY")[0].style.overflow="hidden";
		scroll(0);
		setTimeout(function(){
			histy.style.opacity="0";
			histy.style.height="0";
			histy.style.width="0";
						
	},1000);
		h=1;
	}
}

function scroll(destination){
	var m;
	current=window.pageYOffset;
	if(destination==current) return 0;
	if(destination>current) m=setInterval(function(){
		if(current>=destination) clearInterval(m);

		else{
			current+=5;
			window.scrollTo(0,current);
		}
	},1);
	else{
		m=setInterval(function(){
		if(current<=destination) clearInterval(m);

		else{
			current-=5;
			window.scrollTo(0,current);
		}
	},1);
	}
}

setInterval(function(){
	var color,row;
	for(i=1;i<=nl;i++){
		row=document.getElementById("tablr"+i);
		color=document.getElementById("tabl"+i);
		row.style.background=color.value;
	}
},1);

setInterval(function(){
	var color,row;
	for(i=1;i<=nh;i++){
		row=document.getElementById("tabhr"+i);
		color=document.getElementById("tabh"+i);
		row.style.background=color.value;
	}
},1);

setInterval(function(){
	var color,row;
	for(i=1;i<=nc;i++){
		row=document.getElementById("tabcr"+i);
		color=document.getElementById("tabc"+i);
		row.style.background=color.value;
	}
},1);


