var previewBox = document.getElementById("previewBox"),
    redRange = document.getElementById("redRange"),
    greenRange = document.getElementById("greenRange"),
    blueRange = document.getElementById("blueRange"),
    display = document.getElementById("display"),
    ////redArr = [],
    ////greenArr = [],
    ////blueArr = [],
    colorsArr = [];

function changeColor(){
    previewBox.style.backgroundColor = "rgb("+redRange.value+","+greenRange.value+","+blueRange.value+")";
}

function pushColors(){
    //redArr.push(parseInt(redRange.value));
    //greenArr.push(parseInt(greenRange.value));
    //blueArr.push(parseInt(blueRange.value));
    
    var obj = {
        red:parseInt(redRange.value),
        green:parseInt(greenRange.value),
        blue:parseInt(blueRange.value)
    }
    colorsArr.push(obj);
}

function popColors(){
    ////redArr.pop();
    //////greenArr.pop();
    ////blueArr.pop();
    colorsArr.pop();
}

function shiftColors(){
    ////redArr.shift();
    //greenArr.shift();
    //blueArr.shift();   
    colorsArr.shift();
}
////redArr = [5, 6, 7, 8, 9];
////redArr.splice(2, 1);
function spliceColors(){
    var startIndex=document.getElementById("spliceIndex").value;
    
    //redArr.splice(startIndex, 1);
    //greenArr.splice(startIndex, 1);
    //blueArr.splice(startIndex, 1);
    colorsArr.splice(startIndex, 1);
    
}
function createSwatch(){
    /*var ndiv = document.createElement("div");
    ndiv.style.backgroundColor = previewBox.style.backgroundColor;
    ndiv.className = "swatches";
    display.appendChild(ndiv);*/
    
    display.innerHTML = "";
    /*for(var i = 0; i<//redArr.length; i++){
        var ndiv = document.createElement("div");
    ndiv.style.backgroundColor = "rgb("+//redArr[i]+", "+//greenArr[i]+", "+//blueArr[i]+")";
    ndiv.className = "swatches";
    display.appendChild(ndiv)
    }*/
    
    for(var i = 0; i<colorsArr.length; i++){
        var ndiv = document.createElement("div");
        ndiv.style.backgroundColor = "rgb("+colorsArr[i].red+", "+colorsArr[i].green+", "+colorsArr[i].blue+")";
        ndiv.className = "swatches";
        display.appendChild(ndiv);
    }
    
    console.log(colorsArr);
    calcAvg();
    calcSum();
}
function calcAvgBACKUP(){
    //FOR RED
    var total = 0;
    for(var i = 0; i<redArr.length; i++){
        total = total + redArr[i];
        
    }
    var avg = total/redArr.length;
    var roundRed = Math.round(avg);
    
    //FOR GREEN
    total = 0;
    
    for(var i = 0; i<greenArr.length; i++){
        total = total + greenArr[i];
        
    }
    var avg = total/greenArr.length;
    var roundGreen = Math.round(avg);    
    
    //FOR BLUE
    total = 0;
    
    for(var i = 0; i<blueArr.length; i++){
        total = total + blueArr[i];
        
    }
    var avg = total/blueArr.length;
    var roundBlue = Math.round(avg);
    
    //AVERAGE BOX STYLE
    document.getElementById("averageBox").style.backgroundColor = "rgb("+roundRed+","+roundGreen+","+roundBlue+")";
    console.log(roundRed, roundGreen, roundBlue);
}

function calcAvg(){
    var totalred = 0,
        totalgreen = 0,
        totalblue = 0;


    for(var i = 0; i<colorsArr.length; i++){
        totalred = totalred + colorsArr[i].red;
        totalgreen = totalgreen + colorsArr[i].green;
        totalblue = totalblue + colorsArr[i].blue;
    }
    
    var roundRed = Math.round(totalred/colorsArr.length);
    var roundGreen = Math.round(totalgreen/colorsArr.length);
    var roundBlue = Math.round(totalblue/colorsArr.length);
    
     document.getElementById("averageBox").style.backgroundColor = "rgb("+roundRed+","+roundGreen+","+roundBlue+")";
    console.log(roundRed, roundGreen, roundBlue);
}

function calcSum(){
    var totalRed = 0,
        totalGreen = 0,
        totalBlue = 0;
    
    for(var i = 0; i<colorsArr.length; i++){
        totalRed = totalRed + colorsArr[i];
        totalGreen = totalGreen + colorsArr[i];
        totalBlue = totalBlue + colorsArr[i];
        if(totalRed > 255){
            totalRed = 255;
        }        
        if(totalGreen > 255){
            totalGreen = 255;
        }        
        if(totalBlue > 255){
            totalBlue = 255;
        }
        
    }
    document.getElementById("mixBox").style.backgroundColor = "rgb("+totalRed+","+totalGreen+","+totalBlue+")";
    console.log(totalRed, totalGreen, totalBlue);
    
}
redRange.addEventListener("change", function(){
   changeColor();
});
greenRange.addEventListener("change", function(){
   changeColor();
});
blueRange.addEventListener("change", function(){
   changeColor();
});

document.getElementById("addColor").addEventListener("click", function(){
    pushColors();
    createSwatch();
    
});

document.getElementById("popColor").addEventListener("click", function(){
    popColors();
    createSwatch();
});

document.getElementById("shiftColor").addEventListener("click", function(){
    shiftColors();
    createSwatch();
});

document.getElementById("spliceColor").addEventListener("click", function(){
   spliceColors(); 
    createSwatch();
});