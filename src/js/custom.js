let windowWidth;
windowWidth = $(window).width();
let hoverP = 1;



$(document).ready(function () {
   




    bgImageFade();
    popup();
    fancyboxIdx();
    expandedAria();
    tableWrap();
    


   



  

    document.addEventListener('touchmove', () => {
        document.querySelector('body').classList.add('touch-action');
        document.querySelector('body').classList.remove('hover-class');
        if(hoverP === 1){
            hoverProject();
        }
    });














    /*
    initSelect();
    tabAll(true);
    mobileMenu();
    subMenu();
    languageMenu();
    mobileSubMenu();
    scrollBlock('click-next-block', 'second-block-anchor');


    */

    if(windowWidth >= 992){
        sliderPeoplesActiveSecond();
    } else {
        sliderPeoplesActiveFirst();
    }
  
   

    //Tabs переключение
    $('.wrapper-tabs .wrapper-link').on('click', function () {
        var this_targ = $(this).attr('data-go');
        openTab(this_targ);
    });


    const arrHamburg = document.querySelectorAll('.hamburger');
    const thisClose = document.querySelector('.main-menu .menu-content .icon-close');
    const footerClick = document.querySelectorAll('.open-menu-project');
    arrHamburg.forEach((currentValue, index, arr) => {
        currentValue.addEventListener('click', () => {
            openMenu(currentValue);
        })
    });
    if(thisClose) {
        thisClose.addEventListener('click', () => {
            closeMenu(thisClose);
        });
    }
    if (footerClick) {
        footerClick.forEach( (item) => {
            item.addEventListener('click', () => {
                openMenu(item);
                addMenuForm();
            });
        });
    }
   





   
    $('.open-form').on('click', function () {
        addMenuForm();
    });
    $('.start-project-popup .close-popup').on('click', function () {
        closeMenuForm();
    });


    $('.vacancy-slider .information,.vacancy-slider .wrapper-form, .popup .wrapper').on('wheel', function (e) {
        e.stopPropagation();
    });
    initSelect();

    scrollBlock('sendApp', 'second-block-anchor', true)
    scrollBlock('go-home', 'first')
    scrollBlock('click-next-block', 'second-block-anchor');

    $('.selectTabs').on('select2:select', function () {
        var dataGo = $(this).find(":selected").data("go");
        openTab(dataGo);
    });



});


$(window).on('load', function () {
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


    $('.slick-peoples').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1100,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerMode: true,
                    centerPadding: '280px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    centerMode: true,
                    centerPadding: '230px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 830,
                settings: {
                    centerMode: true,
                    centerPadding: '220px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 730,
                settings: {
                    centerMode: true,
                    centerPadding: '180px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    centerMode: true,
                    centerPadding: '140px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 460,
                settings: {
                    centerMode: true,
                    centerPadding: '70px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.vacancy-slider').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        fade: true,
        cssEase: 'ease-in-out',
        nextArrow: '<div class="slick-next"><i class="icon-glyphter icon-next"></i></div>',
        prevArrow: '<div class="slick-prev"><i class="icon-glyphter icon-previous"></i></div>'

    });

});


$(window).on('resize', function () {
    windowWidth = $(window).width();
    if(windowWidth >= 992){
        if(!$('.slick-peoples').hasClass('second-active')){
            sliderPeoplesActiveSecond();
        }
    }else {
        if(!$('.slick-peoples').hasClass('first-active')){
            sliderPeoplesActiveFirst();
        }
    }

});


$(window).on('scroll', function () {

});

function tableWrap() {
    if ($('table').length) {
        $('table').each(function () {
            $(this).wrap("<div class='table'></div>");
        });
    }
}

function sliderPeoplesActiveSecond(){
    $('.slick-peoples').on('init', function (event, slick, currentSlide) {
        slick.$slides[1].classList.add('animate');
    });
    $('.slick-peoples').removeClass('first-active');
    $('.slick-peoples').addClass('second-active');
    $('.slick-peoples').off('beforeChange');
    $('.slick-peoples').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (currentSlide === slick.slideCount - 1) {
            $(`.slick-peoples .slick-slide[data-slick-index=${currentSlide + 1}]`).removeClass('animate')
            $(`.slick-peoples .slick-slide[data-slick-index=${nextSlide + 1}]`).addClass('animate')
            $(`.slick-peoples .slick-slide[data-slick-index=${currentSlide + 2}]`).addClass('animate')

        } else {
            $(`.slick-peoples .slick-slide[data-slick-index=${slick.slideCount + 1}]`).removeClass('animate')
            $(`.slick-peoples .slick-slide[data-slick-index=${currentSlide + 1}]`).removeClass('animate')
            $(`.slick-peoples .slick-slide[data-slick-index=${nextSlide + 1}]`).addClass('animate')
        }
    });
}

function sliderPeoplesActiveFirst(){
    $('.slick-peoples').on('init', function (event, slick, currentSlide) {
        slick.$slides[0].classList.add('animate');
    });
    $('.slick-peoples').removeClass('second-active');
    $('.slick-peoples').addClass('first-active');
    $('.slick-peoples').off('beforeChange');
    $('.slick-peoples').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (currentSlide === slick.slideCount - 1) {
            console.log('da')
            $(`.slick-peoples .slick-slide[data-slick-index=${slick.slideCount}]`).addClass('animate');
            slick.$slides[slick.slideCount - 1].classList.remove('animate');
            slick.$slides[0].classList.add('animate');

        } else {
            slick.$slides[currentSlide].classList.remove('animate');
            slick.$slides[nextSlide].classList.add('animate');
            $(`.slick-peoples .slick-slide[data-slick-index=${slick.slideCount}]`).removeClass('animate');
        }
    });
}




function addMenuForm() {
    $('.start-project-popup').addClass('open-project');
}
function closeMenuForm() {
    $('.start-project-popup').removeClass('open-project');
}



function hoverProject() {
    hoverP = 0;
    $('.p-prj-contents').each(function(){
       $(this).on('click', function() {
            let $this = $(this);
            $this.closest('.p-prj-list').find('.p-prj-contents').not($this).removeClass('active');
            $(this).toggleClass('active');
       })
    });
    

}

function expandedAria() {
    if ($('textarea.auto-expand').length) {
        var main = $('textarea.auto-expand');
        main.each(function () {
            if ($(this).outerHeight() > this.scrollHeight) {
                $(this).height(1)
            }
            while ($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
                $(this).height($(this).height() + 1)
            }
        });
        main.on('keyup', function () {
            var text = $(this).val();
            $(this).html(text);
        });
        main.textareaAutoExpand();
    }
}

(function ($) {
    $.fn.textareaAutoExpand = function () {
        return this.each(function () {
            var textarea = $(this);
            var height = textarea.height();
            var diff = parseInt(textarea.css('borderBottomWidth')) + parseInt(textarea.css('borderTopWidth')) +
                parseInt(textarea.css('paddingBottom')) + parseInt(textarea.css('paddingTop'));
            var hasInitialValue = (this.value.replace(/\s/g, '').length > 0);




            if (textarea.css('box-sizing') === 'border-box' ||
                textarea.css('-moz-box-sizing') === 'border-box' ||
                textarea.css('-webkit-box-sizing') === 'border-box') {
                height = textarea.outerHeight();

                if (this.scrollHeight + diff == height) // special case for Firefox where scrollHeight isn't full height on border-box
                    diff = 0;
            } else {
                diff = 0;
            }

            if (hasInitialValue) {
                textarea.height(this.scrollHeight);

            }

            textarea.on('scroll input keyup', function (event) { // keyup isn't necessary but when deleting text IE needs it to reset height properly
                if (event.keyCode == 13 && !event.shiftKey) {
                    // just allow default behavior to enter new line
                    if (this.value.replace(/\s/g, '').length == 0) {
                        event.stopImmediatePropagation();
                        event.stopPropagation();
                    }
                }

                textarea.height(0);
                if (this.scrollHeight - diff > 50) {
                    textarea.height(70);
                    textarea.addClass('max');
                } else {
                    textarea.height(this.scrollHeight - diff + 1);
                    textarea.removeClass('max');
                }

            });
        });
    }
})(jQuery);



//fancybox idx slid
function fancyboxIdx() {
    let arrSlide = [];
    $('#gallery .photo').each(function () {
        arrSlide.push(this)
    });
    $('[data-fancybox="gallery"]').fancybox({
        baseClass: 'fancybox-style-slider',
        buttons: [
            "close"
        ],
        beforeShow: function (instance, slide) {
            // console.log(instance)
            console.log(slide.index)
            $("#gallery [data-fancybox]").addClass('display-none');
            arrSlide[slide.index].classList.remove('display-none');
        }
    });
    $('[data-fancybox="slideCase"]').fancybox({
        baseClass: 'fancybox-style-lightbox',
        wheel: false,
        buttons: [
            "close"
        ]
    });
}




//input type file
(function (document, window, index) {
    'use strict';
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function (e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });

        // Firefox bug fix
        input.addEventListener('focus', function () {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', function () {
            input.classList.remove('has-focus');
        });
    });
}(document, window, 0));


function openTab(id) {
    if ($('.wrapper-tabs *[data-go=' + id + ']')) {
        var targ_tab = $('.wrapper-tabs *[data-go=' + id + ']');
        var tabs_menu = targ_tab.closest('.wrapper-tabs');
        var tabs_all = tabs_menu.find('.wrapper-link');
        var content_all = $('*[data-tab=' + id + ']').closest('.wrapper-content-tab').find('.content-tab.open');
        var content_go = $('.wrapper-content-tab *[data-tab=' + id + ']');
        content_all.stop().fadeOut(150, function () {
            content_all.removeClass('open');

            content_go.stop().fadeIn(200, function () {
                content_go.addClass('open');
            });


            tabs_all.removeClass('active');
            targ_tab.addClass('active');

        });
        // window.location.hash = '#' + id;
        // scrollTabRight();
    }
}







let scrollTop;
let menu = document.querySelector('.main-menu');
const openMenu = () => {
    scrollTop = window.pageYOffset;
    menu.classList.add('open');  
    setTimeout( () => {
        document.querySelector('body').classList.add('open-mobile-menu');
    }, 600)
}
const closeMenu = (thisClose) => {
    console.log(scrollTop)
    document.querySelector('body').classList.remove('open-mobile-menu')
    window.scrollTo(0, scrollTop)
    thisClose.closest('.main-menu').classList.remove('open');
   
}




















function popup() {
    $('.we-work-with .item').on('click', function () {
        let _this = $(this);
        let thisAtr = $(this).data('logo');
        if ($('.popup').hasClass('open')) {
            $('.popup').find('.active').removeClass('active');
            $('.popup').find(`[data-logo=${thisAtr}]`).addClass('active');
            $('.we-work-with').find('.active').removeClass('active');
            _this.addClass('active');
        } else {
            $(this).closest('.section').addClass('z-index');
            $('.popup').addClass('open');
            $('.popup').find(`[data-logo=${thisAtr}]`).addClass('active');
            _this.closest('.we-work-with').addClass('animate');
            _this.addClass('active');
        }



    });
    $('.popup .close').on('click', function () {
        $(this).closest('.section').removeClass('z-index');
        $(this).closest('.popup').removeClass('open');
        $(this).closest('.popup').find('.active').removeClass('active');
        $('.we-work-with').removeClass('animate');
        $('.we-work-with .item').removeClass('active');
    });
}



//preloader
function addPreloader(obj) {
    $(obj).append("<div class='preload'><div class='container-preload'><img src='images/svg/oval.svg' width='50' alt=''></div></div>");
}
function closePreloader(obj) {
    $(obj).find(".preload").detach();
}

// Плавный скрол по блокам
function scrollBlock(button, thisContent, and) {
    $('.' + button).on('click', function (e) {
        var heightTop = document.querySelectorAll('.' + thisContent)[0].offsetTop;

        e.preventDefault();
        e.stopPropagation();
        $('body,html,document').animate({ scrollTop: heightTop }, 750);

        if (and) {



            let per = document.querySelector('.vacancy-slider .slick-track').childElementCount;
            console.log(per)
            $('.vacancy-slider').slick('slickGoTo', per - 1);

        }
    })
}

//bg image nav
function bgImageFade() {
    $('nav li').on('mouseenter', function () {
        let imageNum = $(this).data('image');
        $('.main-menu').find('.bg-image[data-src= ' + imageNum + ']').addClass('active');
    })
    $('nav li').on('mouseleave', function () {
        let imageNum = $(this).data('image');
        $('.main-menu').find('.bg-image[data-src= ' + imageNum + ']').removeClass('active');
    })
}



// Randomizer icons


const RandomIcons = function (el, settings) {
    this.container = el;
    this.icons = [];
    this.visible = [];
    this.settings = {
        maxVisible: 12,
        timeout: 4000,
        fadeTime: 1000,
        icons: []
    };
    Object.assign(this.settings, settings);
    this.init();
    this.run();
}

RandomIcons.prototype.init = function () {
    for (var i = 0; i < this.settings.maxVisible; i++) {
        var icon = document.createElement('img');
        var wrapper = document.createElement('div');
        wrapper.classList.add('item');
        wrapper.appendChild(icon);
        icon.src = this.settings.icons[i].src
        icon.alt = this.settings.icons[i].alt;
        icon.dataset.id = this.settings.icons[i].id;
        this.icons.push(icon);
        this.container.append(wrapper);
        this.visible.push(this.settings.icons[i].id);
    }
};

RandomIcons.prototype.run = function () {
    setInterval(() => {
        var oldIcon = this.icons[getRandomInt(0, this.icons.length)];
        var newIcon;
        do {
            newIcon = this.settings.icons[getRandomInt(0, this.settings.icons.length)];
        } while (this.visible.includes(newIcon.id));
        this.change(oldIcon, newIcon);
    }, this.settings.timeout);
};

RandomIcons.prototype.change = function (oldIcon, newIcon) {
    oldIcon.classList.add('active');
    setTimeout(() => {
        oldIcon.src = newIcon.src;
        oldIcon.alt = newIcon.alt;
    }, 500);


    this.visible.splice(this.visible.indexOf(+oldIcon.dataset.id), 1, newIcon.id);
    oldIcon.dataset.id = newIcon.id;
    setTimeout(() => {
        oldIcon.classList.remove('active');
    }, 500);

};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var logosContainer = document.getElementById('randomizer');
var icons = [
    { 'id': 1, 'src': 'images/icons/logo1.svg', 'alt': 'Alt' },
    { 'id': 2, 'src': 'images/icons/logo2.svg', 'alt': 'Alt' },
    { 'id': 3, 'src': 'images/icons/logo3.svg', 'alt': 'Alt' },
    { 'id': 4, 'src': 'images/icons/logo4.svg', 'alt': 'Alt' },
    { 'id': 5, 'src': 'images/icons/logo5.svg', 'alt': 'Alt' },
    { 'id': 6, 'src': 'images/icons/logo6.svg', 'alt': 'Alt' },
    { 'id': 7, 'src': 'images/icons/logo7.svg', 'alt': 'Alt' },
    { 'id': 8, 'src': 'images/icons/logo8.svg', 'alt': 'Alt' },
    { 'id': 9, 'src': 'images/icons/logo9.svg', 'alt': 'Alt' },
    { 'id': 10, 'src': 'images/icons/logo10.svg', 'alt': 'Alt' },
    { 'id': 11, 'src': 'images/icons/logo11.svg', 'alt': 'Alt' },
    { 'id': 12, 'src': 'images/icons/logo12.svg', 'alt': 'Alt' },
    { 'id': 13, 'src': 'images/icons/logo13.svg', 'alt': 'Alt' },
    { 'id': 14, 'src': 'images/icons/logo14.svg', 'alt': 'Alt' },
    { 'id': 15, 'src': 'images/icons/logo15.svg', 'alt': 'Alt' },
    { 'id': 16, 'src': 'images/icons/logo16.svg', 'alt': 'Alt' },
    { 'id': 17, 'src': 'images/icons/logo17.svg', 'alt': 'Alt' },
    { 'id': 18, 'src': 'images/icons/logo18.svg', 'alt': 'Alt' },
    { 'id': 19, 'src': 'images/icons/logo19.svg', 'alt': 'Alt' }
];


if (logosContainer) {
    var randomIcons = new RandomIcons(logosContainer, {
        maxVisible: 12,
        timeout: 1000,
        icons: icons
    });
} else {
}



/*
function mobileSubMenu() {

        $('nav .menu-item-has-children').on('click', function() {
            let $this = $(this)
            if (windowWidth <= 991) {
                $this.find('.sub-menu').slideToggle(300);
            }


        });


}



function subMenu() {
    $('.menu-item.menu-item-has-children').on('mouseenter', function () {
        if (windowWidth >= 992) {
            if($('.sub-menu').attr('style')){
                $('.sub-menu').attr('style', '');
            }
            $('.main-overlay').addClass('active').stop().fadeIn(300);
        }
    });
    $('.menu-item.menu-item-has-children').on('mouseleave', function () {
        if (windowWidth >= 992) {
            $('.main-overlay').removeClass('active').stop().fadeOut(300);
        }
    });
}

function languageMenu() {
    $('.language .current').on('click', function () {
        if ($(this).closest('.language').hasClass('open')) {
            $(this).closest('.language').removeClass('open');
        } else {
            $(this).closest('.language').addClass('open');
        }
    });
}

//mobile menu
function mobileMenu() {
    $('.hamburger').on('click', function () {
        if (!$(this).closest('header').hasClass('open-mobile')) {
            $(this).closest('header').addClass('open-mobile');
            $(this).addClass('is-active');
            $('body').addClass('open-mobile-menu');
        } else {
            $(this).closest('header').removeClass('open-mobile');
            $(this).removeClass('is-active');
            $('body').removeClass('open-mobile-menu');
        }
    });
}

//Слайдер custom click
function customClick() {
    $('.btn-next-custom').slick('slickNext');
}




//Tabs переключение
function openTab(id) {
    if ($('.tabs-simple *[data-go=' + id + ']')) {
        var targ_tab = $('.tabs-simple *[data-go=' + id + ']');
        var tabs_menu = targ_tab.closest('.tabs-simple');
        var tabs_all = tabs_menu.find('.item');
        var content_all = $('*[data-tab=' + id + ']').closest('.tabs-content').find('.tab.active');
        var content_go = $('.tabs-content *[data-tab=' + id + ']');
        content_all.stop().fadeOut(150, function () {
            content_all.removeClass('active');
            content_go.stop().fadeIn(200, function () {
                content_go.addClass('active');
                // dotdotdot();
            });
            tabs_all.removeClass('active');
            targ_tab.addClass('active');
        });
    }
}


//Функция табов projects
function tabAll(enable) {

    if (enable) {
        $('.change-block .item').click(function () {
            if ($(this).hasClass('active')) {
                return false;
            }
            var thisClick = $(this);
            var thisDescription = $(this).closest('.wrapper-item').find('.description').html();
            var thisImage = $(this).closest('.wrapper-item').find('.hidden-image').css('backgroundImage');
            if (windowWidth <= 767) {
                $(this).closest('.change-block').find('.item.active').next('.description').slideUp(300, function () {
                    $(this).closest('.wrapper-item').find('.item.active').removeClass('active');
                });
                $(this).closest('.wrapper-item').find('.description').slideDown(300, function () {
                    thisClick.addClass('active');
                });
            } else {
                thisClick.closest('.change-block').find('.item.active').removeClass('active');
                $(this).closest('.change-block').find('.tab-block').removeClass('active').css('display', 'none');
                $(this).closest('.change-block').find('.tab-block').html(thisDescription);
                if($(this).closest('.change-block').hasClass('with-image')){
                    $(this).closest('.change-block').find('.image-right').css('backgroundImage', thisImage);
                }
                $(this).closest('.change-block').find('.tab-block').fadeIn(300);
                thisClick.addClass('active');
            }
        });
    }
}
*/
function formatStateCountry(state) {
    if (!state.id) {
        return state.text;
    }
    var $state = $(
        '<span><span class="img-flag flag flag_' + state.element.value + '"></span>' + state.text + '</span>'
    );
    return $state;
}

function initSelect() {
    if ($("select").length) {
        $(".select-with-icon").each(function () {
            var id = $(this).attr('id');
            var selectParams = {
                placeholder: "",
                templateResult: formatStateCountry,
                templateSelection: formatStateCountry,
                minimumResultsForSearch: Infinity

            };
            if (id) {
                selectParams.containerCssClass = 'select_container_' + id;
            }

            $(this).select2(selectParams);

        });
        window.tempSelectIconParams = {
            placeholder: "",
            templateResult: formatStateCountry,
            templateSelection: formatStateCountry,
            minimumResultsForSearch: Infinity

        };

        $(".select-search-with-icon").each(function () {
            var id = $(this).attr('id');
            var selectParams = {
                placeholder: "",
                templateResult: formatStateCountry,
                templateSelection: formatStateCountry
            };
            if (id) {
                selectParams.containerCssClass = 'select_container_' + id;
            }

            $(this).select2(selectParams);
        });


        $(".select-search").each(function () {
            var id = $(this).attr('id');
            var selectParams = {};
            if (id) {
                selectParams.containerCssClass = 'select_container_' + id;
            }

            $(this).select2(selectParams);
        });

        $(".select-search-placeholder").select2({
            placeholder: ''
        });
        $(".select-placeholder").select2({
            placeholder: '',
            minimumResultsForSearch: Infinity
        });

        $("select").each(function () {
            var id = $(this).attr('id');
            if (!$(this).hasClass('select2-hidden-accessible')) {
                var selectParams = {
                    minimumResultsForSearch: Infinity
                };
                if (id) {
                    selectParams.containerCssClass = 'select_container_' + id;
                }
                $(this).select2(selectParams);
            }
            if ($(this).attr('data-ph')) {
                var selectPlaceholder = $(this).attr('data-ph');
                $(this).next().find('.select2-selection__placeholder').text(selectPlaceholder);
            }
        });
    }
}
