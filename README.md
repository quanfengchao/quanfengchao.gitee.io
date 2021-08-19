1. 初始化

   ```sh
   npm init
   ```

2. 安装VuePress、vuepress-plugin-autobar、vuepress-plugin-permalink-pinyin、 vuepress-plugin-rpurl

   ```sh
   npm install vuepress boboidream/vuepress-bar vuepress-plugin-permalink-pinyin boboidream/vuepress-plugin-rpurl -D 
   ```
3. 在 `package.json` 中添加一些 script

   ```json
   {
     "scripts": {
       "docs:dev": "vuepress dev docs",
       "docs:build": "vuepress build docs"
     }
   }
   ```
4. 将默认的临时目录和缓存目录添加到 .gitignore 文件中
   ```shell
      echo 'node_modules' >> .gitignore
      echo '.temp' >> .gitignore
      echo '.cache' >> .gitignore
   ```
4. 创建你的第一篇文档

   ```sh
   mkdir docs
   echo '# Hello VuePress' > docs/README.md
   ```
   
5. 在本地启动服务器

   ```sh
   npm run docs:dev
   ```
