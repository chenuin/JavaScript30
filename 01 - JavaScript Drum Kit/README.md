# JS Drum Kit

> 按下鍵盤時播放對應的音效

## 解題重點
- 熟悉 [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) 的用法，可監聽事件發生
```js
addEventListener(type, listener)
```
會使用到兩種事件：
  - [keydown](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event) - 按下鍵盤
  - [transitionend_event](https://developer.mozilla.org/en-US/docs/Web/API/Document/transitionend_event) - CSS transition 結束

另外有個事件 `keyup`，代表放開鍵盤時，當 `transition` 時間較短的時候看不出差異。時間一拉長時，可能動畫還沒結束就放開鍵盤，看起來不流暢、不適合在這邊使用。

- 鍵盤特性 [keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)，例如 a 對應到 65

- 熟悉 [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) 的用法，可取得頁面上的 element
```js
querySelector(selectors)
```
特別需要注意的是，按下任何鍵盤按鈕都會觸發 `keydown` 事件，如果找不到對應的 element，就不執行任何事情。

- 熟悉 [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) 的用法
```js
element.classList.add(className) // 新增 class
element.classList.remove(className) // 移除 class
```

- 熟悉 [HTMLMediaElement.play](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play) 的用法，可播放音效
