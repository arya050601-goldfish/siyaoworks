# Siyao Works

李思瑶独立顾问网站，用来承接小红书和熟人转介绍流量。

## 发布方式

这个站点是纯静态页面，适合直接发布到 GitHub Pages。

1. 在 GitHub 新建一个公开仓库，例如 `siyaoworks`。
2. 把本地仓库推送到 GitHub。
3. 在仓库 `Settings -> Pages` 里选择 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`。
4. 自定义域名填写 `siyaoworks.com`。仓库根目录已经包含 `CNAME` 文件。
5. 在域名 DNS 里把 `siyaoworks.com` 指向 GitHub Pages，并给 `www` 配一个 CNAME。

GitHub 官方文档会更新 DNS 细节，最终以这里为准：
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## 文件

- `index.html`：页面结构与正式文案
- `styles.css`：视觉样式与响应式布局
- `script.js`：导航滚动
- `hero-product-workspace.webp`：第一屏产品/店铺/商业工作场景图
- `wechat-qr.png`：微信二维码，放在根目录，避免部署后路径丢失
- `CNAME`：GitHub Pages 自定义域名配置

## 当前方向

视觉基调改为更克制的独立顾问 / 个人档案风格：白底、细线、强文字、少色块，弱化模板感。
