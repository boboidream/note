# 七、React-router路由

## 参考资料
- [React Router 使用教程](http://www.ruanyifeng.com/blog/2016/05/react_router.html)
- [react-router-tutorial](https://github.com/reactjs/react-router-tutorial/tree/master/lessons)

## 心得
1. 本质上 Router 只是一个组件

```
import { Router, Route, hashHistory } from 'react-router'
```
2. `Router` 只是一个容器，接收 histroy 参数。
3. 内部 `Route` 才指定某个路由行为。

```js
render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/repos" component={Repos} />
    <Route path="/about" component={About} />
  </Router>
), document.getElementById('app'))
```

4. Link 使用

```js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Hello, React Router!</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
      </div>
    )
  }
})
```

5. 通过嵌套路由，对应嵌套UI
- 设定嵌套路由

```js
<Route path="/" component={App}>
  <Route path="/repos" component={Repos} />
  <Route path="/about" component={About} />
</Route>
```

- 通过 {this.props.children} 设定子视图

```html
<div>
  <h1>Hello, React Router!</h1>
  <ul role="nav">
    <li><Link to="/about">About</Link></li>
    <li><Link to="/repos">Repos</Link></li>
  </ul>

  {this.props.children}
</div>
```

## 通过自定义组件，实现包裹

```js
return <Link {...this.props} activeClassName="active" />
```

## 设定主页路由

```
<IndexRoute component={Home} />
```

## 主页链接

```
# 写法一:添加一个属性
<li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>

# 写法二：引入 Router 标签
// App.js
import { IndexLink } from 'react-router'

// ...
<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
```

## 路径中插入变量
const path = `/repos/${userName}/${repo}`
