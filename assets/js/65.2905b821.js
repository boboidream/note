(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{593:function(t,e,a){"use strict";a.r(e);var r=a(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-配置"}},[t._v("#")]),t._v(" webpack 配置")]),t._v(" "),a("h2",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" css")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/css-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Loader"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("PostCSS for Webpack"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/less-loader#less-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("less-loader"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/extract-text-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Extract Text Plugin"),a("OutboundLink")],1),t._v("\n解决 ExtractTextPlugin 分离出 .CSS 不被压缩问题")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/optimize-css-assets-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("optimize-css-assets-webpack-plugin "),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" html")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    new ExtractTextPlugin("),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style.css"')]),t._v(")"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    new HtmlWebpackPlugin("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" libraryName + ' Demo'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '../demo/index.html'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" __dirname + '/src/index.ejs'\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(")\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML Webpack Plugin"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"解决引用-jquery-插件问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决引用-jquery-插件问题"}},[t._v("#")]),t._v(" 解决引用 jquery 插件问题")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("window.$ = window.jQuery = require('jquery');\n")])])]),a("h2",{attrs:{id:"npm-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-命令"}},[t._v("#")]),t._v(" npm 命令")]),t._v(" "),a("ul",[a("li",[t._v("开发")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack --progress --colors --watch"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器"}},[t._v("#")]),t._v(" 服务器")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://webpack.js.org/guides/development/#webpack-dev-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-dev-server"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/webpack/webpack-dev-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-dev-server - github"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("不要设置 hot 任何选项，不然会报错 "),a("code",[t._v("hot Module replce is disabed")])]),t._v(" "),a("h2",{attrs:{id:"为-umd-插件设置-global-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为-umd-插件设置-global-namespace"}},[t._v("#")]),t._v(" 为 umd 插件设置 global namespace")]),t._v(" "),a("div",{staticClass:"language-coffeescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-coffeescript"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("output")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./.tmp'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].js'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("sourcePrefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\t"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("library")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("nameSpace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camelize pluginName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("libraryTarget")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'umd'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("umdNamedDefine")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),t._v("\n")])])]),a("p",[t._v("导出的 module 总为 "),a("code",[t._v("{}")])]),t._v(" "),a("p",[t._v("查看 "),a("code",[t._v("index.js")]),t._v(" 是不是忘记 "),a("code",[t._v("module exports = yourModule")])]),t._v(" "),a("h2",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-contrib"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000007126268",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack多页应用架构系列"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs-templates/webpack/blob/master/template/build/dev-server.js#L32-L37",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决热更新"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);