var front = document.querySelector('.face-front');
var back = document.querySelector('.face-back');
var flip = document.querySelector('.book-content');
var book = document.querySelectorAll('.book');
var front = document.querySelectorAll('#front');
var contZindex = 2;
var customZindex = 1;
const jan = document.getElementById('jan');
const feb = document.querySelectorAll('a');
let mar = document.querySelectorAll('#mar');
let apr = document.querySelectorAll('#apr');
let may = document.querySelectorAll('#may');
let jun = document.querySelectorAll('#jun');
let jul = document.querySelectorAll('#jul');
let aug = document.querySelectorAll('#aug');
let sep = document.querySelectorAll('#sep');
let oct = document.querySelectorAll('#oct');
let nov = document.querySelectorAll('#nov');
let dec = document.querySelectorAll('#dec');
let quoteArea = document.querySelector('.quote-paragraph');

document.getElementById('jan').addEventListener('click', function(event){
    console.log('jan selected');
});

for (var i = 0; i < book.length; i++) {
    book[i].style.zIndex = customZindex;
    customZindex--;

    book[i].addEventListener('click', function(e){

        var tgt = e.target;
        var bookThis = this;

        bookThis.style.zIndex = contZindex;
        contZindex++;

        if (tgt.getAttribute('class') == 'face-front') {
            bookThis.style.zIndex = contZindex;
            contZindex +=20;
            setTimeout(function(){
                //bookThis.style.transform = 'rotateY(-180deg)';//original code
                bookThis.classList.add("open");//new for mobile compatability
            }, 500);
        }
        if (tgt.getAttribute("class") == 'face-back') {
            bookThis.style.zIndex = contZindex;
            contZindex +=20;

            setTimeout(function(){
                //bookThis.style.transform = 'rotateY(0deg)';//original code
                bookThis.classList.remove("open");//new for mobile compatability
            }, 500);
        }

        if (tgt.getAttribute('id') == 'front') {
            flip.classList.remove("trnsf-reset");
            flip.classList.add("trnsf");
            
            console.log(back.classList);
        }
        if (tgt.getAttribute('id') == 'trsf') {
            flip.classList.remove("trnsf");
            flip.classList.add("trnsf-reset");
            
            
        }
        if (tgt.getAttribute('id') == 'lastPage') {
            flip.classList.add("trnsf-back");
            let quoteSize = quoteArea.innerHTML.length;
            console.log('quote page is ' + quoteSize + ' characters long');
            if (quoteSize < 190) {
                quoteArea.classList.remove("quote-paragraph");
                quoteArea.classList.add("small-quote");
            }
        }
        if (tgt.getAttribute('id') == 'front-back') {
            flip.classList.remove("trnsf-back");
            
        }

    });
}