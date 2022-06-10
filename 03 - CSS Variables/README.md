# CSS Variables

> 使用 CSS Variables ，隨著數值改變、畫面顯示一起改變

## Note
- 熟悉 [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) 的用法，css 內可自定義變數來儲存一個值、重複利用。

- 設定 `oninput` 來監聽數值發生改變，將新的值寫入自定義的變數 (css variables)。教學影片是以 `addEventListener` 監聽 `change`、`mousemove` 來達成，兩者效果相同

- [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) 是一個物件，元件所有以 `data-` 開頭的 attributes ，物件中會去除前綴、轉 camel case 作為 key 可取得對應值，例如：
```html
<input data-sizing="px">
```
`dataset` 可藉此取得 `<input>` 內的設定的單位 (sizing)
```json
{
    "sizing": "px",
}
```

- 熟悉 [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) 的用法，可取得所有符合參數 `selectors` 的 node，回傳型別為 NodeList， 與`querySelector` 用法相似，區別在 `querySelector` 僅取得第一個符合的 node
```
querySelectorAll(selectors)
```

- 熟悉 [CSSStyleDeclaration.setProperty](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty) 的用法，可設定 css 樣式的值
