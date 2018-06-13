---
sidebarDepth: 2
---

# vscode 使用技巧

## 显示所有命令

快捷键：`command + shift + P`

操作步骤：打开一个命令行，输入关键字搜索相关命令，回车执行命令

## 转到文件

快捷键：`command + P`

操作步骤：打开一个命令行，输入文件名，选择相应文件，vscode 将会打开文件

## 添加 jsdoc 注释

操作步骤：在 js 或 vue 文件中 -> 输入 `/**` -> 按回车键即可添加 jsdoc 注释行

## 万能的 command + P

快捷键：`command + P`

操作步骤：打开一个命令行，输入文件名，选择相应文件，vscode 将会打开文件

提示：打开命令行后，输入 `?` 有相关功能的提示

功能列表：

| 键入关键字 | 功能说明 |
| -------- | ------- |
| 无关键字 | 根据输入匹配当前项目的文件名，打开文件 |
| : | 跳转到当前文件某一行，后面加要跳转的行数 |
| @ | 跳转到当前文件中某‘符号’的位置 (’符号‘可以是 html 标签，css 类名，js 函数名，等) |
| > | 显示并运行命令，同 `command + shift + P` |
| debug | 运行 debug 中设置好的某个配置 |
| task | 运行任务 (任务可以从 package.json 中读取 scripts 内容) |
| ? | 获取有关可进行的操作的帮助 |

注意：因为英文关键字与无关键字功能重复，所以<b>英文关键字后都需要加一个空格</b>才能生效！！！（例如：debug, task, 等）

以上只是其中一部分常用功能，如果想了解更多，使用 `?` 查看

## 利用TypeScript的高级类型检查 Type Checking

操作步骤：（下面👇提供三种供参考的使用方式）
  - 在需要运行该高级类型检查的js文件，第一行加入`// @ts-nocheck`代码
    ```js
    // @ts-check
    let easy = 'abc'
    easy = 123 // Error: Type '123' is not assignable to type 'string'
    ```
  - 在工作区或者用户设置中增加`"javascript.implicitProjectConfig.checkJs": true`；不想使用类型检查的文件在第一行加入`// @ts-nocheck`，或者再细化可以直接在错误的`那一行的上一行`增加`// @ts-ignore`
    ```js
    // @ts-nocheck
    let easy = 'abc'
    easy = 123 // no error
    ```
  
    ```js
    let easy = 'abc'
    // @ts-ignore
    easy = 123 // no error
    ```
  - 根目录使用jsconfig.json
    ```json
    {
    "compilerOptions": {
        "checkJs": true
    },
    "exclude": [
        "node_modules",
        "**/node_modules/*"
    ]
    }
    ```

优点：不需要额外插件，有详细问题输出和问题提示，并且`单击`错误提示，在错误的那行的行首可能会出现`提示💡`，点击`💡`，还有快速修复的快捷方式，包括添加缺少的导入和添加缺少的属性。
