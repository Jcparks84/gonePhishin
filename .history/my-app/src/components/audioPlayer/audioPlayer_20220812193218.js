im


var player = $('.player'),
    audio = player.find('audio'),
    duration = $('.duration'),
    currentTime = $('.current-time'),
    progressBar = $('.progress span'),
    mouseDown = false,
    rewind, showCurrentTime;

function secsToMins(time) {
  var int = Math.floor(time),
      mins = Math.floor(int / 60),
      secs = int % 60,
      newTime = mins + ':' + ('0' + secs).slice(-2);
  
  return newTime;
}

function getCurrentTime() {
  var currentTimeFormatted = secsToMins(audio[0].currentTime),
      currentTimePercentage = audio[0].currentTime / audio[0].duration * 100;
  
  currentTime.text(currentTimeFormatted);
  progressBar.css('width', currentTimePercentage + '%');
  
  if (player.hasClass('playing')) {
    showCurrentTime = requestAnimationFrame(getCurrentTime);
  } else {
    cancelAnimationFrame(showCurrentTime);
  }
}

audio.on('loadedmetadata', function() {
  var durationFormatted = secsToMins(audio[0].duration);
  duration.text(durationFormatted);
}).on('ended', function() {
  if ($('.repeat').hasClass('active')) {
    audio[0].currentTime = 0;
    audio[0].play();
  } else {
    player.removeClass('playing').addClass('paused');
    audio[0].currentTime = 0;
  }
});

$('button').on('click', function() {
  var self = $(this);
  
  if (self.hasClass('play-pause') && player.hasClass('paused')) {
    player.removeClass('paused').addClass('playing');
    audio[0].play();
    getCurrentTime();
  } else if (self.hasClass('play-pause') && player.hasClass('playing')) {
    player.removeClass('playing').addClass('paused');
    audio[0].pause();
  }
  
  if (self.hasClass('shuffle') || self.hasClass('repeat')) {
    self.toggleClass('active');
  }
}).on('mousedown', function() {
  var self = $(this);
  
  if (self.hasClass('ff')) {
    player.addClass('ffing');
    audio[0].playbackRate = 2;
  }
  
  if (self.hasClass('rw')) {
    player.addClass('rwing');
    rewind = setInterval(function() { audio[0].currentTime -= .3; }, 100);
  }
}).on('mouseup', function() {
  var self = $(this);
  
  if (self.hasClass('ff')) {
    player.removeClass('ffing');
    audio[0].playbackRate = 1;
  }
  
  if (self.hasClass('rw')) {
    player.removeClass('rwing');
    clearInterval(rewind);
  }
});

player.on('mousedown mouseup', function() {
  mouseDown = !mouseDown;
});

progressBar.parent().on('click mousemove', function(e) {
  var self = $(this),
      totalWidth = self.width(),
      offsetX = e.offsetX,
      offsetPercentage = offsetX / totalWidth;
  
  if (mouseDown || e.type === 'click') {
    audio[0].currentTime = audio[0].duration * offsetPercentage;
    if (player.hasClass('paused')) {
      progressBar.css('width', offsetPercentage * 100 + '%');
    }
  }
});

function audioPlayer() {
    return(
        <div class="player paused">
  <div class="album">
    <div class="cover">
      <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38273/3rdburglar-cover-192.jpg" alt="3rdburglar by Wordburglar" /></div>
    </div>
  </div>
  
  <div class="info">
    <div class="time">
      <span class="current-time">0:00</span>
      <span class="progress"><span></span></span>
      <span class="duration">0:00</span>
    </div>
    
    <h1>Drawings With Words</h1>
    <h2>3RDBURGLAR</h2>
  </div>
  
  <div class="actions">
    <button class="shuffle">
      <div class="arrow"></div>
      <div class="arrow"></div>
    </button>
    <button class="button rw">
      <div class="arrow"></div>
      <div class="arrow"></div>
    </button>
    <button class="button play-pause">
      <div class="arrow"></div>
    </button>
    <button class="button ff">
      <div class="arrow"></div>
      <div class="arrow"></div>
    </button>
    <button class="repeat"></button>
  </div>
  
  <audio prelaod src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38273/Wordburglar_Drawings_with_Words.mp3"></audio>
</div>
    )
}