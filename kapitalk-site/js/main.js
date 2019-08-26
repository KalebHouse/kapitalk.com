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
