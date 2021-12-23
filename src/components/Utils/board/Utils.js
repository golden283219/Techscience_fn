import CONSTANT from './constants';

export const playAudio = (url) => {
  const audioLength = document.getElementsByTagName('audio').length;
  if (audioLength > 0) {
    const previousAudio = document.getElementsByTagName('audio')[ 0 ];
    previousAudio.pause();
    previousAudio.remove();
  }

  if (url === 'remove') {
    return;
  }

  const audio = document.createElement('audio');
  audio.style.height = '0px';
  audio.style.width = '0px';

  audio.setAttribute('src', url);
  document.body.append(audio);

  audio.load();
  audio.muted = false;
  audio.currentTime = 0;
  audio.autoplay = true;

  audio.onended = function () {
    audio.remove(); //Remove when played.
  };

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.then(function () {
      // Automatic playback started!
      // console.log('Automatic playback started! ', url);
    }).catch(function (error) {
      // Automatic playback failed.
      // Show a UI element to let the user manually start playback.
    });
  }
};

export const getSvgImageUrl = (svgString, backgroundColor = CONSTANT.COLORS.YELLOW, strokeColor = CONSTANT.COLORS.RED) => {
  svgString = svgString.replace(new RegExp('fill="(.*?)"', 'gm'), 'fill="' + backgroundColor + '"');
  svgString = svgString.replace(new RegExp('stroke="(.*?)"', 'gm'), 'stroke="' + strokeColor + '"');
  const blob = new Blob([ svgString ], { type: 'image/svg+xml' });

  return URL.createObjectURL(blob);
};
