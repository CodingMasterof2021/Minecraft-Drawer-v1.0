var canvas = new fabric.Canvas('myCanvas');
localBlockImgWidth = 30;
localBlockImgHeight = 30;

localPlayerXPos = 10;
localPlayerYPos = 10;

var localPlayerObject = "";
var localBlockObject = "";

function updateLocalPlayerPos() {

    fabric.Image.fromURL("mojang_player.png", function (Img) {
        localPlayerObject = Img;


        localPlayerObject.scaleToWidth(150);
        localPlayerObject.scaleToHeight(140);
        localPlayerObject.set({
            top: localPlayerYPos,
            left: localPlayerXPos
        });
        canvas.add(localPlayerObject);

    });

}

function updateLocalBlockPos(getImage) {

    fabric.Image.fromURL(getImage, function (Img) {
        localBlockObject = Img;


        localBlockObject.scaleToWidth(localBlockImgWidth);
        localBlockObject.scaleToHeight(localBlockImgHeight);
        localBlockObject.set({
            top: localPlayerYPos,
            left: localPlayerXPos
        });
        canvas.add(localBlockObject);

    });

}

//WARNING: MESSY AND WEIRD LOOKING CODE BELOW

window.addEventListener("keydown", programKeyDown);

function programKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if (e.shiftKey == true && keyPressed == '80') {

        console.log("P and shift pressed together")
        localBlockImgWidth = localBlockImgWidth + 5;
        localBlockImgHeight = localBlockImgHeight + 5;
        document.getElementById("localWidth").innerHTML = localBlockImgWidth;
        document.getElementById("localHeight").innerHTML = localBlockImgHeight;

    }

    if (e.shiftKey == true && keyPressed == '77') {

        console.log("M and shift pressed together")
        localBlockImgWidth = localBlockImgWidth - 5;
        localBlockImgHeight = localBlockImgHeight - 5;
        document.getElementById("localWidth").innerHTML = localBlockImgWidth;
        document.getElementById("localHeight").innerHTML = localBlockImgHeight;

    }

    if (keyPressed == '38') {
        up();
        console.log("Up has been pressed. Checking...");
    }

    if (keyPressed == '40') {
        down();
        console.log("Down has been pressed. Checking...");
    }

    if (keyPressed == '37') {
        left();
        console.log("Left has been pressed. Checking...");
    }

    if (keyPressed == '39') {
        right();
        console.log("Right has been pressed. Checking...");
    }

    if (keyPressed == '65') {
        updateLocalBlockPos('bricks.jpg');
        console.log("A has been pressed. Disply bricks.");
    }

    if (keyPressed == '66') {
        updateLocalBlockPos('dirt_block.png');
        console.log("B has been pressed. Display dirt_block.");
    }


    if (keyPressed == '67') {
        updateLocalBlockPos('edited_bricks.png');
        console.log("C has been pressed. Display edited_bricks.");
    }


    if (keyPressed == '68') {
        updateLocalBlockPos('glowstone.png');
        console.log("D has been pressed. Display glowstone.");
    }


    if (keyPressed == '69') {
        updateLocalBlockPos('grass_block_1.png');
        console.log("E has been pressed. Display grass_block_1.");
    }


    if (keyPressed == '70') {
        updateLocalBlockPos('grass_block_2.png');
        console.log("F has been pressed. Display grass_block_2.");
    }


    if (keyPressed == '71') {
        updateLocalBlockPos('nether_block.jpg');
        console.log("G has been pressed. Display nether_block (1.13 version).");
    }


    if (keyPressed == '72') {
        updateLocalBlockPos('stone_block.jpg');
        console.log("H has been pressed. Display stone_block.");
    }


    if (keyPressed == '73') {
        updateLocalBlockPos('wood_block.jpg');
        console.log("I has been pressed. Display wood_block.");
    }
}

function up() {

    if (localPlayerYPos >= 0) {

        localPlayerYPos = localPlayerYPos - localBlockImgHeight;
        console.log("LocalBlockImgHeight = " + localBlockImgHeight);
        console.log("When up arrow is pressed, X = " + localPlayerXPos + ", Y = "+localPlayerYPos);
        canvas.remove(localPlayerObject);
        updateLocalPlayerPos();
    }

}

function down() {

    if (localPlayerYPos <= 650) {

        localPlayerYPos = localPlayerYPos + localBlockImgHeight;
        console.log("LocalBlockImgHeight = " + localBlockImgHeight);
        console.log("When down arrow is pressed, X = " + localPlayerXPos + ", Y = "+localPlayerYPos);
        canvas.remove(localPlayerObject);
        updateLocalPlayerPos();
    }

}

function left() {

    if (localPlayerXPos > 0) {

        localPlayerXPos = localPlayerXPos - localBlockImgWidth;
        console.log("LocalBlockImgWidth = " + localBlockImgWidth);
        console.log("When left arrow is pressed, X = " + localPlayerXPos + ", Y = "+localPlayerYPos);
        canvas.remove(localPlayerObject);
        updateLocalPlayerPos();
    }

}

function right() {

    if (localPlayerXPos <= 650) {

        localPlayerXPos = localPlayerXPos + localBlockImgWidth;
        console.log("LocalBlockImgWidth = " + localBlockImgWidth);
        console.log("When left arrow is pressed, X = " + localPlayerXPos + ", Y = "+localPlayerYPos);
        canvas.remove(localPlayerObject);
        updateLocalPlayerPos();
    }

}



















































































































































//end of code lol