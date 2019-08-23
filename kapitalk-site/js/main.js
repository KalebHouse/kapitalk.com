function showContent(tagId) {
  var contentEls = document.getElementsByClassName('content');
  for (var i = 0; i < contentEls.length; i++) {
    contentEls[i].classList.add('hidden');
  }
  document.getElementById(tagId).classList.remove('hidden');
}
