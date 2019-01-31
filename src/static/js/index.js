
// tab切换
var goods=document.getElementById('tab1')
var tmall=document.getElementById('tab2')
var shop=document.getElementById('tab3')
var camera=document.getElementById('search-upload')
var searchContent=document.getElementById('TbSearchContent')


function tmallClick() {
    tmall.classList.add("selected","tb-bg");
    goods.classList.remove("selected","tb-bg");
    shop.classList.remove("selected","tb-bg");

    camera.classList.add("hidden");
    searchContent.classList.add("hidden");

}
function shopClick() {
    shop.classList.add("selected","tb-bg");
    tmall.classList.remove("selected","tb-bg");
    goods.classList.remove("selected","tb-bg");


        camera.classList.add("hidden");
        searchContent.classList.remove("hidden");

}
function goodsClick() {
    goods.classList.add("selected", "tb-bg");
    tmall.classList.remove("selected", "tb-bg");
    shop.classList.remove("selected", "tb-bg");


        camera.classList.remove("hidden");
        searchContent.classList.remove("hidden");

}

// 轮播图

var wrap = document.querySelector(".wrap");
var next = document.querySelector(".arrow_right");
var prev = document.querySelector(".arrow_left");
next.onclick = function () {
    next_pic();
}
prev.onclick = function () {
    prev_pic();
}
function next_pic () {
    index++;
    if(index > 4){
        index = 0;
    }
    showCurrentDot();
    var newLeft;
    if(wrap.style.left === "-3120px"){
        newLeft = -1040;
    }else{
        newLeft = parseInt(wrap.style.left)-520;
    }
    wrap.style.left = newLeft + "px";
}
function prev_pic () {
    index--;
    if(index < 0){
        index = 4;
    }
    showCurrentDot();
    var newLeft;
    if(wrap.style.left === "0px"){
        newLeft = -2080;
    }else{
        newLeft = parseInt(wrap.style.left)+520;
    }
    wrap.style.left = newLeft + "px";
}

var timer = null;
function autoPlay () {
    timer = setInterval(function () {
        next_pic();
    },3000);
}
autoPlay();

var container = document.querySelector(".promo-bd");
container.onmouseenter = function () {
    clearInterval(timer);
}
container.onmouseleave = function () {
    autoPlay();
}

var index = 0;
var dots = document.querySelectorAll(".buttons>span");
console.log(dots)
function showCurrentDot () {
    for(var i = 0, len = dots.length; i < len; i++){
        dots[i].className = "";
    }
    dots[index].className = "on";
}

for (var i = 0, len = dots.length; i < len; i++){
    (function(i){
        dots[i].onclick = function () {
            var dis = index - i;
            if(index == 4 && parseInt(wrap.style.left)!==-2600){
                dis = dis - 5;
            }
            //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
            if(index == 0 && parseInt(wrap.style.left)!== -520){
                dis = 5 + dis;
            }
            wrap.style.left = (parseInt(wrap.style.left) +  dis * 520)+"px";
            index = i;
            showCurrentDot();
        }
    })(i);
}

for (var i = 0, len = dots.length; i < len; i++){
    (function(i){
        dots[i].onclick = function () {
            var dis = index - i;
            if(index == 4 && parseInt(wrap.style.left)!==-2600){
                dis = dis - 5;
            }
            //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
            if(index == 0 && parseInt(wrap.style.left)!== -520){
                dis = 5 + dis;
            }
            wrap.style.left = (parseInt(wrap.style.left) +  dis * 520)+"px";
            index = i;
            showCurrentDot();
        }
    })(i);
}
