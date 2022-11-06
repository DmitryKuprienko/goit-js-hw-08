import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (date) {

localStorage.setItem('videoplayer-current-time', JSON.stringify(date));
};

player.on('timeupdate', throttle(onPlay,1000))
 
const locStor= localStorage.getItem('videoplayer-current-time');
const parseLocStor= JSON.parse(locStor);

player.setCurrentTime(parseLocStor.seconds).then(function(seconds) { 
   // seconds = the actual time that the player seeked to
}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

      default:
          // some other error occurred
          break;
  }
});

  


