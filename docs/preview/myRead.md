---
title: 项目相关
createTime: 2025/07/18 17:57:44
permalink: /article/hidden/
draft: false
next: false
---
我是被more之前网上的内容都会成为摘要
<!-- more -->
# 项目相关
  
##  一、分类
- 项目分类按照文件依次生成

::: center
分类示例图
![示例图](/example/category.png)
:::

## 二、归档

## 三、标签

2.精品管理 - 采购订单流程调整                                   -- 已完成 
3.预算中心数据填报增加上传和导出功能(销售/市场/客服/服务/新媒体/二手车/保险/租赁/人力/其他/精品)          -- 已完成 

1、备件管理 - 采购入库页面查询库存记录入出库记录时缺少参数
2、精品管理 - 恢复从销售单导入入库

## 四、文档使用技巧

### 1、上一页,下一页
- prev | next  `string | false | { text?: string; link?: string }`

### 2、博客 
主题默认会生成一个 链接地址为 `/blog/` 的 博客文章列表页。 展示所有的博客文章，以及 博主的相关信息。
- [x] **对应的文件链接**
- 博客 > `/blog/` 
- 标签 > `/blog/tags/` 
- 归档 >  `/blog/archives/` 

### 3、forntmatter 常用属性

![forntmatter](/example/forntmatter.png)

- `forntmatter` [其他的用法](https://theme-plume.vuejs.press/config/frontmatter/basic/)
### 4、摘要

- 文章对应的摘要 
![摘要](/example/zhaiyao.png)
- 用`<!-- more -->` 修饰之前的的都会被设为摘要
- 主题更建议使用 `<!-- more --> `注释来添加摘要

### 5、标签页，分类页和归档页

- [x] 主题除了自动生成 博客文章列表页 以外，还会自动生成 标签页，分类页 和 归档页。

- [x] 标签页 可以根据 标签 筛选并展示 博客文章， 默认地址为 `/blog/tags/`

- [x] 分类页 可以根据 原始目录结构 分类展示 博客文章, 默认地址为 `/blog/categories/`

- [x] 归档页根据文章的创建时间进行归, 默认地址为 `/blog/archives/`

### 5、文档、知识笔记
- 笔记以文件结构作为划分依据，默认以 `notes/` 作为根目录， 存放在 `notes` 目录下的 文档不会作为 博客文章，不会出现在 博客文章列表页中。

### 6、Emoji [所有支持的](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)
- 语法 `:字符:` 
- :tada:
- `[[TOC]]` 文档结构

### 6、GIthub 风格容器警报
- 语法 
```markdown
> [!IMPORTANT | TIP | NOTE | NOTE | WARNING | CAUTION]
> 强调用户在快速浏览文档时也不应忽略的重要信息。
```
- IMPORTANT 示例

> [!IMPORTANT]
> 重要的示例

### 7、图标 
1. [iconify 默认](https://icon-sets.iconify.design)
2. [iconfont 可选](https://www.iconfont.cn/)
3. [fontawesome 可选](https://fontawesome.com/)

- 语法` ::name::`
```markdown
::name =size::
::name /color::
::name =size /color::
```
- 示例
::streamline-ultimate-color:circus-clown-1 =100::

- [x] github: ::tdesign:logo-github-filled::
- [x] 修改颜色：::tdesign:logo-github-filled /#f00::
- [x] 修改大小：::tdesign:logo-github-filled =36px::
- [x] 修改大小颜色：::tdesign:logo-github-filled =36px /#f00::
- [x] 彩色图标 ::skill-icons:vscode-dark =36px::

### 8、马克笔
==马克笔== 是对 Markdown 中的的标记语法` ==Mark==` 的扩展，支持在内容中使用多种不同的颜色来标记文本， 还可以方便灵活的自定义更多不同的马克笔颜色。
- 不同的颜色
  
==一个提示=={.tip} ==一个警告=={.warning} ==一个错误=={.danger} ==重要内容=={.important}

### 9、文件树
::: file-tree

- docs
    - .vuepress
        - ++ config.ts
    - -- page1.md
    - README.md
- theme  一个 **主题** 目录
    - client
        - components
            - **Navbar.vue**
        - composables
            - useNavbar.ts
        - styles
            - navbar.css
        - config.ts
    - node/
- package.json
- pnpm-lock.yaml
- .gitignore
- README.md
- …
  :::

### 10、 plume [markdown 拓展](https://theme-plume.vuejs.press/guide/markdown/basic/)

### 11、对话记录


::: chat title="对话测试"
{:2025-03-24 10:15:00}

{用户一}
用户一的消息

{.}
本人的消息

{用户二}
用户二的消息

{.}
本人的消息
:::

### 12、vuepress 安装部署
[VuePress 个人博客搭建](https://blog.csdn.net/weixin_46252229/article/details/142065215?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522a41edf5eacc009f75eebbc6e0e674b83%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=a41edf5eacc009f75eebbc6e0e674b83&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-1-142065215-null-null.nonecase&utm_term=vue&spm=1018.2226.3001.4450)
