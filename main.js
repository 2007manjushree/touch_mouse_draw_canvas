var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var current_position_of_mouse_x, current_position_of_mouse_y;
var last_position_of_touch_x, last_position_of_touch_y;
var current_position_of_touch_x, current_position_of_touch_y;
var width = screen.width;
var height = screen.height;
var new_width = width - 70;
var new_height = height - 300;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var color = "black";
var width_of_line = 2;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {

    last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    console.log("The last position of X = " + last_position_of_touch_x + "and Y = " + last_position_of_touch_y);

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {

    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    console.log("The current position of X = " + current_position_of_touch_x + "and Y = " + current_position_of_touch_y);

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    //Addictonal Activity start
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    //Addictonal Activity ends

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function cleararea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}