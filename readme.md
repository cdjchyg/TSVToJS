
实现tsv格式的配置表转换为json格式
践行TDD，落实好单元测试
采用 node.js + ts 的方式

用于对比 PuerTS V8加载所有配置和xLua加载所有配置对内存和时间的消耗

1. npm init -yes 创建项目
2. npm install typescript --save-dev # 把依赖写入devDependencies，表示开发中需要，运行中不需要；如果使用--save或者不写写入dependencies，运行时也需要
3. 创建 tsconfig.js , ts工程配置
   npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs false --noImplicitAny false

   --resolveJsonModule 模块内部引入 JSON 模块
   --esModuleInterop 

4. 可配置自动热重载，类似于 vue
5. package.json中scripts下配置 
   "start":"node build/index.js",  /*运行*/
   "build":"tsc" /*编译*/
   就可以使用npm 运行 scripts下的命令
6. 调试 在输出的js中打断电，执行菜单 Run -> Start Debugging , 选中 node.js 开始调试
   

单元测试框架 (mocha、jest)，此处使用jest
1. 安装：
   npm install mocha chai @types/mocha @types/chai --save-dev
2. 编写代码和测试代码，比如 MochaTest.ts和UnitTest/MochaTest.test.ts
3. 在package.json scripts下配置test， mocha build/**/*.test.js 执行build下所有的测试命令
4. npm run build 、 npm run test, 执行所有单元测试

配置代码检测工具eslint https://blog.csdn.net/cmdfas/article/details/120282951
1. npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
2. 创建es配置文件.eslintrc和忽略文件.eslintignore
3. 在package.js中配置 "lint": "eslint . --ext .ts"
4. npm run lint 检测代码

TODO 如何自动清理build中的多余文件
