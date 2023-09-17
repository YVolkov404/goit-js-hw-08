import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

export const player = new Player(document.querySelector('iframe'));

const STORAGE_KEY = 'videoplayer-current-time';

const currentTimePlayback = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem(STORAGE_KEY, currentTime);
};
player.on('timeupdate', throttle(currentTimePlayback, 1000));

export const currentTime = localStorage.getItem(STORAGE_KEY);
