var colours_array = ["LightBlue", "Tomato", "MidnightBlue"];
var celestial_array = ["PaleGoldenRod", "Gold", "CornSilk"]
var time_array = ["Morning", "Evening", "Night"];
var celestial_glow_array = ["8%", "10%", "12%"];

var index = 0;

function setInitialValues() {
    document.getElementsByTagName("body")[0].style = `background: radial-gradient(circle at 50% 82.5px, ${celestial_array[0]}, ${colours_array[0]} ${celestial_glow_array[0]});`;
    document.getElementById("colors").style = "color:" + colours_array[0] + ";";
    document.getElementById("circle").style = "background-color:" + celestial_array[0] + ";";
    document.getElementById("banner").innerHTML = time_array[0];   
}

function changeBackground() {
    index++;
    index %= 3;
    document.getElementsByTagName("body")[0].style = `background: radial-gradient(circle at 50% 82.5px, ${celestial_array[index]}, ${colours_array[index]} ${celestial_glow_array[index]});`;
    document.getElementById("colors").style = "color:" + colours_array[index] + ";";
    document.getElementById("circle").style = "background-color:" + celestial_array[index] + ";";
    document.getElementById("banner").innerHTML = time_array[index];
}

