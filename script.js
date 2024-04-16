navigator.mediaDevices.getUserMedia({ audio: true })
.then(function(stream) {
    var x = document.getElementById("myAudio");
    x.play();
    // stop microphone stream acquired by getUserMedia
    stream.getTracks().forEach(function(track) { track.stop(); });
});

window.addEventListener('load', function () {
    var slider = document.querySelector('.slider');
    var img1 = document.querySelector('#img1');
  
    slider.scrollLeft = img1.offsetLeft;
  });
