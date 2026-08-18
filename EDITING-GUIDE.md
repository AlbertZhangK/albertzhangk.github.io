# 张开 Kai Zhang 个人网站：直接修改指南

这是一套不需要 React、npm 或任何构建工具的纯 HTML 网站。用任意代码编辑器打开文件，改完保存，就能直接上传 GitHub Pages。

## 一、文件分别控制什么

```text
kai-zhang-editable-html/
├── index.html              首页：照片、个人介绍、教育、语言、Email、CV
├── research.html           研究：发表成果、会议发言
├── teaching.html           教学
├── beyond.html             研究之外：徒步、豆瓣、博客小计
├── styles.css              全站颜色、字号、间距、电脑端和手机端排版
├── script.js               中英文切换、手机菜单、自动年份
├── Kai-Zhang-CV.pdf        你的 CV（需要你以后自己放入）
└── images/
    ├── portrait.jpg        你的个人照片（需要你自己放入）
    ├── cincinnatus-rome.jpg
    └── og.png
```

HTML 文件里已经写了很多中文注释。用编辑器搜索“修改”“添加”或“CV”，就能快速找到需要动手的位置。

## 二、最常见的修改

### 1. 修改个人介绍、教育经历和语言

打开 `index.html`：

- 搜索“修改中文版个人介绍”，替换中文版段落；
- 紧接着替换英文版段落；
- 搜索“修改教育经历”和“修改语言能力”，按现有格式增删内容。

每组文字都有中文版 `.lang.zh` 和英文版 `.lang.en`。两种语言最好一起更新。

### 2. 更换个人照片

把你的照片改名为：

```text
portrait.jpg
```

然后放进 `images` 文件夹即可；以后换照片时直接覆盖同名文件。建议使用竖版照片，比例接近 4:5；不需要改 HTML。

### 3. 更换右侧罗马油画

把新图片改名为：

```text
cincinnatus-rome.jpg
```

放进 `images` 文件夹并覆盖原图。如果图片主体被裁掉，可以在 `styles.css` 搜索 `.roman-frame img`，修改：

```css
object-position: center;
```

例如 `center top` 会更多展示图片上部。

### 4. 修改 Email

在编辑器中全局搜索：

```text
albertk@pku.edu.cn
```

全部替换为新邮箱。注意 `mailto:` 后面也需要一起替换。

### 5. 加入 CV

先把 CV 改名为：

```text
Kai-Zhang-CV.pdf
```

放在与 `index.html` 相同的文件夹。然后在 `index.html` 搜索“启用 CV”，按照注释：

1. 删除显示“CV（待上传）”的 `<span>`；
2. 取消下面 CV 链接的注释。

启用后的核心代码是：

```html
<a href="Kai-Zhang-CV.pdf" target="_blank">
  CV <span aria-hidden="true">↗</span>
</a>
```

### 6. 增加发表成果或会议发言

打开 `research.html`，找到对应列表，复制一个完整的：

```html
<li>
  ...
</li>
```

粘贴后替换其中的中英文内容。若要链接 PDF，可以把标题写成：

```html
<a href="你的论文文件.pdf" target="_blank">论文标题</a>
```

并把 PDF 放在网站文件夹中。

### 7. 修改教学页面

打开 `teaching.html`，搜索“修改教学介绍”，直接替换其后的中文和英文段落。

### 8. 添加博客文章

打开 `beyond.html`，搜索“添加博客文章的方法”。文件里已放好可复制的链接模板：

```html
<li>
  <a href="https://你的文章链接" target="_blank" rel="noopener noreferrer">
    <time datetime="2026-07">2026.07</time>
    <span class="lang zh">文章中文标题</span>
    <span class="lang en">English Article Title</span>
    <span class="blog-arrow" aria-hidden="true">↗</span>
  </a>
</li>
```

把它放入 `<ul class="blog-list">` 内，然后删掉一个“暂未更新”的占位项。

## 三、调整颜色、字号和间距

打开 `styles.css`。最上面的 `:root` 集中控制主要颜色：

```css
--ink: #24231f;         /* 正文颜色 */
--paper: #f5f1e8;       /* 页面背景 */
--accent: #8a4636;      /* 强调色 */
--page-width: 1180px;   /* 页面最大宽度 */
```

正文大小在 `body` 中：

```css
font-size: 16px;
line-height: 1.68;
```

电脑端和手机端规则都已写好。手机端排版位于文件底部的 `@media` 区域；如果只是改文字和图片，不需要动它。

## 四、页面标题与 Google 搜索标题

四个 HTML 文件都必须保留：

```html
<title>张开 Kai Zhang</title>
```

`script.js` 也会固定这个标题，避免语言切换后回到“张开Zhang Kai”。

上传新版本后，浏览器标签会立即改变；Google 搜索结果可能需要几天到几周重新抓取。若你使用 Google Search Console，可以提交首页 URL 请求重新编入索引。

## 五、在电脑上预览

最简单的方法是双击 `index.html`，浏览器会直接打开。

如果页面之间跳转或本地文件显示不正常，可以在这个文件夹中打开终端，运行：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 六、上传 GitHub Pages

把这个文件夹中的所有文件上传到你的 GitHub Pages 仓库根目录，不要只上传 `index.html`，也不要漏掉 `images`、`styles.css` 和 `script.js`。

如果你使用 Git：

```bash
git add -A
git commit -m "Update personal website"
git push
```

在 GitHub 仓库的 `Settings → Pages` 中，通常选择：

- Branch：`main`
- Folder：`/ (root)`

保存后等待部署完成即可。

## 七、建议的日常修改顺序

1. 在代码编辑器中改 HTML 文字或替换图片；
2. 双击 `index.html` 或启动本地预览；
3. 分别检查中文、英文、电脑端和手机端；
4. 确认无误后上传 GitHub。

除非你要改变整体视觉设计，否则通常只需要编辑 HTML 和图片，不必修改 `styles.css` 或 `script.js`。
