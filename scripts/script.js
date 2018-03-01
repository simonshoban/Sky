colours_array = ["LightBlue", "Tomato", "MidnightBlue"];
celestial_array = ["PaleGoldenRod", "Gold", "CornSilk"]
time_array = ["Morning", "Evening", "Night"];

var index = 0;

function setInitialValues() {
    document.getElementsByTagName("body")[0].style = "background-color:" + colours_array[0] + ";";
    document.getElementById("colors").style = "color:" + colours_array[0] + ";";
    document.getElementById("circle").style = "background-color:" + celestial_array[0] + ";";
    document.getElementById("banner").innerHTML = time_array[0];   
}

function changeBackground() {
    index++;
    index %= 3;
    document.getElementsByTagName("body")[0].style = "background-color:" + colours_array[index] + ";";
    document.getElementById("colors").style = "color:" + colours_array[index] + ";";
    document.getElementById("circle").style = "background-color:" + celestial_array[index] + ";";
    document.getElementById("banner").innerHTML = time_array[index];
}

/*
    have 4 stages of the the day-night cycle on a clock and flip through them
*/