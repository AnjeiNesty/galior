


let ScrollPage = (function () {
    function ScrollPage(el) {
        this.DOM = {};
        this.DOM.el = el;
        this.sections = [];
        this.sectionsHeight = [];
        this.sectionsOffsetTop = [];
        this.windowHeight = '';
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
                let direction = event.deltaY < 0 ? 'up' : 'down';
                if(_this.sectionsHeight[idx] === _this.windowHeight){
                    console.log('absolute')

                    if (direction == 'up') {
                        $('html').animate({ scrollTop: _this.sectionsOffsetTop[idx - 1] }, 750);
                    } else if (direction == 'down') {
                        $('html').animate({ scrollTop: _this.sectionsOffsetTop[idx + 1] }, 750);
                    }

                } else {
                    console.log('scroll')
                    if (direction == 'up') {
                        if(this.scrollTop === 0){
                            $('html').animate({ scrollTop: _this.sectionsOffsetTop[idx - 1] }, 750);
                        }
                        
                    } else if (direction == 'down') {
                        if (_this.sectionsHeight[idx] - _this.windowHeight === this.scrollTop) {
                            $('html').animate({ scrollTop: _this.sectionsOffsetTop[idx + 1] }, 750);
                        }
                    }
                }
            });
        });
    };



    return ScrollPage;
}());


const wrapperBlock = document.querySelector('#fullBlock');
if (wrapperBlock) {
    let scrollPage = new ScrollPage(wrapperBlock);
} else {
    
}









