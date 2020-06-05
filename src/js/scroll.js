let mainThis = this;

let ScrollPage = (function () {
    function ScrollPage(el) {
        this.DOM = {};
        this.DOM.el = el;
        this.sections = [];
        this.sectionsHeight = [];
        this.sectionsOffsetTop = [];
        this.windowHeight = '';
        this.point = 1;
        this.widowWidth = '';
        this.direction = '';
        this.currentSection = '';
        this.currentIdx;
        mainThis = this;
        this.init();
       


    };
    ScrollPage.prototype.init = function () {
        var _this = this;
        this.widowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        for (let _i = 0, _a = this.DOM.el.querySelectorAll('.section'); _i < _a.length; _i++) {
            let heightSec = _a[_i].scrollHeight;
            let heightTop = _a[_i].offsetTop;
            this.sections.push(_a[_i]);
            this.sectionsHeight.push(heightSec);
            this.sectionsOffsetTop.push(heightTop);
        }

        if (this.widowWidth >= 992) {
            _this.addEvent();
        }
        this.resize();

    };

    ScrollPage.prototype.resize = function () {
        var _this = this;
        window.onresize = function (event) {
            this.widowWidth = window.innerWidth;
            if (this.widowWidth >= 992) {
                _this.sections.forEach(function (slide, idx) {
                    slide.addEventListener('wheel', _this.scrollNext)
                });
            } else {
                _this.sections.forEach(function (slide, idx) {
                    slide.removeEventListener('wheel', _this.scrollNext)
                });
            }


            _this.windowHeight = window.innerHeight;
            _this.sections = [];
            _this.sectionsHeight = [];
            _this.sectionsOffsetTop = [];
            for (let _i = 0, _a = _this.DOM.el.querySelectorAll('.section'); _i < _a.length; _i++) {
                let heightSec = _a[_i].scrollHeight;
                let heightTop = _a[_i].offsetTop;
                _this.sections.push(_a[_i]);
                _this.sectionsHeight.push(heightSec);
                _this.sectionsOffsetTop.push(heightTop);
            }
            // console.log(_this.sectionsHeight)
        }
    }

    ScrollPage.prototype.addEvent = function () {
        var _this = this;
        this.sections.forEach(function (slide, idx) {
            _this.currentSection = idx;
            slide.addEventListener('wheel', function (event) {
                _this.direction = event.deltaY < 0 ? 'up' : 'down';
                _this.currentSection = slide;
                _this.currentIdx = idx;
            });
        });
        this.sections.forEach(function (slide, idx) {
            _this.currentSection = idx;
            slide.addEventListener('wheel', _this.scrollNext)
        });
    }

    ScrollPage.prototype.scrollNext = function () {
        console.log(`direction --- ${mainThis.direction}`)
        console.log(`this section height --- ${mainThis.sectionsHeight}`)
        console.log(`this window height --- ${mainThis.windowHeight}`)
        console.log(`this section offset top --- ${mainThis.currentSection.offsetTop}`)
        // console.log(mainThis.sectionsHeight)
        // let direction = event.changedTouches[0].pageY
        if (mainThis.sectionsHeight[mainThis.currentIdx] === mainThis.windowHeight) {
            if (mainThis.direction == 'up' && mainThis.point === 1) {
                if (mainThis.currentIdx === 0 && !(mainThis.currentSection.offsetTop === 0) && mainThis.point === 1) {
                    mainThis.point = 0;
                    $('html').animate({ scrollTop: 0 }, 650, () => {
                        mainThis.point = 1;
                    });
                } else {
                    mainThis.point = 0;
                    $('html').animate({ scrollTop: mainThis.sectionsOffsetTop[mainThis.currentIdx - 1] }, 650, () => {
                        mainThis.point = 1;
                    });
                }

            } else if (mainThis.direction == 'down' && mainThis.point === 1) {
                mainThis.point = 0;
                $('html').animate({ scrollTop: mainThis.sectionsOffsetTop[mainThis.currentIdx + 1] }, 650, () => {
                    mainThis.point = 1;
                });
            }
        } else {
            if (mainThis.direction == 'up') {
                if (mainThis.currentSection.scrollTop === 0 && mainThis.point === 1) {
                    if (mainThis.currentIdx === 0 && !(mainThis.currentSection.offsetTop === 0) && mainThis.point === 1) {

                        mainThis.point = 0;
                        $('html').animate({ scrollTop: 0 }, 650, () => {
                            mainThis.point = 1;
                        });
                    } else {
                        mainThis.point = 0;
                        $('html').animate({ scrollTop: mainThis.sectionsOffsetTop[mainThis.currentIdx - 1] }, 650, () => {
                            mainThis.point = 1;
                        });
                    }
                }
            } else if (mainThis.direction == 'down') {
                if (mainThis.sectionsHeight[mainThis.currentIdx] - mainThis.windowHeight === mainThis.currentSection.scrollTop && mainThis.point === 1) {
                    mainThis.point = 0;
                    $('html').animate({ scrollTop: mainThis.sectionsOffsetTop[mainThis.currentIdx + 1] }, 650, () => {
                        mainThis.point = 1;
                    });
                }
            }
        }

    };
    return ScrollPage;
}());














