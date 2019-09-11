
  var boboLog = {}

  Object.defineProperties(boboLog, {
    _pro: {
      value: function() {
        let num = arguments[0],
            mark = arguments[1] || '*'
            res = ''

        while (num > 0) {
          res += mark
          --num
        }

        return res
      }
    },
    section: {
      get: function() {
        console.log(this._pro(80))
      },

      set: function(str) {
        let half_num = (78 - str.lengthByte()) / 2.0,
            left_num = Math.floor(half_num),
            right_num = Math.ceil(half_num)

        console.log(`${this._pro(left_num)} ${str} ${this._pro(right_num)}`)
      }
    },

    hr: {
      get: function() {
        console.log(this._pro(40, '-'))
      },
      set: function(str) {
        let left_num = Math.ceil(40 - str.lengthByte())
        console.log(`${this._pro(left_num, '-')} ${str} ⬇`)
      }
    },

  })

  String.prototype.lengthByte = function() {
    let byteLength = 0,
        length = this.length

    if(length) {
      for(var i = 0; i < length; ++i) {
        if(this.charCodeAt(i) > 255) {
          byteLength += 2
        } else {
          ++ byteLength
        }
      }

      return byteLength
    } else {
      return 0
    }
  }

module.exports = boboLog
// export { boboLog }
