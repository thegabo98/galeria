window.onload=manejarclick;
var ini="i1.jpg";
function manejarclick(){
	var img1=document.getElementById("img1");
	img1.addEventListener("click",function(){
							mostrar(img1.src);
								});
	img1.addEventListener("mouseover",function(){
							fijar(img1.src);
								});
	img1.addEventListener("mouseout",function(){
							salir(img1.src);
								});
	var img2=document.getElementById("img2");
	img2.addEventListener("click",function(){
							mostrar(img2.src);
								});
	img2.addEventListener("mouseover",function(){
							fijar(img2.src);
								});
	img2.addEventListener("mouseout",function(){
							salir(img2.src);
								});
	var img3=document.getElementById("img3");
	img3.addEventListener("click",function(){
							mostrar(img3.src);
								});
	img3.addEventListener("mouseover",function(){
							fijar(img3.src);
								});
	img3.addEventListener("mouseout",function(){
							salir(img3.src);
								});
	var img4=document.getElementById("img4");
	img4.addEventListener("click",function(){
							mostrar(img4.src);
								});
	img4.addEventListener("mouseover",function(){
							fijar(img4.src);
								});
	img4.addEventListener("mouseout",function(){
							salir(img4.src);
								});
	var img5=document.getElementById("img5");
	img5.addEventListener("click",function(){
							mostrar(img5.src);
								});
	img5.addEventListener("mouseover",function(){
							fijar(img5.src);
								});
	img5.addEventListener("mouseout",function(){
							salir(img5.src);
								});
	var img6=document.getElementById("img6");
	img6.addEventListener("click",function(){
							mostrar(img6.src);
								});
	img6.addEventListener("mouseover",function(){
							fijar(img6.src);
								});
	img6.addEventListener("mouseout",function(){
							salir(img6.src);
								});
	var img7=document.getElementById("img7");
	img7.addEventListener("click",function(){
							mostrar(img7.src);
								});
	img7.addEventListener("mouseover",function(){
							fijar(img7.src);
								});
	img7.addEventListener("mouseout",function(){
							salir(img7.src);
								});
	var img8=document.getElementById("img8");
	img8.addEventListener("click",function(){
							mostrar(img8.src);
								});
	img8.addEventListener("mouseover",function(){
							fijar(img8.src);
								});
	img8.addEventListener("mouseout",function(){
							salir(img8.src);
								});
	var img9=document.getElementById("img9");
	img9.addEventListener("click",function(){
							mostrar(img9.src);
								});
	img9.addEventListener("mouseover",function(){
							fijar(img9.src);
								});
	img9.addEventListener("mouseout",function(){
							salir(img9.src);
								});
	var img10=document.getElementById("img10");
	img10.addEventListener("click",function(){
							mostrar(img10.src);
								});
	img10.addEventListener("mouseover",function(){
							fijar(img10.src);
								});
	img10.addEventListener("mouseout",function(){
							salir(img10.src);
								});
}
function mostrar(imagen){
	ini=imagen;
	var g =document.getElementById("p").src=ini;
}
function fijar(ima){
	var a =document.getElementById("p").src=ima;
}
function salir(j){
	var v =document.getElementById("p").src=ini;
}