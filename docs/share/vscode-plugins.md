---
sidebarDepth: 2
---

# vscode 插件

## 已集成到 vscode 的插件

目前很多插件已经被 vscode 本身集成，所以不需要安装这些插件。

同时安装这部分插件可能会对 vscode 本身功能有影响。

以下是 vscode 目前已集成的插件列表：

- HTML Snippets
- Npm Intellisense
- Document this
- ......

## css 相关插件

1. Beautify

推荐：:star::star::star:

说明：css 格式化插件，用于格式化 css/sass/scss/less 内容

支持：css/sass/scss/less 文件的格式化（在其他格式的文件中需要配置才能格式化相应的代码）

优点：简单便捷，配置项不复杂

缺点：无 css 提示功能

推荐配置：

```json
"beautify.tabSize": 2, // css 格式化缩进
"beautify.options": {
  "end_with_newline": true // 末尾新增一行
}
```

## js 相关插件

1. ESLint

推荐：:star::star::star:

说明：eslint 在 vscode 中的插件

支持：根据当前项目中 eslint 配置，检测代码，自动修复代码

优点：与项目的 eslint 规则保持高度的一致，能够提升代码质量与效率

缺点：需要一点配置

推荐配置：

```json
"eslint.autoFixOnSave": true,
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "html",
  {
    "language": "vue",
    "autoFix": true
  },
  {
    "language": "typescript",
    "autoFix": true
  }
]
// 以上的配置基本可以支持所有 js 相关的 eslint 检测 & 修复
```

## html 相关插件

1. Auto Rename Tag

推荐：:star::star::star:

说明：自动重命名标签名

支持：在 html 或其他文件中，修改前标签名时，自动修改后面对应的标签名

优点：在更换标签时非常好用

缺点：有时候会有错误

推荐配置：

```json
"auto-rename-tag.activationOnLanguage": [
  "html",
  "vue",
  "javascript",
  "javascriptreact"
]
```

## vue 相关插件

1. Vetur

推荐：:star::star::star:

说明：Vue 相关功能全部支持，目前为止在 vscode 中最好用的 vue 插件

支持：代码高亮，代码片段自定义，格式化代码，自动补全，代码错误检测，代码错误修复，调试

优点：功能全面，覆盖了 Vue 开发中基本所有需要的功能

缺点：代码检测无法根据 eslint 配置检测

推荐配置：

```json
"vetur.format.defaultFormatter.js": "none",
"vetur.validation.script": false,
"vetur.validation.template": false
// 因无法对 eslint 规则进行检测，所以关掉这些项
```

## git 相关插件

1. Git History

推荐：:star::star::star:

说明：查看 git log，历史文件，比较分支或者 commit 的插件

支持：git log 的查看，历史文件的查看，比较分支不同，比较 commit 的不同等

优点：功能丰富，能查看 git 工作流基本状况

缺点：暂无

2. GitLens

推荐：:star::star::star:

说明：在 vscode 代码中显示 git 记录

支持：在每行代码后面显示该行代码的提交记录，在文件最上方添加快捷功能按钮，可以查看整个文件所有地方的 commit 记录

优点：方便查看 git 提交记录，可以直接在编辑文件时就看到

缺点：配置项非常复杂（默认无需配置）

推荐配置：

```json
"gitlens.advanced.messages": {
  "suppressShowKeyBindingsNotice": true,
  "suppressUpdateNotice": true
},
```

## 其他

1. open in browser

推荐：:star:

说明：在浏览器中打开当前文件

支持：直接在浏览器中打开当前文件

优点：无需打开文件目录，可直接打开当前查看的文件，很方便

缺点：需要输入命令才能打开

使用方法：`alt + B` 或者 `command + shift + P` 然后输入 `Open in Default Browser`

2. Path Intellisense

推荐：:star::star::star:

说明：自动补全文件路径

支持：在使用 `import/require` 引入其他文件时，提供路径提示，设置关键字符串为指定路径

优点：提供引入文件的提示，避免引入错误的路径

缺点：不能点击路径跳转到文件

推荐配置：

```json
"path-intellisense.mappings": {
  "@": "${workspaceRoot}/src"
},
```

3. Debugger for Chrome

推荐：:star::star::star:

说明：在 vscode 中 debug 浏览器端的代码

支持：在 vscode 中输出控制台打印内容，打断点，调试等功能

优点：可以在编辑器中直接 debug

缺点：配置较复杂

vue 中的配置：

[vscode debug for chrome with vue](https://cn.vuejs.org/v2/cookbook/debugging-in-vscode.html)

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "vuejs: chrome",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}/src",
      "breakOnLoad": true,
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

4. Bracket Pair Colorizer

推荐：:star::star::star:

说明：一个使括号更鲜艳的插件

支持：使括号更为突出，更容易的找出括号对应的开始与结束的位置

优点：可以在多层括号中很容易的找出扩号结束的位置

缺点：只支持 js 相关的文件

5. Project Manager

推荐：:star::star::star:

说明：项目切换插件

支持：设置项目路径，使用快捷键打开设置的项目

优点：可使切换项目更方便

6. ftp-sync

推荐：:star:

说明：该扩展允许您轻松地将本地工作区（项目文件）与FTP服务器同步

支持：与 FTP 服务器同步

优点：对于使用 ftp 控制代码支持很好

缺点：没有目前的 git 控制代码方便

推荐配置：

```json
{
  "remotePath": "/path/path/", // path
  "host": "", // ip
  "username": "", // root
  "password": "", // your password
  "port": 22, // port
  "secure": false,
  "protocol": "sftp", // sftp
  "uploadOnSave": false,
  "passive": false,
  "debug": false,
  "privateKeyPath": null,
  "passphrase": null,
  "ignore": [
      "\\.vscode",
      "\\.git",
      "\\.DS_Store",
      "\\node_modules"
  ],
  "generatedFiles": {
      "uploadOnSave": false,
      "extensionsToInclude": [],
      "path": ""
  }
}
```

7. TODO Highlight

推荐：:star::star:

说明：在代码中添加 todo 之后，todo 显示高亮

支持：支持设置自定义关键字，高亮颜色自定义

优点：可以在代码中加入 todo 为避免忘记未完成的代码

8. Settings Sync

推荐：:star::star::star:

说明：vscode 代码设置同步

支持：把自己的 vscode 配置同步到 git 上

优点：更换电脑时不需要重新设置 vscode 的设置

使用步骤：github -> settings -> Developer settings -> Personal access tokens -> Generate new token -> 输入 Token description -> 勾选 gist 项 -> 复制 hash 值 -> vscode 中 `command + shift + P` -> 输入 `Sync：Update / Upload Settings`

9. VS Live Share

推荐：:star::star::star:

说明：实时的代码分享

支持：通过配置把代码，命令行，服务分享给其他人，并一起编辑代码，一起调试代码

优点：在多人协作编码中，可以避免代码冲突等多人合作问题

缺点：目前不稳定，容易断掉链接