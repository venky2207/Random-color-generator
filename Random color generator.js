function generator(){
	var max_color = 0Xffffff;
	let randomnum = Math.random() * max_color;
	randomnum = Math.floor(randomnum);
	randomnum = randomnum.toString(16);
	let color = randomnum.padStart(6, 0);
	color=color.toUpperCase(); 
	console.log("#"+color)
	document.body.style.background = "#"+color; 
	document.getElementById('hex').innerHTML="#"+color;
	var hex = color;
    var checkHex = hex.match(/[ABCDEFabcdef0-9]{3,6}/g);
    if(hex.length !== 6 && hex.length !== 3){
        throw "Only hex values with 3 or 6 digits allowed.";
    }else if(checkHex === null || (checkHex[0].length !== 3 && checkHex[0].length !== 6)){
        throw "hex value out of bounds.";
    }
    if(hex.length === 3){
        hex = hex.replace(/.{1,1}/g, "$&$&");
    }


    var rgb = hex.match(/.{1,2}/g);

    var rgbArray = [
        parseInt(rgb[0], 16),
        parseInt(rgb[1], 16),
        parseInt(rgb[2], 16)
    ]; 
    console.log(rgbArray);
    document.getElementById("rgb").innerHTML="rgb("+rgbArray[0]+","+rgbArray[1]+","+rgbArray[2]+")";
}
function auto(){
	setInterval(generator, 1200);
}