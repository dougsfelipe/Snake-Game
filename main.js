window.onload=function(){
	canv=document.getElementById("gc"); // pega a id
	ctx=canv.getContext("2d"); // 
	document.addEventListener("keydown", keyPush);
	setInterval(game,1000/15); //intervalo de tempo que roda o jogo
}
px=py=10;
gs = 15;
tcx = 80;
tcy = 20;
ax=ay=15;
xv=yv=0;
trail=[];
tail = 5;
function game() {
	px+=xv;
	py+=yv;
	if(px<0){
		px=tcx-1;
	}
	if(px>tcx-1){
		px= 0;
	}
	if(py<0){
		py=tcy-1;
	}
	if(py>tcy-1){
		py= 0;
	}
	ctx.fillStyle="pink"; //cor d o BG
	ctx.fillRect(0,0,canv.width,canv.height);
	ctx.fillStyle="blue"; // cor da cobra
	for(var i=0;i<trail.length;i++) {
        	ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        	if(trail[i].x==px && trail[i].y==py) {
            		tail = 5;
        	}
    	}
    	
	trail.push({x:px,y:py});
    	
	while(trail.length>tail) {
    		trail.shift();
    	}
 
    	if(ax==px && ay==py) {
        	tail++;
        	ax=Math.floor(Math.random()*tcx);
            ay=Math.floor(Math.random()*tcy);
            teste = 0;
            teste = teste + 15000;
            setInterval(game,teste/30);
    	}
    	ctx.fillStyle="green";
    	ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}
function keyPush(evt) {
	switch(evt.keyCode) {
	   case 37:
		xv=-1;yv=0;
		break;
	   case 38:
		xv=0;yv=-1;
		break;
	   case 39:
		xv=1;yv=0;
		break;
	   case 40:
		xv=0;yv=1;
		break;
	}
}