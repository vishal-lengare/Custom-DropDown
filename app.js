
var selectFeild = document.getElementById('selectFeild');
var selectText = document.getElementById('selectText');
var options = document.getElementsByClassName('options');


var list = document.getElementById('list');
var arrowIcon = document.getElementById('arrowIcon');

selectFeild.onclick = function(){
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');

}

for (option of options) {
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle('hide');
        arrowIcon.classList.toggle('rotate');
    }
}