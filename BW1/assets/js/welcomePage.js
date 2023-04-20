
/* js per gestire il button dopo checkBox */

var check = document.getElementById('customCheckbox');
var btnPage1 = document.getElementById('buttonWelcomePage');
check.checked = false; /*da verificare*/
btnPage1.disabled = true; /*da verificare*/

    check.addEventListener('click', function(){
        if(this.checked){
            btnPage1.className = 'button';
            btnPage1.classList.add('customActive');
            btnPage1.disabled = false;
        } else{ /*da verificare*/
            btnPage1.disabled = true;   
            btnPage1.classList.remove('customActive');
            btnPage1.classList.remove('button');
        }
    });