import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (date) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(date));
};

player.on('timeupdate', throttle(onPlay, 1000));

const parseLocStor = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
const _secondLocStor = parseLocStor !== null ? parseLocStor.seconds : 0;

player
  .setCurrentTime(_secondLocStor)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
