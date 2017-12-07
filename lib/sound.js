var audioElm = document.getElementById("audio1");





function togglePlay() {
  if (document.getElementById("audio1")) {
    if (audioElm.paused === true) {
     playAudio(audioElm);    //  if player is paused, then play the file
    } else {
     pauseAudio(audioElm);   //  if player is playing, then pause
    }
  }
}

function playAudio(audioEl) {
  document.getElementById("playbutton").innerHTML = "Pause"; // Set button text == Pause
 // Get file from text box and assign it to the source of the audio element
  audioEl.src = document.getElementById('audioFile').value;
  audioEl.play();
}

function pauseAudio(audioEl) {
 document.getElementById("playbutton").innerHTML = "play"; // Set button text == Play
 audioEl.pause();
}
