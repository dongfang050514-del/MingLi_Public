# MingLi

低门槛八字 / 命理卡牌静态前端。

## 当前入口

- `index.html`：开发入口，引用 `styles.css` 和 `app.js`
- `MingLi-wechat.html`：微信测试用单文件版本
- `wechat-release/index.html`：静态托管入口，适合部署到 GitHub Pages、Cloudflare Pages、Netlify 等

## 本地预览

直接打开 `index.html` 可以测试开发版本。

如果要模拟微信分享体验，优先部署 `wechat-release/`，然后把生成的 `https` 链接发到微信里打开。

## 设计方向

水墨古风轻奢，普通版默认，专业版可选。输入流程采用单张卡牌逐步填写；结果流程采用命盘过场后，一页一章沉浸式翻页展示。
