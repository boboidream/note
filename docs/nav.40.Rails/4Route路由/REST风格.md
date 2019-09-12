# Restful

什麼是REST呢？表象化狀態轉變Representational State Transfer，簡稱REST，是Roy Fielding博士在2000年他的博士論文中提出來的一種軟體架構風格。

```
POST /events對應到Controller中的create action
GET /events/1對應到Controller中的show action
PATCH /events/1對應到Controller中的update action
DELETE /events/1對應到Controller中的destroy action
```

## Rails 中用发发
- resources 等于如下：
  ```
  get    '/events'          => "events#index",   :as => "events"
  post   '/events'          => "events#create",  :as => "events"
  get    '/events/:id'      => "events#show",    :as => "event"
  patch  '/events/:id'      => "events#update",  :as => "event"
  put    '/events/:id'      => "events#update",  :as => "event"
  delete '/events/:id'      => "events#destroy", :as => "event"
  get    '/events/new'      => "events#new",     :as => "new_event"
  get    '/events/:id/edit' => "events#edit",    :as => "edit_event"
  ```
