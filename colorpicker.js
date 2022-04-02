/*----- Settings Color Picker -----*/
//Save the element "colorpicker" as a variable of color_picker
var color_picker = document.getElementById("colorpicker");
//Save the element "colorpicker-wrapper" as a variable of color_picker_wrapper
var color_picker_wrapper = document.getElementById("colorpicker-wrapper");
//Save the element "settings" as a variable of settings
var settings = document.getElementById("settings");
//funtion to change the background color of variable color_picker_wrapper to the same as the color_picker value when it changes, same applied to the settings color
color_picker.onchange = function() {
	color_picker_wrapper.style.backgroundColor = color_picker.value;
    settings.style.backgroundColor = color_picker.value;
}
//funtion to change the background color of variable color_picker_wrapper to the same as the color_picker value when the page loads, same applied to the settings color
color_picker_wrapper.style.backgroundColor = color_picker.value;
settings.style.backgroundColor = color_picker.value;


/*----- Background Color Picker -----*/
var bg_color_picker = document.getElementById("bg-colorpicker");
var bg_color_picker_wrapper = document.getElementById("bg-colorpicker-wrapper");
bg_color_picker.onchange = function() {
	bg_color_picker_wrapper.style.backgroundColor = bg_color_picker.value;
    document.body.style.backgroundColor = bg_color_picker.value;
}
bg_color_picker_wrapper.style.backgroundColor = bg_color_picker.value;
document.body.style.backgroundColor = bg_color_picker.value;

/*----- Text Color Picker -----*/
var txt_color_picker = document.getElementById("txt-colorpicker");
var txt_color_picker_wrapper = document.getElementById("txt-colorpicker-wrapper");
var txt_container = document.getElementsByClassName("text-container");
txt_color_picker.onchange = function() {
	txt_color_picker_wrapper.style.backgroundColor = txt_color_picker.value;
    for (var i=0; i < txt_container.length; i++) {
        txt_container[i].style.color = txt_color_picker.value;
    }
}
txt_color_picker_wrapper.style.backgroundColor = txt_color_picker.value;
for (var i=0; i < txt_container.length; i++) {
    txt_container[i].style.color = txt_color_picker.value;
}

/*----- Heading Color Picker -----*/
var h_color_picker = document.getElementById("h-colorpicker");
var h_color_picker_wrapper = document.getElementById("h-colorpicker-wrapper");
var h_color = document.getElementsByClassName("h1");
h_color_picker.onchange = function() {
	h_color_picker_wrapper.style.backgroundColor = h_color_picker.value;
    for (var i=0; i < h_color.length; i++) {
        h_color[i].style.color = h_color_picker.value;
    }
}
h_color_picker_wrapper.style.backgroundColor = h_color_picker.value;
for (var i=0; i < h_color.length; i++) {
    h_color[i].style.color = h_color_picker.value;
}

/*----- Page2 Color Picker -----*/
var pg2_color_picker = document.getElementById("pg2-colorpicker");
var pg2_color_picker_wrapper = document.getElementById("pg2-colorpicker-wrapper");
var pg2_color = document.getElementById("panel2");
pg2_color_picker.onchange = function() {
	pg2_color_picker_wrapper.style.backgroundColor = pg2_color_picker.value;
    pg2_color.style.backgroundColor = pg2_color_picker.value;
}
pg2_color_picker_wrapper.style.backgroundColor = pg2_color_picker.value;
pg2_color.style.backgroundColor = pg2_color_picker.value;
