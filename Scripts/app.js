 /**
     * Student Name Dhruti Patel
     * Student Id : 300857555
     * Function : Linking to Html
     * creating reference etc
     * 
     * Date 17 august 2016
     */



     // IIfe
var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
	

        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);

	var ctx=canvas.getContext("2d");
    	var img1=document.getElementById("Die01");
	img1.src = "Assets/images/1.png"
	

    	var img2=document.getElementById("Die02");
	img2.src = "Assets/images/6.png"

	var image1 = new createjs.Bitmap(img1);
	stage.addChild(image1);
	var image2 = new createjs.Bitmap(img2);
	stage.addChild(image2);
	image2.x = 200;	

        main();
    }
    function gameLoop() {
        stage.update();
    }
    /**
     * Student Name Dhruti Patel
     * Student Id : 300857555
     * Function : Linking to Html
     * creating reference etc
     * 
     * Date 17 august 2016
     */
    function main() {
	
	var ctx=canvas.getContext("2d");
    	var img1=document.getElementById("Die01");

	

    	var img2=document.getElementById("Die02");

	
	
	
	var roll = document.getElementById("roll");
	roll.addEventListener("click", function(e){
		var die1 = Math.floor((Math.random() * 6) + 1);
		console.log(die1);
		console.log(typeof die1);
		var die2 = Math.floor((Math.random() * 6) + 1);
		console.log(die2);


        
	for(var i = 0; i <=6 ; i++){
		if(die1 == i){
			
			img1.src = "Assets/images/"+die1+".png";
			console.log(img1.src)
		}
		if(die2 == i){
			
						img2.src = "Assets/images/"+die2+".png";
			console.log(img2.src)
		}
	}
/**
 * Name  : Dhruti Patel
 * StudentId : 300857555
 * creating variable for bitmap
 * appending data
 * 
 */
	var image1 = new createjs.Bitmap(img1);
	stage.addChild(image1);
	var image2 = new createjs.Bitmap(img2);
	stage.addChild(image2);
	image2.x = 200;	

	})
    }
    window.addEventListener("load", init);
})(core || (core = {}));