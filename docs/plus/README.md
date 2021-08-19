### 插件
安装插件 [vuepress-plugin-autobar](https://github.com/boboidream/vuepress-bar)
```shell
    npm install -D boboidream/vuepress-bar
    
    // 配置中添加插件  .vuepress/config.js
    odule.exports = {
      plugins: ['autobar']
    }
```

### Tips
1. 拼音地址兼容 [vuepress-plugin-permalink-pinyin](https://github.com/viko16/vuepress-plugin-permalink-pinyin) 

```shell
    npm i vuepress-plugin-permalink-pinyin --save-dev
    plugins: ['permalink-pinyin']
     
    // 配置中添加参数 .vuepress/config.js
    module.exports = {
      plugins: ['permalink-pinyin', ['autobar', {'pinyinNav': true}]],
    }
```
2. 如果觉得生成链接太丑，可以使用 [vuepress-plugin-rpurl](https://github.com/boboidream/vuepress-plugin-rpurl) 插件，此插件会默认将 autobar 生成链接优化
```shell
    npm install boboidream/vuepress-plugin-rpurl -D
    
    plugins: ['rpurl']
    
    
```


