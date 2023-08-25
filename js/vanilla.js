const depth1 = document.querySelector('.depth1');
depth1.addEventListener('mouseover', function () {
    depth1.querySelectorAll('.depth2').forEach((o) => { o.style.display = 'block' }) /* textMenu */
    document.querySelector('header').classList.add('on'); /* menuBack */
})
// hoverOn
depth1.addEventListener('mouseout', function () {
    depth1.querySelectorAll('.depth2').forEach((o) => { o.style.display = 'none' }) /* textMenu */
    document.querySelector('header').classList.remove('on'); /* menuBack */
})
// hoverOff

/***
 * 
 * slide
* ** */
const slides = document.querySelectorAll('.slide_wrap li');
let n = 0;
// All과 forEach는 여러개를 담당
function slide() {
    // .slice_wrap li의 on클래스 삭제
    slides.forEach((slide) => { slide.classList.remove('on') });
    //function slide(){} 의 축약형 ()=>{}

    // 새로운 슬라이드에 'on' 클래스추가
    slides[n].classList.add('on');
    n++;
    if (n >= slides.length) { n = 0 }
}
setInterval(() => {
    slide();
}, 3000);

slides[n].classList.add('on');