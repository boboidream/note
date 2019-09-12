# Route 路由

## 路由写法
```
resources :users, only: [:index, :show]  #Rest只生成 index 与 show 路由

resources :products, except: [:destroy]  #生成不包括 destroy
```

## 指定控制器和动作
`root 'welcome#index'` 交给 welcome 控制器中的 index 动作处理

## 查看 routes
执行` rake routes` 任务，会看到定义了所有标准的 REST 动作

## 关于id
- `get 'meetings/:id' => 'events#show'`

其中有冒號:id的部分，會被轉成一個參數params[:id]傳進Controller裡。

- `match ':controller(/:action(/:id(.:format)))', :via => :all`
其中的括弧用法表示這部份可有可無，也就是上述這一行設定就包括六種路徑方式
(.format)這一段則會讓路由可以接受.json、.xml等有副檔名的網址，並且轉成params[:format]參數傳進Controller裡，搭配respond_to而回傳不同的格式。

- 相对路径和绝对路径
_path和_url的差別在於前者是相對路徑，後者是絕對路徑

- Redirect 转向
```
get "/foo" => redirect("/bar")
```

## 添加404
- [添加404](http://jerodsanto.net/2014/06/a-step-by-step-guide-to-bulletproof-404s-on-rails/)
