
# 敏感词替换混淆

用同音字替换敏感词

[Live demo](https://josherich.github.io/censor-obfus/)

[Chrome Extension](https://chrome.google.com/webstore/detail/censor-obfus/nlbfgoikjbcngfplmdbphihddnidcplk?hl=en&gl=US&authuser=0)

## Caveats

- 实现不包含分词，因此例如“干”这样的单字会被替换，以及一些语义错误替换，可在 checkbox 中勾去
- 词库直接决定了替换的质量，这里使用的词库来自于 [sensitive-word-filter](https://github.com/gaohuifeng/sensitive-word-filter)

## 声明

- 此工具仅供文字替换功能，请合理使用
- 此工具大部分代码源自以下项目
  - [pinyinjs](https://github.com/sxei/pinyinjs)
  - [sensitive-word-filter](https://github.com/gaohuifeng/sensitive-word-filter)

## Updates

- **New:** 2019-05-22 Added [Chrome Extension](https://chrome.google.com/webstore/detail/censor-obfus/nlbfgoikjbcngfplmdbphihddnidcplk?hl=en&gl=US&authuser=0)

## TODOs

- 更完整的词库
  - construct by differentiating two set of corpora.
  - differentiate word frequency
- 混合方案增强可读性
  - 形近字
  - 只替换单个字
  - 和制汉字
- PWA

## License

`censor-obfus` is released under the MIT license. See [LICENSE](LICENSE) for additional details.
