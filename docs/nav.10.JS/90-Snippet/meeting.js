$(function () {

	'use strict'

	/**
	 * ajax config
	 */
	$.ajaxSetup({
		dataType:'json'
	})

	if (!window.util) {
		window.util = {}
	}

	var util = window.util

	/**
	 * hash parse
	 * @return {Object} obj
	 */
	util.parse = function () {
		var hash = {
			page: '',
			id: '',
			project_id: '',
		}
		if (!location.hash || location.hash === '#') {
			return hash
		}
		var hashArr = location.hash.substr(3).split('/')
		hash.page = hashArr[0]
		hash.id = parseInt(hashArr[1], 10)
		hash.project_id = decodeURIComponent(hashArr[3])
		return hash
	}
	/**
	 * set hash
	 */
	util.set = function (option) {
		var old = util.parse()
		var hashArr = []
		for (var key in option) {
			if (option.hasOwnProperty(key)) {
				old.page = key
				old.id = option[key]
			}
		}
		hashArr.push(old.page + '/' + old.id)
		util._noHashChange = true
		location.hash = '!' + hashArr.join('')
		setTimeout(function () {
			util._noHashChange = false
		},0)
	}
	// get
	util.get = function (key) {
		var hash = util.parse()
		return hash[key]
	}

	// reload
	window.addEventListener('hashchange', function () {
		if (!util._noHashChange) {
			location.reload()
		}
	})


	/**
	 * 会议详情渲染
	 * @param  {Number}   id     会议 ID
	 * @param  {Function} render 数据输出渲染
	 */
	util.render = function (id, render) {
		var url = '/meeting/API/ViewMeeting?id=' + id
		$.getJSON(url).done(function (result) {
			if (result.status === 1) {
				render(result.data)
			} else {
				alert(result.info)
			}
		}).fail(function (err) {
			console.err(err)
		})
	}

})

/**
 * 首页
 * 1. 创建会议
 * 2. 会议列表
 */
$(function () {

	'use strict'

	var hash = util.parse()
	var $document = $(document)
	var $body = $(document.body)

	if (hash.id) {
		$document.find('.g_header').find('.J_create').remove()
		return
	}

	/**
	 * 创建会议
	 */
	$document.on('click', '.J_create', function () {

		// remove appended elements
		$body.find('.backdrop').remove()
		$body.find('.modal').remove()
		// append
		var template = $('#newTmpl').html()
		$body.append($(template))
		// ui initialize
		$document.find('[name=date]').datePicker()
		$document.find('[name=members]').memberInput({
			autoFocus: false
		})

	})
	// save
	$document.on('click', '.J_submit', function () {
		var $this = $(this)
		var $form = $this.closest('.modal').find('.body')
		var data = {
			title: $form.find('[name=meeting_name]').val() || '',
			start_date: $form.find('[name=date]').val() +' ' + $form.find('[name=start]').val(),
			end_date: $form.find('[name=date]').val() +' ' + $form.find('[name=end]').val(),
			members: $form.find('[name=members]').val(),
			location: $form.find('[name=location]').val(),
			private: $form.find('[name=private]').prop('checked') ? 1 : 0
		}
		if (!data.title.trim()) {
			$form.find('[name=meeting_name]').focus()
			return
		}
		if (!$form.find('[name=date]').val().trim()) {
			$form.find('[name=date]').focus()
			return
		}
		if (!data.members.trim()) {
			alert('请填写与会人员')
			return
		}
		if (!data.location.trim()) {
			$form.find('[name=location]').focus()
			return
		}

		// url = /meeting/API/CreateMeeting
		var url = '/meeting/API/CreateMeeting'
		$.post(url, data).done(function (result) {
			if (result.status === 1) {
				location.reload(true)
			} else {
				alert(result.info)
			}
		}).fail(function (err) {
			console.error(err)
		})

	})
	// cancel
	$document.on('click', '.modal_cancel, .modal_close', function () {
		$body.find('.backdrop').remove()
		$body.find('.modal').remove()
	})

	// 显示会议列表
	function renderList () {
		var listUrl = '/meeting/API/ListMeeting'
		$.getJSON(listUrl).done(function (result) {
			if (result.status === 1) {
				initUI(result.data)
			} else {
				alert(result.info)
			}
		}).fail(function (err) {
			console.error(err)
		})
	}
	function initUI (data) {
		if (!data.length) {
			$('.meeting_container').html($('#emptyTmpl').html())
			return
		}
		var html = $('#listItemTmpl').html()
		var func = doT.template(html) // 编译模版
		var tmpl = func({list: data}) // 加载数据
		$('.meeting_container').html(tmpl)
	}
	renderList()


	// 编辑会议信息
	$document.on('click', '.J_update_meeting', function () {
		var id = $(this).data('id')

		$body.find('.backdrop').remove()
		$body.find('.modal').remove()

		var url = '/meeting/API/ViewMeeting?id=' + id
		$.getJSON(url).done(function (result) {
			if (result.status === 1) {
				render(result.data)
			} else {
				alert(result.info)
			}
		}).fail(function (err) {
			console.err(err)
		})

		function render(data) {
			var html = $('#updateMeetingTmpl').html()
			var func = doT.template(html)
			var members = []
			data.members.forEach(function(m){
				members.push(m.rtx);
			})
			data.member_rtxs = members.join(";");
			var tmpl = func(data)
			$body.append(tmpl)

			$document.find('[name=date]').datePicker()
			$document.find('[name=members]').memberInput({
				autoFocus: false
			})
			var start = data.start_date.split(' ')[1].substr(0, 5).indexOf('0') === 0 ? data.start_date.split(' ')[1].substr(1, 4) : data.start_date.split(' ')[1].substr(0, 5)
			var end = data.end_date.split(' ')[1].substr(0, 5).indexOf('0') === 0 ? data.end_date.split(' ')[1].substr(1, 4) : data.end_date.split(' ')[1].substr(0, 5)
			$document.find('[name=start]').val('' + start)
			$document.find('[name=end]').val('' + end)
		}
	})
	// save
	$document.on('click', '.J_update_submit', function () {
		var $this = $(this)
		var $form = $this.closest('.modal').find('.body')
		var data = {
			id: $this.data('id'),
			title: $form.find('[name=meeting_name]').val() || '',
			start_date: $form.find('[name=date]').val() +' ' + $form.find('[name=start]').val(),
			end_date: $form.find('[name=date]').val() +' ' + $form.find('[name=end]').val(),
			members: $form.find('[name=members]').val(),
			location: $form.find('[name=location]').val(),
			private: $form.find('[name=private]').prop('checked') ? 1 : 0
		}
		// 判空
		if (!data.title.trim()) {
			$form.find('[name=meeting_name]').focus()
			return
		}
		if (!$form.find('[name=date]').val().trim()) {
			$form.find('[name=date]').focus()
			return
		}
		if (!data.members.trim()) {
			alert('请填写与会人员')
			return
		}
		if (!data.location.trim()) {
			$form.find('[name=location]').focus()
			return
		}
		// url = /meeting/API/UpdateMeeting
		var url = '/meeting/API/UpdateMeeting'
		$.post(url, data).done(function (result) {
			if (result.status === 1) {
				location.reload(true)
			} else {
				alert(result.info)
			}
		}).fail(function (err) {
			console.error(err)
		})

	})
	// delete
	$document.on('click', '.J_delete_meeting', function () {
		var id = $(this).data('id')
		var $tr = $(this).closest('tr')
		var url = '/meeting/API/DeleteMeeting?id=' + id
		if (confirm('确定删除该会议？')) {
			$.getJSON(url).done(function (result) {
				if (result.status === 1) {
					$tr.remove()
				} else {
					alert(result.info)
				}
			}).fail(function (err) {
				console.error(err)
			})
		} else {
			return
		}
	})

	// cloneMeeting
	$document.on('click', '.J_clone_meeting', function() {
		var id = $(this).data('id')
		var $tr = $(this).closest('tr')
		var $title = $tr.find('td').first().text()
		var url = '/meeting/API/CloneMeeting?id=' + id

		if (confirm('确定克隆 ' + $title + ' 会议？')) {
			$.getJSON(url).done(function(result) {
				if (result.status === 1) {
					location.reload()
				} else {
					alert(result.info)
				}
			}).fail(function(err) {
				console.error(err)
			})
		} else {
			return
		}
	})

})

/**
 * 详情页面
 */
$(function () {

	'use strict'

	var hash = util.parse()
	var $document = $(document)
	var $body = $(document.body)

	if (hash.page !== 'detail') {
		return
	}
	if (hash.id) {
		$document.find('.g_header').find('.J_create').remove()
	}

	function uiRender (data) {
		data.currentUser = window.currentUser
		var html = $('#meetingTmpl').html()
		var func = doT.template(html)
		var tmpl = func(data)
		$('.meeting_container').html(tmpl)
	}

	util.render(hash.id, uiRender)

})

/**
 * 编辑页面
 */
$(function () {

	'use strict'

	var hash = util.parse()
	var $document = $(document)
	var $body = $(document.body)

	if (hash.page !== 'edit') {
		return
	}
	if (hash.id) {
		$document.find('.g_header').find('.J_create').remove()
	}

	getDefaultTopics()

	function getDefaultTopics() {
		var url = '/meeting/API/DefaultTopic/id/' + hash.id

		$.getJSON(url).done(function(result) {
			if (result.status === 1) {
				window.bgProjectLists = result.data
				util.render(hash.id, uiRender)
			} else {
				console.error(result.info)
			}
		}).fail(function(err) {
			console.error(err)
		})
	}

	function uiRender (data) {
		data.currentUser = window.currentUser
		// 按 project_id 过滤 topics
		var project_titles = []

		window.bgProjectLists.forEach(function(obj) {
			obj.topics.forEach(function(project) {
				project_titles.push(project.title)
			})
		})

		if (hash.project_id === '其他') {
			data.topics = data.topics.filter(function(obj) {
				if (project_titles.indexOf(obj.title) === -1) return true
			})
		} else {
			data.topics = data.topics.filter(function(obj) {
				if (obj.title == hash.project_id) return true
			})
		}

		if (data.topics.length) {
			data.topics.forEach(function (topic) {
				var members = topic.contents.map(function (content) {
					try {
						content.content = decodeURIComponent(content.content)
					} catch (e) {
						content.content = unescape(content.content)
					}

					return content.rtx
				})
				topic.hasContent = members.indexOf(data.currentUser) >= 0 ? true : false
			})
		}

		var sidebarScroll = $document.find('.J_sidebar_content').scrollTop() // 获取左栏滚动值
		var contentScroll = $document.find('.meeting_editor_main').scrollTop() ||
												$document.find('.item_list').scrollTop()
		// 侧面
		data.lists = window.bgProjectLists
		var html = $('#editTmpl').html()
		var func = doT.template(html)
		var tmpl = func(data)
		$('.meeting_container').html(tmpl)

		sidebarActive() // 激活侧边栏
		setScroll(sidebarScroll, contentScroll) // 左右滚动轴定位
		if (hash.project_id == '其他') {
			$document.find('.my_editor').click()
		}
	}


	// 录入议题页面 侧栏点击
	$document.on('click', '.J_edit_item', function(event) {
		var $this = $(this),
			project_id = $this.attr('data-title')
		var hashObj = util.parse()
		hashObj.project_id = project_id
		var newHash = '#!/edit/' + hashObj.id + '/project/' + decodeURIComponent(hashObj.project_id)

		util._noHashChange = true // 不刷新
		window.location.href = newHash
		hash.project_id = project_id
		sidebarActive() // 左侧 sidebar 初始化
		util.render(hash.id, uiRender) // 右侧显示详情页面 初始化
	})

	// 侧边栏 active 激活，数据初始化
	function sidebarActive() {
		$document.find(".J_edit_item").each(function() {
			if ($(this).attr('data-title') == hash.project_id) {
				$(this).addClass('active')
				$(this).prevAll().removeClass('active')
				$(this).nextAll().removeClass('active')
				// 写入项目及负责人
				if (hash.project_id === '其他') {
					// 其他时显示输入框
					$document.find('.add_project_box').css('display', 'flex')
					$document.find('.add_project_title')[0].className = 'add_project_title';
					$document.find('.project_form').show()
					$('[name=new_project_owner]').memberInput()

				} else {
					var owner = $(this).attr('data-owner'),
						title = $(this).attr('data-title')

					$document.find('#new_project_owner').val(owner)
					$document.find('#new_project_title').val(title)
					// 修改title
					$document.find('.project_form').find('.editor_title h3')[0].innerHTML = title
					$document.find('.project_form').find('.editor_title span')[0].innerHTML = owner
					$document.find('.add_new_project').show() // 显示新增议题
				}
			}
		})
	}

	// 左右滚动轴定位
	function setScroll(sidebarScroll, contentScroll) {
		var $sidebar = $document.find('.J_sidebar_content'),
				offsetTop = $sidebar.offset().top,
				windowHeight = $(window).height()

		$sidebar.css('height', windowHeight - offsetTop - 30 + 'px')

		if (hash.project_id == '其他') {
			var $meeting_editor_main = $document.find('.meeting_editor_main')

			$meeting_editor_main.css('height', windowHeight - offsetTop + 30 + 'px')
			$meeting_editor_main.scrollTop(contentScroll)
		} else {
			var $item_list = $document.find('.item_list')

			$item_list.css('height', windowHeight - offsetTop - 60 + 'px')
			$item_list.scrollTop(contentScroll)
		}


		if (sidebarScroll) {
			$sidebar.scrollTop(sidebarScroll)
		}
	}

	// 窗口自适应
	$(window).resize(function() {
		var sidebarScroll = $document.find('.J_sidebar_content').scrollTop() // 获取左栏滚动值
		var contentScroll = $document.find('.meeting_editor_main').scrollTop() ||
												$document.find('.item_list').scrollTop()

		setScroll(sidebarScroll, contentScroll) // 左右滚动轴定位
	})


	// 保存补充
	$document.on('click', '.J_add_save', function () {
		var $this = $(this)
		var $item = $this.closest('.project_item')
		var $my_editor = $this.closest('.my_editor')
		var data = {
			mt_id: hash.id,
			title: $item.data('title'),
			topic_id: $item.data('id'),
			owner: $item.data('owner'),
			content: $my_editor.find('pre').html() || ''
		}
		if (!data.content.trim()) {
			$form.find('[name=content]').focus()
			return
		}
		data.content = encodeURIComponent(data.content)

		var url = '/meeting/API/UpdateTopic'
		$.post(url, data).done(function (result) {
			if (result.status === 1) {
				util.render(hash.id, uiRender) // 右侧显示详情页面 初始化
			} else {
				alert(result.info)
			}
		}).fail(function (err) {
			console.error(err)
		})
	})

	// 保存编辑
	$document.on('click', '.J_update_save', function () {
		var $this = $(this)
		var $item = $this.closest('.project_item')
		var $form = $this.closest('.my_editor')

		var data = {
			mt_id: hash.id,
			topic_id: $item.data('id'),
			title: $item.data('title'),
			owner: $item.data('owner'),
			content: $form.find('pre').html() || '',
			content_id: $form.data('id')
		}

		if (!data.content.trim()) {
			$form.find('[name=content]').focus()
			return
		}

		data.content = encodeURIComponent(data.content)

		var url = '/meeting/API/UpdateTopic'
		$.post(url, data).done(function (result) {
			if (result.status === 1) {
				util.render(hash.id, uiRender) // 右侧显示详情页面 初始化
			} else {
				alert(result.info)
			}
		}).fail(function (err) {
			console.error(err)
		})
	})


	// 保存新建项目
	$document.on('click', '.J_create_project_save', function () {
		var $form = $(this).closest('.project_form'),
				$my_editor = $(this).closest('.my_editor')

		var data = {
			mt_id: hash.id,
			content: $my_editor.find('pre').html() || ''
		}
		data.title = $my_editor.find('[name=new_project_title]').val() || ''
		data.owner = $my_editor.find('[name=new_project_owner]').val() || ''
		data.cat = $my_editor.find('[name=new_project_cat]').val() || ''

		data.content = encodeURIComponent(data.content)

		// 判空
		if (!data.title.trim()) {
			$form.find('[name=title]').focus()
			return
		}
		if (!data.owner.trim()) {
			$form.find('[name=owner]').focus()
			return
		}
		if (!data.content.trim()) {
			$form.find('[name=content]').focus()
			return
		}

		// post data
		var url = '/meeting/API/CreateTopic'
		$.post(url, data).done(function (result) {
			if (result.status === 1) {
				if (hash.project_id == '其他') {
					location.reload()
				} else {
					util.render(hash.id, uiRender) // 右侧显示详情页面 初始化
				}
			} else {
				alert(result.info)
			}
		}).fail(function (err) {
			console.error(err)
		})
	})

	// 删除项目
	$document.on('click', '.J_update_del', function() {
		var $this = $(this)
		var $item_box = $this.closest('.item_box')
		var $topic_id = $item_box.data('id')
		var url = `/meeting/API/DeleteTopicContent?mt_id=${hash.id}&content_id=${$topic_id}`

		if (confirm('确定删除该项目？')) {
			$.getJSON(url).done(function (result) {
				if (result.status === 1) {
					util.render(hash.id, uiRender) // 右侧显示详情页面 初始化
				} else {
					alert(result.info)
				}
			}).fail(function (err) {
				console.error(err)
			})
		} else {
			return
		}
	})


	// 点击上传图片
	$document.on('change', '.J_upload_img', function(e) {
		var $this = $(this),
				$my_editor = $this.closest('.my_editor'),
				target = e.target,
				file = target.files[0]

		if (!file) {
			return
		}

		if (!/image/i.test(file.type)) {
			alert('请选择正确的图片格式。')
			return
		}

		var thumb = URL.createObjectURL(file)

		uploadImg(file, $my_editor, thumb)

		$(target).wrap('<form>').closest('form').get(0).reset()
		$(target).unwrap()
	})

	// 捕获拖拽图片
	$document.on('dragenter', '.my_editor pre', function(e) {
		e.preventDefault()
		e.stopPropagation()

		var $my_editor = $(this).closest('.my_editor')

		if ($my_editor.hasClass('active')) {
			$(this).closest('.my_editor').addClass('dragenter')
		}
	})

	$document.on('dragleave', '.my_editor pre', function(e) {
		e.preventDefault()
		e.stopPropagation()
		$(this).closest('.my_editor').removeClass('dragenter')
	})

	$document.on('drop', '.my_editor pre', function(e) {
		e.preventDefault()
		e.stopPropagation()

		var $my_editor = $(this).closest('.my_editor')

		if (e.originalEvent.dataTransfer) {
			if (e.originalEvent.dataTransfer.files.length) {
				var file = e.originalEvent.dataTransfer.files[0],
						thumb = URL.createObjectURL(file)

				if (!file) {
					return
				}

				if (!/image/i.test(file.type)) {
					alert('请选择正确的图片格式。')
					return
				}

				uploadImg(file, $my_editor, thumb)
				$(this).closest('.my_editor').removeClass('dragenter')
			}
		}
	})


	// 上传返回URL
	function uploadImg(file, $my_editor, testURL) {
		var formData = new FormData(),
				url = '/meeting/API/Upload'

		formData.append('upload', file)

		$.ajax({
			url: url,
			type: 'POST',
			cache: false,
			data: formData,
			processData: false,
			contentType: false,
			beforeSend: function() {
				$my_editor.find('.progress').show()
				$my_editor.find('.item_editor_controls').find('button').attr('disabled', true).css('opacity', 0.5)
			},
			xhr: function() {
        var xhr = new window.XMLHttpRequest(),
						total_length = 0

        xhr.upload.addEventListener("progress", function(evt){
            if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total

								$my_editor.find('.progress div').css('width', percentComplete*80+'%')
            }
       }, false);

       // Download progress
       xhr.addEventListener("progress", function(evt){
				 if (evt.lengthComputable) {
					 var percentComplete = evt.loaded / evt.total

					 $my_editor.find('.progress div').css('width', 50 + percentComplete*50 + '%')
					 console.log(50 + percentComplete*50 + '%')
				 }
       }, false);

       return xhr;
    },
		}).done(function(res) {
			insertImg(res.data.url, $my_editor)
			$my_editor.find('.progress').hide()
			$my_editor.find('.progress div').css('width', '0')
			$my_editor.find('.item_editor_controls').find('button').attr('disabled', false).css('opacity', 1)
			$my_editor.find('pre').focus()
		}).fail(function(err) {
			console.error(err)
			$my_editor.find('.progress').hide()
			$my_editor.find('.progress div').css('width', '0')
			$my_editor.find('.item_editor_controls').find('button').attr('disabled', false).css('opacity', 1)
		})
	}

	function insertImg(img_url, $my_editor) {
		var pre_text = $my_editor.find('pre').html() + '\n<img src='+ img_url +'>'

		$my_editor.find('pre').html(pre_text)
	}



	// 点击进入可编辑状态
	var my_editor_cache = {} // 存储编辑前数据

	$document.on('click', '.my_editor ', function() {
		var $this = $(this),
				$project_item = $this.closest('.project_item'),
				edit_id = Date.now()

		if ($this.hasClass('active')) {
			return
		}

		$this.find('.placeholder').hide() // 隐藏提示信息
		$this.find('pre').attr('contenteditable', true)
		$this.attr('data-timestamp', edit_id)
		$this.addClass('active')
		$this.find('pre').focus()
		my_editor_cache[edit_id] = encodeURIComponent($this.find('pre').html())
	})

	$document.on('click', '.my_editor_concel', function(e) {
		e.stopPropagation()
		e.cancelBubble = true //IE

		var $my_editor = $(this).closest('.my_editor'),
				edit_id = $my_editor.attr('data-timestamp'),
				$pre = $my_editor.find('pre'),
				is_new = $my_editor.find('.placeholder').length > 0 ? true : false

		$pre.html(decodeURIComponent(my_editor_cache[edit_id]))
		delete my_editor_cache[edit_id]
		$my_editor.removeClass('active')
		$pre.attr('contenteditable', 'false')

		if (is_new) {
			$my_editor.find('.placeholder').show()
		}
 	})



	$document.on('paste', '.my_editor pre',function(e) {
		var text = (e.originalEvent || e).clipboardData.getData('text/html') // 获取不到纯文本

		if (text) {
			e.preventDefault();

			var $result = $('<div></div>').append($(text))

			$.each($result.find("*"), function(index, value) {
				var $item = $(value),
						tag = $item.prop('tagName').toLowerCase()

				if (['pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'section', 'code'].indexOf(tag) > -1) {
					console.log($item)
					$item.replaceWith($('<div></div>').append($item.html()))
				}

				if ($item.length > 0) {
					$item.removeAttr('style').removeClass()
				}
			})

			// insert text manually
	    document.execCommand("insertHTML", false, $result.html().trim());
		}

	})

})


/**
 * 演示页面
 */
$(function () {

	'use strict'

	var hash = util.parse()
	var $document = $(document)
	var $body = $(document.body)
	var $boards // 展示板

	if (hash.page !== 'play') {
		return
	}
	if (hash.id) {
		$document.find('.g_header').remove()
		$document.find('.meeting_container').css({
			paddingTop: 0,
			height: '100%'
		})
	}

	function uiRender (data) {
		data.currentUser = window.currentUser

		data.topics.forEach(function(topic) {
			topic.contents.forEach(function(obj) {
				try {
					obj.content = decodeURIComponent(obj.content)
				} catch (e) {
					obj.content = unescape(obj.content)
				}
			})
		})
		var html = $('#playTmpl').html()
		var func = doT.template(html)
		var tmpl = func(data)
		$('.meeting_container').html(tmpl)
		setDisplayHeight() // 设定展示页面高度
		$boards = $document.find('.board')
		$boards.first().addClass('current') // 激活首个展示板
		activeContent($boards.first().closest('.content')) // 滚动112px 顶部title出现
	}


	// 展示屏幕自适应
	window.onresize = function() {
		setDisplayHeight()
	}

	function setDisplayHeight() {
		var header_height = $document.find('.meeting_container .header').height()
		var play_height = document.body.clientHeight - header_height + 'px'

		$document.find('.meeting_play_list').css({
			height: play_height
		})
		$document.find('.meeting_play_content').css({
			height: play_height
		})
	}

	util.render(hash.id, uiRender)

	/**
	 * 演示切换
	 */
	$document.on('click', '.meeting_play_list .item', function () {
		var $this = $(this)
		var index = $this.index()
		var $content = $document.find('.meeting_play_content .content').eq(index)
		// active item
		$this.prevAll('.item').removeClass('active')
		$this.nextAll('.item').removeClass('active')
		$this.addClass('active')

		// 右侧栏滚动位置
		if (this.offsetTop > 200) {
			$('.meeting_play_list .list').scrollTop(this.offsetTop - 222)
		}

		// active content
		$document.find('.meeting_play_content .content').fadeOut()
		$content.fadeIn()
		// 激活展示面板
		$boards.removeClass('current')
		$content.find('.board').first().addClass('current')
		activeContent($content) // 滚动112px 顶部title出现
	})

	// 点击左侧内容面板
	$document.on('click', '.board', function() {
		$document.find('.board').removeClass('current')
		$(this).addClass('current')
	})
	// 鼠标悬停左侧
	$document.on('mouseover', '.board', function() {
		$document.find('.board').removeClass('current')
		$(this).addClass('current')
	})

	// 滚动112px 标题出现
	function activeContent($content) {
		$content.prevAll().removeClass('current')
		$content.nextAll().removeClass('current')
		$content.addClass('current')

		var $activeItem = $document.find('.item.active')
		var title = $activeItem.find('p:first-child').text()
		var manager = $activeItem.find('p:last-child').text()
		var $headerTitle = $document.find('.header .manager')

		$headerTitle.find('span:first-child').text(title)
		$headerTitle.find('span:last-child').text(manager)

		$content.on('scroll', function(e) {
			if ($(this).scrollTop() > 112 && !$headerTitle.hasClass('active')) {
				$headerTitle.addClass('active')
			} else if ($(this).scrollTop() < 112 && $headerTitle.hasClass('active')) {
				$headerTitle.removeClass('active')
			}
		})
	}


	// keyboard control
	$document.on('keydown', function (event) {
		var count = $document.find('.meeting_play_list .item').length
		var index = $document.find('.meeting_play_list .item.active').index()
		var boardCurrent = $document.find('.current').first()

		// up
		if (event.keyCode === 37 || event.keyCode === 38) {
			if (boardCurrent.prev().length > 0) {
				boardCurrent.removeClass('current')
				boardCurrent.prev().addClass('current')
			} else if (index >= 1) {
				$document.find('.meeting_play_list .item').eq(index - 1).trigger('click')
			}
		}
		// down
		if (event.keyCode === 39 || event.keyCode === 40) {
			if (boardCurrent.next().length > 0) {
				boardCurrent.removeClass('current')
				boardCurrent.next().addClass('current')
			} else if (index <= count - 1) {
				$document.find('.meeting_play_list .item').eq(index + 1).trigger('click')
			}
		}

	})

	/*
	 * 进入全屏
	 */
function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

 // 启动全屏!
 $document.on('keydown', function(e) {
	 if (e.keyCode === 13) {
		 e.preventDefault()
		 console.log(e.keyCode)
		 toggleFullScreen()
	 }
 })

 $document.dblclick(function() {
	 launchFullscreen(document.documentElement)
 })

})
