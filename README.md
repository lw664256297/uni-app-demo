# 添加依赖

```bash
npm install
或者
yarn install
```

# 运行

```bash
npm run dev
或者
yarn dev
```

# 打包

```bash
npm run build
或者
yarn build
```

# 快速构建工具

> 为保证使用 Typescript 开发 Vue 的规范性和开发效率，添加组件、页面、路由、store 的时候尽量使用工具添加，添加组件或页面之后，请参照注释位置实现对应的方法和逻辑。

## 添加组件或者页面

```bash
yarn cli add [<componentPath>]
或者
npm run cli add [<componentPath>]
# 示例
添加通用组件       yarn cli add src/components/Hello
添加页面          yarn cli add src/pages/App
添加视图          yarn cli add src/views/Home
在视图里面添加组件  yarn cli add src/views/Todo/components/TodoList
```

## 添加 store

```bash
yarn cli store [storeName] -- -p [store path] -n [filename]

选项：
  --version, -v   显示版本号                         [布尔]
  --help          显示帮助信息                       [布尔]
  --path, -p      The store module path            [默认值: "src/store/modules"]
  --filename, -n  The store file name              [默认值: "与 storeName 一致"]
```
