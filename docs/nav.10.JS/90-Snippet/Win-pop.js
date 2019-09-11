// 定时消失弹窗
window.showNotice = function(options) {
  var opt = $.extend({
    type: 'success',
    info: '成功！',
    time: 200,
    imgUrl: '/static/meeting/images/success.png',
    id: 'successWindow'
  }, options)

  var $noticeDom = $('<div class="dialog dialog_center" style="width: 450px; margin-left: -225px; margin-top: -113px;border-radius: 3px;" id='+ opt.id +'>' +
      '<div class="dialog-bg" style="-webkit-filter: blur(30px);"></div>' +
      '<div class="dialog-content" style="line-height: 100px;">' +
          '<img src='+ opt.imgUrl +' alt="error" style="float: left;margin-top: 20px;">' +
        '<p style="text-align: left;margin-left: 80px;font-size: 24px;">'+ opt.info +'</p>' +
    '</div>' +
  '</div>')

  if ($('#' + opt.id).length === 0) {
    $noticeDom.appendTo(document.body)
  } else {
    $('#' + opt.id).fadeIn()
  }


  setTimeout(function() {
    $('#' + opt.id).fadeOut()
  }, opt.time)
}

window.success = function() {
  var info = arguments[0] || '操作成功！',
      time = arguments[1] || 500

  window.showNotice({info: info, time: time})
}

window.fail = function() {
  var info = arguments[0] || '操作失败！',
      time = arguments[1] || 500

  window.showNotice({
    type: 'fail',
    info: info,
    time: time,
    imgUrl: '/static/meeting/images/error.png',
    id: 'failWindow'
  })
}
