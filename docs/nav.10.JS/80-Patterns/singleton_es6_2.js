let instance

class GetSingleton {
	constructor(opts) {
		if (instance) return instance
		this.pointX = opts.pointX || 6
		this.pointY = opts.pointY || 7
		instance = this
	}
}

module.exports = GetSingleton