# 六、React样式
## 文章
- [React 组件中如何组织 CSS](https://github.com/ustccjw/Blog/issues/13)
- [CSS 已死及各种样式管理方式](https://github.com/erikras/react-redux-universal-hot-example/blob/master/docs/InlineStyles.md)

## 插件
- [isomorphic-style-loader](https://github.com/kriasoft/isomorphic-style-loader)
  > An alternative CSS style loader, which works similarly to style-loader, but is optimized for isomorphic apps. In addition to what style-loader provides, it allow to render critical path CSS during server-side rendering (SSR), by adding two helper methods on to the styles object - ._insertCss() (injects CSS into the DOM) and ._getCss() (returns CSS string).

  > 其本质是生成了 `CompontName_ClassName_xxx` 的 class 默认拥有作用域。

- [CSS Modules](https://github.com/css-modules/css-modules)
- [css loader for webpack](https://github.com/webpack/css-loader)
