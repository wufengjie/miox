'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _middleware = require('../miox_modules/middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _dictionary = require('../miox_modules/dictionary');

var _dictionary2 = _interopRequireDefault(_dictionary);

var _request = require('../miox_modules/request');

var _request2 = _interopRequireDefault(_request);

var _response = require('../miox_modules/response');

var _response2 = _interopRequireDefault(_response);

var _history5 = require('./history');

var _history6 = _interopRequireDefault(_history5);

var _plugin = require('./plugin');

var _plugin2 = _interopRequireDefault(_plugin);

var _webtree = require('./webtree');

var _webtree2 = _interopRequireDefault(_webtree);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by evio on 2017/8/29.
 */
var toString = Object.prototype.toString;

var Miox = function (_MiddleWare) {
    (0, _inherits3.default)(Miox, _MiddleWare);

    /**
     * 参数详解：
     * @param options [Object object]
     *  - @max [Object number: 1] 在页面上存在最大个数的webview
     *  - @popState [Object boolean: false] 是否强制使用popState模式
     *  - @session [Object boolean: false] 是否使用sessionStorage来记录层级用于方向判断
     *  - @strict [Object boolean: true] 是否严格模式，用来区分query变化是否重新渲染页面
     */
    function Miox() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _classCallCheck3.default)(this, Miox);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Miox.__proto__ || Object.getPrototypeOf(Miox)).call(this));

        _this.options = (0, _util.extend)(options, {
            max: 1,
            popState: false,
            session: false,
            strict: true,
            debug: false
        });

        _this.env = process.env.MIOX_ENV || 'web';
        _this.vars = new _dictionary2.default();
        _this.cache = new _dictionary2.default();
        _this.plugin = new _plugin2.default(_this);
        _this.installed = false;
        _this.err = null;
        _this.doing = false;
        _this.clientMounted = false;

        _this.set('request', {});
        _this.set('response', {});
        _this.set('exists-webview', null);
        _this.set('active-webview', null);

        _this.vars.on('engine', _this.plugin.Engine.bind(_this.plugin));
        _this.vars.on('animate', _this.plugin.Animate.bind(_this.plugin));
        return _this;
    }

    (0, _createClass3.default)(Miox, [{
        key: 'log',
        value: function log() {
            var _console;

            if (process.env.NODE_ENV === 'production') return;
            if (this.options.debug) (_console = console).log.apply(_console, arguments);
        }
    }, {
        key: 'set',
        value: function set() {
            var _vars;

            return (_vars = this.vars).set.apply(_vars, arguments);
        }
    }, {
        key: 'get',
        value: function get() {
            var _vars2;

            return (_vars2 = this.vars).get.apply(_vars2, arguments);
        }
    }, {
        key: 'del',
        value: function del() {
            var _vars3;

            return (_vars3 = this.vars).del.apply(_vars3, arguments);
        }
    }, {
        key: 'exists',
        value: function exists() {
            var _vars4;

            return (_vars4 = this.vars).exists.apply(_vars4, arguments);
        }
    }, {
        key: 'filter',
        value: function filter() {
            var _vars5;

            return (_vars5 = this.vars).filter.apply(_vars5, arguments);
        }
    }, {
        key: 'push',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var _history;

                var _args = arguments;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (_history = this.history).push.apply(_history, _args);

                            case 2:
                                return _context.abrupt('return', _context.sent);

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function push() {
                return _ref.apply(this, arguments);
            }

            return push;
        }()
    }, {
        key: 'replace',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var _history2;

                var _args2 = arguments;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return (_history2 = this.history).replace.apply(_history2, _args2);

                            case 2:
                                return _context2.abrupt('return', _context2.sent);

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function replace() {
                return _ref2.apply(this, arguments);
            }

            return replace;
        }()
    }, {
        key: 'go',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                var _history3;

                var _args3 = arguments;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return (_history3 = this.history).go.apply(_history3, _args3);

                            case 2:
                                return _context3.abrupt('return', _context3.sent);

                            case 3:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function go() {
                return _ref3.apply(this, arguments);
            }

            return go;
        }()
    }, {
        key: 'redirect',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
                var _history4;

                var _args4 = arguments;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return (_history4 = this.history).redirect.apply(_history4, _args4);

                            case 2:
                                return _context4.abrupt('return', _context4.sent);

                            case 3:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function redirect() {
                return _ref4.apply(this, arguments);
            }

            return redirect;
        }()
    }, {
        key: 'exchange',
        value: function exchange() {
            var webView = this.get('active-webview');
            if (webView) {
                this.set('exists-webview', webView);
                this.set('active-webview', null);
            }
        }
    }, {
        key: 'notify',
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(index) {
                var webview;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                webview = this.webView;

                                if (!(this.env !== 'server')) {
                                    _context5.next = 7;
                                    break;
                                }

                                if (!(this.env === 'client' && !this.installed)) {
                                    _context5.next = 5;
                                    break;
                                }

                                _context5.next = 5;
                                return this.emit('client:render:mount', webview);

                            case 5:
                                _context5.next = 7;
                                return this.history.notify(index, webview);

                            case 7:

                                if (webview) {
                                    this.installed = true;
                                    this.exchange();
                                }
                                this.doing = false;

                            case 9:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function notify(_x2) {
                return _ref5.apply(this, arguments);
            }

            return notify;
        }()
    }, {
        key: 'error',
        value: function () {
            var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(value) {
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                if (!(value instanceof Error)) {
                                    _context6.next = 6;
                                    break;
                                }

                                this.err = value;
                                _context6.next = 4;
                                return this.emit(String(value.code), value);

                            case 4:
                                _context6.next = 9;
                                break;

                            case 6:
                                this.err = null;
                                _context6.next = 9;
                                return this.emit('200', this.webView);

                            case 9:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function error(_x3) {
                return _ref6.apply(this, arguments);
            }

            return error;
        }()

        /**
         * 运行系统中间件方法
         * 用来匹配到对应的webview
         * @returns {Promise.<*>}
         */

    }, {
        key: 'createServerProgress',
        value: function () {
            var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(uri) {
                var error, index, _get, basic, mark, webview;

                return _regenerator2.default.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                this.log('%c------------ Process Start ------------', 'color:#000;font-weight:bold;');

                                if (!this.doing) {
                                    _context7.next = 3;
                                    break;
                                }

                                return _context7.abrupt('return');

                            case 3:
                                this.doing = true;

                                this.log('History type:', this.history ? this.history.action || 'native' : '服务端渲染无行为');

                                error = void 0, index = void 0;

                                this.set('request', uri instanceof _request2.default ? uri : new _request2.default(uri));
                                this.set('response', new _response2.default());
                                this.request.app = this.response.app = this;
                                if (this.history) {
                                    index = this.history.processDirection(this.request);
                                    this.log('Animate direction:', this.history.direction);
                                }

                                _context7.next = 12;
                                return this.emit('process:start');

                            case 12:
                                _context7.prev = 12;
                                _context7.next = 15;
                                return this.execute(this);

                            case 15:
                                _context7.next = 20;
                                break;

                            case 17:
                                _context7.prev = 17;
                                _context7.t0 = _context7['catch'](12);
                                error = _context7.t0;

                            case 20:

                                if (error) {
                                    if (!error.code) error.code = 500;
                                } else {
                                    _get = this.get('active-webview'), basic = _get.basic, mark = _get.mark;
                                    webview = basic.dic.get(mark);


                                    if (webview) {
                                        this.exchange();
                                    } else {
                                        error = new Error('webview lost');
                                        error.code = 404;
                                    }
                                }

                                _context7.next = 23;
                                return this.error(error);

                            case 23:
                                _context7.next = 25;
                                return this.notify(index);

                            case 25:
                                _context7.next = 27;
                                return this.emit('process:end');

                            case 27:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this, [[12, 17]]);
            }));

            function createServerProgress(_x4) {
                return _ref7.apply(this, arguments);
            }

            return createServerProgress;
        }()
    }, {
        key: 'render',
        value: function () {
            var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(views, data) {
                return _regenerator2.default.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                _context8.next = 2;
                                return this.response.render(this.plugin.get('engine'), views, data);

                            case 2:
                                return _context8.abrupt('return', _context8.sent);

                            case 3:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, _callee8, this);
            }));

            function render(_x5, _x6) {
                return _ref8.apply(this, arguments);
            }

            return render;
        }()
    }, {
        key: 'pathChange',
        value: function pathChange() {
            var _this2 = this;

            this.history.on('pathchange', function () {
                var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(next) {
                    return _regenerator2.default.wrap(function _callee9$(_context9) {
                        while (1) {
                            switch (_context9.prev = _context9.next) {
                                case 0:
                                    _context9.next = 2;
                                    return _this2.createServerProgress(next);

                                case 2:
                                    if (!_this2.err) {
                                        _context9.next = 7;
                                        break;
                                    }

                                    _context9.next = 5;
                                    return _this2.emit(String(_this2.err.code), _this2.err);

                                case 5:
                                    _context9.next = 9;
                                    break;

                                case 7:
                                    _context9.next = 9;
                                    return _this2.emit('200', _this2.webView);

                                case 9:
                                case 'end':
                                    return _context9.stop();
                            }
                        }
                    }, _callee9, _this2);
                }));

                return function (_x7) {
                    return _ref9.apply(this, arguments);
                };
            }());
        }
    }, {
        key: 'searchChange',
        value: function searchChange() {
            var _this3 = this;

            this.history.on('searchchange', function () {
                var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(next, prev) {
                    return _regenerator2.default.wrap(function _callee10$(_context10) {
                        while (1) {
                            switch (_context10.prev = _context10.next) {
                                case 0:
                                    if (!_this3.options.strict) {
                                        _context10.next = 12;
                                        break;
                                    }

                                    _context10.next = 3;
                                    return _this3.createServerProgress(next);

                                case 3:
                                    if (!_this3.err) {
                                        _context10.next = 8;
                                        break;
                                    }

                                    _context10.next = 6;
                                    return _this3.emit(String(_this3.err.code), _this3.err);

                                case 6:
                                    _context10.next = 10;
                                    break;

                                case 8:
                                    _context10.next = 10;
                                    return _this3.emit('200', _this3.webView);

                                case 10:
                                    _context10.next = 19;
                                    break;

                                case 12:
                                    if (!(_this3.webView && typeof _this3.webView.MioxInjectWebviewSearchChange === 'function')) {
                                        _context10.next = 17;
                                        break;
                                    }

                                    _context10.next = 15;
                                    return _this3.webView.MioxInjectWebviewSearchChange(prev, next);

                                case 15:
                                    _context10.next = 19;
                                    break;

                                case 17:
                                    _context10.next = 19;
                                    return _this3.emit('searchchange', prev, next);

                                case 19:
                                case 'end':
                                    return _context10.stop();
                            }
                        }
                    }, _callee10, _this3);
                }));

                return function (_x8, _x9) {
                    return _ref10.apply(this, arguments);
                };
            }());
        }
    }, {
        key: 'hashChange',
        value: function hashChange() {
            var _this4 = this;

            this.history.on('hashchange', function () {
                var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(next, prev) {
                    return _regenerator2.default.wrap(function _callee11$(_context11) {
                        while (1) {
                            switch (_context11.prev = _context11.next) {
                                case 0:
                                    _this4.set('request', next instanceof _request2.default ? next : new _request2.default(next));
                                    _this4.set('response', new _response2.default());

                                    if (!(_this4.webView && typeof _this4.webView.MioxInjectWebviewHashChange === 'function')) {
                                        _context11.next = 7;
                                        break;
                                    }

                                    _context11.next = 5;
                                    return _this4.webView.MioxInjectWebviewHashChange(prev, next);

                                case 5:
                                    _context11.next = 9;
                                    break;

                                case 7:
                                    _context11.next = 9;
                                    return _this4.emit('hashchange', prev, next);

                                case 9:
                                case 'end':
                                    return _context11.stop();
                            }
                        }
                    }, _callee11, _this4);
                }));

                return function (_x10, _x11) {
                    return _ref11.apply(this, arguments);
                };
            }());
        }
    }, {
        key: 'listen',
        value: function listen() {
            var _this5 = this;

            if (!this.plugin.get('engine')) {
                throw new Error('You have not set webview rendering engine, ' + 'you must set it first.');
            }

            this.emit('app:start');

            (0, _webtree2.default)(this);
            this.__defineProcessHandle__();

            if (this.env !== 'server') {
                this.history = new _history6.default(this);
                this.history.listen();
                this.pathChange();
                this.searchChange();
                this.hashChange();
            }

            switch (this.env) {
                case 'server':
                    return function () {
                        var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(options) {
                            var url, app, ctx;
                            return _regenerator2.default.wrap(function _callee12$(_context12) {
                                while (1) {
                                    switch (_context12.prev = _context12.next) {
                                        case 0:
                                            url = options.url, app = options.app, ctx = options.ctx;

                                            _this5.$application = app;
                                            _this5.$context = ctx;
                                            _context12.next = 5;
                                            return _this5.createServerProgress(url);

                                        case 5:
                                            _this5.emit('app:end');

                                            if (!_this5.err) {
                                                _context12.next = 10;
                                                break;
                                            }

                                            return _context12.abrupt('return', _this5.err);

                                        case 10:
                                            _context12.next = 12;
                                            return _this5.emit('server:render:polyfill', options);

                                        case 12:
                                            return _context12.abrupt('return', _this5.webView);

                                        case 13:
                                        case 'end':
                                            return _context12.stop();
                                    }
                                }
                            }, _callee12, _this5);
                        }));

                        return function (_x12) {
                            return _ref12.apply(this, arguments);
                        };
                    }();
                case 'client':
                    this.emit('client:render:polyfill');
                    this.history.action = 'push';
                    this.createServerProgress(this.history.location()).then(function () {
                        _this5.history.clear();
                        _this5.clientMounted = true;
                        _this5.emit('app:end');
                    });
                    break;
                case 'web':
                    this.history.action = 'push';
                    this.createServerProgress(this.history.location()).then(function () {
                        _this5.history.clear();
                        _this5.emit('app:end');
                    });
                    break;
            }
        }
    }, {
        key: 'mock',
        value: function mock() {
            var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (toString.call(args) !== '[object Object]') {
                throw new Error('`args` must be an object which type of json.');
            }

            args.fetch = this.fetch.bind(this);

            return args;
        }
    }, {
        key: 'fetch',
        value: function () {
            var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13() {
                var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var client, server;
                return _regenerator2.default.wrap(function _callee13$(_context13) {
                    while (1) {
                        switch (_context13.prev = _context13.next) {
                            case 0:
                                client = void 0, server = void 0;


                                if (typeof callback === 'function') {
                                    client = server = callback;
                                } else {
                                    client = callback.client;
                                    server = callback.server;
                                }

                                if (!(!this.clientMounted && this.env === 'client' || this.env === 'server' && this.clientMounted)) {
                                    _context13.next = 4;
                                    break;
                                }

                                return _context13.abrupt('return');

                            case 4:
                                if (!(!client || !server)) {
                                    _context13.next = 6;
                                    break;
                                }

                                throw new Error('client and server must be both function');

                            case 6:
                                if (!(this.env === 'client' && this.clientMounted)) {
                                    _context13.next = 10;
                                    break;
                                }

                                _context13.next = 9;
                                return client(this.reference);

                            case 9:
                                return _context13.abrupt('return', _context13.sent);

                            case 10:
                                if (!(this.env === 'server' && !this.clientMounted)) {
                                    _context13.next = 14;
                                    break;
                                }

                                _context13.next = 13;
                                return server(this.reference);

                            case 13:
                                return _context13.abrupt('return', _context13.sent);

                            case 14:
                                _context13.next = 16;
                                return client(this.reference);

                            case 16:
                                return _context13.abrupt('return', _context13.sent);

                            case 17:
                            case 'end':
                                return _context13.stop();
                        }
                    }
                }, _callee13, this);
            }));

            function fetch() {
                return _ref13.apply(this, arguments);
            }

            return fetch;
        }()
    }, {
        key: 'request',
        get: function get() {
            return this.get('request');
        }
    }, {
        key: 'response',
        get: function get() {
            return this.get('response');
        }
    }, {
        key: 'req',
        get: function get() {
            return this.request;
        }
    }, {
        key: 'res',
        get: function get() {
            return this.response;
        }
    }, {
        key: 'query',
        get: function get() {
            return this.req.query || {};
        }
    }, {
        key: 'pathname',
        get: function get() {
            return this.req.pathname || '/';
        }
    }, {
        key: 'url',
        get: function get() {
            return this.req.href || '/';
        }
    }, {
        key: 'webView',
        get: function get() {
            var existsWebView = this.get('exists-webview');
            if (existsWebView) {
                return existsWebView.basic.dic.get(existsWebView.mark);
            }
        }
    }, {
        key: 'reference',
        get: function get() {
            return {
                fetch: this.fetch.bind(this),
                application: this.$application,
                service: this.$context,
                ctx: this
            };
        }
    }]);
    return Miox;
}(_middleware2.default);

exports.default = Miox;
module.exports = exports['default'];