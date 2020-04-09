"use strict";

let counterAll = document.querySelector('#slider .counter .all-count'); 
let counterVisible = document.querySelector('#slider .counter .visible'); 
let counterHidden = document.querySelector('#slider .counter .hidden'); 

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.isObject = function (item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    };
    Util.mergeDeep = function (target, source) {
        var _this = this;
        var output = Object.assign({}, target);
        if (this.isObject(target) && this.isObject(source)) {
            Object.keys(source).forEach(function (key) {
                var _a, _b;
                if (_this.isObject(source[key])) {
                    if (!(key in target))
                        Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                    else
                        output[key] = _this.mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(output, (_b = {}, _b[key] = source[key], _b));
                }
            });
        }
        return output;
    };
    Util.map = function (n, start1, stop1, start2, stop2) {
        return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
    };
    Util.debounce = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this;
            var args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        };
    };
    Util.getMousePosition = function (e) {
        var posX = 0;
        var posY = 0;
        if (!e)
            e = window.event;
        if (e.pageX || e.pageY) {
            posX = e.pageX;
            posY = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            posX = e.clientX - this.docScrolls().x;
            posY = e.clientY - this.docScrolls().y;
        }
        return {
            x: posX,
            y: posY
        };
    };
    Util.docScrolls = function () {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        };
    };
    return Util;
}());
var Tilt = /** @class */ (function () {
    function Tilt(_el, _options) {
        this._el = _el;
        this._options = _options;
        var defaultOptions = {
            rotate: { x: 0, y: 0, z: 0 },
            translate: { x: 0, y: 0, z: 0 },
            lock: false,
            speed: 0
        };
        this._options = Util.mergeDeep(defaultOptions, _options);
        this._bindEvents();
    }
    Tilt.prototype._bindEvents = function () {
        var _this = this;
        var opt = this._options;
        this._el.addEventListener('mousemove', function (e) {
            var mousePos = Util.getMousePosition(e);
            var bounds = _this._el.getBoundingClientRect();
            var docScrolls = Util.docScrolls();
            var relMousePos = {
                x: Math.round(mousePos.x - bounds.left - docScrolls.x),
                y: Math.round(mousePos.y - bounds.top - docScrolls.y)
            };
            var translation = {
                x: Math.round(Util.map(relMousePos.x, 0, bounds.width, -opt.translate.x, opt.translate.x)),
                y: Math.round(Util.map(relMousePos.y, 0, bounds.height, -opt.translate.y, opt.translate.y)),
                z: Math.round(Util.map(relMousePos.y, 0, bounds.height, -opt.translate.z, opt.translate.z))
            };
            var rotation = {
                x: Math.round(Util.map(relMousePos.y, 0, bounds.width, -opt.rotate.x, opt.rotate.x)),
                y: Math.round(Util.map(relMousePos.x, 0, bounds.height, opt.rotate.y, -opt.rotate.y)),
                z: Math.round(Util.map(relMousePos.x, 0, bounds.height, -opt.rotate.z, opt.rotate.z))
            };
            _this._animate({ translation: translation, rotation: rotation });
        });
        if (opt.lock) {
            this._el.addEventListener('mouseleave', function (e) {
                TweenMax.to(_this._el, 1, {
                    x: 0,
                    y: 0,
                    z: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    ease: Power1.easeOut
                });
            });
        }
    };
    Tilt.prototype._animate = function (ref) {
        TweenMax.to(this._el, this._options.speed / 1000, {
            x: ref.translation.x,
            y: ref.translation.y,
            z: ref.translation.z,
            rotationX: ref.rotation.x,
            rotationY: ref.rotation.y,
            rotationZ: ref.rotation.z,
            ease: Power1.easeOut
        });
    };
    return Tilt;
}());
var Slide = /** @class */ (function () {
    function Slide(el) {
        this.DOM = {};
        this.DOM.el = el;
        this.DOM.wrap = el.querySelector('.slide-wrapper');
        this.DOM.imgWrapper = el.querySelector('.img-wrapper');
        this.DOM.titleWrap = el.querySelector('.title-wrapper');
        this.DOM.title = el.querySelector('.inner-wrapper');
        this.config = {
            animation: {
                duration: 1,
                ease: Expo.easeInOut
            },
            tiltOptions: {
                translate: {
                    x: -10,
                    y: -10
                },
                speed: 800
            }
        };
        new Tilt(el.querySelector('img'), this.config.tiltOptions);
    }
    Slide.prototype.setCurrent = function (isCurrent) {
        if (isCurrent === void 0) { isCurrent = true; }
        this.DOM.el.classList[isCurrent ? 'add' : 'remove']('current');
    };
    Slide.prototype.hide = function (direction) {
        return this.toggle('hide', direction);
    };
    Slide.prototype.show = function (direction) {
        this.DOM.el.style.zIndex = 11;
        return this.toggle('show', direction);
    };
    Slide.prototype.toggle = function (action, direction) {
        var _this = this;
        return new Promise(function (resolve) {
            if (action === 'show') {
                TweenMax.to(_this.DOM.wrap, _this.config.animation.duration, {
                    ease: _this.config.animation.ease,
                    startAt: {
                        x: direction === 'right' ? '100%' : '-100%'
                    },
                    x: '0%'
                });
                TweenMax.to(_this.DOM.titleWrap, _this.config.animation.duration, {
                    ease: _this.config.animation.ease,
                    startAt: {
                        x: direction === 'right' ? '-100%' : '100%'
                    },
                    x: '0%'
                });
                TweenMax.to(_this.DOM.title, _this.config.animation.duration, {
                    ease: _this.config.animation.ease,
                    startAt: {
                        filter: "blur(30px)",
                        opacity: 0.2
                    },
                    filter: "blur(0px)",
                    opacity: 1
                });
            }
            if (action === 'hide') {
                TweenMax.to(_this.DOM.title, _this.config.animation.duration, {
                    ease: _this.config.animation.ease,
                    startAt: {
                        filter: "blur(0px)",
                        opacity: 1
                    },
                    filter: "blur(30px)",
                    opacity: 0.2
                });
            }
            TweenMax.to(_this.DOM.imgWrapper, _this.config.animation.duration, {
                ease: _this.config.animation.ease,
                startAt: action === 'hide'
                    ? {}
                    : {
                        x: direction === 'right' ? '-100%' : '100%',
                        scale: 1.1
                    },
                x: '0%',
                scale: action === 'hide' ? 1.1 : 1,
                onStart: function () {
                    _this.DOM.imgWrapper.style.transformOrigin =
                        action === 'hide'
                            ? direction === 'right'
                                ? '100% 50%'
                                : '0% 50%'
                            : direction === 'right'
                                ? '0% 50%'
                                : '100% 50%';
                    _this.DOM.el.style.opacity = 1;
                },
                onComplete: function () {
                    _this.DOM.el.style.zIndex = 9;
                    _this.DOM.el.style.opacity = action === 'hide' ? 0 : 1;
                    resolve();
                }
            });
        });
    };
    return Slide;
}());
var Navigation = /** @class */ (function () {
    function Navigation(el, settings) {
        this.DOM = {};
        this.DOM.el = el;
        this.bullets = [];
        this.settings = {
            active: 0,
            onClick: function () { return false; }
        };
        Object.assign(this.settings, settings);
        this.init();
    }
    Navigation.prototype.init = function () {
        for (var _i = 0, _a = this.DOM.el.querySelectorAll('.bullet'); _i < _a.length; _i++) {
            var bullet = _a[_i];
            this.bullets.push(bullet);
        }
        this.bullets[this.settings.active].classList.add('current');
        this.bindEvents();
    };
    Navigation.prototype.bindEvents = function () {
        var _this = this;
        this.bullets.forEach(function (bullet, idx) {
            bullet.addEventListener('click', function () {
                _this.settings.onClick(idx);
            });
        });
    };
    Navigation.prototype.setCurrent = function (idx) {
        this.bullets.forEach(function (bullet) {
            bullet.classList.remove('current');
        });
        this.bullets[idx].classList.add('current');
    };
    return Navigation;
}());
var Slider = /** @class */ (function () {
    function Slider(el, settings) {
        this.DOM = {};
        this.DOM.el = el;
        this.slides = [];
        this.settings = {
            currentSlide: 0
        };
        Object.assign(this.settings, settings);
        this.init();
    }
    Slider.prototype.init = function () {
        var _this = this;
        this.navigation = new Navigation(document.querySelector('#navigation'), {
            active: this.settings.currentSlide,
            onClick: function (idx) { return _this.navigate(idx); }
        });
        for (var _i = 0, _a = this.DOM.el.querySelectorAll('.slide'); _i < _a.length; _i++) {
            var slide = _a[_i];
            this.slides.push(new Slide(slide));
        }
 
        counterAll.textContent = this.slides.length;
        counterVisible.textContent = this.settings.currentSlide + 1;
        this.slides[this.settings.currentSlide].setCurrent();
        this.bindEvents();
    };
    Slider.prototype.bindEvents = function () {
        var _this = this;
        var lastSlide = this.slides.length;
        this.slides.forEach(function (slide, idx) {
            slide.DOM.el.addEventListener('wheel', function (e) {
                var direction = event.deltaY < 0 ? 'up' : 'down';
                if (direction == 'up') {
                    var next = (idx - 1) >= 0 ? idx - 1 : lastSlide - 1;
                } else if (direction == 'down') {
                    var next = (idx + 1) < lastSlide ? idx + 1 : 0;
                }
                counterVisible.textContent = next + 1;
                console.log(next)
                _this.navigate(next);
            });
        });
    };
    Slider.prototype.navigate = function (idx) {
        return __awaiter(this, void 0, void 0, function () {
            var direction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isAnimating || idx === this.settings.currentSlide)
                            return [2 /*return*/];
                        this.isAnimating = true;
                        direction = idx > this.settings.currentSlide ? 'right' : 'left';
                        this.navigation.setCurrent(idx);
                        return [4 /*yield*/, Promise.all([
                                this.slides[this.settings.currentSlide].hide(direction),
                                this.slides[idx].show(direction)
                            ])];
                    case 1:
                        _a.sent();
                        this.slides[this.settings.currentSlide].setCurrent(false);
                        this.settings.currentSlide = idx;
                        this.slides[this.settings.currentSlide].setCurrent();
                        this.isAnimating = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    return Slider;
}());
var sliderEl = document.querySelector('#slider');
var slider = new Slider(sliderEl);
// const options = { currentSlide: 3 };
// const slider = new Slider(sliderEl, options);
