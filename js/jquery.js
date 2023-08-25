const depth1 = $('.depth1');
depth1.hover(
    function () {
        $('.depth2').css('display', 'block');
        $('header').addClass('on');
    },
    function () {
        $('.depth2').css('display', 'none');
        $('header').removeClass('on');
    })

/***
 * 
 * slide
* ** */
// = 할당연산자
// 좌항에 우항의 값을 할당하다
const slides = $('.slide_wrap li');
// const 변경점을 선언하기 CSS 선택자를 그대로 사용가능
let n = 0;
function slide() {
    slides.removeClass('on')
    slides.eq(n).addClass('on')
    n++; /* 변수+1 */
    if (n >= slides.length) { n = 0 }
}
setInterval(() => {
    slide();
}, 1500);
slides.eq(n).addClass('on')

/***
 * 
 * tab
* ** */
const tabBtn = $('.board .buttons li');
const panels = $('.panels>div');
tabBtn.on('click', function (e) {
    e.preventDefault();
    let tg = $(this).index();
    panels.hide();
    tabBtn.removeClass('on')
    panels.eq(tg).show();
    tabBtn.eq(tg).addClass('on');

    panels.hide();
    panels.eq(tg).show();
});

// popup * /
$('.open').on('click', function (e) {
    e.preventDefault();
    $('.popup').show();
    $('.overlay').show();
});

$('.close').on('click', function (e) {
    e.preventDefault();
    $('.popup').hide();
    $('.overlay').hide();
});