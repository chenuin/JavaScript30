# Array Cardio Day 1

> 陣列 map/sort/filter/reduce 的使用方式

## Note
- 熟悉陣列方法
  - [map()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  - [sort()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  - [filter()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  - [reduce()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

- 上述四種方法，皆會回傳執行結果，但是 `sort` 除此之外，還會按照執行結果改變原始陣列
```js
const months = ['March', 'Jan', 'Feb', 'Dec'];
const sortMonths = months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

console.log(sortMonths);
// expected output: Array ["Dec", "Feb", "Jan", "March"]
```
`map`/`filter`/`reduce` 則不影響原始陣列
