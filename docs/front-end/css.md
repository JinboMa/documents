# CSS

## 单行/多行文字超出隐藏，超出使用 ...

```css
/* single line */
.test {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
/* muti line */
{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```