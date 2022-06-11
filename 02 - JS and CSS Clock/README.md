# JS and CSS Clock

> 簡易時鐘

## 解題重點
- 取得目前時間 `new Date()`，進一步取得秒、分、小時：
```js
getSeconds()
getMinutes()
getHours()
```

- 熟悉 css 變化原點 [transform-origin](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform-origin) 的用法，指的是應用變化的點。預設值為正中央 (`center` / `50%`)，其餘可參考下面的對照表：

| **Keyword** | **Value** |
|-------------|-----------|
| left        | 0%        |
| center      | 50%       |
| right       | 100%      |
| top         | 0%        |
| bottom      | 100%      |

- 熟悉 css 旋轉 [rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate) 的用法，結合 transform-origin 設定固定的支點來設定物件旋轉的幅度

- 熟悉 [setInterval](https://developer.mozilla.org/zh-TW/docs/Web/API/setInterval) 的用法，可設定時間間隔重複呼叫指定的函數或執行一段程式碼
```
setInterval(code, [delay])
```
時鐘主要藉此每秒更新指針，設定延遲意味著剛載入畫面時，指針並不會馬上更新，開啟畫面後記得執行更新指針。
