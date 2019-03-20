let map = {}
let polyphone = false
let anchor = ''

fetch('./keywords.txt')
  .then(response => response.text())
  .then((text) => {
    let lines = text.split('\n')
    lines.map((line) => {
      addWord(line)
    })
  })

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function addWord(word) {
  let parent = map

  for (let i = 0; i < word.length; i++) {
    if (!parent[word[i]]) parent[word[i]] = {}
    parent = parent[word[i]]
  }
  parent.isEnd = true
}

function filter(s, cb) {
  let parent = map

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '*') {
      continue
    }

    let found = false
    let skip = 0
    let sWord = ''

    for (let j = i; j < s.length; j++) {

      if (!parent[s[j]]) {
        // console.log('skip ', s[j])
        found = false
        skip = j - i
        parent = map
        break;
      }

      sWord = sWord + s[j]
      if (parent[s[j]].isEnd) {
        found = true
        skip = j - i
        break
      }
      parent = parent[s[j]]
    }

    if (skip > 1) {
      i += skip - 1
    }

    if (!found) {
      continue
    }

    let subs = pinyinUtil.getPinyin(sWord, ' ', false, polyphone).split(' ')
    for (let i = 0; i < subs.length; i++) {
      let cands = pinyinUtil.getHanzi(subs[i])
      if (cands.length == 1) {
        subs[i] = cands[0]
        continue
      }
      let res = cands[Math.min(getRandomInt(5), cands.length-1)]
      while (res == sWord[i]) {
        res = cands[Math.min(getRandomInt(5), cands.length-1)]
      }
      subs[i] = res
    }

    subs = anchor + subs.join('') + anchor

    let reg = new RegExp(sWord, 'g')
    s = s.replace(reg, subs)

  }

  if(typeof cb === 'function'){
    cb(null, s)
  }

  return s
}
