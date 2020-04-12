


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
            slide.addEventListener('scroll', function () {
                if (_this.sectionsHeight[idx] - _this.windowHeight === this.scrollTop) {
                    $('body,html,document').animate({ scrollTop: _this.sectionsOffsetTop[idx + 1] }, 750);
                    console.log('bottom')
                } else if (this.scrollTop === 0){
                    $('body,html,document').animate({ scrollTop: _this.sectionsOffsetTop[idx - 1] }, 750);
                    console.log('top')
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








// let sec = document.querySelector('#lox');
// let heightSec = sec.scrollHeight
// let hightWindow = window.innerHeight
// let heightTop = document.querySelector('#poh').offsetTop;
// console.log('height section ' + heightSec)
// console.log('height window ' + hightWindow)
// sec.addEventListener('scroll', function () {
//     if(heightSec - hightWindow === this.scrollTop){
//         $('body,html,document').animate({ scrollTop: heightTop }, 750);
//     }
//     console.log(this.scrollTop)

// });




