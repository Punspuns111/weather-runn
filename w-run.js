 

function playlist() {
    var select = document.getElementById('genre');
    var genre = select.options[select.selectedIndex].value;
    if (genre == 'pop') {
        document.getElementById('player').src = 'https://open.spotify.com/embed/album/1XYuWZsWpGGUPQ3zewj3Ms';
    } else if (genre == 'rock') {
        document.getElementById('player').src = 'https://open.spotify.com/embed/playlist/5w6VLpEf4yquKQleXsK8Af';
    } else if (genre == 'kpop') {
        document.getElementById('player').src = 'https://open.spotify.com/embed/playlist/4WRPDSWFngETplxQIFPYCy';
    } else if (genre == 'indie') {
        document.getElementById('player').src = 'https://open.spotify.com/embed/playlist/14zVG4XNajQP8IJWu6RSo0';
    } else if (genre == 'edm') {
        document.getElementById('player').src = 'https://open.spotify.com/embed/album/3xPjyhldGEuusSuXB4kGE6';
    };
};

function training() {
    var select = document.getElementById('train-vid');
    var genre = select.options[select.selectedIndex].value;
    if (genre == 'arm') {
        document.getElementById('video').src = 'https://www.youtube.com/embed/3Pr6n-nKfMA';
    } else if (genre == 'abs') {
        document.getElementById('video').src = 'https://www.youtube.com/embed/2pLT-olgUJs';
    } else if (genre == 'leg') {
        document.getElementById('video').src = 'https://www.youtube.com/embed/I9nG-G4B5Bs';
    } else if (genre == 'stretch') {
        document.getElementById('video').src = 'https://www.youtube.com/embed/qULTwquOuT4';
    } else if (genre == 'full-bod') {
        document.getElementById('video').src = 'https://www.youtube.com/embed/CGmr02bfHUo'
    };
};

anime ({
    targets: '.data',
    translateY: [250,0],
    translateZ: 0,
    easing: 'easeInOutSine'
  });

anime ({
    targets: '#message',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    duration: 1500,
    easing: 'easeInOutSine'
  });

anime ({
    targets: '.scrolldown',
    translateY: 20,
    direction: 'alternate',
    easing: 'easeInOutSine',
    loop: true,
})

function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('body', true);
    setVisible('#loading', false);
  });