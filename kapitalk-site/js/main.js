function scrollMe(tagId) {
  var target = document.getElementById(tagId);
  var element = 0;
  if(document.documentElement) {
    element = document.documentElement;
  } else if(document.body) {
    element = document.body;
  }
  
  scrollTo(element, target.offsetTop, 200);
}

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 2;
  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    scrollTo(element, to, duration - 2);
  }, 10);
}

var pages = ['aboutMe', 'projects'];
function loadPage(page) {
  var bgNight = document.getElementById('backgroundNight');
  var bgDay = document.getElementById('backgroundDay');

  switch(page) {
    case 'aboutMe':
      document.getElementById('aboutMe-nav').classList.add('active');
      document.getElementById('projects-nav').classList.remove('active');
      bgDay.classList.remove('fadeOut');
      bgDay.classList.add('fadeIn');
      bgNight.classList.add('fadeOut');
      bgNight.classList.remove('fadeIn');
      document.getElementById('projects').style.opacity = '0';
      document.getElementById('projects').style.zIndex = '0';
      setTimeout( function() {
        document.getElementById('aboutMe').style.opacity = '1';
        document.getElementById('aboutMe').style.zIndex = '5';
      }, 1000);
      //content
      break;
    case 'projects':
      document.getElementById('aboutMe-nav').classList.remove('active');
      document.getElementById('projects-nav').classList.add('active');
      bgNight.classList.remove('fadeOut');
      bgNight.classList.add('fadeIn');
      bgDay.classList.add('fadeOut');
      bgDay.classList.remove('fadeIn');
      document.getElementById('aboutMe').style.opacity = '0';
      document.getElementById('aboutMe').style.zIndex = '0';
      setTimeout( function() {
        document.getElementById('projects').style.opacity = '1';
        document.getElementById('projects').style.zIndex = '5';
      }, 1000);
      //content
      break;
  }
}
