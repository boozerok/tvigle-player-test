/**
 * Прокси для API Tvigle плеера
 */
(function () {

	var TvigleProxy = function () {
		this.onLoaded = this.onLoaded.bind(this);
		this.eventHandler = this.eventHandler.bind(this);
	};

	TvigleProxy.prototype.eventHandler = function (e) {
		switch (e.name) {

			case 'on_progress': // на мобильной версии этого события нет
				var progressInSeconds = Math.floor(e.args[0] / 1000);
				// снижаем частоту до одного раза в 10 секунд
				if (!(progressInSeconds % 10) && this._prevProgress !== progressInSeconds) {
					this._prevProgress = progressInSeconds;
					console.log('on_progress:', progressInSeconds);
				}
				break;

			case 'start':
			case 'playback_start': // на мобильной версии этого события нет
				console.log('start');
				setTimeout(getDuration.bind(null, this.id), 0);
				break;

			default:
				console.log(e.name + ':', (e.args.length && e.args.join(', ')) || '');
		}
	};

	TvigleProxy.prototype.onLoaded = function (id) {
		console.log('onLoaded:', id);
		this.id = id;
	};

	function getDuration (id) {
		window.tvigle.api.getPlayer(id)
			.getModule(window.tvigle.api.modules.APIModules.VIDEO_PLAYER)
			.getDuration(function (duration) {
				console.log('duration is', duration, 'sec');
			});
	}

	window.TvigleProxy = new TvigleProxy();
})();
