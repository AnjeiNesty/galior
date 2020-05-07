
let ScrollPage = (function () {
    function ScrollPage(el) {
        this.DOM = {};
        this.DOM.el = el;
        this.sections = [];
        this.sectionsHeight = [];
        this.sectionsOffsetTop = [];
        this.windowHeight = '';
        this.point = 1;
        this.init();
    };
    ScrollPage.prototype.init = function () {
        var _this = this;


        this.windowHeight = window.innerHeight;


        for (let _i = 0, _a = this.DOM.el.querySelectorAll('.section'); _i < _a.length; _i++) {
            let heightSec = _a[_i].scrollHeight;
            let heightTop = _a[_i].offsetTop;

            this.sections.push(_a[_i]);
            this.sectionsHeight.push(heightSec);
            this.sectionsOffsetTop.push(heightTop);


        }
        this.scrollNext();

    };
    ScrollPage.prototype.scrollNext = function () {
        var _this = this;

        var lastSection = this.sections.length;
        this.sections.forEach(function (slide, idx) {
            slide.addEventListener('wheel', function () {
                // console.log(slide.offsetTop)
                // console.log(_this.sectionsHeight)
                let direction = event.deltaY < 0 ? 'up' : 'down';
                if (_this.sectionsHeight[idx] === _this.windowHeight) {
                    if (direction == 'up' && _this.point === 1) {
                        if (idx === 0 && !(slide.offsetTop === 0) && _this.point === 1) {
                            _this.point = 0;
                            $('html').animate({ scrollTop: 0 }, 650, () => {
                                _this.point = 1;
                            });
                        } else {
                            _this.point = 0;
                            $('html').animate({ scrollTop: _this.sectionsOffsetTop[idx - 1] }, 650, () => {
                                _this.point = 1;
                            });
                        }

                    } else if (direction == 'down' && _this.point === 1) {
                        _this.point = 0;
                        $('html').animate({ scrollTop: _this.sectionsOffsetTop[idx + 1] }, 650, () => {
                            _this.point = 1;
                        });
                    }
                } else {
                    if (direction == 'up') {
                        if (this.scrollTop === 0 && _this.point === 1) {
                            if (idx === 0 && !(slide.offsetTop === 0) && _this.point === 1) {
                                console.log('dada')
                                _this.point = 0;
                                $('html').animate({ scrollTop: 0 }, 650, () => {
                                    _this.point = 1;
                                });
                            } else {
                                _this.point = 0;
                                $('html').animate({ scrollTop: _this.sectionsOffsetTop[idx - 1] }, 650, () => {
                                    _this.point = 1;
                                });
                            }
                        }
                    } else if (direction == 'down') {
                        if (_this.sectionsHeight[idx] - _this.windowHeight === this.scrollTop && _this.point === 1) {
                            _this.point = 0;
                            $('html').animate({ scrollTop: _this.sectionsOffsetTop[idx + 1] }, 650, () => {
                                _this.point = 1;
                            });
                        }
                    }
                }
            });
        });
    };



    return ScrollPage;
}());


if (document.querySelector('.slick')) {
    $('.slick').on('init', function (event, slick, direction) {
        const wrapperBlock = document.querySelector('#fullBlock');
        if (wrapperBlock) {
            let scrollPage = new ScrollPage(wrapperBlock);
        } else {

        }
    });

} else {
    const wrapperBlock = document.querySelector('#fullBlock');
    if (wrapperBlock) {
        let scrollPage = new ScrollPage(wrapperBlock);
    } else {

    }
}











