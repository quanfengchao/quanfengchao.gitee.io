### 安装

1. 创建并进入一个新目录

   ```sh
   mkdir vuepress-starter
   cd vuepress-starter
   ```

2. 初始化

   ```sh
   git init
   npm init
   ```

3. 将 VuePress 安装为本地依赖

   ```sh
   npm install -D vuepress@next
   ```

4. 在 `package.json` 中添加一些 scripts

   ```sh
   {
     "scripts": {
       "docs:dev": "vuepress dev docs",
       "docs:build": "vuepress build docs"
     }
   }
   ```

5. 将默认的临时目录和缓存目录添加到 `.gitignore` 文件中

   ```sh
   echo 'node_modules' >> .gitignore
   echo '.temp' >> .gitignore
   echo '.cache' >> .gitignore
   ```

6. 创建你的第一篇文档

   ```shell
       mkdir docs
       echo '# Hello VuePress' > docs/README.md
   ```

7. 在本地启动服务器

   ```sh
   npm run docs:dev
   ```
