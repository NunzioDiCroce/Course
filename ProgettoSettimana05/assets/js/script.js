/* - - - - - - - - - - navbar color change - - - - - - - - - - */
var headerClassName = 'headerChange';
var getStartedClassName = 'getStartedChange';
var scrollTrigger = 300;

window.onscroll = function () {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger ) {
        document.getElementsByTagName('header')[0].classList.add(headerClassName)
    } else {
        document.getElementsByTagName('header')[0].classList.remove(headerClassName);
    }
}
