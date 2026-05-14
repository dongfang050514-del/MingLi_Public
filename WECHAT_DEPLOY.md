# MingLi 微信测试部署说明

当前项目已经生成微信测试入口：

- `wechat-release/index.html`
- `MingLi-wechat-release.zip`

## 推荐方式：腾讯云 EdgeOne Pages

1. 打开 EdgeOne Pages 新建项目页。
2. 选择 GitHub 仓库 `dongfang050514-del/MingLi_Public`。
3. 生产分支选择 `main`。
4. 构建设置填写：
   - 框架预设：`Other`
   - 根目录：`./`
   - 输出目录：`wechat-release`
   - 构建命令：`echo Static files are already prepared in wechat-release`
   - 安装命令：`echo No dependencies required`
5. 部署成功后，把 EdgeOne 生成的 HTTPS 链接发到微信里测试。

## 备用方式：上传静态包

如果使用支持静态上传的平台，可以直接上传：

```text
MingLi-wechat-release.zip
```

或上传整个文件夹：

```text
wechat-release/
```

## 注意

不要直接把 `.html` 文件发到微信。微信通常会把它当成文件下载或预览，体验不稳定。更推荐发公网 HTTPS 链接。

如果用户反馈打不开，优先检查：

- 是否使用 HTTPS 链接。
- 是否部署的是 `wechat-release/index.html`。
- 是否用了 GitHub Pages 这类在微信中偶发不稳定的域名。
- 是否需要换成 EdgeOne/CloudBase 这类更适合微信访问的静态托管。
