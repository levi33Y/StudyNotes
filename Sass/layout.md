## 使用vw+rem+sass实现宽度自适应

### #

1. rem 单位，基于html font-size的大小动态比例
2. vh、vw 当前窗口高宽

### #

html设置

```scss
$vw_base: 3.9px;
$rem_base: 18px;
@function vw($px) {
  @return (($px * $rem_base) / $vw_base) * 1vw;
}

html {
  font-size: vw(0.97);
}
```

自适应页面

```scss
.tabbarAll {
  width: 100vw;
  height: 4.9rem;
  ...
```

#

