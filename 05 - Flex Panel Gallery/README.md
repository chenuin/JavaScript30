# Flex Panel Gallery

> css flex 應用

## Note
- 熟悉 css flex 的用法 (可參考[圖解：CSS Flex 屬性一點也不難](https://www.casper.tw/css/2017/07/21/css-flex/))
- 使用 [toggle()](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle) 依照目前狀態新增及刪除 class
```
element.classList.toggle(className)
```
- 新增 `click` 事件的監聽，執行第一段 transition 讓文字變大、寬度變寬，緊接第一段結束，使用 `transitionend` 的監聽執行第二段讓上下文字進場或退場，flex 在不同瀏覽器實作不同，因此 propertyName 僅判斷是否包含 `flex`。
- `transitionend` 監聽裡的條件判斷很重要，因為會有不只一個事件被捕捉到，可能會因此讓 `toggle` 執行多次，使得畫面呈現異常
