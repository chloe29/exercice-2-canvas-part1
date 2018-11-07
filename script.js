var c = document.getElementById( "mon_canvas" );
var ctx = c.getContext("2d");
  // corps de la maison
ctx.fillStyle = "#a0d7e6";
// .fillRect permet le tracé et le remplissage d'un carré ou d'un rectangle.
ctx.fillRect(100,100,200,250);
  // fenêtres
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(120,120,50,50);
ctx.fillRect(230,120,50,50);
  // porte
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(150,250,100,100);
  // toît
ctx.fillStyle = "#d88437";
/*
La propriété globalCompositeOperation définie la position de la forme sur laquelle
elle est appliquée. En l'occurrence, grâce à la valeur "destination-over", le
carré sur lequel nous agissons passera sous les autres carrés définis précédemment.
*/
ctx.globalCompositeOperation = "destination-over";
ctx.rotate(Math.PI / 4);
ctx.fillRect(140,-140,140,140);
