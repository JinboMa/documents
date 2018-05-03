# JavaScript

## async 函数

```javascript
<!-- 示例 -->
async function init () {
  // getData is a ajax function
  let res = await getData()
  // or you want to get data
  let data = (await getData()).data
}
```