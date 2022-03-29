var accordion = document.getElementsByClassName('accordion__box__question');
var i;

for (i=0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('open');

        var collapse = this.nextElementSibling;
        if (collapse.style.maxHeight) {
            collapse.style.maxHeight = null;
        } else {
            collapse.style.maxHeight = collapse.scrollHeight + "px";
        }
    })
}