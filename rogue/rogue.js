document.addEventListener("DOMContentLoaded", function(event) {

	var mono = document.getElementById('mono');
	var stereo = document.getElementById('stereo'); 

  
  var trailer = document.getElementById('trailer');
  var play = document.getElementById('play-button');
  var scene = document.getElementById('main');
  var choiceBox = document.getElementById('choose')

  trailer.pause();


  mono.addEventListener("click", function(){
  	enter();
  })

  stereo.addEventListener("click", function(){
  	enter();
  	scene.enterVR();
  })

  var enter = function(){
		trailer.play();
    trailer.pause();

    scene.setAttribute('visible', true);
		scene.style.display = "block";


  }



  play.addEventListener("click", function(event){

    src = play.getAttribute('src')

    if(src === "#pause"){
      play.setAttribute('src', '#play');
      trailer.pause()
    } else {
      play.setAttribute('src', '#pause');
      trailer.play();
    }
  })




});