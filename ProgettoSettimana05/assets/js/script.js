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

var button = document.getElementById('getStarted');
console.log (button.classList);

