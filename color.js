//the color library object that can anipulte rgb values.
//rgb is an array which holds 3 numbers which corresponds to a pixel.
Color.isColor = function(rgb){


  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rbg[1] >= 0) && (rgb[1] <= 255)
  let blueworks = (rgb[2] >=0) && (rgb[2] <= 255)

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};
//percent intensity of each color.
Color.redIntensity = function(rgb){
  var red = rgb[0]*100/255;
  return red;
};
color.greenintensity = function(rgb){
  var green = rgb[1]*100/255;
  return green;
};
color.blueintensity = function(rgb){
  var blue = rgb[2]*100/255;
  return blue;
};

//brightness
color.brightness = function(rgb){
  return (color.redintensity(rgb))+color.greenintensity(rgb)+color.blueintensity(rgb))/3;
};

//complement
color.complemet = function(rgb){
  var comp = [];
  comp[0] = 255 - rgb[0];
  comp[1] = 255 - rgb[1];
  comp[2] = 255 - rgb[2];
  return com;
};
//greenIntensity


//blueIntensity


//brightness


//complement
