var hitwall=false;
window.onload = function (){
	var end = document.getElementById("end");
	var start = document.getElementById("start");
	var status = document.getElementById("status");
	var maze= document.getElementById("maze");
	var topleft=document.getElementById("boundary1");
	topleft.onmouseover= singleBoundaryCrossed;
	var boundaries = document.querySelectorAll(".boundary");
	for(var j = 0; j < boundaries.length; j++){
		boundaries[j].onmouseover = youLose;
	}
	//end.onmouseover = youWin;
	end.onmouseover = playerStatus;
	start.onclick = restart;
	
	//Exercise 1
	//event handling code for when mouse moves over a single wall (top left wall, boundary turns red)
	function singleBoundaryCrossed(){
		this.className="boundary youlose"
	};
	
	//==============================================================================

};