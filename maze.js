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

	//Exercise 2
	/*Code to turn all boundaries red when the mouse hovers over any boundary indicating 
	you lose.*/ 
	
	function youLose(){
	hitwall = true;
	document.getElementById("status").textContent = "You lose!"
	var boundaries = document.querySelectorAll(".boundary");
	for(var j = 0; j < boundaries.length; j++){
	boundaries[j].className = "boundary youlose";
					}
				}
	//==============================================================================
	
	//Exercise 3
		/*event handle code to show pop-up note "you win" when mouse touches ending div 
	without touching the boundary walls*/
	
	function youWin(){
		if (document.getElementsByClassName("boundary youlose").length == 0){
			alert("You Win!");
		}
	} 
	
	//==============================================================================
	
	
};