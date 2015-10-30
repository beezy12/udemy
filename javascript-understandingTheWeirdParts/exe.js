function b() {
	var myVar;
	console.log(myVar);
}

function a() {
	var myVar = 2;
	console.log(myVar);     
	b();
}

var myVar = 1;
console.log(myVar);

a();
console.log(myVar);   //myVar will be 1 again here....because it is unchanged after everything fires


//this whole program displays:
// 1
// 2
// undefined
// 1