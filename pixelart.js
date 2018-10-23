/**
* TODO Make the HTML and css more responsive
* TODO Remove color on double / RT click
* TODO Clean up the code more for readability
* TODO squash all of the bugs
* TODO Add a way to move the canvas around
* TODO prevent save on blank canvas
* TODO Ask if the user is sure that they clear the canvas
*/

/*==============
==== G R I D ====
===============*/

const canvas = $('#pixelCanvas');
const cell = $('td');
/**
  * @description Creates the pixeal art grid for the user to draw on.
  * @param
  */
function makeGrid() {
  let height = 0,
    width = 0;
  canvas.children().remove();
  if (small || medium || large) {
    height = width = small
      ? 10
      : medium
        ? 20
        : large
          ? 40
          : 0;
  } else {
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
  }

  for (let i = 0; i < height; i++) {
    $('table').append('<tr></tr>');
    let j = 0;
    while (j < width) {
      $('tr:last').append('<td></td>');
      j++;
    }
  }
}
/**
* @description Creates a small/medium/large grid on click.
* @param event Used to prevent the table from flashing once the grid is created.
*/
let small = false,
  medium = false,
  large = false;
let arr = ["A","B","C"];
for(let i=0;i<arr.length;i++) {
    (function (i) {
        $("#sizeSelect"+arr[i]).click(function(){
          $(this).addClass('selected').siblings().removeClass('selected');
          i == 0 ? small = true : i == 1 ? medium = true : large = true;
          makeGrid();
          setTimeout(function() {
          small = false;
          medium = false;
          large = false;
            }, 200);
        });
    }(i));
}


/**
* @description Height and Width sliders used to define the height and width of the grid.
* @param
*/
const sliderHeight = document.getElementById("sliderHeight");
sliderHeight.oninput = function() {
  $('#inputHeight').val(this.value);
}
const sliderWidth = document.getElementById("sliderWidth");
sliderWidth.oninput = function() {
  $('#inputWeight').val(this.value);
};

/**
* @description Creates the grid when a size is selected from the sliders.
* @param event Used to prevent the table from flashing once the grid is created.
*/
$("#sizePicker").submit(function(event) {
  event.preventDefault();
  makeGrid();
});

/*===================
===== C O L O R =====
====================*/
/**
* @description This connects to the 'Clear Canvas' button and resets the entire canvas on keypress
* @param event Used to prevent the board from just flashing.
*/

let colorSelect = false;
let color = 'black';
$(".reset").click(function(event) {
  event.preventDefault();
  $('td').css('background-color', '');
});

/**
* @description If a color from the palatte is clicked, that color will be set as the paint color.
* @param
*/


/*
WIP to shorten color code
let colorArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"]
for(let i=0; i<colorArr.length; i++) {
    (function (i) {
        $("#color"+arr[i]).click(function(){
          i == 0 ? color = '#B72025' : i == 1 ?  color = '#581C74' : i == 2 ? color = '#952B83' : i == 3 ? color = '#D70A8B' : i == 4 ?  color = '#F9B6E1' : i == 5 ? color = '#D9B9FA' : i == 6 ?  color = '#B5DCFB' : i == 7 ? color = '#0EDAF3' : i == 8 ? color = '#2C3FA8' : i == 9 ? color = '#122256' : i == 10 ? color = '#015615' : i == 11 ? color = '#7AC723' : i == 12 ? color = '#9FB94C' : i == 13 ? color = '#F3F2B2' : i ==14 ? color = '#FEE801' : color = '#FEE801'
          colorSelect = true;
          updateColorDisplayTwo();
        });
    }(i));
}*/



$(".red").click(function() {
  color = '#B72025';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".purple").click(function() {
  color = '#581C74';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".purplepop").click(function() {
  color = '#952B83';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".magenta").click(function() {
  color = '#D70A8B';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".yellow").click(function() {
  color = '#FEE801';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".lime").click(function() {
  color = '#7AC723';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".sage").click(function() {
  color = '#9FB94C';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".forest").click(function() {
  color = '#015615';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".grey").click(function() {
  color = '#4D4D4D';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".cyan").click(function() {
  color = '#0EDAF3';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".royal").click(function() {
  color = '#2C3FA8';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".navy").click(function() {
  color = '#122256';
  colorSelect = true;
  updateColorDisplayTwo();
});

$(".black").click(function() {
  color = '#000000';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".ltpink").click(function() {
  color = '#F9B6E1';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".ltblue").click(function() {
  color = '#B5DCFB';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".ltyellow").click(function() {
  color = '#F3F2B2';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".ltpurple").click(function() {
  color = '#D9B9FA';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".tan").click(function() {
  color = '#D0C085';
  colorSelect = true;
  updateColorDisplayTwo();
});
$(".brown").click(function() {
  color = '#805101';
  colorSelect = true;
  updateColorDisplayTwo();
});

/**
* @description If the erase tool is selected from the colors, it will erase colored pixels.
* @param
*/
$(".erase").click(function() {
  color = 'transparent';
  colorSelect = true;
});

/**
* @description This would be used if I wasn't using the sliders to determine color. I have commented this out just in case this is necessary to pass the final project.
* @param
*/
// $("#colorPicker").click(function() {
//   color = $('#colorPicker').val();
//   colorSelect = false;
// });
/**
* @description Changes the background color of the clicked cell.
* @param
*/
cell.click(function() {
  $(this).css('background-color', color);
});

/**
* @description When the mouse is held down, this will continuously draw on the canvas.
* @param
*/
let moveAround = false;
$(document).mousedown(function() {
  moveAround = true;
}).mouseup(function() {
  moveAround = false;
});
canvas.on('mousedown mousemove', 'td', function() {
  if (moveAround) {
    !colorSelect
      ? $(this).css('background-color', "rgb(" + redVal + "," + greenVal + "," + blueVal + ")")
      : $(this).css('background-color', color);
  }
});

/**
* @description When the slider is used for RGB colors, this updates the value and color.
* @param
*/
let redVal = 0,
  greenVal = 0,
  blueVal = 0;

const red = document.getElementById("redslider");
let redOutput = document.getElementById("redtext");
redOutput.innerHTML = red.value;
red.oninput = function() {
  redVal = this.value;
  updateColors();
  redOutput.innerHTML = this.value;
};
const green = document.getElementById("greenslider");
let greenOutput = document.getElementById("greentext");
greenOutput.innerHTML = green.value;
green.oninput = function() {
  updateColors();
  greenOutput.innerHTML = this.value;
  greenVal = this.value;
};
const blue = document.getElementById("blueslider");
let blueOutput = document.getElementById("bluetext");
blueOutput.innerHTML = blue.value;
blue.oninput = function() {
  updateColors();
  blueVal = this.value;
  blueOutput.innerHTML = this.value;
};

/**
* @description When updateColors() is called in the RGB sliders, then the paint tool's color updates to the selected color
* @param
*/
const colorDisplay =  $("#colordisplay");
const colorDisplayTwo =  $("#colordisplayTwo");
function updateColors() {
 colorDisplay.css("background-color", "rgb(" + redVal + "," + greenVal + "," + blueVal + ")");
  color = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
  updateColorDisplayTwo();
  colorSelect = false;
};
function updateColorDisplayTwo() {
  colorDisplayTwo.css("background-color", color);
};

$(".background").click(function() {
  $('table').css('background-color', color);
});

let gridShow = false;
$(".showGrid").click(function() {
  if (!gridShow) {
    cell.css({"border": "Solid gray 1px"});
    gridShow = true;
  } else {
    cell.css({"border": "Solid gray 0px"});
    gridShow = false;
  }
});

$('#canvasImageSave').click(function() {
  html2canvas(pixelCanvas, {
    onrendered: function(canvas) {
      const saveMe = document.createElement('a');
      saveMe.href = canvas.toDataURL();
      saveMe.download = 'mydrawing.png';
      saveMe.click();
    }
  });
});
