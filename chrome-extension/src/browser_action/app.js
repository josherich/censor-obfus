var bg = chrome.extension.getBackgroundPage();
var input = document.querySelector('#input');
var show = document.querySelector('#show');
var copied = document.querySelector('#copied');

input.addEventListener('keyup', function(e) {

  var result = bg.transform(input.value);
  show.value = result;
  show.focus();
  show.select();

  const done = document.execCommand('copy');
  if (done === 'unsuccessful') {
    console.error('Failed to copy text.');
  }

  copied.style.display = 'block';
  setTimeout(function(){
    copied.style.display = 'none';
  }, 3000);


});