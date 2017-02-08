/**
 * Прокси для API Tvigle плеера
 */
(function () {

	var TvigleProxy = function () {
		this.onLoaded = this.onLoaded.bind(this);
	};

	TvigleProxy.prototype.eventHandler = function (e) {
		if (e.name == 'on_progress') {
			// снижаем частоту до одного раза в 10 секунд
			var progress = Math.floor(e.args[0] / 1000);
			if (!(progress % 10) && this._prevProgress !== progress) {
				this._prevProgress = progress;
				console.log('on_progress:', progress);
			}
		} else {
			console.log(e.name + ':', (e.args.length && e.args) || '');
		}
	};

	TvigleProxy.prototype.onLoaded = function (id) {
		console.log('onLoaded:', id);
	};

	window.TvigleProxy = new TvigleProxy();
})();
