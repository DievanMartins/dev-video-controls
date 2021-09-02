let video = document.querySelector('#video1');

function rewind(){
  video.currentTime -= 10;
}

function forward(){
  video.currentTime += 10;
}

function minus(){
  video.playbackRate -= 0.1;
}

function plus(){
  video.playbackRate += 0.1;
}
function vPlus(){
  if(video.volume < 1)  video.volume += 0.1;
}

function vMinus(){
  if(video.volume > 0)  video.volume -= 0.1;
}

function play(){
  video.play();
}

function pause(){
  video.pause();
}

function stop(){
  video.pause();
  video.currentTime = 0;
}

