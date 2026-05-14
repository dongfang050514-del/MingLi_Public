# MingLi 微信测试部署说明

当前项目已经生成微信测试入口：

- `wechat-release/index.html`
- `MingLi-wechat-release.zip`

## 最快方式：Netlify Drop

1. 打开 `https://app.netlify.com/drop`
2. 把 `wechat-release` 文件夹拖进去，或者上传 `MingLi-wechat-release.zip`
3. 等待生成 `https://...netlify.app` 链接
4. 把这个链接发到微信里测试

## Cloudflare Pages

1. 打开 Cloudflare Pages
2. 选择上传静态资源
3. 上传 `MingLi-wechat-release.zip`
4. 生成 `https` 链接后发到微信测试

## 注意

不要直接把 `.html` 文件发到微信。微信通常会把它当文件下载或预览，体验不稳定。应该发公网 `https` 链接。
