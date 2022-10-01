var items = document.getElementsByClassName('item');
var slide = document.getElementById('slide');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var close = document.getElementById('close');
var slideItem  = document.getElementById('slide-item');
var index=0;

for(var i= 0; i<items.length; i++){
    items[i].addEventListener('click', function(event){
        slide.classList.add('active');
        var ele = event.target.parentNode;
        var currentIndex = Array.from(items).indexOf(ele)
        slideItem.childNodes[3].setAttribute('src', event.target.src)
        slideItem.childNodes[1].innerHTML = `${currentIndex+1} / ${items.length}`
        console.log(slideItem.childNodes);
    });
}
close.addEventListener('click', function(){
    slide.classList.remove('active');
});
next.addEventListener('click', function(){
    index++;
    changeSrc(index);
});
prev.addEventListener('click', function(){
    index--;
    changeSrc(index);
});
function changeSrc(i){
    if(i >= items.length){
        index =0
        console.log(i);
    }else if(i < 0){
        index = items.length -1;
        console.log(i);
    }else{
        index = i
    }
    slideItem.childNodes[1].innerHTML = `${index+1} / ${items.length}`
    var img = items[index].childNodes[1].getAttribute('src');
    slideItem.childNodes[3].setAttribute('src', img);
}
document.onkeydown = function(e){

    var code = e.keyCode

    if(code == 39){
        next.click()
    }else if(code == 37){
        prev.click()
    }else if(code  == 27){
        close.click()
    }
}