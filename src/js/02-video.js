import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const jeson=localStorage.getItem('videoplayer-current-time')

player.on('timeupdate', function (date) {
  jeson = localStorage.setItem('videoplayer-current-time', JSON.stringify(date));
});
console.log(jeson)

player.getVideoTitle().then(function () {
  player.on(`timeupdate`, function () {
    JSON.parse(jeson)
  });

  

  console.log(localStorage.getItem('videoplayer-current-time'));
});
