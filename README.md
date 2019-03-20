
# 敏感词替换混淆

用同音字替换敏感词

[live demo](https://josherich.github.io/censor-obfus/)

## Caveats

- 实现不包含分词，因此例如“干”这样的单字会被替换，以及一些语义错误替换，可在 checkbox 中勾去
- 词库直接决定了替换的质量，这里使用的词库来自于 [sensitive-word-filter](https://github.com/gaohuifeng/sensitive-word-filter)

## 声明

- 此工具仅供文字替换功能，请合理使用
- 此工具大部分代码源自以下项目
  - [pinyinjs](https://github.com/sxei/pinyinjs)
  - [sensitive-word-filter](https://github.com/gaohuifeng/sensitive-word-filter)