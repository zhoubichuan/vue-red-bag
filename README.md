# Vue 版微信

---

## 项目预览地址

Vue 版微信：[]()

前台页面由: []()提供

后台管理系统：[]()

默认账号：xuzijia 默认密码：xuzijia

## 项目主要内容

### 前台

- [x] 博客主页文章列表展示
- [x] 博客分类标签展示
- [x] 博客文章详情页
- [x] 博客文章评论系统（多楼层评论）

---

### 后台

- [x] 博客文章内容管理
- [x] 博客分类标签管理
- [x] 博客评论管理

---

### 项目主要架构

- 前端主要页面：基于 vue 框架搭建的
- 后台架构：springmvc+spring+mybatis+mysql+freemarker+maven 等技术架构进行开发

---

## 项目部署

- 复制该项目到本地中
- 将项目导入到 IDEA 开发工具(必须有 maven 环境)
- 修改数据库配置文件 jdbc.properties 配置成自己的数据库参数
- 修改/src/main/java/com/xuzijia/common/Config.java 将 uploadUrlRoot 属性修改为自己的上传路径
- 配置 tomcat 配置文件 server.xml 增加虚拟路径，供访问本地图片(看不懂的自行 google 了解~)

```
<!-- 增加虚拟路径，供访问本地图片-->
<Context path="/resource" docBase="/www/resource/system_resource" reloadable="false" ></Context>
```

---

## 项目部分效果图预览

> _1. 博客系统主页效果图_

![博客系统主页效果图]()

> _2. 博客文章详情效果图_

![博客文章详情效果图]()

> _3. 文章评论楼层效果图_

![文章评论楼层效果图]()

> _4. 后台管理系统文章管理_

![后台管理系统文章管理]()
![后台管理系统文章管理]()

> _5. 后台管理系统分类标签管理_

![后台管理系统分类标签管理]()

> _6. 后台管理系统评论管理_

![后台管理系统评论管理]()
![后台管理系统评论管理]()

> _7. 后台管理系统登陆页面_ > ![后台管理系统登陆页面]()

> _8. 后台管理系统菜单管理（**功能暂未开发~**）_

![后台管理系统菜单管理](

> _9. 后台管理系统网盘管理（**功能暂未开发~**）_

![后台管理系统网盘管理]()
![后台管理系统网盘管理]()

---

> **再一次感谢您花费时间阅读这份文档，star 一下吧 嘿嘿~~~**

作者： **周必川**  
最后一次修改时间：_2019 年 09 月 25 日_
npm run deploy
