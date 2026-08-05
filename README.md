# 金鱼官网

金鱼独立顾问网站，用来承接小红书和熟人转介绍流量。

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
- `script.js`：页面滚动时的页头状态
- `hero-product-workspace.webp`：第一屏产品/店铺/商业工作场景图
- `goldfish-mark.svg`：正式使用的个人 IP「朱印金鱼」标识，也作为 favicon
- `logo-options.html` / `logo-options/`：金鱼 logo 的 10 个候选方向，当前只做挑选用，未替换正式站点标识
- `logo-options-v2.html` / `logo-options-v2/`：按 Huashu-Design 流程重做的第二轮金鱼 logo 候选
- `logo-seal-comparison.html`：上一版「朱印金鱼」和第二轮「赤陶裁章」的同尺寸对比图
- `work/ccclay/index.html`：可独立分享的 CCCLAY 无限倾角杯案例页
- `work/ccclay/case.css`：CCCLAY 案例页专用样式
- `work/ccclay/assets/`：经公开范围筛选并压缩后的案例主图与详情页切片
- `work/franchise-tea-product-system/index.html`：可独立分享的加盟食品饮料连锁产品经营案例页；公开身份已隐去，明确标注为未实施的独立方案
- `work/franchise-tea-product-system/case.css`：加盟连锁案例页专用样式与两张响应式机制图
- `work/franchise-tea-product-system/assets/franchise-tea-product-system-public.pdf`：重新制版的两页脱敏公开方案
- `work/franchise-tea-product-system/assets/franchise-tea-product-system-og.png`：案例页社交分享图
- `ccclay-case-hero.webp` / `ccclay-case-use.webp` / `ccclay-case-packaging.webp`：旧版 CCCLAY 产品场景图，暂保留用于兼容和回退
- `wechat-qr.png`：微信二维码，放在根目录，避免部署后路径丢失
- `CNAME`：GitHub Pages 自定义域名配置

## 当前方向

视觉基调改为更克制的独立顾问 / 个人档案风格：白底、细线、强文字、少色块，弱化模板感。

首页在 CCCLAY 代表案例之后增加“经营故障路由板”，把加盟连锁常见的四类问题汇入独立产品经营案例；它不是客户实施成果，不主张采纳、背书或经营结果。
