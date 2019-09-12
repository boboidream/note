# 在此处输入标题

标签（空格分隔）： 未分类

---

# BDD 测试驱动
## 1. 数据构建
  >   gem 'factory_girl'
    gem 'factory_girl_rails'

- `spec/factories/apply_records.rb`
    ```
      FactoryGirl.define do
        factory :apply_record, :class => 'ApplyRecord' do
          resume_id 1
          job_id 2
          user_id 2
          end_at "2016-05-18 18:04:53"
          resume_status "MyString"
          recieve_at "2016-05-18 18:04:53"
          view_at "2016-05-18 18:04:53"
        end

        factory :apply_record2, :class => 'ApplyRecord' do
          resume_id 1
          job_id 3
          user_id 2
          end_at "2016-05-18 18:04:53"
          resume_status "MyString"
          recieve_at "2016-05-18 18:04:53"
          view_at "2016-05-18 18:04:53"
        end
      end
    ```

-  `create` 方法，创建模拟数据
    ```
      it "return if user has applied job" do
        @user = create(:user)
        @job = create(:job)
        @apply_record = create(:apply_record, user_id: @user.id, job_id: @job.id)

        res = ApplyRecord.is_applied(@user.id,  @job.id)
        res2 = ApplyRecord.is_applied(@user.id,  nil)

        expect(res).to eq(true)
        expect(res2).to eq(false)
      end
    ```

## 2. Model 测试
  - 测试数据库合法性验证是否生效
  ```
  it 'invalid with reduplication show_name ' do
    user = create(:user, show_name: "张三")
    user2 = build(:user, show_name: "张三")
    expect(user2).to_not be_valid
  end
  ```

  - 测试 Model 方法
    - model方法

      ```
      # 获得剩余发布时间
      def self.time_left jid
        job = Job.find jid

        if job.end_at && job.end_at > Time.now
          return ((job.end_at + 1.hour - Time.now)/1.day).to_i
        else
          return 0
        end
      end
      ```

    - 模拟数据
     ```
      job = create :job, :hospital_id => @hospital1.id, :operate_at => Time.now - 5.days
     ```

    - spec 文件中
      ```
      it "test time_left jid" do
        job = create :job

        res = Job.time_left job.id
        expect(res).to eq(60)
      end
      ```
## 3. Controller 测试

- 测试连通性
    ```
    before :each do
      @user = create(:user)
      @user.add_role :gold
      login_with @user
      request.env['devise.mapping'] = Devise.mappings[:user]
    end

    describe "GET page " do
      before :each do
        @hospital = create(:hospital)
        @employer = create(:employer, hospital_id: @hospital.id, user_id: @user.id)
        @job = create(:job, hospital_id: @hospital.id)
      end

      it "index returns http success" do
        get :index
        expect(response).to have_http_status(:success)
      end

      it "show returns http success" do
        get :show, id: @job.id
        expect(response).to have_http_status(:success)
      end
    end
    ```

- 测试 Action
    ```
    describe 'DELETE #destroy' do
        it 'delete http success' do
          expect do
          expect{
            delete :destroy, id: @user.id
          }.to change(Resume,:count).by(-1)
          end
        end

        it 'redirects to users#show' do
          expect do
          delete :destroy, id: @user
          expect(response).to redirect_to new_user_session_path
          end
        end
    end
    ```
