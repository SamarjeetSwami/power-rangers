// Create a variable canvas
var canvas = new_fabric.Canvas('myCanvas')

block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var block_image_object= "";

// Complete the function new_image() to add new image
function new_image(get_image)
{
	fabric.image.fromUrl(get_image, function(Img) {
		block_image_object = Img
	}






	

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);=
	if(keyPressed =='82') 
	{
		block_x=10;
new_image('red.jpg')
console.log('R')
}
	// Use appropriate keycode to add green image
	if(keyPressed == '71')
	{
		
		block_x=310;
new_image('green.png')
console.log('G')
	


	}
	// Use appropriate keycode to add yellow image
	if(keyPressed =='89' )
	{

		block_x=560;
new_image('yellow.png')
console.log('Y')
		

	}
	// Use appropriate keycode to add pink image
	if(keyPressed == '66')
	{
	
		block_x=1040;
new_image('blue.png')
console.log('B')


	}
