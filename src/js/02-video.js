import Player from '@vimeo/player';
console.log(Player)
const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});

console.log(player)

const onPlay = function(data) {
    console.log(player)
    
};

player.on('play', onPlay);