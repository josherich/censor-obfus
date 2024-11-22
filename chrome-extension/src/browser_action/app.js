var bg = chrome.extension.getBackgroundPage()
var input = document.querySelector('#input')
var show = document.querySelector('#show')
var copied = document.querySelector('#copied')
var copy = document.querySelector('#copy')

function renderToggles(pairs) {
  let toggles = document.querySelector('.toggles')
  toggles.innerHTML = ""
  for (let k in pairs) {
    let tog = document.querySelector('.word-toggle').cloneNode(true)
    tog.querySelector('input').setAttribute('id', k)
    tog.querySelector('input').setAttribute('name', k)
    tog.querySelector('input').setAttribute('checked', true)
    tog.querySelector('label').setAttribute('for', k)
    tog.querySelector('label').textContent = pairs[k].join('/')
    tog.querySelector('input').addEventListener('click', function(e) {
      let s = document.querySelector('#show').value
      if (e.target.checked) {
        let reg = new RegExp(k, 'g')
        s = s.replace(reg, pairs[k][1])
      } else {
        let reg = new RegExp(pairs[k][1], 'g')
        s = s.replace(reg, pairs[k][0])
      }
      document.querySelector('#show').value = s
    })
    toggles.appendChild(tog)
  }
}

copy.addEventListener('click', function(e) {
  show.focus()
  show.select()

  const done = document.execCommand('copy')

  copied.style.display = 'block'
  copy.style.display = 'none'
  setTimeout(function(){
    copied.style.display = 'none'
    copy.style.display = 'block'
  }, 3000)
})

input.addEventListener('keyup', async function(e) {
  const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  console.log(tab)

  const response = await chrome.runtime.sendMessage({ value: input.value });
  const result = response;
  console.log(result)
  show.value = result['text']

  renderToggles(result['pairs'])

  show.focus()
  show.select()

  const done = document.execCommand('copy')

  copied.style.display = 'block'
  setTimeout(function(){
    copied.style.display = 'none'
    copy.style.display = 'block'
  }, 3000)
});
