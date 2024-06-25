# webstorm



## 查看日志

1、进入Help展开tab，选择`Diagnostic tools`，再选择`debug log setting`，输入以下命令

~~~shell
#com.intellij.tailwind:trace
~~~

2、Help面板，选择`show log in finder`，找到日志文件`idea.log`



3、案例

~~~shel
`2021-04-03 00:45:00,528 [ 312804]  DEBUG - ilwind.service.TailwindService - Exit code: 1. Output: postcss-functions: postcss.plugin was deprecated. Migration guide:`
`https://evilmartians.com/chronicles/postcss-8-plugin-migration`
 `🚫 TypeError: Object.entries(...).flatMap is not a function`
 `at flattenColorPalette (/Users/xxx/Documents/webstormProjects/vite-vue2-windicss-starter/node_modules/tailwindcss/lib/util/flattenColorPalette.js:8:83)`
 `at /Users/xxx/Documents/webstormProjects/vite-vue2-windicss-starter/node_modules/tailwindcss/lib/plugins/divideColor.js:27:53`
 `at` 
~~~



## Tailwind预览