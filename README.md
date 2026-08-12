# 金鱼官网

金鱼的独立顾问与个人作品网站，用来展示有边界的项目记录、工作方法和合作方式，也承接小红书和熟人转介绍流量。

## 发布方式

这个站点是纯静态页面，当前仓库是 `arya050601-goldfish/siyaoworks`，发布分支是 `main`，GitHub Pages 从仓库根目录提供页面；根目录 `CNAME` 指向 `siyaoworks.com`。

当前发布流程：

1. 完成本地全尺寸检查和 10 秒代理盲测。
2. 只显式暂存本轮改动文件，核对 `git diff --cached --name-only`，不得使用 `git add .` 或 `git add -A`。
3. 提交并推送到 `origin/main`。
4. 等待 GitHub Pages 完成更新。
5. 重新打开 `https://siyaoworks.com/`，做线上桌面 / 手机读回和截图。

除非先核验当前状态并获得明确授权，不要重建仓库，也不要改 GitHub Pages 或 DNS 配置。`dist/` 和 `siyaoworks-site-dist.zip` 是旧产物，不作为发布源。

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

## 改版与上线门槛

这个网站默认只有 10 秒争取第一次访问者。首页要在 10 秒内说清“这是谁、能帮谁、解决什么、最强证据在哪里、下一步做什么”；案例页要说清“问题、职责、状态和证据”。如果访客需要先读完一大段文字或猜项目身份，改版不合格。

完整的 agent 约束见 [`AGENTS.md`](AGENTS.md)。每次发布至少完成下面这轮检查：

- [ ] 普通内容区和案例区标题，桌面端默认 `40—48px`，移动端不超过 `34px`；桌面宽栏例外不超过 `54px`，且必须满足两行内、同屏仍有内容或证据。没有中文断词或单字孤行。
- [ ] 首屏不只剩标题，同时看得到解释、证据或主要行动。
- [ ] 每个模块有清楚边界；完整案例、未实施方案、待验证方案和本页摘要不会被看成同一类成果。
- [ ] 关键图片、图片内文字和品牌标识没有被裁掉，所有图注都能读。
- [ ] 已检查 `320`、`375`、`390`、`430`、`700/701`、`960/961`、`1024`、`1280`、`1440`、`1920` 宽度；桌面改动没有破坏手机，手机改动也没有破坏桌面。
- [ ] 已把 `1440×900` 和 `390×844` 截图交给未参与改动的 reviewer / agent 做 10 秒代理盲测，并记录误判点；没有把代理测试写成真实用户验证。
- [ ] 没有横向滚动、遮挡、空白卡尾、资源 404、重复 ID、缺失锚点或控制台错误。
- [ ] 导航、按钮、案例入口和微信入口可以使用。
- [ ] `git diff --cached --name-only` 只包含本轮冻结清单中的文件，没有误收 `.stfolder/` 或其他无关文件。
- [ ] 发布后重新打开 `https://siyaoworks.com/`，核对 commit、关键页面和桌面 / 手机截图；不能只以本地结果代替线上验收。

任一项未通过，停止发布并先修复。每次上线要保留测试视口、最终截图、链接与资源检查结果、发布 commit 和线上读回结果。
