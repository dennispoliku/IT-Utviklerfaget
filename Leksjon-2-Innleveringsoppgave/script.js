document.addEventListener('DOMContentLoaded', function() {
  var audioPlayer = document.getElementById('audioPlayer');
  var playLinks = document.querySelectorAll('.playLink');

  playLinks.forEach(function(playLink) {
    playLink.addEventListener('click', function(event) {
      event.preventDefault();
      var songId = this.getAttribute('href').substring(1);
      var songSource = document.getElementById(songId).src;
      audioPlayer.src = songSource; 
      audioPlayer.play(); 
    });
  });
});