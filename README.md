# Aura AI

你是一名资深产品经理、UI/UX设计师和React前端工程师。

请帮我创建一个移动端优先的AI护肤应用前端。

产品名称：

BeautyAI

产品定位：

AI美妆安全助手。

它不是普通护肤记录App，而是一个能够理解用户肌肤状态、分析护肤产品成分、提供个性化护理建议的AI Agent。

核心能力：

1. AI分析护肤产品成分安全性

2. 建立个人肤质画像

3. 记录每日肤感变化

4. AI生成每日护肤建议

5. 基于用户数据持续优化推荐

====================

技术要求

====================

请使用：

React + TypeScript

Tailwind CSS

组件化开发

移动端优先设计

代码要求：

1. 所有页面拆分为独立组件

2. 不要将数据写死在页面中

3. 使用Mock数据文件模拟后端数据

4. 预留API调用接口

5. 后续需要连接Supabase数据库

项目结构建议：

src/

components/

pages/

hooks/

services/

types/

themes/

mock/

====================

整体视觉风格

====================

定位：

高端护肤品牌 + AI智能助手。

关键词：

- 极简

- 高级

- 干净

- 温柔

- 科技感

- 女性友好

参考：

Apple Health

高端护肤品牌官网

现代AI产品界面

避免：

- 电商页面风格

- 小红书风格

- 大面积粉色

- 黑色科技风

- 复杂赛博朋克

====================

设计系统

====================

创建Theme系统。

支持6种主题：

1.

香芋紫谧境｜柔光修护

关键词：

温柔、修护、疗愈

2.

奶杏暖光｜原生温润

关键词：

温暖、自然、陪伴

3.

冰川清蓝｜清透舒缓

关键词：

科学、安全、敏感肌

4.

青雾苔野｜植萃愈肤

关键词：

自然、植物、修护

5.

薄薰浅汐｜智护肌肤

关键词：

AI、未来、智能

6.

素白禾序｜简净护肤

关键词：

极简、高级、长期主义

请创建：

theme.ts

统一管理：

backgroundColor

primaryColor

cardColor

accentColor

textColor

aiEffectColor

所有组件禁止硬编码颜色。

====================

导航结构

====================

创建底部固定导航。

共5个页面：

1.

首页

2.

AI督导

3.

AI分析中心

4.

社区

5.

我的

使用React Router实现页面切换。

底部导航：

简洁iOS风格。

圆角。

轻动画。

当前页面高亮。

暂时先完成整体架构。

不要生成具体业务页面。

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/66defe77-9083-4223-baaa-28a06c310d84).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
