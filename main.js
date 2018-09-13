window.onload = function () {
	canv = document.getElementById("gc"); // pega a id
	ctx = canv.getContext("2d"); // 
	document.addEventListener("keydown", keyPush);
	setInterval(game, 1000 / 15); //intervalo de tempo que roda o jogo
	canv.width = window.innerWidth - 4;   //tamanho da janela
	canv.height = window.innerHeight - 4;  //tamanho da janela
}


px = py = 10;
gs = 15;
tcx = window.innerWidth / 15;
tcy = window.innerHeight / 15;
ax = ay = 15;
ob1 = 30;
ob2 = 30;
xv = yv = 0;
trail = [];
tail = 5;

obst = 200;

function resize() {
	canvas.width = parseFloat((window.getComputedStyle(canvas).width));
	canvas.height = parseFloat((window.getComputedStyle(canvas).height));
}

function game() {
	px += xv;
	py += yv;
	if (px < 0) {
		alert("Perdeu Arrombado");
		location.reload();
	}
	if (px > tcx - 1) {
		alert("Perdeu Arrombado");
		location.reload();
	}
	if (py < 0) {
		alert("Perdeu Arrombado");
		location.reload();
	}
	if (py > tcy - 1) {
		alert("Perdeu Arrombado");
		location.reload();
	}

	if (px > obst) {
		alert("Perdeu Arrombado");
		location.reload();
	}

	if (py > obst) {
		alert("Perdeu Arrombado");
		location.reload();
	}

	




	ctx.fillStyle = "#99cb98"; //cor d o BG
	ctx.fillRect(0, 0, canv.width, canv.height);


	//Paredes
	ctx.fillStyle = "black";
	ctx.fillRect(0, canv.height - 15, canv.width, 15);

	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canv.width, 15);



	ctx.fillStyle = "black";
	ctx.fillRect(canv.width - 15, 0, 15, canv.width);


	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, 15, canv.width);

	//Final paredes


	//Obstaculos meio

	ctx.fillStyle = "black";
	ctx.fillRect(255, 255, 13, 205);


	ctx.fillStyle = "black";
	ctx.fillRect(1020, 255, 13, 205);

	//Final obstaculos meio


	//Obstaculos meio

	ctx.fillStyle = "black";
	ctx.fillRect(canv.height/1.5, 105, 350, 13);


	ctx.fillStyle = "black";
	ctx.fillRect(canv.height/1.5, 540, 350, 13);

	//Final obstaculos meio



	ctx.fillStyle = "#171717"; // cor da cobra
	for (var i = 0; i < trail.length; i++) {
		ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
		if (trail[i].x == px && trail[i].y == py) {
			tail = 5;
		}
	}

	trail.push({ x: px, y: py });

	while (trail.length > tail) {
		trail.shift();
	}


	if (ax == px && ay == py) {

		ob1 = Math.floor(tcx * Math.random());
		ob2 = Math.floor(Math.random() * tcy);



	}

	if (ob1 == px && ob2 == py) {

		alert("Perdeu Arrombado");
		location.reload();
	}

	if (ax == px && ay == py) {
		tail++;
		ax = Math.floor(Math.random() * tcx);
		ay = Math.floor(Math.random() * tcy);

		teste = 0;
		teste = teste + 15000;
		setInterval(game, teste / 30);


	}






	ctx.fillStyle = "green";
	ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);


	//obstaculo


	ctx.fillStyle = "red"; //cor d o BG
	ctx.fillRect(ob1 * gs, ob2 * gs, 13, 13);

	//end 
}
function keyPush(evt) {
	switch (evt.keyCode) {
		case 37:
			xv = -1; yv = 0;
			break;
		case 38:
			xv = 0; yv = -1;
			break;
		case 39:
			xv = 1; yv = 0;
			break;
		case 40:
			xv = 0; yv = 1;
			break;


	}
}