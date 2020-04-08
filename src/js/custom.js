let windowWidth;
windowWidth = $(window).width();

$(document).ready(function () {
 















    /*
    initSelect();
    tabAll(true);
    mobileMenu();
    subMenu();
    languageMenu();
    mobileSubMenu();
    scrollBlock('click-next-block', 'second-block-anchor');


    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        adaptiveHeight: true,
        speed: 1100,
        nextArrow: '<div class="btn-next link-without text-uppercase"><div class="circle-btn"></div></div>',
        prevArrow: '<div class="btn-prev link-without text-uppercase"><div class="circle-btn"></div></div>',
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.slider-project').slick({
        dots: true,
        infinite: false,
        speed: 1100,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2

                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: true,
                    centerPadding: '25px',
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.tabs-simple .tabs .item').on('click', function () {
        var this_targ = $(this).attr('data-go');
        openTab(this_targ);
    });


    $('#contact_form form .submit').click(function (e) {
        e.preventDefault();
        $(this).addClass('clicked');
    });

    scrollBlock('click-next-block', 'second-block-anchor');
    */
});


$(window).on('load', function () {

});


$(window).on('resize', function () {
 

});


$(window).on('resize scroll', function () {

});





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


// Плавный скрол по блокам
function scrollBlock(button, thisContent) {
    $('.' + button).on('click', function (e) {
        var heightTop = document.querySelectorAll('.' + thisContent)[0].offsetTop;
        e.preventDefault();
        e.stopPropagation();
        $('body,html,document').animate({scrollTop: heightTop}, 750);
    })
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
            var selectParams = {
                placeholder: '',
                minimumResultsForSearch: Infinity,
                templateResult: select2CopyClasses,
                templateSelection: select2CopyClasses
            };
            $(this).select2(selectParams);
            if ($(this).attr('data-ph')) {
                var selectPlaceholder = $(this).attr('data-ph');
                $(this).next().find('.select2-selection__placeholder').text(selectPlaceholder);
            }
        });

        $(".select-search-placeholder").select2({
            placeholder: ''
        });
        $(".select-placeholder").each(function () {
            var selectParams = {
                placeholder: '',
                minimumResultsForSearch: Infinity,
                templateResult: select2CopyClasses,
                templateSelection: select2CopyClasses
            };
            $(this).select2(selectParams);
            if ($(this).attr('data-ph')) {
                var selectPlaceholder = $(this).attr('data-ph');
                $(this).next().find('.select2-selection__placeholder').text(selectPlaceholder);
            }
        });


        function select2CopyClasses(data, container) {
            if (data.element) {
                $(container).data('go', $(data.element).attr("data-go"));
                $(container).data('filter', $(data.element).attr("data-filter"));
            }
            return data.text;
        }

        $("select").each(function () {
            var id = $(this).attr('id');
            if (!$(this).hasClass('select2-hidden-accessible')) {
                var selectParams = {
                    minimumResultsForSearch: Infinity,
                    templateResult: select2CopyClasses,
                    templateSelection: select2CopyClasses
                };
                if (id) {
                    selectParams.containerCssClass = 'select_container_' + id;
                }
                $(this).select2(selectParams);
            }
        });
    }
}
*/