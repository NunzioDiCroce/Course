
/* - - - - - - - - - - navbar color change - - - - - - - - - - */
var headerChange = 'headerChange';
var headerBack = 'headerBack';
var getStartedChange = 'getStartedChange';
var getStartedBack = 'getStartedBack';
var scrollTrigger = 240;

window.onscroll = function () {
    if (window.scrollY >= scrollTrigger) {
        document.getElementsByTagName('header')[0].classList.add('headerChange');
        document.getElementsByTagName('header')[0].classList.remove('headerBack');
        document.getElementsByClassName('getStarted')[0].classList.add('getStartedChange');
        document.getElementsByClassName('getStarted')[0].classList.remove('getStartedBack');
    } else {
        document.getElementsByTagName('header')[0].classList.remove('headerChange');
        document.getElementsByTagName('header')[0].classList.add('headerBack');
        document.getElementsByClassName('getStarted')[0].classList.remove('getStartedChange');
        document.getElementsByClassName('getStarted')[0].classList.add('getStartedBack');
    }
}

console.log(window.scrollY);


/* - - - - - - - - - - SVG animation - - - - - - - - - - */
var animation = function () {
    var m = document.querySelectorAll('g[stroke-linecap="butt"]');
    var mRandom = Math.round(Math.random() * (m.length - 1));
    m[mRandom].classList.toggle('mHidden')
}
setInterval(animation, 50);

