const HOVER_BACK = 1;

var backCollider = {
    x: 635,
    y: 515,
    width: 115,
    height: 50,
}

var hovering = HOVER_NONE;
var lastMouseX = mouseX;
var lastMouseY = mouseY;

function howToPlayUpdate() {
    if (!keyboardControlled) {
        howToPlayHandleMouseHover();
        howToPlayHandleMouseClick();
    }

    howToPlayHandleMouseMove();
    howToPlayDraw();
}

function howToPlayDraw() {
    // Background
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    // menuBG
    canvasContext.drawImage(menuBG_how2, menuBG_X,menuBG_Y);// MenuBG
    //canvasContext.drawImage(menuBG_how2overlay, menuBG_overlay_X,menuBG_overlay_Y);

    // Logo
    canvasContext.globalAlpha = 0.25;
    canvasContext.drawImage(menuLogo, (canvas.width / 2) - (menuLogo.width / 2), 25);
    canvasContext.globalAlpha = 1;

    // Title
    //canvasContext.fillStyle = 'white';
    //canvasContext.font = '50px Helvetica';
    //var title = 'Playground Legends';
    //var titleMeasure = canvasContext.measureText(Math.floor(title));
    //canvasContext.fillText(title, (canvas.width / 2) - (titleMeasure.width * 2) - 20, 100);

    // Sub-Title
    canvasContext.fillStyle = 'black';
    canvasContext.font = 'bold 40px Helvetica';
    var subTitle = 'How To Play';
    var subTitleMeasure = canvasContext.measureText(Math.floor(subTitle));
    canvasContext.fillText(subTitle, 300, 150);
	
	//Moving instructions
	canvasContext.fillStyle = 'black';
    canvasContext.font = 'bold 16px Helvetica';
    var movingInstructions = 'Press W, A, D or use arrow keys to move your player.';
    var movingInstructionsMeasure = canvasContext.measureText(Math.floor(movingInstructions));
    canvasContext.fillText(movingInstructions, 220, 220);
	
	//Throwing instructions
	canvasContext.fillStyle = 'black';
    canvasContext.font = 'bold 16px Helvetica';
    var throwingInstructions = 'Aim your throw with the mouse and throw the ball by left-clicking.';
    var throwingInstructionsMeasure = canvasContext.measureText(Math.floor(throwingInstructions));
    canvasContext.fillText(throwingInstructions, 220, 280);
	
	//Catching instructions
	canvasContext.fillStyle = 'black';
    canvasContext.font = 'bold 16px Helvetica';
    var catchingInstructions = 'Attempt to catch the ball by left-clicking before impact.';
    var catchingInstructionsMeasure = canvasContext.measureText(Math.floor(catchingInstructions));
    canvasContext.fillText(catchingInstructions, 220, 340);
	
    // Back
    canvasContext.fillStyle = 'black';
    if (hovering == HOVER_BACK) canvasContext.fillStyle = 'red';
    canvasContext.font = 'bold 30px Helvetica';
    canvasContext.fillText('BACK', 650, 550);

    // P1
    canvasContext.globalAlpha = 0.25;
    canvasContext.drawImage(how2_p1, PLAYERS_X,PLAYERS_Y, SINGLE_PLAYER_WIDTH,PLAYERS_DRAW_HEIGHT);
    canvasContext.globalAlpha = 1;
    // Draw Colliders (DEBUG)
    /*
    canvasContext.strokeStyle="yellow";
    canvasContext.strokeRect(backCollider.x ,backCollider.y ,backCollider.width, backCollider.height);
    */
}

function howToPlayHandleMouseHover() {
    if (mouseX >= backCollider.x && mouseX <= (backCollider.x + backCollider.width) &&
        mouseY >= backCollider.y && mouseY <= (backCollider.y + backCollider.height)) {
        hovering = HOVER_BACK;
    } else {
        hovering = HOVER_NONE;
    }
}

function howToPlayHandleMouseClick() {
    if (mouseDown && hovering == HOVER_BACK) {
        scene = SCENE_MAIN_MENU;
    }
}

function howToPlayKeyPressed(keycode) {
    if (keycode == KEY_UP_ARROW || keycode == KEY_DOWN_ARROW) {
        keyboardControlled = true;
        hovering = HOVER_BACK;
    } else if (keycode == KEY_ENTER) {
        scene = SCENE_MAIN_MENU;
    }
}

function howToPlayHandleMouseMove() {
    if (mouseX != lastMouseX ||
        mouseY != lastMouseY) {
        keyboardControlled = false;
    }
    lastMouseX = mouseX;
    lastMouseY = mouseY;
}
