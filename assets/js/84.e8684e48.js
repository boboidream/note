(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{446:function(t,e,r){"use strict";r.r(e);var a=r(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"vue-ssr-服务端渲染"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-ssr-服务端渲染"}},[t._v("#")]),t._v(" VUE SSR 服务端渲染")]),t._v(" "),r("p",[r("img",{attrs:{src:"img/bVL8EA.png",alt:"流程图"}})]),t._v(" "),r("p",[t._v("少数既需要 SPA 强交互性，又对 SEO 和首屏速度有刚性需求的场景，这时候同构 SSR 就派上用场了。")]),t._v(" "),r("p",[t._v("管理平台，不需要做SEO")]),t._v(" "),r("h2",{attrs:{id:"需求分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#需求分析"}},[t._v("#")]),t._v(" 需求分析")]),t._v(" "),r("ol",[r("li",[t._v("单页应用优势\n单页应用(SPA)\n改善用户体验。像APP一样流畅。")])]),t._v(" "),r("p",[t._v("首屏渲染慢。\n无法做seo。")]),t._v(" "),r("p",[t._v("服务端渲染是指，提前将页面在服务器端渲染好，当浏览器请求服务器时，直接返回渲染好的html页面返回。")]),t._v(" "),r("p",[t._v("Angular Universal 之于 Angular")]),t._v(" "),r("p",[t._v("Next.js 之于 React。")]),t._v(" "),r("p",[t._v("使用骨架屏（Skeleton Screen）来实现瞬间加载")]),t._v(" "),r("p",[t._v("Chrome 产品经理 Owen 写过一篇 Reactive Web Design: The secret to building web apps that feel amazing，谈到两种改进感知体验的手段：一是使用骨架屏（Skeleton Screen）来实现瞬间加载；二是预先定义好元素的尺寸来保证加载的稳定。跟我们的做法可以说不谋而合。")]),t._v(" "),r("h2",{attrs:{id:"几个疑惑"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#几个疑惑"}},[t._v("#")]),t._v(" 几个疑惑")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("有了 node 后台做渲染，是不是不需要提供 API 的后台？\nNO。虽然，使用 node 后台也能完成后台业务逻辑，如此一来，前后端又耦合严重。假设前端有变动，后台也得变，开发了移动都端 API 接口，PC 端无法复用。\n所以，依然要做前后端分离。前端 + 渲染 Server + API Server")])]),t._v(" "),r("li")]),t._v(" "),r("h2",{attrs:{id:"解决方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),r("ol",[r("li",[t._v("判断是蜘蛛访问时，使用服务器渲染\n"),r("img",{attrs:{src:"img/Prerender.jpg",alt:"针对爬虫预渲染"}})])]),t._v(" "),r("ul",[r("li",[t._v("数据量大时，渲染时间长")]),t._v(" "),r("li",[t._v("保证数据真实性，Google可能就会认为你在作弊")])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("首页用服务端渲染，加载完成后交给前端，成为 SPA\n多数时候搜索引擎都是依据Sitemap来进行索引的\n"),r("img",{attrs:{src:"img/render2.png",alt:"对蜘蛛单独做渲染"}})])]),t._v(" "),r("p",[t._v("我们就需要在JavaScript中赋予一些逻辑，我们还需要在Java在有同样的逻辑。维护两套逻辑。")]),t._v(" "),r("h2",{attrs:{id:"ssr-框架"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssr-框架"}},[t._v("#")]),t._v(" SSR 框架")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NUXT.js"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/camsong/blog/issues/8",target:"_blank",rel:"noopener noreferrer"}},[t._v("精读前后端渲染之争"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"http://www.jianshu.com/p/e810cb90fc33",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue 2.0服务端渲染从零开始"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.w3ctech.com/topic/2067",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务端与客户端同构 —— Vue.js 应用框架 Nuxt.js"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://huangxuan.me/2017/07/12/upgrading-eleme-to-pwa/",target:"_blank",rel:"noopener noreferrer"}},[t._v("饿了么的 PWA 升级实践"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);