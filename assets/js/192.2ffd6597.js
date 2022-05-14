(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{562:function(t,e,s){"use strict";s.r(e);var a=s(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"三、mvc交互"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、mvc交互"}},[t._v("#")]),t._v(" 三、MVC交互")]),t._v(" "),s("h2",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),s("p",[t._v("MVC，将域逻辑（domain logic）、业务逻辑（business logic）、表现逻辑（GUI）分开")]),t._v(" "),s("p",[t._v("REST 由 Roy Fielding 提出的概念，意思是表层状态转化，Representational State Transfer")]),t._v(" "),s("p",[t._v("Resource 资源：设定用户数据模型 + 网页界面，把Users想象未对象，可以CRUD")]),t._v(" "),s("p",[t._v("控制器是一个中枢，所有程序都会通过它")]),t._v(" "),s("h2",{attrs:{id:"model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model"}},[t._v("#")]),t._v(" Model")]),t._v(" "),s("p",[t._v("Model 是一个Ruby对象，表示网站中的一个元素，并负责和数据库通信;常负责数据合法性验证")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 限制字段长度最大 140\nclass Micropst < ActiveRecord::Base\n  validates :content, length: { maximum: 140 }\nend\n")])])]),s("h2",{attrs:{id:"view"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view"}},[t._v("#")]),t._v(" View")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#完整相对路径\napp/views/static_pages/home.html.erb\n")])])]),s("h2",{attrs:{id:"controller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#controller"}},[t._v("#")]),t._v(" Controller")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 表示类的继承, (ApplicationController < ActionControllerController)\nclass UsersController < ApplicationController\n\n# 调用了 User ActiveRecord 的库，一旦调用 @ 控制器就会调用视图代码\n@users = User.all\n")])])]),s("h2",{attrs:{id:"action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" Action")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET # 读取一个网页\nPOST # 创建某个东西\nPATCH # 更新\nDELETE # 销毁\n")])])]),s("h2",{attrs:{id:"rest-结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-结构"}},[t._v("#")]),t._v(" REST 结构")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  /users   index  GTE  主页\n\n  /users  create  POST  新建新用户\n\n  /users/1  show GET  显示ID为1的页面\n\n  /users/1 update PATCH  更新\n\n  /users/1  destroy  DELETE  删除\n\n  /users/new new  GET  创建用户\n\n  /users/1/edit  edit  GET  编辑用户\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);