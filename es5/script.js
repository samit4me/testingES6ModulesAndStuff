/******/'use strict';

(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId]) {
			/******/return installedModules[moduleId].exports;
		} /******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = '';

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})([
/* 0 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function _interopRequireWildcard(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
	};

	var _str = __webpack_require__(1);

	var _str2 = _interopRequireWildcard(_str);

	var _func = __webpack_require__(2);

	var _func2 = _interopRequireWildcard(_func);

	var _closure = __webpack_require__(3);

	var _closure2 = _interopRequireWildcard(_closure);

	var _es6Class = __webpack_require__(4);

	var _es6Class2 = _interopRequireWildcard(_es6Class);

	var _closurePlus = __webpack_require__(5);

	var _closurePlus2 = _interopRequireWildcard(_closurePlus);

	var elHeading = document.querySelector('#heading');
	if (elHeading) {
		window.setTimeout(function () {
			elHeading.textContent = '1) ' + _str2['default'];
		}, 1000);
		window.setTimeout(function () {
			elHeading.textContent = '2) ' + _func2['default']();
		}, 2000);
		window.setTimeout(function () {
			elHeading.textContent = '3) ' + _closure2['default']();
		}, 3000);
		window.setTimeout(function () {
			var es6 = new _es6Class2['default']();
			elHeading.textContent = '4) ' + es6.getPublicMsg();
		}, 4000);
		window.setTimeout(function () {
			elHeading.textContent = '5) ' + _closurePlus2['default'].getPublicMsg();
		}, 5000);
		window.setTimeout(function () {
			elHeading.textContent = '6) ' + _closurePlus2['default'].getPrivateMsg();
		}, 6000);
		window.setTimeout(function () {
			elHeading.textContent = '7) ' + _closurePlus.pubMsg();
		}, 7000);
		window.setTimeout(function () {
			elHeading.textContent = '8) ' + _closurePlus.getPrivateMsg();
		}, 8000);
	}

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var heading = 'str';
	exports['default'] = heading;
	module.exports = exports['default'];

	/***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var tttttt = function tttttt() {
		return 'function';
	};
	exports['default'] = tttttt;
	module.exports = exports['default'];

	/***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var closure = (function () {

		// Private
		var msg = 'message';
		function theMsg() {
			return 'secret ' + msg;
		}

		// Public
		return function () {
			return 'closure > ' + msg;
		};
	})();
	exports['default'] = closure;
	module.exports = exports['default'];

	/***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError('Cannot call a class as a function');
		}
	};

	var _createClass = (function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	})();

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var es6Class = (function () {
		function es6Class() {
			_classCallCheck(this, es6Class);

			this.msg = 'message';
		}

		_createClass(es6Class, [{
			key: 'getPublicMsg',
			value: function getPublicMsg() {
				return 'class public method > ' + this.msg;
			}
		}]);

		return es6Class;
	})();

	exports['default'] = es6Class;
	module.exports = exports['default'];

	/***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var closurePlus = (function () {

		// Private
		var msg = 'message';
		function theMsg() {
			return 'closure private method > secret ' + msg;
		}

		// Public
		return {
			getPublicMsg: function getPublicMsg() {
				return 'closure public method > ' + msg;
			},
			getPrivateMsg: function getPrivateMsg() {
				return theMsg();
			}
		};
	})();

	var getPublicMsg = closurePlus.getPublicMsg;
	var getPrivateMsg = closurePlus.getPrivateMsg;

	exports['default'] = closurePlus;
	exports.pubMsg = getPublicMsg;
	exports.getPrivateMsg = getPrivateMsg;

	/***/
}
/******/]);

/************************************************************************/
/******/